import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = ( category ) => {

    const [objeto, setObjeto] = useState({
        data:       [],
        loading:    true

    });

    useEffect( () => {
        getGifs( category )
        .then( imgs => {
            setObjeto ({
                data:       imgs,
                loading:    false
            });
        });
    }, [ category ]);


    return objeto; // { data : [] loading: true };

}