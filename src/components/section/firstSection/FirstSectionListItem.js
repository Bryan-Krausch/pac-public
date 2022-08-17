import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FirstSectionListItem({boldText,text}){
    return(
        <li className="flex items-center pb-3 text-left align-baseline">
            <span className="text-light-green text-[25px]"><FontAwesomeIcon icon={faCheckSquare}/></span>
            <span className="pl-4 text-dark-blue text-[17px] leading-[25.5px] text-left">
                <b>{boldText}</b>
                {text}
            </span>
        </li>
    )
}