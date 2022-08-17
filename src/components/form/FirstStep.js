import RowItem from "./RowItem";
import immeuble from "../../assets/formAssets/immeuble.png"
import maison from "../../assets/formAssets/maison.png"
import locataire from "../../assets/formAssets/locataire.png"
import proprietaire from "../../assets/formAssets/proprietaire.png"
import bois from "../../assets/formAssets/bois.png"
import charbon from "../../assets/formAssets/charbon.png"
import fioul from "../../assets/formAssets/fioul.png"
import gaz from "../../assets/formAssets/gaz.png"
import courant from "../../assets/formAssets/courant.png"
import pompe from "../../assets/formAssets/pompe.png"
import {useState, useEffect} from 'react'
import ProgressBar from "../ProgressBar";


export default function FirstStep({currentStep, setCurrentStep, propertyType, setPropertyType, situation, setSituation, heatingType, setHeatingType, routes}){
    const [isValid, setIsValid] = useState(false)
    useEffect(() => {
        if((situation === "propriétaire" && propertyType === "maison") || routes === 2){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    }, [situation, propertyType, routes])

    return(
        <div id="step-1" className="text-start flex flex-col gap-y-1.5">
            <div className="pb-1.5 flex items-center justify-around">
                <span className="text-light-green text-[30px] font-semibold tracking-wide">1/3</span>
                <ProgressBar completed={33}/>
            </div>

            <div className="pb-1.5">
                <span className="text-dark-blue text-[19px] font-semibold tracking-wide">Votre projet concerne</span>
            </div>

            <div className="pb-1.5">
                <RowItem 
                    firstImg={immeuble} 
                    firstTitle={"Un appartement"} 
                    firstLibelle={"appartement"}
                    secondImg={maison} 
                    secondTitle={"Une maison"} 
                    secondLibelle={"maison"}
                    value={propertyType}
                    setValueFunc={setPropertyType}
                />
            </div>

            <div className="pb-1.5">
                <span className="text-dark-blue text-[19px] font-semibold tracking-wide">Quel est votre situation actuelle ?</span>
            </div>
                <RowItem 
                    firstImg={locataire} 
                    firstTitle={"Locataire"} 
                    firstLibelle={"locataire"}
                    secondImg={proprietaire} 
                    secondTitle={"Propriétaire"} 
                    secondLibelle={"propriétaire"}
                    value={situation}
                    setValueFunc={setSituation}
                />


            {((propertyType !== undefined && situation !== undefined) && isValid) ?
            <div className="">
                <div className="pb-1.5">
                    <span className="text-dark-blue text-[19px] font-semibold tracking-wide">Quel est votre type de chauffage actuel ?</span>
                </div>
                <div className="space-y-4">
                    <RowItem firstImg={bois} firstTitle={"Au bois"} firstLibelle={"bois"} secondImg={charbon} secondTitle={"Au charbon"} secondLibelle={"charbon"} value={heatingType}
                    setValueFunc={setHeatingType}/>
                    <RowItem firstImg={fioul} firstTitle={"Au fioul"} firstLibelle={"fioul"} secondImg={gaz} secondTitle={"Au gaz"} secondLibelle={"gaz"} value={heatingType}
                    setValueFunc={setHeatingType}/>
                    <RowItem firstImg={courant} firstTitle={"Électrique"} firstLibelle={"electrique"} secondImg={pompe} secondTitle={"Pompe à chaleur"} secondLibelle={"pompe-a-chaleur"} value={heatingType}
                    setValueFunc={setHeatingType}/>
                </div>

            </div>
            :
            <div>
                {(propertyType !== undefined && situation !== undefined && !isValid) && 
                    <div>
                        <p className="text-red-500 font-semibold text-center">Désolé, les aides ne concernent que les propriétaires de maison.</p>
                    </div>
                }
            </div>
            }

            <div>
                {(propertyType && situation && heatingType) &&
                <button 
                    className="bg-light-green text-white rounded px-[16px] py-[8px] font-semibold text-[17px]"
                    onClick={(e) => {
                        e.preventDefault()
                        setCurrentStep(2)}}
                >
                        Suivant
                </button>
                }
            </div>
        </div>
    )
}