import LanguageOption from "../language-option";
import mapping_data from "@/mapping_data.json";

const language_option = mapping_data.lang_option;

export default function LanguageChoice() {
    return (
        <div className="lang-choice">
            <h2>What language do you want to learn?</h2>
            <div className="lang-list">
                {language_option.map((n) => (
                    <LanguageOption source={n.Source} name={n.Name}/>
                ))}
                <div></div>
                <LanguageOption source="/flag-saudi-arabia.png" name="Arabic"/>
                <LanguageOption source="/flag-turkey.png" name="Turkish"/>
                <div></div>
            </div>
        </div>
    );
}