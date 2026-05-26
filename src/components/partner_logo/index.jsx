'use client';
import Image from "next/image";
import { styled } from "@mui/system";

const Logo = styled("div")({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export default function PartnerLogo({source, w}) {
    return (
        <Logo>
            <Image
            src={source}
            width={w}
            height={140}
            alt="Partner"/>
        </Logo>
    );
}