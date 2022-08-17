import { faCalendarDay, faCheckCircle, faMousePointer, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StepContainerItems(){
    return(
    <div className="space-y-5 md:space-y-0 w-full md:flex md:gap-x-5  md:max-w-[1140px]">
        <div className="flex flex-col items-center p-[32px] gap-x-20 rounded border-[1px] border-dark-blue md:w-[25%]">
            <div className="text-[50px] text-light-green">
                <FontAwesomeIcon icon={faMousePointer}/>
            </div>
            <div className="h-[50px] W-[258px] rounded-2xl">
                <p className="text-dark-blue text-[16px] leading-[25px]  font-semibold uppercase text-center">
                    <b>1. </b>Remplir le formulaire D'éligibilité
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center p-[32px] gap-x-20 rounded border-[1px] border-dark-blue md:w-[25%]">
            <div className="text-[50px] text-light-green">
                <FontAwesomeIcon icon={faCheckCircle}/>
            </div>
            <div className="h-[50px] W-[258px] rounded-2xl">
                <p className="text-dark-blue text-[16px] leading-[25px]  font-semibold uppercase text-center">
                    <b>2. </b>Vérification de l'éligibilité
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center p-[32px] gap-x-20 rounded border-[1px] border-dark-blue md:w-[25%]">
            <div className="text-[50px] text-light-green">
                <FontAwesomeIcon icon={faCalendarDay}/>
            </div>
            <div className="h-[50px] W-[258px] rounded-2xl">
                <p className="text-dark-blue text-[16px] leading-[25px]  font-semibold uppercase text-center">
                    <b>3. </b>Prise de RDV pour L'installation
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center p-[32px] gap-x-20 rounded border-[1px] border-dark-blue md:w-[25%]">
            <div className="text-[50px] text-light-green">
                <FontAwesomeIcon icon={faToolbox}/>
            </div>
            <div className="h-[50px] W-[258px] rounded-2xl">
                <p className="text-dark-blue text-[16px] leading-[25px]  font-semibold uppercase text-center">
                    <b>4. </b>Mise en place de la pompe à chaleur
                </p>
            </div>
        </div>
    </div>
    )
}