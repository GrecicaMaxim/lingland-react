import NavBar from "@/components/navbar/page";
import Header from "@/components/header/page";
import LanguageChoice from "@/components/lang-choice/page";
import Offers from "@/components/offers/page"

export default function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <main>
                <LanguageChoice />
                <Offers />
            </main>
        </>
    );
}