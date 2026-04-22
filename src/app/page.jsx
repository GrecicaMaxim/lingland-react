import NavBar from "@/components/navbar/page";
import Header from "@/components/header/page";
import LanguageChoice from "@/components/lang-choice/page";
import Offers from "@/components/offers/page";
import TrustLearners from "@/components/trust_learners/page";
import PartnersSection from "@/components/partners_section/page";

export default function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <main>
                <LanguageChoice />
                <Offers />
                <TrustLearners />
                <PartnersSection />
            </main>
        </>
    );
}