export default function PartnerLogo({source, w}) {
    console.log('source:', source, 'width:', w);
    return (
        <div className="partner-logo">
            <img
            src={source}
            width={w}
            height={140}
            alt="Partner"/>
        </div>
    );
}