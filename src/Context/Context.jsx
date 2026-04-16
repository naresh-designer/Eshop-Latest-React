import { createContext, useEffect, useReducer, useState } from "react"
import { productApi } from "../Constant/Constant"
import reducer from "../Reducer/Reducer"

const getLocalCart = () => {
    let localCart = localStorage.getItem('products')
    if(localCart){
        return JSON.parse(localCart)
    }else{
        return []
    }
}

const AppContext = createContext()


const AppProvider = ({children})=>{
    const[products,setProducts]=useState([])
    const[menProducts,setMenProducts]=useState([])
    const[womanProduct,setWomanProduct]=useState([])
    const[flowerProduct,setFlowerProduct]=useState([])

    const [cart, dispatch] =  useReducer(reducer,getLocalCart())


    const fetchData = async(url)=>{
        try {
            const res = await fetch(url)
            const data = await res.json()
            // console.log(data.products);

            const filterProduct = data.products.filter((curElm)=>{
                return(
                    curElm.category === "beauty"
                )
            })

            const filterWProduct = data.products.filter((curElm)=>{
                return(
                    curElm.category === "fragrances"
                )
            })

            const filterFlower = data.products.filter((curElm)=>{
                return(
                    curElm.category === "flower"
                )
            })


            setFlowerProduct(filterFlower)

            setProducts(data.products)
            setWomanProduct(filterWProduct)

            setMenProducts(filterProduct)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData(productApi)

        localStorage.setItem('products',JSON.stringify(cart))
        return(()=>{
            localStorage.removeItem('products')
        })
    },[cart])

    return(
        <AppContext.Provider value={{cart, dispatch, flowerProduct, menProducts,womanProduct,products}}>{children}</AppContext.Provider>
    )
}


export{AppContext,AppProvider}