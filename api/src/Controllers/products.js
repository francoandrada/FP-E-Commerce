const { Sequelize } = require('sequelize')
const { Product, Brand } = require('../db')


const postNewProduct = async function postNewProduct (req, res) {
    const { name, 
            price, 
            description,
            weight, 
            image, 
            stock, 
            type_product,
            brand } = req.body;

    const newProduct = await Product.findOrCreate({
        where: {
            name, 
            price, 
            description,
            weight, 
            image, 
            stock, 
            type_product

        }

    });
    
    let productBrand = await Brand.findAll({
                where:{ 
                    name: brand 
                }
            })
            await newProduct[0].addBrand(productBrand)
    

    res.status(200).send({message: "Product added succesfully"})
  
};





module.exports = {
    postNewProduct,
  
};