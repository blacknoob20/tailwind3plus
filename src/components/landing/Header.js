import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';
import Quote from "@material-tailwind/react/Quote";

const Header = () => {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Prefectura del Guayas</H2>
                        <div className="text-gray-200">
                            <LeadText children color="gray-200">
                                «Guayas lo tiene todo. Somos la provincia de las oportunidades y donde la grandeza de nuestro territorio está en su gente. Acompáñame en el renacer de la provincia más productiva del Ecuador.»
                            </LeadText>
                            <Quote color="cyan" footer="#GuayasRenace con obras" cite="">
                                &nbsp;
                            </Quote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
