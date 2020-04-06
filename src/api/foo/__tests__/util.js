import Model from '../model'

class FooUtil {
  async removeAll() {
    return Model.destroy({ where: {} })
  }
}

export default new FooUtil()
