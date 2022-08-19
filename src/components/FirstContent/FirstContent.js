import { useState, useRef } from "react";
import firstImage from "../../assets/content/1.png"
import secondImage from "../../assets/content/2.png"
import Separator from "../Separator"
import CounterItem from "./CounterItem"
import useOnScreen from '../../hook/useOnScreen'

export default function FirstContent(){
    const myRef = useRef()
    const isVisible = useOnScreen(myRef)
    const [isReadyToLoad, setIsReadyToLoad] = useState(false)

    if(isVisible === true && isReadyToLoad !== true){
        setIsReadyToLoad(true)
    }
    

    return(
        <div className="flex flex-col gap-y-5 -mt-4 py-5 md:max-w-[1140px] md:mx-auto md:py-10">
            <div className="w-[full] flex flex-col gap-y-10 md:flex-row md:gap-x-6 px-6">
                <img src={firstImage} alt="energie" className="w-full md:rounded-lg md:w-[50%] md:bg-slate-200 md:bg-opacity-20 drop-shadow-2xl"/>
                <img src={secondImage} alt="energie" className="w-full md:rounded-lg md:w-[50%] md:bg-slate-200 md:bg-opacity-20 drop-shadow-2xl object-cover" />
            </div>

            <div className="gap-y-5 flex flex-col items-center w-full md:w-[66%] mx-auto pt-6" ref={myRef}>

                <div>
                    <h2 className="leading-[30px] text-center text-[30px] text-dark-blue font-semibold">
                        Gratuit et sans engament
                    </h2>
                </div>

                <Separator />

                <div className="space-y-6  md:space-y-0 md:flex md:items-center md:align-middle md:w-full md:mx-auto">
                    <CounterItem first={"Réaliser"} amount={70} symbol={"%"} desc={"d'économie sur votre facture"} increase={1} increaseTime={2000} isReadyToLoad={isReadyToLoad}/>
                    <CounterItem first={"Jusqu'a..."} amount={10500} symbol={"€"} desc={"d'aide financière"} increase={100} increaseTime={5} isReadyToLoad={isReadyToLoad}/>
                    <CounterItem first={"Jusqu'a"} amount={100} symbol={"%"} desc={"de prise en charge"} increase={1} increaseTime={5} isReadyToLoad={isReadyToLoad}/>
                </div>
            </div>

        </div>
    )
}