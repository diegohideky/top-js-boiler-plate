import './lib/dotenv'
import express from 'express'
import expressConfig from './config/express'
import routesConfig from './config/routes'

class AppCtrl {
  constructor() {
    this.app = express()

    this.initConfig()
    this.initRoutes()
  }

  initConfig() {
    expressConfig(this.app)
  }

  initRoutes() {
    routesConfig(this.app)
  }
}

export default new AppCtrl().app
