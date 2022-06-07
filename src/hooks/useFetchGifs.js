import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGif";


export const useFetchGifs =(category)=>{

    const [state, setstate] = useState({


        data:[],
        loading:true
    });

      useEffect(()=>{
    //esta funcion retorna una promesa
    getGifs(category)
    .then(imgs=> {

       

            setstate({
    
                data:imgs,
                loading:false
            });



    })
},[category])

    return state;

}
