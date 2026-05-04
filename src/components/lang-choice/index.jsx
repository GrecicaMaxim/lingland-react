'use client';
import LanguageOption from "../language-option";
import mapping_data from "@/mapping_data.json";
import { styled } from "@mui/system";

const language_option = mapping_data.lang_option;

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
        <LangChoice>
            <ChoiceH2>What language do you want to learn?</ChoiceH2>
            <LangList>
                {language_option.map((n) => (
                    <LanguageOption key={n.id} source={n.Source} name={n.Name}/>
                ))}
                <div></div>
                <LanguageOption source="/flag-saudi-arabia.png" name="Arabic"/>
                <LanguageOption source="/flag-turkey.png" name="Turkish"/>
                <div></div>
            </LangList>
        </LangChoice>
    );
}