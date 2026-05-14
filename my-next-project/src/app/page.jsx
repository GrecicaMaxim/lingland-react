import NavBar from "@/components/navbar";
import Header from "@/components/header";
import LanguageChoice from "@/components/lang-choice";
import Offers from "@/components/offers";
import TrustLearners from "@/components/trust_learners";
import PartnersSection from "@/components/partners_section";
import Footer from "@/components/footer";

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
            <Footer />
        </>
    );
}