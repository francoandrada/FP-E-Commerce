const { Product, Brand, Category } = require('../db')

async function putProduct(req, res, next) {
    try {
        const {
            id, 
            name, 
            price, 
            description,
            weight, 
            image, 
            stock, 
            // type_product,
            brandId
         } = req.body;
    let variable = {}
    if(name.length > 0) variable.name = name 
    if(price) variable.price= price
    if(description.length >0) variable.description= description
    if(weight) variable.weight= weight
    if(image.length >0) variable.image= image
    if(stock) variable.stock= stock
    if(brandId) variable.brandId= brandId
      const putProductSelect = await Product.update(variable,{
            where:{
                id: id
            }
        })
        res.send(putProductSelect)
    } catch (error) {
        next(error)
    }
}
async function postBrand (req, res, next) {
    try {
        const {name, image} = req.body;
        const createBrand = await Brand.create({
         name: name,
         image: image
            
        });
        res.json(createBrand)
    } catch (error) {
        next(error)
    }
}
async function putBrand(req, res, next) {
    try {
        const {name, image} = req.body;
        Brand.update({
            where: {
                id: id
            }
        })
    } catch (error) {
        
    }
}

module.exports = {
    putProduct,
    postBrand
}