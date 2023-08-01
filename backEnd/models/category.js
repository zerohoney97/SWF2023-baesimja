const Sequelize = require("sequelize");

class Category extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                name : {
                    type: Sequelize.STRING(40)
                }
            },
            {
                sequelize,
                modelName : "Category",
                tableName : "categories",
                timestamps : true,
                paranoid : false,
                charset : "utf8",
                collate : "utf8_general_ci"
            }
        )
    }

    static associate(db) {
        db.Category.hasMany(db.Case, {foreignKey : "category_id", sourceKey : "id"});
    }

}


module.exports = Category;