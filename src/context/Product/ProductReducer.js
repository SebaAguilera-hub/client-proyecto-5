const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_CUADROS":
            return {
                ...globalState,
                cuadros: action.payload,
                cuadro: [{
                    id_: "",
                    nombre: "",
                    precio: "",
                    imagen: "",
                    dimension: "",
                    description: ""
                }]
            }
        

           case "GET_CUADRO":
            return {
                ...globalState,
                cuadro: [action.payload]
            }

            default: 
            return globalState

    }


}

export default reducer