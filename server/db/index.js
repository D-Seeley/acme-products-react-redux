const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_products', {logging: false})

const product = db.define('products', {
    name: Sequelize.STRING,
    rating: Sequelize.INTEGER
})

const sync = ()=> {
    return db.sync({force: true})
    .then(()=> console.log('Sync ran well'))
}

const seed = ()=> {
    const {apple, dell, hp} = Promise.all([
        product.create({name: "Apple", rating: 9}),
        product.create({name: "Dell", rating: 4}),
        product.create({name: "HP", rating: 7})
    ])
    .catch(err => console.log(err))

}

module.exports = {
    models: {product}, 
    sync, 
    seed
}