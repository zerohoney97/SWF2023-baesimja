const Sequelize = require("sequelize");

class Interested extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {

            }, {
                sequelize,
                modelName : "Interested",
                tableName : "interesteds",
                timestamps : true,
                paranoid : false,
                charset : "utf8",
                collate : "utf8_general_ci"
            }
        );
    }

    static associate(db) {
        db.Interested.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
        db.Interested.belongsTo(db.Case, {foreignKey : "case_id", targetKey : "id"});
    }
}

module.exports = Interested;