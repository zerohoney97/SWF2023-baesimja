const Sequelize = require("sequelize");

class Case extends Sequelize.Model {
  static init(sequelize) {

    return super.init(
      {
        case_num: {
          type: Sequelize.STRING,
          allowNull: false,
          unique : true,
        },
        title: {
          type: Sequelize.STRING,
        },
        header : {
          type: Sequelize.TEXT,
        },
        detail: {
          type: Sequelize.TEXT,
        },
        reason: {
          type: Sequelize.TEXT,
        },
        result: {
          type: Sequelize.INTEGER,
          defaultValue : 0
        },
        probation_result : { // 집행유예 result
          type: Sequelize.INTEGER,
          defaultValue : 0
        },
        is_probation : { // true : 집행유예, false : 징역
          type : Sequelize.BOOLEAN,
          defaultValue : false,
        },
        view_count :{
          type: Sequelize.INTEGER,
          defaultValue : 0
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
        modelName: "Case",
        tableName: "cases",
        timestamps: false,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Case.hasMany(db.Finished, { foreignKey: "case_id", sourceKey: "id" });
    db.Case.hasMany(db.Interested, { foreignKey: "case_id", sourceKey: "id" });
    db.Case.belongsTo(db.Category, { foreignKey: "category_id", targetKey: "id" });
  }
}

module.exports = Case;
