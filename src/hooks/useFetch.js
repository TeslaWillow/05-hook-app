import { useEffect, useState } from "react"

const localCache = {

};


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
        error: null,
    });

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: null,
            error: null,
        });
    };
    
    const getFetch = async() => {

        if( localCache[url] ) {
            console.log("cache");
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        setLoadingState();
        
        const response = await fetch(url);
        
        await new Promise( response => setTimeout(response, 1500) );

        if( !response.ok ) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });
            return;
        }

        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false, 
            error: null,
        });

        // Handle cache
        console.log({data});
        localCache[url] = data;
    }
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
