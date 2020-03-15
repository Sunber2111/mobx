import { observable,action, decorate, runInAction } from 'mobx'
import {createContext} from 'react'

class ColorStore{

    isShow = true

    products = [
        {
            id:1,
            name:'sản phẩm 1'
        },
        {
            id:2,
            name:'sản phẩm 2'
        },
        {
            id:3,
            name:'sản phẩm 3'
        }
    ]

    // show : boolean
    ShowMode = (show)=>{
        runInAction('change show mode',()=>{
            this.isShow= show
        })
    }

    addProduct = product =>{

        // lấy data from API

        runInAction('add product',()=>{
            product.id = this.products.length +1
            
            console.log(product);
            
            this.products.push(product)
            console.log(this.products);
            
        })
    }
    
}

// thay đổi state dùng runInAction
// observable = 1 state

decorate(ColorStore,{
    isShow:observable,
    products:observable,
    ShowMode:action,
    addProduct:action
})

export default createContext(new ColorStore())