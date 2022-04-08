const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllBusinesses = async () => {
  const result = await Business.findAll()
  stringify(result)
}

const findBusinessById = async (id) => {
  const result = await Business.findByPk(id)
  stringify(result)
}

const findAllBusinessByRating = async () => {
  const result = await Business.findAll({
    where: { rating: 5 }
  })
  stringify(result)
}

const findBusinessByRating = async () => {
  const result = await Business.findOne({
    where: { rating: 5 }
  })
  stringify(result)
}

const createBusiness = async () => {
  const result = await Business.create({
    name: 'Rando Business',
    address: '123 Main St.',
    rating: 5
  })
  stringify(result)
}

const deleteBusiness = async () => {
  const result = await Business.destroy({ where: { name: 'Better Name' } })
  stringify(result)
}

const updateBusiness = async () => {
  const result = await Business.update(
    {
      name: 'Better Name'
    },
    { where: { name: 'Rando Business' } }
  )
  stringify(result)
}

async function main() {
  try {
    //await findAllBusinesses()
    //await findBusinessById(4)
    //await findAllBusinessByRating()
    //await findBusinessByRating
    //await createBusiness()
    //await updateBusiness()
    //await deleteBusiness()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
