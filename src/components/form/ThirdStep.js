import ProgressBar from "../ProgressBar"
import {validUsername, validTel, validEmail} from "../../libs/regex"
import useInputValidation from '../../hook/useInputValidation'

export default function ThirdStep({currentStep, prenom, setPrenom, nom, setNom, email, setEmail, tel, setTel, isValidPrenom, setIsValidPrenom, 
    isValidNom, setIsValidNom, isValidEmail, setIsValidEmail, isValidTel, setIsValidTel}){

    const isValidStyle = "focus:outline-none focus:border-light-green focus:ring-1 focus:ring-light-green"
    const isNotValidStyle = "focus:outline-none focus:border-focus focus:ring-1 focus:ring-focus"

    useInputValidation(prenom, setIsValidPrenom, validUsername)
    useInputValidation(nom, setIsValidNom, validUsername)
    useInputValidation(email, setIsValidEmail, validEmail)
    useInputValidation(tel, setIsValidTel, validTel)

    



    const handleChange = (event, stateFunc) => {
        stateFunc(event.target.value)
    }

    return(
        <div id="step-3" className="text-start flex flex-col gap-y-1.5">
            <div className="pb-1.5 flex items-center justify-around">
                <span className="text-light-green text-[30px] font-semibold tracking-wide">3/3</span>
                <ProgressBar completed={100}/>
            </div>

            <div className="pb-1.5">
                <span className="text-dark-blue text-[19px] font-semibold tracking-wide">Découvrez une estimation gratuite des aides de votre pompe à chaleur</span>
            </div>

            <div className="md:flex md:w-full">
                <div className="pb-1.5 md:w-2/4 md:px-1.5">
                    <div><span className="text-dark-blue text-[17px] font-semibold tracking-wide">Prénom</span><span className="text-light-green font-[17px] font-semibold">*</span></div>
                    <input 
                        type="text" 
                        className={`border-[1px] border-dark-blue w-full py-2 px-4 text-dark-blue ${isValidPrenom ? isValidStyle : isNotValidStyle}`}
                        value={prenom}
                        onChange={(e) => handleChange(e, setPrenom)}
                    />
                    {(!isValidPrenom && prenom.length >= 1) && <div className="text-red-500">Veuillez saisir au minimum 3 lettres</div>}
                </div>
                <div className="pb-1.5 md:w-2/4 md:px-1.5">
                    <div><span className="text-dark-blue text-[17px] font-semibold tracking-wide">Nom</span><span className="text-light-green font-[17px] font-semibold">*</span></div>
                    <input 
                        type="text" 
                        className={`border-[1px] border-dark-blue w-full py-2 px-4 text-dark-blue ${isValidPrenom ? isValidStyle : isNotValidStyle}`}
                        value={nom}
                        onChange={(e) => handleChange(e, setNom)}
                    />
                    {(!isValidNom && nom.length >= 1) && <div className="text-red-500">Veuillez saisir au minimum 3 lettres</div>}
                </div>
            </div>

            <div className="md:flex md:w-full">
                <div className="pb-1.5 md:w-2/4 md:px-1.5">
                    <div><span className="text-dark-blue text-[17px] font-semibold tracking-wide">Email</span><span className="text-light-green font-[17px] font-semibold">*</span></div>
                    <input 
                        type="email" 
                        className={`border-[1px] border-dark-blue w-full py-2 px-4 text-dark-blue ${isValidEmail ? isValidStyle : isNotValidStyle}`}
                        value={email}
                        onChange={(e) => handleChange(e, setEmail)}
                    />
                    {(!isValidEmail && email.length >= 1) && <div className="text-red-500">Veuillez saisir un email valide</div>}
                </div>
                <div className="pb-1.5 md:w-2/4 md:px-1.5">
                    <div><span className="text-dark-blue text-[17px] font-semibold tracking-wide">Téléphone</span><span className="text-light-green font-[17px] font-semibold">*</span></div>
                    <input 
                        type="text" 
                        className={`appearance-none	 border-[1px] border-dark-blue w-full py-2 px-4 text-dark-blue ${isValidTel ? isValidStyle : isNotValidStyle}`} 
                        value={tel}
                        onChange={(e) => setTel(e.target.value.replace(/[^0-9]/g, ""))}
                        placeholder="----------"
                        id="input-tel"
                    />
                    {(!isValidTel && tel.length > 0 && tel.length !== 10) && <div className="text-red-500">Veuillez saisir un numéro de téléphone valide</div>}
                </div>
            </div>

           
        </div>
    )
}