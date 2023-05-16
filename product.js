class ProductManager {

    #products

    constructor(){
        this.#products = []
    }
    
    addProduct(title, description, price, thumbnail, code, stock) {
        let product = {
            id: this.#products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Todos los campos son obligatorios')
        } else if (this.#products.some(product => product.code === code)){
            console.log('El codigo del producto que desea agregar ya existe.')
        } else {
            console.log('Producto agregado')
        }

        this.#products.push(product)
       }

    getProducts(){
        return this.#products
    }

    getProductById(id){
        return this.#products.find((e)=>{
            return e.id == id
        }) || console.error("Not Found")
    }   
   
}

const product = new ProductManager() 
const products = product.getProducts()
/* console.log(products) */

product.addProduct("Caramelo", "Dulce", 20, "thumbnail1", "12F24R", 100)
product.addProduct("Caramelo", "Acido", 15, "thumbnail1", "12B44R", 100)
product.addProduct("Caramelo", "Amargo", 10, "thumbnail1", "123454R", 100)  
/* PRODUCTO CON CAMPO VACÍO PARA TEST (descomentar para probar)*/
/* product.addProduct("Caramelo", 10, "thumbnail1", "123454R", 100) */
/* PRODUCTO CON CODIGO REPETIDO PARA TEST (descomentar para probar)*/
/* product.addProduct("Caramelo", "Salado", 10, "thumbnail1", "123454R", 100) */
console.log(product.getProducts())

console.log("/* Mostrando producto solicitado por ID */",product.getProductById(2))
console.log("/* Id Inexistente TEST  */", product.getProductById(10))
