import {useState, useEffect} from 'react'

export default function ProgressBar({completed}){
    const [width, setWidth] = useState()

    useEffect(() => {
        if(completed === 33){
            setWidth("w-[33%]")
        }
        if(completed === 66){
            setWidth("w-[66%]")
        }
        if(completed === 100){
            setWidth("w-[100%]")
        }
    }, [completed])

    return(
        <div className="h-[10px] w-[80%] bg-slate-200 rounded-full">
            <div className={`h-full ${width} bg-dark-blue text-right rounded-full`}>
                <span></span>
            </div>
        </div>
    )
}