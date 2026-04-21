import LanguageOption from "../language-option/page";

export default function LanguageChoice() {
    return (
        <div className="lang-choice">
            <h2>What language do you want to learn?</h2>
            <div className="lang-list">
                <LanguageOption source="/flag-uk.png" name="English" />
                <LanguageOption source="/flag-germany.png" name="German" />
                <LanguageOption source="/flag-france.png" name="French" />
                <LanguageOption source="/flag-spain.png" name="Spanish" />
                <LanguageOption source="/flag-russia.png" name="Russian" />
                <LanguageOption source="/flag-japan.png" name="Japanese" />
                <LanguageOption source="/flag-south-korea.png" name="Korean" />
                <LanguageOption source="/flag-italy.png" name="Italian" />
                <LanguageOption source="/flag-portugal.png" name="Portuguese" />
                <LanguageOption source="/flag-china.png" name="Chinese" />
                <LanguageOption source="/flag-poland.png" name="Polish" />
                <LanguageOption source="/flag-netherlands.png" name="Dutch" />
                <div></div>
                <LanguageOption source="/flag-saudi-arabia.png" name="Arabic" />
                <LanguageOption source="/flag-turkey.png" name="Turkish" />
                <div></div>
            </div>
        </div>
    );
}