import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
    return (
        <footer>
            <div className="newsletter">
                <div className="join-text">
                    <h3>Join our newsletter</h3>
                    <p>We'll send you a nice letter once per week. No spam.</p>
                </div>
                <div className="search-email">
                    <TextField className="email-bar" label=""/>
                    <a href="#">Subscribe</a>
                </div>
            </div>
            <div className="menu">
                <div className="menu-part">
                    <h4>Learn languages online</h4>
                    <ul>
                        <li><a href="#">Learn English online</a></li>
                        <li><a href="#">Learn German online</a></li>
                        <li><a href="#">Learn French online</a></li>
                        <li><a href="#">Learn Spanish online</a></li>
                        <li><a href="#">Learn Italian online</a></li>
                        <li><a href="#">Learn Chinese online</a></li>
                    </ul>
                </div>
                <div className="menu-part">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Premium</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="support.html">Support</a></li>
                    </ul>
                </div>
                <div className="menu-part">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Partnership</a></li>
                        <li><a href="#">Get hired</a></li>
                    </ul>
                </div>
                <div className="menu-part">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Licenses</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </div>
            </div>
            <Divider orientation="horizontal" flexItem sx={{color: "#81aef8", width: "100%"}} />
            <div className="bottom-footer">
                <div className="rights">
                    <p><i className="fa-regular fa-copyright"></i>2024 LingLand LTD</p>
                </div>
                <div className="social-media">
                    <a className="brands" href="https://www.facebook.com" target="_blank"><FacebookIcon /></a>
                    <a className="brands" href="https://www.twitter.com" target="_blank"><XIcon /></a>
                    <a className="brands" href="https://www.instagram.com" target="_blank"><InstagramIcon /></a>
                    <a className="brands" href="https://www.telegram.org" target="_blank"><TelegramIcon /></a>
                    <a className="brands" href="https://www.github.com" target="_blank"><GitHubIcon /></a>
                    <a className="brands" href="https://www.youtube.com" target="_blank"><YouTubeIcon /></a>
                </div>
            </div>
        </footer>
    );
}