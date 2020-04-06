import Service from './service'

class FooCtrl {
  async findAll (req, res) {
    try {
      const foo = await Service.findAll()
  
      return res.status(200).json({ foo })
    } catch (err) {
      return res.status(400).json({ err })
    }
  }
  
  async save(req, res) {
    try {
      const { body } = req
      const foo = await Service.save(body)
  
      return res.status(200).json({ foo })
    } catch (err) {
      return res.status(400).json({ err })
    }
  }
  
  async update(req, res) {
    try {
      const { params, body } = req
  
      const foo = await Service.findById(+params.id)
  
      if (!foo) {
        return res.status(404).json({ message: 'not_found' })
      }
  
      const updated = await Service.updateById(+params.id, body)
  
      return res.status(204).json({ foo: updated })
    } catch (err) {
      console.log({ err })
      return res.status(400).json({ err })
    }
  }
  
  async remove(req, res) {
    try {
      const { params } = req
  
      const foo = await Service.findById(+params.id)
  
      if (!foo) {
        return res.status(404).json({ message: 'not_found' })
      }
  
      const removed = await Service.removeById(+params.id)
  
      return res.status(200).json({ foo: removed })
    } catch (err) {
      return res.status(400).json({ err })
    }
  }
}


export default new FooCtrl()
