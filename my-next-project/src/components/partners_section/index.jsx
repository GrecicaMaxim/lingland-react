import PartnerLogo from "@/components/partner_logo";
import { fetchStrapi } from "@/lib/strapi";

const partners_logos = await fetchStrapi('/partner-logos?populate=*');

export default function PartnersSection() {
    return (
        <div className="partners-section">
            <h2>Our partners and contributors</h2>
            <p>We've helped over 100 companies including</p>
            <div className="partners">
                {partners_logos.map((n) => (
                    <PartnerLogo
                        key={n.id}
                        source={`${process.env.NEXT_PUBLIC_STRAPI_URL}${n.image_url.url}`}
                        w={n.width}/>
                ))}
            </div>
        </div>
    );
}