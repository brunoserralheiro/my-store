export const UPDATE_PRODUCTS = 'products:updateProducts';


export function  updateProducts(newProduct){
    return {
        type : UPDATE_PRODUCTS,
        payload:{
            user:newProduct
        }
    }
}