import './App.css';
import Description from './components/Description';
import FirstContent from './components/FirstContent/FirstContent';
import Header from './components/Header';
import Hero from './components/Hero';
import FirstSection from './components/section/firstSection/FirstSection';
import SecondSection from './components/section/secondSection/SecondSection';
import atlantic from "./assets/partner/atlantic.png"
import bosh from "./assets/partner/bosh.svg"
import daikin from "./assets/partner/daikin.png"
import dietrich from "./assets/partner/dietrich.png"
import mitsubishi from "./assets/partner/mitsubishi.svg"
import {useState} from 'react'
import ModalContainer from './components/modal/ModalContainer';

function App({routes}) {
  const [legalModal, setLegalModal] = useState(false)
  const [confidentialModal, setConfidentialModal] = useState(false)
  const [cgu, setCgu] = useState(false)


  return (
    <div className="App">
      <ModalContainer legalModal={legalModal} setLegalModal={setLegalModal} confidentialModal={confidentialModal} setConfidentialModal={setConfidentialModal} cgu={cgu} setCgu={setCgu} />
      <Header />
      <main className='antialiased w-full h-full overflow-y-auto flex flex-col gap-y-5'>
        <Hero routes={routes}/>
        <Description />
        <FirstContent />
        <section className='p-4'>
          <FirstSection />
          <SecondSection />
        </section>
        <div className="w-full flex flex-col items-center gap-y-8 pb-[64px] md:flex-row md:gap-x-[67px] md:gap-y-0 md:max-w-[1140px] md:mx-auto">
              <div className="text-center max-w-full md:w-[20%]">
                  <img width={1848} height={674} src={atlantic} alt='atlantic' 
                  className="w-[45%] inline-block box-border align-middle grayscale md:w-full"
                  />
              </div>

              <div className="w-full text-center md:w-[20%]">
                  <img src={bosh} alt='bosh' className="w-[45%] inline-block box-border align-middle grayscale md:w-full"/>
              </div>

              <div className="w-full text-center md:w-[20%]">
                  <img src={daikin} alt='daikin' className="w-[45%] inline-block box-border align-middle grayscale md:w-full"/>
              </div>

                <div className="w-full text-center md:w-[20%]">
                  <img src={dietrich} alt='De dietrich' className="w-[45%] inline-block box-border align-middle grayscale md:w-full"/>
              </div>

              <div className="w-full text-center md:w-[20%]">
                  <img src={mitsubishi} alt='EdilKamin' className="w-[45%] inline-block box-border align-middle grayscale md:w-full"/>
              </div>

      </div>
      </main>
      <footer className='flex items-center justify-center py-8 border-t-[1px] border-dark-blue'>
        <ul className='flex flex-wrap w-full justify-center text-[16px] text-dark-blue font-semibold md:mx-auto'>
          <li className='px-[8px]'><button onClick={() => setLegalModal(true)}><span>Mentions légales</span></button></li>
          <li className='px-[8px]'><button onClick={() => setConfidentialModal(true)}><span>Politique de confidentialité</span></button></li>
          <li className='px-[8px]'><button onClick={() => setCgu(true)}><span>CGU</span></button></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
