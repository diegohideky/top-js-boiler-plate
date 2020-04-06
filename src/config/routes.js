import { Application } from 'express'
import foo from '../api/foo'

const API_V1 = '/api/v1'

export default (app) => {
  app.use(API_V1, foo)
}
