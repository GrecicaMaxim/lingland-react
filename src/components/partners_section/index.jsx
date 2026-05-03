import PartnerLogo from "@/components/partner_logo";
import mapping_data from "@/mapping_data.json";

const partners_logos = mapping_data.partners_logos;

export default function PartnersSection() {
    return (
        <div className="partners-section">
            <h2>Our partners and contributors</h2>
            <p>We've helped over 100 companies including</p>
            <div className="partners">
                {partners_logos.map((n) => (
                    <PartnerLogo
                        key={n.id}
                        source={n.Source}
                        w={n.Width}/>
                ))}
            </div>
        </div>
    );
}