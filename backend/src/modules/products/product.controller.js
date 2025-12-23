import * as productRepo from './product.repository.js';

export async function listProducts(req, res) {
    const products = await productRepo.getAllProducts();
    res.json(products);
}

export async function getProduct(req, res) {
    const { id } = req.params;
    const product = await productRepo.getProductById(id);

    if (! product)
        return res.status(404).json({ message: 'Product not found'});

    res.json(product);
}