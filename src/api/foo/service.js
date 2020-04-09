import Repo from './repository'

class FooService {
  async findAll() {
    return Repo.findAll()
  }

  async findById(id) {
    return Repo.findById(id)
  }

  async save(foo) {
    return Repo.save(foo)
  }

  async updateById(id, foo) {
    return Repo.updateById(id, foo)
  }

  async removeById(id) {
    return Repo.removeById(id)
  }
}

export default new FooService()
