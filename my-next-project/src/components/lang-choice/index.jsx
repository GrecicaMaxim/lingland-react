'use client';
import LanguageOption from "../language-option";
import { styled } from "@mui/system";
import { fetchStrapi } from "@/lib/strapi";

const language_option = await fetchStrapi('/language-options?populate=*');

const LangChoice = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingTop: 70,
    paddingBottom: 80,
});

const ChoiceH2 = styled("h2")({
    fontSize: 50,
    marginBottom: 70,
});

const LangList = styled("div")({
    display: 'grid',
    gridTemplateColumns: '110px 110px 110px 110px',
    gap: '40px 100px',
});

export default function LanguageChoice() {
    return (
        <div className="lang-choice">
            <h2>What language do you want to learn?</h2>
            <div className="lang-list">
                {language_option.map((n) => (
                    <LanguageOption key={n.id}
                                    source={`${process.env.NEXT_PUBLIC_STRAPI_URL}${n.image.url}`}
                                    name={n.language_name}/>
                ))}
                <div></div>
                <LanguageOption source="/flag-saudi-arabia.png" name="Arabic"/>
                <LanguageOption source="/flag-turkey.png" name="Turkish"/>
                <div></div>
            </div>
        </div>
    );
}