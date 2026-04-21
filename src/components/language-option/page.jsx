import Image from "next/image";

export default function LanguageOption({source, name}) {
    return (
        <a className="lang">
            <Image className="lang-img" src={source} width={100} height={100} alt="Country flag"/>
            <p className="lang-name">{name}</p>
        </a>
    );
}