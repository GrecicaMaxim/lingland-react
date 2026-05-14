'use client';
import OfferCard from "../offer_card";
import StairsIcon from '@mui/icons-material/Stairs';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import mapping_data from "@/mapping_data.json";
import { styled } from "@mui/system";

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

const WhyLingland = styled("div")({
    background: 'linear-gradient(60deg, #bc57e7, #aecdff)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 80,
});

const Heading = styled("h2")({
    color: '#861cb3',
    fontSize: 50,
    marginBottom: 70,
});

const Cards = styled("div")({
    display: 'grid',
    gridTemplateColumns: '400px 400px 400px',
    gap: 30,
});

const CardHeading = styled("h3")({
    fontSize: 30,
    marginBottom: 35,
    textAlign: 'center',
});

const CardText = styled("p")({
    fontSize: 20,
    textAlign: 'center',
});

const offer_cards = mapping_data.offer_cards;

export default function Offers() {
    return (
        <WhyLingland>
            <Heading>What does LingLand provide for users?</Heading>
            <Cards>
                {offer_cards.map((n) => (
                    <OfferCard key={n.id}>
                        {getOfferIcon(n.id)}
                        <CardHeading>{n.Heading}</CardHeading>
                        <CardText>{n.Main}</CardText>
                    </OfferCard>
                ))}
            </Cards>
        </WhyLingland>
    );
}