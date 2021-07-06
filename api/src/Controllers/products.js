const { Sequelize } = require('sequelize')
const { Product, Brand } = require('../db')

// ----------------  RUTA PARA AGREGAR UN PRODUCTO -----------------

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


// ----------------  RUTA PARA BUSCAR UN PRODUCTO POR NOMBRE -----------------

const getProductName = async function getProductName (req, res) {

    const productName = req.params.name
   
    try{
        productFound = await Product.findAll({
            where: {
                name: {[Op.iLike]: '%'+productName+'%'} 
                }
            });  

        if (productFound.length !== 0) {
            return res.status(200).json(productFound)
        } else { 
            return res.status(404).send({message: "Product not found or does not exist"})
        };
        
    }
    catch(error) {
        res.send(error)
    };
   
};


module.exports = {
    postNewProduct,
    getProductName,
  
};