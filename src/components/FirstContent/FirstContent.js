import { useEffect, useState, useRef } from "react";
import energieImage from "../../assets/energieImage.jpg"
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
        <div className="flex flex-col gap-y-5 -mt-4 md:max-w-[1140px] md:flex-row md:items-center md:mx-auto md:gap-x-5">
            <div className="w-[full] md:w-[33%]">
                <img src={energieImage} alt="energie" className="md:rounded-lg"/>
            </div>

            <div className="gap-y-5 flex flex-col items-center w-full md:w-[66%]" ref={myRef}>

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