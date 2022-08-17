import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

import circle from '../../assets/circle-regular.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RowItem({firstImg, firstTitle, firstLibelle, secondImg, secondTitle, secondValue, secondLibelle, value, setValueFunc}){
    return(
        <div className="px-1.5 w-full h-[138px] flex gap-x-4 align-middle rounded-lg md:px-1.5 md:py-0 md:h-[58px]">

            <div 
                className="w-2/4 h-full shadow-lg p-3 flex flex-col gap-y-1.5 md:flex-row md:items-center md:gap-x-1.5 md:p-[11px] md:gap-y-0 cursor-pointer"
                onClick={() => {
                    setValueFunc(firstLibelle)
                }}
            >
                <div><img src={firstImg} alt={firstTitle} width={31} height={31}/></div>
                <div className="text-dark-blue text-[14px] font-bold h-[97px] flex items-center grow">{firstTitle}</div>
                <div className="text-[21px]"> 
                    {/* Not Checked */}
                    {(value !== firstLibelle || value === undefined) && <div className="text-dark-blue"><img src={circle} alt="circle form" width={21} height={21}/></div>}
                    {/* Checked */}
                    {((value !== undefined) && value === firstLibelle) && <div className="text-light-green"><FontAwesomeIcon icon={faCircleDot}/></div>}
                </div>
            </div>

            <div 
                className="w-2/4 h-full shadow-lg p-3 flex flex-col gap-y-1.5 md:flex-row md:items-center md:gap-x-1.5 md:p-[11px] md:gap-y-0 md:mr-[48px] md:flex-nowrap md:justify-around cursor-pointer"
                onClick={() => {
                    setValueFunc(secondLibelle)
                }}
            >
                <div><img src={secondImg} alt={secondTitle} width={31} height={31}/></div>
                <div className="text-dark-blue text-[14px] font-bold h-[97px] flex items-center grow">{secondTitle}</div>
                <div className="text-[21px]"> 
                    {/* Not Checked */}
                    {(value !== secondLibelle || value === undefined) && <div className="text-dark-blue"><img src={circle} alt="circle form" width={21} height={21}/></div>}
                    {/* Checked */}
                    {((value !== undefined) && value === secondLibelle) && <div className="text-light-green "><FontAwesomeIcon icon={faCircleDot}/></div>}
                </div>
            </div>
        </div>
    )
}