'use client';
import Image from "next/image";
import { styled } from "@mui/system";

const HeaderDiv = styled("div")({
    marginTop: 80,
    height: 800,
    backgroundImage: 'url(/header-picture.jpg)',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const HeaderH1 = styled("h1")({
    color: 'white',
    fontSize: 72,
    marginBottom: 70,
    width: 1100,
    textAlign: 'center',
});

const HeaderText = styled("p")({
    color: 'white',
    fontSize: 35,
    marginBottom: 70,
    width: 1200,
    textAlign: 'center',
});

const GetStarted = styled("a")({
    color: 'black',
    background: 'linear-gradient(45deg, rgb(67, 139, 255), white, white)',
    textDecoration: 'none',
    fontSize: 30,
    fontWeight: 'bold',
    padding: '20px 100px',
    borderRadius: '40',
    cursor: 'pointer',
});

const ButtonAndRating = styled("div")({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
});

const RatingReview = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
});

const RatingText = styled("p")({
    color: 'white',
    fontSize: 26,
    marginBottom: 10,
});

const generalRating = styled("h2")({
    color: 'rgb(214, 162, 236)',
    fontSize: 95,
    fontWeight: 'bold',
});

const Stars = styled("div")({
    display: 'flex',
    gap: 7,
});

const Review = styled("p")({
    color: 'rgb(179, 179, 179)',
    fontSize: 20,
    marginTop: 6,
});

export default function Header() {
    return (
        <HeaderDiv>
            <HeaderH1>New language, new opportunities, new you</HeaderH1>
            <HeaderText>
                Get access to compact lessons from the experts and connect with a 
                community of native speakers to help you master words faster.
            </HeaderText>
            <ButtonAndRating>
                <RatingReview>
                    <RatingText>Reviews</RatingText>
                    <GeneralRating>4.0</GeneralRating>
                    <Stars>
                        <Image src="/star-full.png" width={35} height={35} alt="Rating"/>
                        <Image src="/star-full.png" width={35} height={35} alt="Rating"/>
                        <Image src="/star-full.png" width={35} height={35} alt="Rating"/>
                        <Image src="/star-full.png" width={35} height={35} alt="Rating"/>
                        <Image src="/star-empty.png" width={35} height={35} alt="Rating"/>
                    </Stars>
                    <Review>16,000+ reviews</Review>
                </RatingReview>
                <GetStarted>Get started for free</GetStarted>
            </ButtonAndRating>
        </HeaderDiv>
    );
}