'use client';
import Image from "next/image";
import { styled } from "@mui/system";

const Language = styled("a")({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    textDecoration: 'none',
    color: 'black',
});

const LanguageName = styled("p")({
    fontSize: 22
});

export default function LanguageOption({source, name}) {
    return (
        <Language>
            <Image className="lang-img" src={source} width={100} height={100} alt="Country flag"/>
            <LanguageName>{name}</LanguageName>
        </Language>
    );
}