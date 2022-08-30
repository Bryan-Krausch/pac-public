import Separator from "../../Separator";
import FirstSectionListItem from "./FirstSectionListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

export default function FirstSection(){
    return(
        <div className="w-full flex flex-col items-center space-y-5 mb-[30px] md:max-w-[1140px] md:mx-auto">
            <div className="mt-4">
                <h2 className="text-center text-dark-blue text-[27px] font-semibold leading-[27px] md:text-[32px]">
                    Quelles sont les aides dont je peut bénéficier
                </h2>
            </div>

            <Separator />
            
            <div className="p-[10px] md:max-w-[658px]">
                <ul className="space-y-2">
                    <FirstSectionListItem 
                        boldText={"Crédit d'impôt et Ma Prime Rénov' :"}
                        text={" Depuis le début de cette année les montants dont on peut bénéficier pour l'installation d'une pompe à chaleur dépendent désormais des conditions de revenus du ménage. Les aides peuvent aller jusqu’à 10 500 euros selon votre revenu."}
                    /> 
                    <FirstSectionListItem 
                        boldText={"Les primes énergie (CEE) :"}
                        text={" Cette aide est octroyée pour la réalisation de travaux visant des économies d'énergie, comme l'installation d'une pompe à chaleur. Cette mesure est indépendante du CITE ou de Ma Prime Renov’. A ce titre, l'aide peut donc être cumulée avec ces mesures. "}
                    /> 
                    <FirstSectionListItem 
                        boldText={"L'éco prêt à taux zéro :"}
                        text={" L'éco prêt à taux zéro : il est possible de recourir à un éco prêt à taux zéro pour l'installation d'une pompe à chaleur. Dès lors, un ménage n'a pas à puiser dans ses économies ou à payer des intérêts sur un emprunt réalisé pour financer son projet."}
                    /> 
                    <FirstSectionListItem 
                        boldText={"Le chèque énergie : "}
                        text={" Il est possible d'utiliser le chèque énergie pour le financement de travaux de rénovation énergétique, et donc pour l'installation d'une pompe à chaleur. 5,6 millions de ménages en France ont bénéficié de ces chèques l'année dernière."}
                    /> 
                </ul>
            </div>
            <div className="mt-7 flex items-center justify-start mb-[48px] w-full ">
                <a className="bg-accent px-[33px] py-[10px] mx-auto inline-block hover:scale-125" href="#hero">
                    <span className="text-white flex justify-center md:items-center">
                        <span className="text-[21px] md:text-[25px] mr-4"><FontAwesomeIcon icon={faClipboardCheck}/></span>
                        <span className="text-[21px] md:text-[25px] font-medium  text-center">Testez votre éligibilité</span>
                    </span>
                </a>
            </div>
        </div>
    )
}