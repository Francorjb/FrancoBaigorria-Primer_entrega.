const fs = require('fs');
const ProductManager = require('./productManager.js');

class ProductManager {
    constructor(filePath) {
        this.path = filePath;
        this.currentId = 1;
}

addProduct(product) {
    let products = this.loadProducts();

    product.id = this.currentId++;

    products.push(product);

    this.saveProducts(products);
}

getProducts() {
    return this.loadProducts();
}

getProductById(id) {
    const products = this.loadProducts();
    const product = products.find((p) => p.id === id);
    return product;
}

updateProduct(id, updatedProduct) {
    let products = this.loadProducts();

    const index = products.findIndex((p) => p.id === id);

    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };

        this.saveProducts(products);
    }
}

deleteProduct(id) {
    let products = this.loadProducts();

    products = products.filter((p) => p.id !== id);

    this.saveProducts(products);
}

loadProducts() {
    try {
        const data = fs.readFileSync(this.path, 'utf-8');
        if (data) {
        return JSON.parse(data);
    }
    } catch (error) {
        return [];
    }
}

saveProducts(products) {
    fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
    }
}

module.exports = ProductManager;


const manager = new ProductManager('products.json');

manager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del Producto 1',
    price: 10.99,
    thumbnail: 'ruta_imagen_1.jpg',
    code: 'P1',
    stock: 100,
});

const todosLosProductos = manager.getProducts();
console.log('Todos los productos:', todosLosProductos);