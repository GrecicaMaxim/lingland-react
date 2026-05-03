import OfferCard from "../offer_card";
import StairsIcon from '@mui/icons-material/Stairs';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import mapping_data from "@/mapping_data.json";

function getOfferIcon(number) {
    const icons = [
        (<StairsIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        (<SupportAgentIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        (<SocialDistanceIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        (<LanguageIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        (<SchoolRoundedIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
        (<MilitaryTechRoundedIcon sx={{width: 80, height: 80, mb: 5, color: "#861cb3"}}/>),
    ];

    return icons[number - 1];
}

const offer_cards = mapping_data.offer_cards;

export default function Offers() {
    return (
        <div className="why-lingland">
            <h2>What does LingLand provide for users?</h2>
            <div className="lingland-cards">
                {offer_cards.map((n) => (
                    <OfferCard key={n.id}>
                        {getOfferIcon(n.id)}
                        <h3>{n.Heading}</h3>
                        <p>{n.Main}</p>
                    </OfferCard>
                ))}
            </div>
        </div>
    );
}