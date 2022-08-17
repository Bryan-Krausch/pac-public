import {useState, useEffect} from 'react'
import {numberWithSpaces} from '../../libs/numberWithSpaces'

export default function CounterItem({first, amount, symbol,desc, increase, increaseTime, isReadyToLoad}){
    const [data, setData] = useState(0)
    const [dataIsLoaded, setDataIsLoaded] = useState(false)

    useEffect(() => {
        let result
        if(data !== amount && isReadyToLoad && !dataIsLoaded){
            setTimeout(() => {
                result = data + increase
                setData(result)
            }, 5)
        }
        if(data === amount){
            let finalResult = numberWithSpaces(amount)
            setDataIsLoaded(true)
            if(dataIsLoaded === false){
                setData(finalResult)
            }else{
                return
            }
        }
    }, [data, isReadyToLoad])

    return(
        <div className="space-y-4 flex flex-col items-center md:w-[33%]">
            <div>
                <p className="text-dark-blue text-[20px] font-semibold">{first}</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="leading-[50px] text-[50px] text-light-green font-semibold">
                    <span>{data}</span><span> {symbol}</span>
                </div>
                <div className="text-dark-blue text-[17px]">{desc}</div>
                </div>
            </div>
    )
}