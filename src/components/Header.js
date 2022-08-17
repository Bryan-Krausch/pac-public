import headerIconeImage from '../assets/header-logo.svg'

export default function Header(){
    return(
        <header className="flex flex-col items-center w-full text-[16px] antialiased ">
            <div className='p-2 w-full flex flex-col justify-center gap-y-[40px] md:mx-auto md:max-w-[1140px] md:flex-row md:items-center md:justify-between'>
                <div className='flex w-full'>
                    <a href="https://pac.optineo.info/" className="w-full flex justify-center md:justify-start">
                        <img width={345} height={205} alt="logo optineo" src={headerIconeImage} className="w-[130px] h-[78px] img-header align-middle" />
                    </a>
                </div>
                <div className='w-full'>
                    <nav>
                        <ul className='flex justify-center gap-x-5 content-center flex-wrap text-blue-menu font-semibold md:justify-end'>
                            <a href="https://pac.optineo.info/"><li className="cursor-pointer">Accueil</li></a>
                            <li className="">Mon égibilité</li>
                            <li className="">Mes offres</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}