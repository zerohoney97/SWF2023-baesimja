const Sequelize = require("sequelize");

class Finished extends Sequelize.Model {
    static init(sequelize) {

        return super.init(
            {
                result : {
                    type : Sequelize.INTEGER
                },
                probation_result : { // 집행유예 result
                    type: Sequelize.INTEGER,
                    defaultValue : 0
                },
                is_probation : { // true : 집행유예, false : 징역
                    type : Sequelize.BOOLEAN,
                    defaultValue : false,
                },
                createdAt : {
                    type : Sequelize.STRING,
                    defaultValue : new Date().toLocaleString("ko-KR", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })
                }
            },
            {
                sequelize,
                modelName : "Finished",
                tableName : "finisheds",
                timestamps : false,
                paranoid : false,
                charset : "utf8",
                collate : "utf8_general_ci"
            }
        )
    }

    static associate(db) {
        db.Finished.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
        db.Finished.belongsTo(db.Case, {foreignKey : "case_id", targetKey : "id"});
    }
}

module.exports = Finished;