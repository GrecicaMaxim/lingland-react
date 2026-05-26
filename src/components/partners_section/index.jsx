'use client';
import PartnerLogo from "@/components/partner_logo";
import mapping_data from "@/mapping_data.json";
import { styled } from "@mui/system";

const partners_logos = mapping_data.partners_logos;

const Section = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 80,
});

const Heading = styled("h2")({
    fontSize: 50,
    marginTop: 40,
});

const Text = styled("p")({
    fontSize: 22,
    color: 'rgb(142, 142, 142)',
    marginTop: 15,
    marginBottom: 70,
});

const Partners = styled("div")({
    display: 'grid',
    gridTemplateColumns: '300px 300px 300px 300px',
    gridTemplateRows: '200px 200px',
    gap: 15,
});

export default function PartnersSection() {
    return (
        <Section>
            <Heading>Our partners and contributors</Heading>
            <Text>We've helped over 100 companies including</Text>
            <Partners>
                {partners_logos.map((n) => (
                    <PartnerLogo
                        key={n.id}
                        source={n.Source}
                        w={n.Width}/>
                ))}
            </Partners>
        </Section>
    );
}