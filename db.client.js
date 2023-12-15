const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'esgi_cloud_exam_db', 
  'esgi_cloud_exam_db_user', 
  'WTYOSlOnEOKkkrGx1YDx9yqaUHjt2ozv', 
  {
    host: 'pD6z91y1p9b6i0motWbmOWug4ggtitIK', 
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
