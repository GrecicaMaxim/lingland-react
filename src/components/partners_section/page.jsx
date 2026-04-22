import PartnerLogo from "@/components/partner_logo/page";

export default function PartnersSection() {
    return (
        <div className="partners-section">
            <h2>Our partners and contributors</h2>
            <p>We've helped over 100 companies including</p>
            <div className="partners">
                <PartnerLogo
                    source="/nike-logo.png"
                    w={243}/>
                <PartnerLogo
                    source="/asana-logo.png"
                    w={212}/>
                <PartnerLogo
                    source="/wordpress-logo.png"
                    w={225}/>
                <PartnerLogo
                    source="/github-logo.png"
                    w={133}/>
                <PartnerLogo
                    source="/unilever-logo.png"
                    w={126}/>
                <PartnerLogo
                    source="/paypal-logo.png"
                    w={114}/>
                <PartnerLogo
                    source="/puma-logo.png"
                    w={140}/>
                <PartnerLogo
                    source="/android-logo.png"
                    w={140}/>
            </div>
        </div>
    );
}