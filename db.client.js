const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'esgi_cloud_exam_db', // TODO
  'esgi_cloud_exam_db_user', //user
  'pD6z91y1p9b6i0motWbmOWug4ggtitIK',
  {
    host : 'dpg-clu1upol5elc738879og-a',
    dialect : 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
define : {

createAt: 'added',
updateAt: 'updated',
  
}
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
