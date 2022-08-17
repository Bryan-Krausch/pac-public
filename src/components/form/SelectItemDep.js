import departement from "../../data/departement.json"

export default function SelectItemDep({title, region, setDep}){
    return(
        <div className="md:w-2/4">
            <div className=""><span className="text-dark-blue text-[17px] font-semibold tracking-wide">{title}</span><span className="text-light-green font-[17px] font-semibold">*</span></div>
            <div className="md:px-[5px]">
                <select className="py-[8px] px-[16px] w-full border-[1px] border-dark-blue" onChange={(e) => {setDep(e.target.value)}}>
                    {(region === undefined || region === "") && <option className="text-dark-blue" value={""} defaultValue>-- Sélectionner --</option>}
                    {(region !== undefined && region !== "") && Object.values(departement[region]).map((dep) => (
                        <option className="text-dark-blue" value={dep.code}>{`${dep.code} - ${dep.libelle}`}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}