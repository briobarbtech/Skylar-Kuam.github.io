import { clientServices } from "./service/client-service.js"

const searchBar = document.querySelector('#search-bar')


const productList = document.querySelector('#productsList')

clientServices.callProducts(productList)