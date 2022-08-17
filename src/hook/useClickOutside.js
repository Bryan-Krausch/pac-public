import {useEffect} from 'react'

export default function useClickOutside(ref, legalModal, stateFunc){
    useEffect(() => {
        function handleClickOutside(event) {
            if(ref.current && !ref.current.contains(event.target) && legalModal){
                stateFunc(false)
            }
        }
        if(legalModal){
            setTimeout(() => {
                document.addEventListener('click', handleClickOutside)
            }, 300)
        }
        
        return() => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [ref])
}