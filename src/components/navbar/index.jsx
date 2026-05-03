import Image from "next/image";

export default function NavBar() {
    return (
        <div className="nav">
            <Image
                src="/site_logo.png"
                width={204}
                height={60}
                alt="Site Logo"
            />
            <div>
                <ul className="nav-buttons">
                    <li><a className="learn-btn">Learn for free</a></li>
                    <li><a className="signin-btn">Sign in</a></li>
                </ul>
            </div>
        </div>
    );
}