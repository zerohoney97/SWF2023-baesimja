const { User, Case, Category, Finished, Interested, sequelize } = require("../models");

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
const transformResult = (el, isFinished) => {
    // const year = Math.floor(el.dataValues.Case.result / 12);
    // const month = el.dataValues.Case.result % 12;
    let str = "";

    if (el.dataValues.Case.is_probation) {
        str += "집행유예 ";
        str += transformMonth(el.dataValues.Case.probation_result);
        if (el.dataValues.Case.result!=0) {
            str += " 징역 " + transformMonth(el.dataValues.Case.result);
        }
    } else {
        // 징역
        str += "징역 ";
        str += transformMonth(el.dataValues.Case.result);
    }


    // if (year == 0) {
    //     str += month + "개월"
    // } else {
    //     str += year+"년 "+ month + "개월"
    // }
    el.dataValues.Case.dataValues.resultStr = str;

    if (isFinished) {
        // const year = Math.floor(el.dataValues.result / 12);
        // const month = el.dataValues.result % 12;
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


        // if (year == 0) {
        //     str += month + "개월"
        // } else {
        //     str += year+"년 "+ month + "개월"
        // }
        el.dataValues.resultStr = str;
    }

    return el;
}


exports.getUser = async (req, res) => {
    try {
        const { id } = req.decoded;

        // 설문 완료한 판례
        const finished = await Finished.findAll({
            attributes : ['id', 'user_id', 'case_id', 'result', 'is_probation', 'probation_result', 'createdAt'
            // [sequelize.fn(), 'result_str'],
            ],
            include : [{
                model : Case,
                include : [ {model: Category, attributes : ['name']}],
            },
        ],
            where : {user_id : id}
        });

        const finishedList = finished.map((el)=>transformResult(el, true));

        // 관심 판례
        const interested = await Interested.findAll({
            attributes : ['id', 'user_id', 'case_id'],
            include : [{
                model : Case,
                include : [ {model: Category, attributes : ['name']}],
            }],
            where : {user_id : id}
        });

        const interestedList = interested.map((el)=>transformResult(el,false));

        // return res.json({finished, interested});
        return res.json({finishedList, interestedList});
    } catch (error) {
        console.log(error);
        return res.json({error})
    }
}