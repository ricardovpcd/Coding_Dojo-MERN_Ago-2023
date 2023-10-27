import { faker } from "@faker-js/faker"
import Producto from "../models/productoModel.js";

const getProducts = async (req, res) => {
    var listaProductos = await Producto.find();
    res.json(listaProductos);
}

const createProduct = async (req, res) => {
    var newProducto = await Producto.create(req.body);
    res.status(201).json(newProducto);
}

const updateProduct = (req, res) => {
    console.log(req.body);
    console.log(req.params.idProduct);
    res.status(200).json();
}

const deleteProduct = async (req, res) => {
    var idProduct = req.params.idProduct;
    await Producto.findByIdAndDelete(idProduct);
    res.status(200).json();
}

const getOneProduct = async (req, res) => {
    var idProduct = req.params.idProduct;
    var producto = await Producto.findById(idProduct);
    res.status(200).json(producto);
}

export {getProducts, createProduct, updateProduct, deleteProduct, getOneProduct};