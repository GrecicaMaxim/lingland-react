'use client';
import Image from "next/image";
import { styled } from "@mui/system";
import mapping_data from "@/mapping_data.json";

const langs = mapping_data.learn_for_free_languages;

const LearnForFreeBody = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30
});

const LanguageGrid = styled("div")({
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px 200px',
    gridTemplateRows: '150px 150px 150px 150px',
    marginTop: 70,
    marginBottom: 50,
    gap: 30
});

const LanguageCard = styled("div")({
    border: '2px solid #89abc5',
    borderRadius: 26,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
});

const LanguageTitle = styled("p")({
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 'bold'
});

const LanguageUsers = styled("p")({
    backgroundColor: '#d6edff',
    color: '#89abc5',
    fontWeight: 'bold',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    textAlign: 'center'
});

export default function LearnForFree() {
    return (
        <LearnForFreeBody>
            <h1>Which language do you want to learn?</h1>
            <LanguageGrid>
                {langs.map((n) => (
                    <LanguageCard key={n.id}>
                        <Image src={n.Source} width={50} height={50} alt={n.Name} sx={{filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.3))'}}/>
                        <LanguageTitle>{n.Name}</LanguageTitle>
                        <LanguageUsers align="center">{n.Users} users</LanguageUsers>
                    </LanguageCard>
                ))}
            </LanguageGrid>
        </LearnForFreeBody>
    );
}