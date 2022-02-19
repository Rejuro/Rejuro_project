import {request} from './generic.service'

const getProduct = () => request({ url: `products/${id}`, method: "get"})

const getProducts = () => request({ url: `products`, method: "get"})

export {
    getProduct,
    getProducts
}
