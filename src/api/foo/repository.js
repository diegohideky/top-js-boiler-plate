import Model from './model'

class FooRepository {
  async findAll () {
    return Model.findAll()
  }

  async findById(id) {
    return Model.findByPk(id)
  }

  async save(foo) {
    return Model.create(foo)
  }
 
  async updateById(id, foo) {
    return Model.update(foo, { where: { id } })
  }

  async removeById(id) {
    return Model.destroy({ where: { id } })
  } 
}

export default new FooRepository()
