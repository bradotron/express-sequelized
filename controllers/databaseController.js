var db = require('./models');

db.Sequelize.sync().then(() => {
  console.log('Sequelize sync() completed');
});