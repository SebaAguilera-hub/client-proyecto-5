import { useReducer } from 'react'

import axiosClient from "./../../config/axios"

import ProductContext from "./ProductContext"
import ProductReducer from "./ProductReducer"

const ProductState = (props) => {

    const initialState = {
        cuadros: [],
        cuadro: [{
            id_: "",
            nombre: "",
            precio: "",
            imagen: "",
            dimension: "",
            descripcion: ""
        }]
    }

    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const getCuadro = async (id) => {

        const res = await axiosClient.get(`/obtener-cuadro/${id}`)

        const cuadro = res.data.cuadro

        dispatch({
            type: "GET_CUADRO",
            payload: cuadro
        })

        return cuadro

    }


    const getCuadros = async () => {

        const res = await axiosClient.get("/obtener-cuadros")

        dispatch({
            type: "GET_CUADROS",
            payload: res.data.cuadros
        })

    }

    const getPreferenceCheckoutMP = async (dataform) => {

        console.log("dataform:", dataform)

        const res = await axiosClient.post("/mercadopago", dataform)

        return res.data.checkoutId

    }


    return (
        <ProductContext.Provider
            value={{
                cuadros: globalState.cuadros,
                cuadro: globalState.cuadro,
                getCuadro,
                getCuadros,
                getPreferenceCheckoutMP       
            }}
        >
            { props.children }
        </ProductContext.Provider>
    )

}


export default ProductState