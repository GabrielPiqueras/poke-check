import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});
    
    useEffect(() => {
        // No hace nada cuando está montado

        // Al desmontarse sí
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        // Reinicio para poder cargar el loading de nuevo
        setState({ data: null, loading: true, error: null});

        const request = fetch(url)
                            .then(resp => resp.json())
                            .then(data => {
                                
                                if (isMounted.current) {
                                    setState({
                                        data: data,
                                        loading: false,
                                        error: null
                                    });
                                } else {
                                    console.log('No se alcanzó a llamar a setState, porque el componente fue desmontado :)')
                                }
                            });
    }, [url]);

    return state;
}