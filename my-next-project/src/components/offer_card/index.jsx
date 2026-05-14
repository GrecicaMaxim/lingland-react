'use client';
import { styled } from "@mui/system";

const Card = styled("div")({
    color: '#861cb3',
    padding: '24px 35px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export default function OfferCard({children}) {
    return (
        <Card>
            {children}
        </Card>
    );
}