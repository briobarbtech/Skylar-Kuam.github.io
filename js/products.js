import { clientServices } from "./service/client-service.js"

const searchBar = document.querySelector('#search-bar')


const productBoxList = document.querySelector('#productsList')


clientServices.callProducts(productBoxList)

