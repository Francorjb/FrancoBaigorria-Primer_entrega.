class ProductoManager {
    constructor() {
        this.products = [];
        this.currentId = 1;
    }

    addProduct(product) {

    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.log('Todos los campos son obligatorios.');
        return;
    }      
    if (this.products.some((p) => p.code === product.code)) {
        console.log('Ya existe un producto con el mismo código.');
        return;
    }
        product.id = this.currentId++;
        this.products.push(product);
    }


    getProducts() {
        return this.products;
    }  
    getProductsById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
        return product;
    } else {
        console.log('Not found');
        }
    }
}

const manager = new ProductoManager();

manager.addProduct({
    title: 'Producto 1',
    description: 'Descripción 1',
    price: 32465,
    thumbnail: 'ruta_imagen_1.jpg',
    code: 'P1',
    stock: 100,
});

manager.addProduct({
    title: 'Producto 2',
    description: 'Descripción 2',
    price: 20264,
    thumbnail: 'ruta_imagen_2.jpg',
    code: 'P2',
    stock: 50,
});

const todosLosProductos = manager.getProducts();
console.log('Todos los productos:', todosLosProductos);

const productoPorId = manager.getProductsById(2);
console.log('Producto por ID:', productoPorId);

const productoNoExistente = manager.getProductsById(3);
