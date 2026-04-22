import Image from "next/image";

export default function PartnerLogo({source, w}) {
    return (
        <div className="partner-logo">
            <Image
            src={source}
            width={w}
            height={140}
            alt="Partner"/>
        </div>
    );
}