import { faker } from "@faker-js/faker"

const getProducts = (req, res) => {
    var productList = [
        {
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            descripcion: faker.commerce.productDescription(),
            material: faker.commerce.productMaterial()
        },
        {
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            descripcion: faker.commerce.productDescription(),
            material: faker.commerce.productMaterial()
        },
        {
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            descripcion: faker.commerce.productDescription(),
            material: faker.commerce.productMaterial()
        }
    ]

    res.json(productList);
}

const createProduct = (req, res) => {
    console.log(req.body);
    res.status(201).json();
}

const updateProduct = (req, res) => {
    console.log(req.body);
    console.log(req.params.idProduct);
    res.status(200).json();
}

const deleteProduct = (req, res) => {
    console.log(req.params.id);
    res.status(200).json();
}

const getOneProduct = (req, res) => {
    console.log(req.params.idProduct);

    var productObj = {
        nombre: faker.commerce.productName(),
        precio: faker.commerce.price(),
        descripcion: faker.commerce.productDescription(),
        material: faker.commerce.productMaterial(),
    }

    res.status(200).json(productObj);
}

//module.exports = {getProducts, createProduct, updateProduct, deleteProduct};
export {getProducts, createProduct, updateProduct, deleteProduct, getOneProduct};