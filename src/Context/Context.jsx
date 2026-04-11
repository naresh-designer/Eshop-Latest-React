import { createContext, useEffect, useReducer, useState } from "react"
import { productApi } from "../Constant/Constant"
import reducer from "../Reducer/Reducer"

const AppContext = createContext()


const AppProvider = ({children})=>{
    const[products,setProducts]=useState([])
    const[menProducts,setMenProducts]=useState([])
    const[womanProduct,setWomanProduct]=useState([])
    const[flowerProduct,setFlowerProduct]=useState([])

    const [cart, dispatch] =  useReducer(reducer,[])


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

            console.log(filterFlower);

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
    },[])

    return(
        <AppContext.Provider value={{cart, dispatch, flowerProduct, menProducts,womanProduct,products}}>{children}</AppContext.Provider>
    )
}


export{AppContext,AppProvider}