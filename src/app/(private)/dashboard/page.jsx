import Footer from "@/components/Footer";
import NavBar from "@/components/NavBarIn";

export default function Dashboard(){
    return(
        <>
            <NavBar />
            <div className="bg-blue-50 py-24 sm:py-20">
                <p className="mt-0 text-center">
                    Dashboard Admin
                </p>
            </div>
            <Footer />
        </>
    )
}