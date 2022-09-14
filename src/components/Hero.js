import FirstStep from "./form/FirstStep"
import SecondStep from "./form/SecondStep"
import {useState, useEffect} from "react"
import ThirdStep from "./form/ThirdStep"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import firstImage from "../assets/brandLogo/1.png"
import secondImage from "../assets/brandLogo/prime.png"
import thirdImage from "../assets/brandLogo/3.png"


import firstBg from '../assets/bg/firstBg.jpg'
import secondBg from '../assets/bg/secondBg.jpg'
import test from "../assets/bg/test2.webp"

export default function Hero({routes}){
    const [wasSend, setWasSend] = useState(false)

    const [iframeMail, setIframeMail] = useState("")
    const [iframeId, setIframeId] = useState("")

    const [firstStepProps, setFirstStepProps] = useState()
    const [firstStepHasError, setFirstStepHasError] = useState({
        0: undefined,
        1: undefined,
        2: undefined
    })

    const [errorMessage, setErrorMessage] = useState()


    const [currentStep, setCurrentStep] = useState(1)
    const [imageActive, setImageActive] = useState(1)

    const [next, setNext] = useState(false)

    // Step1
    const [propertyType, setPropertyType] = useState(undefined)
    const [situation, setSituation] = useState(undefined)
    const [heatingType, setHeatingType] = useState(undefined)

    // Step 2
    const [region, setRegion] = useState(undefined)
    const [dep, setDep] = useState(undefined)
    const [personInCharge, setPersonInCharge] = useState(0)
    const [earning, setEarning] = useState(undefined)

    // Step 3   
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")

    const [isValidPrenom, setIsValidPrenom] = useState(false)
    const [isValidNom, setIsValidNom] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidTel, setIsValidTel] = useState(false)
    
    if(next === false && firstStepHasError[0] === false && firstStepHasError[1]  === false && firstStepHasError[2]  === false ){
        setNext(true)
        setCurrentStep(2)
    }


    // Set basic value for dep and earnings
    useEffect(() => {
        if(region === "inParis"){
            setDep("75")
        }
        if(region === "outOfParis"){
            setDep("10")
        }
    }, [region])

    useEffect(() => {
        setTimeout(() => {
            if(imageActive === 1){
                setImageActive(2)
            }
            if(imageActive === 2){
                setImageActive(3)
            }
            if(imageActive === 3){
                setImageActive(1)
            }
        }, 4000)
    }, [imageActive])

    // GET PROPS FIRST STEP AND ERROR Message
    useEffect(() => {
        const getFirstProps = async(state, setState) => {
            if(!state){
                await axios.get("https://api.pac.optineo.info/getFirstPropsPac").then((result) => {
                    setState(result)
                    return
                }).catch((err) => {
                    console.log(err)
                })
            }else{
                return
            }
        }

        const getErrorMessage = async(state, setState) => {
            if(!state){
                await axios.get("https://api.pac.optineo.info/getErrorMessagePac").then((result) => {
                    setState(result)
                    return
                }).catch((err) => {
                    console.log(err)
                })
            }else{
                return
            }
        }

        getFirstProps(firstStepProps, setFirstStepProps)
        getErrorMessage(errorMessage, setErrorMessage)
    }, [])

    // Handle first PROPS PROPERTY
    useEffect(() => {
        const handlePropertyTypeProps = (property, props, setFirstStepHasError) => {
            if(props && propertyType){
                if(propertyType === props.data[0].champ){
                    if(props.data[0].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 0: true})
                        return
                    }
                }
                if(property === props.data[1].champ){
                    if(props.data[1].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 0: true})
                        return
                    }
                }
                setFirstStepHasError({...firstStepHasError, 0: false})
            }
        }

        handlePropertyTypeProps(propertyType, firstStepProps, setFirstStepHasError)
    }, [currentStep, propertyType])
    
    // Handle second props
    useEffect(() => {
        const handleSituationProps = (situation, props, setFirstStepHasError) => {
            if(props && situation){
                if(situation === props.data[2].champ){
                    if(props.data[2].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 1: true})
                        return
                    }
                }
                if(situation === props.data[3].champ){
                    if(props.data[3].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 1: true})
                        return
                    }
                }
                setFirstStepHasError({...firstStepHasError, 1: false})
            }
        }
        
        handleSituationProps(situation, firstStepProps, setFirstStepHasError)
    }, [currentStep, situation])
    
    // Handle Third Props

    useEffect(() => {

        const handleHeatingTypeProps = (heatingType, props, setFirstStepHasError) => {
            if(props && heatingType){
                if(heatingType === props.data[4].champ){
                    if(props.data[4].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 2: true})
                        return
                    }
                }
                if(heatingType === props.data[5].champ){
                    if(props.data[5].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 2: true})
                        return
                    }
                }
                if(heatingType === props.data[6].champ){
                    if(props.data[6].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 2: true})
                        return
                    }
                }
                if(heatingType === props.data[7].champ){
                    if(props.data[7].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 2: true})
                        return
                    }
                }
                if(heatingType === props.data[8].champ){
                    if(props.data[8].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 2: true})
                        return
                    }
                }
                if(heatingType === props.data[9].champ){
                    if(props.data[9].value.data[0] === 0){
                        setFirstStepHasError({...firstStepHasError, 2: true})
                        return
                    }
                }
                setFirstStepHasError({...firstStepHasError, 2: false})
            }
            return
        }
        
        handleHeatingTypeProps(heatingType, firstStepProps, setFirstStepHasError)
    }, [currentStep, heatingType])
    


    const submitForm = () => {  

        if(propertyType !== undefined && situation !== undefined && heatingType !== undefined &&
            region !== undefined && dep !== undefined && personInCharge !== undefined && earning !== 
            undefined && prenom !== undefined &&  nom !== undefined && email !== undefined && tel !== undefined && tel.length === 10){
            axios.post("https://api.pac.optineo.info/pac", {
                prenom: prenom,
                nom: nom,
                email: email,
                tel: tel,
                region: region,
                departement: dep,
                nombre_personne_a_charge: personInCharge == 0 ? 1 : personInCharge,
                revenu_total_foyer_fiscal: earning,
                type_proprietee: propertyType,
                situation: situation,
                type_chauffage: heatingType
            }).then((response) => {
                if(response.status === 200){
                    window.location.href = window.location.href + `?success=true&email=${email}&id=${response.data.success.insertId}`;
                }
            }).catch((error) => {
                toast.error("Erreur dans le formulaire veuillez réessayer")
            })
        }else{
            {tel.length !== 10 ? toast.error("Numéro de téléphone invalide") : toast.error("Erreur dans le formulaire veuillez réessayer")}   
        }
    }
    
    useEffect(() => {

        const notifHandler = () => {
            if(window.location.href.indexOf("success") !== -1){
                if(wasSend === false){
                    toast.success("Formulaire envoyé avec succès")
                    setWasSend(true)
                }
                if(wasSend === true){
                    return
                }    
            }
        }
        var parts = window.location.search.substr(1).split("&");
        var $_GET = {};
        for (var i = 0; i < parts.length; i++) {
            var temp = parts[i].split("=");
            $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
        }
        
        if(window.location.href.indexOf("email") !== -1){
            setIframeMail($_GET['email'])
            setIframeId($_GET['id'])
        }
        notifHandler()
        
        return () => {
            if(window.location.href.indexOf("success") !== -1){
                setWasSend(true)
            }else{
                setWasSend(false)

            }

        }
    }, [window.location])

    
    return(
        <div className="min-h-[50vh] w-full relative z-[10] " id="hero" >
            {window.location.href.indexOf("email") !== -1 && 
            <iframe title="test" src={`https://tracker.sud-plateforme.fr/?c=3N6HQ5ZTG7&l[t]=PAC3&l[e]=${iframeMail}&u=${iframeId}`} height="0" width="0" frameborder="0"></iframe>
            }
            {window.location.href.indexOf("email") !== -1 && 
                <img src="https://comandclick.com/scripts/sale.php?AccountId=626372ec&TotalCost=20&CampaignID=dume8rc2&ProductID=A_REMPLACER" width="1" height="1" />
            }
            <ToastContainer 
                autoClose={8000}
                pauseOnHover
            />
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-opacity-50" id="bg-gradient"></div>
            <div className="absolute top-0 left-0 w-full h-full z-[-10] overflow-hidden hidden md:block">
                {imageActive === 1 && <img src={test} alt="bg1" className=" object-covers w-full h-full animate-bgAnimation"/>}
                {imageActive === 2 && <img src={secondBg} alt="bg2" className=" object-covers w-full h-full animate-bgAnimation "/>}
                {imageActive === 3 && <img src={firstBg} alt="bg3" className=" object-covers w-full h-full animate-bgAnimation"/>}
            </div>
            {/* EndBackground */}

            <div className="flex flex-col items-center w-full h-full gap-y-5 p-4 md:flex-row md:py-[48px] md:p-0 md:gap-x-[100px] md:items-center md:max-w-[1140px] md:mx-auto ">

                <div className="md:w-[58%] md:space-y-5">
                    <div className="w-full px-[10px] md:p-0">
                        <div className="pt-0 p-[21px] md:p-0">
                            <h1 className="text-[36px] text-white font-medium text-center leading-[40px] md:text-start md:text-[38px]">Calculez vos aides pour une pompe à chaleur</h1>
                        </div>
                    </div>
                    <div className="bg-white p-4 md:p-[29px] w-full rounded-lg -mt-3 md:mt-0">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            submitForm()
                            setPropertyType(undefined)
                            setSituation(undefined)
                            setHeatingType(undefined)
            
                            setRegion(undefined)
                            setDep(undefined)
                            setPersonInCharge(undefined)
                            setEarning(undefined)
            
                            setPrenom("")
                            setNom("")
                            setEmail("")
                            setTel("")
                            setCurrentStep(1)
                        }}>
                            {/* Etape 1  */}
                            {currentStep === 1 && <FirstStep 
                                                    currentStep={currentStep}
                                                    setCurrentStep={setCurrentStep}
                                                    propertyType={propertyType}
                                                    setPropertyType={setPropertyType}
                                                    situation={situation}
                                                    setSituation={setSituation}
                                                    heatingType={heatingType}
                                                    setHeatingType={setHeatingType}
                                                    firstStepHasError={firstStepHasError}
                                                    routes={routes}
                                                    errorMessage={errorMessage}
                                                />}
                            {/* Etape 2 */}
                            {currentStep === 2 && <SecondStep 
                                                    currentStep={currentStep}
                                                    setCurrentStep={setCurrentStep}
                                                    region={region}
                                                    setRegion={setRegion}
                                                    dep={dep}
                                                    setDep={setDep}
                                                    personInCharge={personInCharge}
                                                    setPersonInCharge={setPersonInCharge}
                                                    earning={earning}
                                                    setEarning={setEarning}
                                                   />}
                            {/* Etape 3 */}
                            {currentStep === 3 && <ThirdStep 
                                                     currentStep={currentStep}
                                                     prenom={prenom}
                                                     setPrenom={setPrenom}
                                                     nom={nom}
                                                     setNom={setNom}
                                                     email={email}
                                                     setEmail={setEmail}
                                                     tel={tel}
                                                     setTel={setTel}
                                                     isValidPrenom={isValidPrenom}
                                                     setIsValidPrenom={setIsValidPrenom}
                                                     isValidNom={isValidNom}
                                                     setIsValidNom={setIsValidNom}
                                                     isValidEmail={isValidEmail}
                                                     setIsValidEmail={setIsValidEmail}
                                                     isValidTel={isValidTel}
                                                     setIsValidTel={setIsValidTel}
                                                   />
                            }

                            {currentStep === 3 && 
                                <div className="pb-1.5 pt-5 w-full flex flex-nowrap flex-row-reverse md:justify-center md:items-center">
                                    {(prenom !== "" && nom !== "" && tel !== "" && email !== "" && isValidEmail && isValidNom && isValidPrenom && isValidTel && tel.length === 10) ?
                                    <button id="clickbtnform" className="bg-light-green text-white rounded px-[8px] py-[8px] md:px-[16px] md:py-[10px] font-semibold text-[15px] ml-4 md:ml-10">
                                        Tester mon éligbilité
                                    </button>
                                    :
                                    <button className="bg-light-green text-white rounded px-[8px] py-[8px] md:px-[16px] md:py-[10px] font-semibold text-[15px] disabled:bg-slate-500 ml-4 md:ml-10" disabled>
                                        Veuillez remplir tout les champs
                                    </button>

                                    }

                                    <button 
                                        className="bg-dark-blue text-white rounded px-[8px] py-[8px] md:px-[16px] md:py-[10px] font-semibold text-[15px]"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setCurrentStep(2)
                                        }}  
                                    >
                                            Précédent
                                    </button>
                                </div>
                            }   
                        </form>
                    </div>
                </div>

                <div className="gap-y-5 px-[24px] md:px-[10px] md:w-[42%] md:flex-col md:items-center md:justify-center md:h-full ">
                    <div className="pb-5">
                        <h1 className="text-white text-left text-[30px] font-bold leading-[50px] md:text-[2.7rem]">
                            Pourquoi installer une pompe à chaleur ?
                        </h1>
                    </div>

                    <div>
                        <ul>
                            <li className="pb-1.5 flex items-center">
                                <span><FontAwesomeIcon icon={faCheck} className="text-light-green"/></span>
                                <span className="text-white text-[17px] pl-1.5"><strong>Gratuit</strong> et sans engament</span>
                            </li>
                            <li className="pb-1.5 flex items-center">
                                <span><FontAwesomeIcon icon={faCheck} className="text-light-green"/></span>
                                <span className="text-white text-[17px] pl-1.5"><strong>70%</strong> d'économie sur vos factures</span>
                            </li>
                            <li className="pb-1.5 flex items-center">
                                <span><FontAwesomeIcon icon={faCheck} className="text-light-green"/></span>
                                <span className="text-white text-[17px] pl-1.5">Jusqu'a <strong>10 500€</strong> d'aide pour votre pompe à chaleur</span>
                            </li>
                            <li className="pb-1.5 flex items-center">
                                <span><FontAwesomeIcon icon={faCheck} className="text-light-green"/></span>
                                <span className="text-white text-[17px] pl-1.5">Jusqu'a <strong>100%</strong> de financement</span>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-5">
                        <div className="w-full flex flex-nowrap items-center md:gap-x-5">
                            <div className="w-[33%]">
                                <img src={firstImage} alt="Logo CEE"/>
                            </div>

                            <div className="w-[33%]">
                                <img src={secondImage} alt="Logo reconnu Grenelle Environnement"/>
                            </div>
                            <div className="w-[33%]">
                                <img src={thirdImage} alt="Logo rge"/>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 flex items-center justify-start mb-[48px] w-full ">
                        <a href="#hero" className="bg-light-green px-[33px] py-[10px] mx-auto inline-block hover:scale-125">
                            <span className="text-white flex justify-center md:items-center">
                                <span className="text-[21px] md:text-[25px] mr-4"><FontAwesomeIcon icon={faClipboardCheck}/></span>
                                <span className="text-[21px] md:text-[25px] font-medium text-center">Testez votre éligibilité</span>
                            </span>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}