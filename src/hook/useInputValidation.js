import {useEffect} from 'react'

export default function useInputValidation(state, setValidFunc, regex){
    useEffect(() => {
        if(state.length >= 3){
            if(regex.test(state)){
                setValidFunc(true)
            }else{
                setValidFunc(false)
            }
        }else{
            setValidFunc(false)
        }
    }, [state])
}