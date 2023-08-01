const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name : {
                type : Sequelize.STRING(40),
                allowNull : false,
                unique : true
            },
            password : {
                type : Sequelize.STRING(64),
                allowNull : false
            },
        },
        {
            sequelize,
            modelName: "User",
            tableName : "users",
            timestamps:true,
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    static associate(db) {
        db.User.hasMany(db.Finished, {foreignKey : "user_id", sourceKey : "id"});
        db.User.hasMany(db.Interested, {foreignKey : "user_id", sourceKey : "id"});
    }
}

module.exports = User;