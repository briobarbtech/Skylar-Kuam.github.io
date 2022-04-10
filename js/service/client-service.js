const url = "http://localhost:3000/product"
function sortProducts(){
    return fetch(url).then(respuesta =>{
        return respuesta.json()
    })
}
function addProduct(producto){
    const product = document.createElement('div')
    const card = `<a href="#">
                    <div class="img-container">
                        <img src=${producto.img} alt="producto 1">
                    </div>
                    <div class="info-container">
                        <h2 class="product-name">${producto.nameProduct}</h2>
                        <strong>${producto.price}</strong>
                        <p>${producto.descProduct}</p>
                    </div>
                </a>
                <button class="add-cart"><img class="add-cart-icon" src="../assets/img/icon/shopping-cart-add-button.png"></img><p>add to cart</button>`
    product.innerHTML = card
    product.classList.add("card-A")
    return product
}


async function callProducts(productList){
    try{
        const data = await sortProducts()
        if (data != null){
            data.forEach(( product = {nameProduct, price, descProduct, img}) => {
                const newProduct = addProduct(product)
                productList.appendChild(newProduct)
            });
        }else{
            throw new Error()
        }
    }catch(error){
        console.log(error)
    }
}

export const clientServices = {
    callProducts
}