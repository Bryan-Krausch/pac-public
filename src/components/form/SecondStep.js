import SelectItemDep from "./SelectItemDep";
import revenu from "../../data/revenu.json";
import { useEffect, useState } from "react";
import circle from "../../assets/circle-regular.svg";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "../ProgressBar";
import { numberWithSpaces } from "../../libs/numberWithSpaces";
import axios from "axios";

export default function SecondStep({
  currentStep,
  setCurrentStep,
  region,
  setRegion,
  dep,
  setDep,
  personInCharge,
  setPersonInCharge,
  earning,
  setEarning,
}) {
  const [earningChoice, setEarningChoice] = useState(undefined);
  const [earningResult, setEarningResult] = useState();
  const [excludedDepartement, setExcludedDepartement] = useState();
  const [departementHasError, setDepartementHasError] = useState();

  useEffect(() => {
    const getExcludedDepartement = async (state, setState) => {
      await axios
        .get("https://api.pac.optineo.info/getDepartementPac")
        .then((res) => {
          setState(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getExcludedDepartement(excludedDepartement, setExcludedDepartement);
  }, []);

  useEffect(() => {
    if (excludedDepartement && dep) {
      const depIsExclude = excludedDepartement.find(el => el.code === dep)
      if(depIsExclude === undefined) {
        return setDepartementHasError(false)
      } else {
        return setDepartementHasError(true) 
      };
    }
    setDepartementHasError(false);
  }, [dep]);

  const onChange = (e) => {
    if (e.target.value === "") {
      setDep(undefined);
      setRegion(undefined);
    } else {
      setRegion(e.target.value);
    }
  };

  const handleUnderEarning = (e) => {
    setEarningChoice("under");
  };

  const handleAboveEarning = (e) => {
    setEarningChoice("above");
  };

  useEffect(() => {
    if (region !== undefined && personInCharge !== undefined) {
      let result = revenu[region][personInCharge];
      setEarningResult(result);
      if (earningChoice === "under") {
        let string = `Moins de ${result}`;
        setEarning(string);
      }
      if (earningChoice === "above") {
        let string = `Plus de ${result}`;
        setEarning(string);
      }
    }
  }, [personInCharge, region, earningChoice]);

  return (
    <div id="step-2" className="text-start flex flex-col gap-y-1.5">
      <div className="pb-1.5 flex items-center justify-around">
        <span className="text-light-green text-[30px] font-semibold tracking-wide">
          2/3
        </span>
        <ProgressBar completed={66} />
      </div>

      <div className="row pb-1.5 gap-y-1.5 md:flex w-full">
        <div className="md:w-2/4">
          <div>
            <span className="text-dark-blue text-[17px] font-semibold tracking-wide ">
              R??gion
            </span>
            <span className="text-light-green font-[17px] font-semibold">
              *
            </span>
          </div>
          <div>
            <select
              className="py-[8px] px-[16px] w-full border-[1px] border-dark-blue md:px-[5px]"
              onChange={onChange}
              defaultValue={region ? region : ""}
            >
              <option className="text-dark-blue" value={""}>
                -- S??lectionner --
              </option>
              <option className="text-dark-blue" value={"inParis"}>
                ??le de France
              </option>
              <option className="text-dark-blue" value={"outOfParis"}>
                Hors ??le de France
              </option>
            </select>
          </div>
        </div>
        <SelectItemDep
          title={"D??partement"}
          region={region}
          setDep={setDep}
          excludedDepartement={excludedDepartement}
        />
      </div>

      <div className="row">
        <div>
          <div>
            <span className="text-dark-blue text-[17px] font-semibold tracking-wide">
              Nombre de personnes ?? charge
            </span>
            <span className="text-light-green font-[17px] font-semibold">
              *
            </span>
          </div>
          <div>
            <select
              className="py-[8px] px-[16px] w-full border-[1px] border-dark-blue"
              defaultValue={personInCharge ? personInCharge : 0}
              onChange={(e) => {
                let value = parseInt(e.target.value);
                setPersonInCharge(value + 1);
              }}
            >
              <option className="text-dark-blue" value={0}>
                1
              </option>
              <option className="text-dark-blue" value={1}>
                2
              </option>
              <option className="text-dark-blue" value={2}>
                3
              </option>
              <option className="text-dark-blue" value={3}>
                4
              </option>
              <option className="text-dark-blue" value={4}>
                5
              </option>
              <option className="text-dark-blue" value={5}>
                6
              </option>
              <option className="text-dark-blue" value={6}>
                7
              </option>
              <option className="text-dark-blue" value={7}>
                8
              </option>
              <option className="text-dark-blue" value={8}>
                9
              </option>
              <option className="text-dark-blue" value={9}>
                10
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <span className="text-dark-blue text-[18px] font-semibold tracking-wide text-start md:py-1.5">
            ?? combien s?????l??ve le revenu total de votre foyer fiscal ?
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-8 md:flex-row md:gap-x-3 md:py-1.5">
          <div
            className="w-full border-[1px] border-dark-blue flex flex-col items-center justify-center gap-y-4 py-3 rounded md:gap-y-2 cursor-pointer"
            onClick={handleUnderEarning}
          >
            {earningResult === undefined ? (
              <span className="text-[19px] text-dark-blue font-semibold">
                Moins de 19 074???
              </span>
            ) : (
              <span className="text-[19px] text-dark-blue font-semibold">{`Moins de ${numberWithSpaces(
                earningResult
              )}???`}</span>
            )}

            {/* Not Checked */}
            {(earning === undefined ||
              earning === `Plus de ${earningResult}`) && (
              <div className="text-light-green">
                <img src={circle} alt="circle form" width={24} height={24} />
              </div>
            )}
            {/* Checked */}
            {earning === `Moins de ${earningResult}` && (
              <div className="text-light-green text-[16px]">
                <FontAwesomeIcon icon={faCircleDot} />
              </div>
            )}
          </div>

          <div
            className="w-full border-[1px] border-dark-blue flex flex-col items-center justify-center gap-y-4 py-3 rounded md:gap-y-2 cursor-pointer"
            onClick={handleAboveEarning}
          >
            {earningResult === undefined ? (
              <span className="text-[19px] text-dark-blue font-semibold">
                Plus de 19 074???
              </span>
            ) : (
              <span className="text-[19px] text-dark-blue font-semibold">{`Plus de ${numberWithSpaces(
                earningResult
              )}???`}</span>
            )}
            {/* Not Checked */}
            {(earning === undefined ||
              earning === `Moins de ${earningResult}`) && (
              <div className="text-light-green">
                <img src={circle} alt="circle form" width={24} height={24} />
              </div>
            )}
            {/* Checked */}
            {earning === `Plus de ${earningResult}` && (
              <div className="text-light-green text-[16px]">
                <FontAwesomeIcon icon={faCircleDot} />
              </div>
            )}
          </div>
        </div>
        {departementHasError && (
          <div>
            <p className="text-red-500 font-semibold text-center">
              D??sol?? , votre d??partement n'est pas ??ligible.
            </p>
          </div>
        )}
      </div>

      <div className="pb-1.5 pt-5 space-x-2  md:mt-6">
        <button
          className="bg-dark-blue text-white rounded px-[16px] py-[8px] font-semibold text-[17px]"
          onClick={(e) => {
            e.preventDefault();
            setCurrentStep(1);
          }}
        >
          Pr??c??dent
        </button>
        {region &&
        dep &&
        (personInCharge || personInCharge === 0) &&
        earning &&
        departementHasError === false ? (
          <button
            className="bg-light-green text-white rounded px-[16px] py-[8px] font-semibold text-[17px]"
            onClick={(e) => {
              e.preventDefault();
              setCurrentStep(3);
            }}
          >
            Suivant
          </button>
        ) : (
          <button
            className="bg-light-green text-white rounded px-[16px] py-[8px] font-semibold text-[17px] disabled:bg-slate-500"
            onClick={(e) => {
              e.preventDefault();
              setCurrentStep(3);
            }}
            disabled
          >
            Veuillez remplir tout les champs
          </button>
        )}
      </div>
    </div>
  );
}
