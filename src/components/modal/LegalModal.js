import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useRef} from 'react'
import useClickOutside from "../../hook/useClickOutside"

export default function LegalModal({legalModal, setLegalModal}){
    const containerRef = useRef(null)
    useClickOutside(containerRef, legalModal, setLegalModal)

    return (
        <div className="fixed h-screen w-screen bg-opacity-40 bg-black overflow-y-hidden overflow-x-hidden z-[200]">
            <div className="relative h-full w-full">
                <div className=" h-full w-full md:h-[85%] md:w-[50%] absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-white md:p-10 overflow-y-auto space-y-4 rounded"
                ref={containerRef}>
                    <div className="flex justify-between w-full items-center md:-mt-5 mt-2">
                        <h2 className="text-lg font-semibold text-dark-blue">Mentions Légales</h2>
                        <div className="text-light-green text-[30px] md:-mr-2 mr-4 " onClick={() => setLegalModal(false)}><FontAwesomeIcon icon={faSquareXmark}/></div>
                    </div>
                    <div className="p-3 md:p-0">
                        <p className="text-[17px] leading-[40px] text-dark-blue">
                        Les présentes mentions légales sont fournies en application de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique. 
                        L’Editeur du présent site est la société STEP UP DIGITAL, Société par Action Simplifiée au capital de 1000,00 €, immatriculée au RCS de Bobigny sous le numéro 831 726 559 dont le siège social est situé au 29 rue Cartier Bresson, 93500, PANTIN et le numéro TVA FR 92831726559, représentée par Monsieur Andy TEBOUL, en sa qualité de Président. 
                        Le site www.artisan-pac.info sous la marque Optineo est la propriété de la société STEP UP DIGITAL. 
                        N° de téléphone de l’éditeur : 01 84 74 24 91 Le Directeur de publication du site est Monsieur Andy TEBOUL, qui pourrait être contacté à l’adresse contact@stepup-digital.com
                        le présent site web est hébergé par la société OVH dont le siège est situé à l’adresse ci-après: 2 Rue Kellermann, 59100 Roubaix, France. 
                        L’hébergeur peut être contacté au numéro de téléphone suivant : 1007 L’adresse email de l’hébergeur est support@ovh.fr 
                        Un délégué à la protection des données est à votre disposition pour toute question relative à la protection de vos données personnelles. 
                        Vous pouvez lui écrire à : -DPO STEP UP DIGITAL – 29 rue Cartier Bresson – 93500, PANTIN. -dpo@stepup-digital.com 
                        La politique de confidentialité applicable au site est accessible à l’adresse 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}