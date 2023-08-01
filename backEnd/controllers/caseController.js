const {Op} = require("sequelize");
const { Case, Finished, Interested, Category, sequelize } = require("../models");

// 개월 -> 몇 년 몇 개월 단위로 변환
const transformMonth = (result) => {
    const year = Math.floor(result / 12);
    const month = result % 12;
    let str = "";

    if (year == 0) {
        str += month + "개월"
    } else {
        str += year+"년 "+ month + "개월"
    }

    return str;
}

// result 변환
const transformResult = (el) => {
    let str = "";

    if (el.dataValues.is_probation) {
        str += "집행유예 ";
        str += transformMonth(el.dataValues.probation_result);
        if (el.dataValues.result!=0) {
            str += " 징역 " + transformMonth(el.dataValues.result);
        }
    } else {
        // 징역
        str += "징역 ";
        str += transformMonth(el.dataValues.result);
    }

    return str;
}


// 판례 목록 반환
exports.getCaseList = async (req, res) => {
    try {
        const data = await Case.findAll({
            attributes : ['id', 'case_num', 'title', 'header', 'detail', 'reason', 'result', 'is_probation', 'probation_result', 'view_count', 'category_id', 'createdAt',
            // 설문 완료 수
            [sequelize.fn('COUNT', sequelize.col('finisheds.id')), 'result_count'],
            // [sequelize.col('Category.name'), 'category']
            ],
            include : [
                {model : Finished, attributes : []},
                {model : Category, attributes : ['name']}
            ],
            group : ['Case.id']
        });

        return res.json(data);
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
}

// 판례 검색 결과 반환
exports.searchCase = async (req, res) => {
    try {
        const { word } = req.params;

        // title이나 detail, reason에 특정 단어 포함되어 있다면 반환
        const data = await Case.findAll({
            attributes : ['id', 'case_num', 'title', 'header','detail', 'reason', 'result', 'probation_result', 'is_probation', 'view_count', 'category_id', 'createdAt',
            // 설문 완료 수
            [sequelize.fn('COUNT', sequelize.col('finisheds.id')), 'result_count'],
            [sequelize.col('Category.name'), 'category']
            ],
            include : [
                {model : Finished, attributes : []},
                {model : Category, attributes : ['name']}
            ],
            group : ['Case.id'],
            // group : ['casess.id'],
            // include : [
            //     {model : Category, attributes : ['name']}
            // ],
            where : {
                [Op.or] : [
                    { title : { [Op.like] : "%" + word + "%"} },
                    { detail : { [Op.like] : "%" + word + "%"} },
                    { reason : { [Op.like] : "%" + word + "%"} },
                    { '$Category.name$': { [Op.like] : word } }
                ]
            }
        });

        return res.json(data);
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
}

// // 판례 카테고리별 반환
// exports.categoryCase = async (req, res) => {
//     try {
//         const {name} = req.params;
//         const data = await Case.findAll(
//             {
//                 include : [
//                     {model : Category,
//                     where : {name}}
//                 ]
//             }
//         );

//         return res.json(data);
//     } catch (error) {
//         console.log(error);
//         return res.json({ error });
//     }
// }


// 특정 판례 반환(판례 id)
exports.getDetailCase = async (req, res) => {
    try {
        // 판례 id
        const { id } = req.params;
        const { isLogin } = req;

        let data = await Case.findOne({where : {id}, include : {model : Category, attributes : ['name']}});
        // 조회수 증가
        data.dataValues.view_count += 1;
        await Case.update({ view_count : data.dataValues.view_count}, {where: {id : data.dataValues.id}});

        let str = transformResult(data);

        // // result 단위 변환
        // const year = Math.floor(data.dataValues.result / 12);
        // const month = data.dataValues.result % 12;
        // let str = "";

        // if (data.dataValues.is_probation) {
        //     str += "집행유예 ";
        // } else {
        //     // 징역
        //     str += "징역 ";
        // }

        // if (year == 0) {
        //     str += month + "개월"
        // } else {
        //     str += year+"년 "+ month + "개월"
        // }
        data.dataValues.resultStr = str;

        // 관심판례였는지 여부 반환
        let isInterested=false;
        if (isLogin) {
            const interested = await Interested.findOne({where : {case_id: id, user_id: req.decoded.id}});
            if (interested) {
                isInterested = true;
            }
        }

        return res.json({ case : data, isLogin, isInterested });
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
}

// 설문 결과 반환하기
exports.getResult = async (req, res) => {
    try {
        // 판례 id
        const {case_id} = req.params;
        // user id
        const {id} = req.decoded;

        let finishedList = await Finished.findAll({where : {case_id}})

        finishedList.map((el)=>{
            let str = transformResult(el);
            el.dataValues.resultStr = str;
            return el;
        })

        // // 몇 개월 -> 몇 년 몇 개월로 변환
        // finishedList.map((el) => {
        //     const year = Math.floor(el.dataValues.result / 12);
        //     const month = el.dataValues.result % 12;
        //     let str = "";

        //     if (el.dataValues.is_probation) {
        //         str += "집행유예 ";
        //     } else {
        //         // 징역
        //         str += "징역 ";
        //     }

        //     if (year == 0) {
        //         str += month + "개월"
        //     } else {
        //         str += year+"년 "+ month + "개월"
        //     }
        //     return el.dataValues.resultStr = str;
        // });

        // result, resultStr 정보만 반환
        // let resultArr = [...finishedList].map((el)=>{
        //     return {result :el.dataValues.result, resultStr : el.dataValues.resultStr}
        // })

        // 사용자의 result
        const data = await Finished.findOne({where : {user_id:id, case_id}});
        let userResult = ""
        if (data && data.dataValues.is_probation) {
            userResult += "집행유예 ";
            userResult += transformMonth(data.dataValues.probation_result);
            if (data.dataValues.result!=0) {
                userResult += " 징역 "+ transformMonth(data.dataValues.result);
            }
        } else if (data){
            userResult += "징역 "+ transformMonth(data.dataValues.result);
        } else {
            userResult += "설문 내역 없음"
        }

        // return res.json({ finishedList, userResult, resultArr });
        return res.json({ finishedList, userResult });
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
}

// 판례 설문하기
exports.addResult = async (req, res) => {
    try {
        const { id } = req.decoded;
        const { case_id, result, is_probation, probation_result } = req.body;
        await Finished.create({user_id : id, case_id, result, is_probation, probation_result});
        return res.json({message : "성공"})
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
}

// 관심 판례 설정하기
exports.setInterested = async (req, res) => {
    try {
        const { id } = req.decoded;
        const { case_id } = req.body;
        await Interested.create({user_id:id, case_id});

        return res.json({message : "성공"})
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
}


// 관심 판례 취소하기
exports.delInterested = async (req, res) => {
    try {
        const { id } = req.decoded;
        const { case_id } = req.body;
        await Interested.destroy({where : {user_id:id, case_id}});

        return res.json({message : "성공"})
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
}

