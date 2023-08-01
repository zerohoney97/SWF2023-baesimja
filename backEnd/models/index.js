const Sequelize = require("sequelize");
const config = require("../config");
const User = require("./user");
const Case = require("./case");
const Category = require("./category");
const Finished = require("./finished");
const Interested = require("./interested");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {}
db.sequelize = sequelize;
db.User = User;
db.Case = Case;
db.Category = Category;
db.Finished = Finished;
db.Interested = Interested;

User.init(sequelize);
Case.init(sequelize);
Category.init(sequelize);
Finished.init(sequelize);
Interested.init(sequelize);

User.associate(db);
Case.associate(db);
Category.associate(db);
Finished.associate(db);
Interested.associate(db);

module.exports = db;