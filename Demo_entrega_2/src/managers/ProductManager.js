import fs from 'fs/promises';

export class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async getProducts() {
    try {
      const data = await fs.readFile(this.path, 'utf-8');
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  async addProduct(product) {
    const products = await this.getProducts();
    const id = products.length > 0 ? products.at(-1).id + 1 : 1;
    const newProduct = { id, ...product };
    products.push(newProduct);
    await fs.writeFile(this.path, JSON.stringify(products, null, 2));
  }

  async deleteProduct(id) {
    let products = await this.getProducts();
    products = products.filter(p => p.id !== parseInt(id));
    await fs.writeFile(this.path, JSON.stringify(products, null, 2));
  }
}
