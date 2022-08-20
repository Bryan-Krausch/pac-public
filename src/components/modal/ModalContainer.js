import CguModal from "./CguModal";
import ConfidentialModal from "./ConfidentialModal";
import LegalModal from "./LegalModal";



export default function ModalContainer({legalModal, setLegalModal, confidentialModal, setConfidentialModal, cgu, setCgu}){
    return(
        <div className="modal-container">
            {legalModal && <LegalModal legalModal={legalModal} setLegalModal={setLegalModal} setConfidentialModal={setConfidentialModal}/>}
            {confidentialModal && <ConfidentialModal confidentialModal={confidentialModal} setConfidentialModal={setConfidentialModal}/>}
            {cgu && <CguModal cgu={cgu} setCgu={setCgu} setConfidentialModal={setConfidentialModal}/>}
        </div>
    )
}