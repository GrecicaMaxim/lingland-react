import Image from "next/image";

export default function Header() {
    return (
        <div className="header">
            <h1>New language, new opportunities, new you</h1>
            <p className="header-text">
                Get access to compact lessons from the experts and connect with a 
                community of native speakers to help you master words faster.
            </p>
            <div className="button-and-rating">
                <div className="rating-review">
                    <p className="rating-text">Reviews</p>
                    <h2 className="general-rating">4.0</h2>
                    <div className="stars">
                        <Image src="/star-full.png" width={35} height={35} alt="Rating"/>
                        <Image src="/star-full.png" width={35} height={35} alt="Rating"/>
                        <Image src="/star-full.png" width={35} height={35} alt="Rating"/>
                        <Image src="/star-full.png" width={35} height={35} alt="Rating"/>
                        <Image src="/star-empty.png" width={35} height={35} alt="Rating"/>
                    </div>
                    <p className="review">16,000+ reviews</p>
                </div>
                <a>Get started for free</a>
            </div>
        </div>
    );
}