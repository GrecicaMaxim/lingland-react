import OfferCard from "../offer_card/page";
import StairsIcon from '@mui/icons-material/Stairs';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';

export default function Offers() {
    return (
        <div className="why-lingland">
            <h2>What does LingLand provide for users?</h2>
            <div className="lingland-cards">
                <OfferCard>
                    <StairsIcon sx={{width: 80, height: 80, mb: 45, color: "#861cb3"}}/>
                    <h3>Learning step by step</h3>
                    <p>
                        Learning foreign languages is like riding a bike: the more you actively practice, the better you get at it.
                    </p>
                </OfferCard>
                <OfferCard>
                    <SupportAgentIcon sx={{width: 80, height: 80, mb: 45, color: "#861cb3"}}/>
                    <h3>24 hour full support</h3>
                    <p>LingLand supporters are online 24/7 for helping you everytime you want.</p>
                </OfferCard>
                <OfferCard>
                    <SocialDistanceIcon sx={{width: 80, height: 80, mb: 45, color: "#861cb3"}}/>
                    <h3>Speaking training</h3>
                    <p>
                        Live Lessons with certified teachers improve speaking confidence and develop fluency. Choose Private Lessons or Live Group Lessons.
                    </p>
                </OfferCard>
                <OfferCard>
                    <LanguageIcon sx={{width: 80, height: 80, mb: 45, color: "#861cb3"}}/>
                    <h3>Learning anytime and anywhere</h3>
                    <p>
                        LingLand allows you to learn a bunch of new words, no matter where you are: at the park, in the restaurant or home.
                    </p>
                </OfferCard>
                <OfferCard>
                    <SchoolRoundedIcon sx={{width: 80, height: 80, mb: 45, color: "#861cb3"}}/>
                    <h3>Travelling and testing your knowledge</h3>
                    <p>
                        Expand you vocabulary for adventures abroad, as well as to prepare for international exams, such as IELTS, TOEFL etc.
                    </p>
                </OfferCard>
                <OfferCard>
                    <MilitaryTechRoundedIcon sx={{width: 80, height: 80, mb: 45, color: "#861cb3"}}/>
                    <h3>Quick progress</h3>
                    <p>
                        Customised AI-enabled revision tools that help each learner meet their daily goals and develop long-term practise habits.
                    </p>
                </OfferCard>
            </div>
        </div>
    );
}