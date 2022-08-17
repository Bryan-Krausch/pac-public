import Separator from "../../Separator";
import StepContainerItems from "./StepContainerItems";


export default function SecondSection(){
    return(
        <div className="w-full flex flex-col items-center space-y-5 p-[10px]">
            <div className="mt-4">
                <h2 className="text-center text-dark-blue text-[27px] font-semibold leading-[27px]">
                    Votre projet de rénovation en 4 étapes
                </h2>
            </div>
            <Separator />
            
            <StepContainerItems /> 
            <div className="text-[27px] text-dark-blue font-semibold">
                <p>Nos partenaires</p>    
            </div>       
            <Separator />
        </div>
    )
}