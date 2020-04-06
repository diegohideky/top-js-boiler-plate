import Sequelize from 'sequelize'
import config from '../database'

const db = new Sequelize(config)

export default db
