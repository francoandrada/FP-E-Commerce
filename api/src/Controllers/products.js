const { Sequelize } = require('sequelize')
const { Product, Brand } = require('../db')

// ----------------  ADD NEW PRODUCT -----------------

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


// ----------------  SEARCH PRODUCTS BY NAME -----------------

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


// ----------------  ORDER PRODUCTS BY PRICE -----------------
// This endpoint receives two params type:DESC/ASC (descendent or ascendant) and orderBy:price 
// Since type is variable we could ad other option as Name, Brand, etc

const orderProducts = async function orderProducts (req, res) {

    try{
        const type = req.params.type
        const orderby = req.params.orderby.toUpperCase()
        
            orderedProducts = await Product.findAll({
                    order: [[type, orderby]],
                })   
            return res.status(200).json(orderedProducts)
        }
        catch(error) {
            next(error)
        }     
   
};



module.exports = {
    postNewProduct,
    getProductName,
    orderProducts,
  
};