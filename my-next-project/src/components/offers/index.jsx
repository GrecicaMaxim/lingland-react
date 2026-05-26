import OfferCard from "../offer_card";
import StairsIcon from '@mui/icons-material/Stairs';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import { fetchStrapi } from "@/lib/strapi";

function getOfferIcon(number) {
    const icons = [
        undefined,
        (<StairsIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        undefined,
        (<SupportAgentIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        undefined,
        (<SocialDistanceIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        undefined,
        (<LanguageIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        undefined,
        (<SchoolRoundedIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        undefined,
        (<MilitaryTechRoundedIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
    ];

    return icons[number - 1];
}

const offer_cards = await fetchStrapi('/offer-cards?populate=*');

export default function Offers() {
    return (
        <div className="why-lingland">
            <h2>What does LingLand provide for users?</h2>
            <div className="lingland-cards">
                {offer_cards.map((n) => (
                    <OfferCard key={n.id}>
                        {getOfferIcon(n.id)}
                        <h3>{n.heading}</h3>
                        <p>{n.description}</p>
                    </OfferCard>
                ))}
            </div>
        </div>
    );
}