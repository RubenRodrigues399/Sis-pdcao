import Footer from "../../Componentes/Footer";
import NavBar from "../../Componentes/NavBarIn";
import Stats from "../../Componentes/Stats";

export default function DashboardPC(){
    return(
        <>
            <NavBar />
            <div className="bg-blue-50">
                <div className="">
                    <p className="p-10">
                        Dashboard do Pessoal Clinico
                    </p>
                    
                        <Stats />
                </div>
            </div>
            <Footer />
        </>
    )
}