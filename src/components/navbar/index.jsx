'use client';
import Image from "next/image";
import { styled } from "@mui/system";

const NavigationBar = styled("div")({
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 800,
    boxShadow: '0px 7px 7px rgba(32, 32, 32, 0.4)',
    position: 'fixed',
    zIndex: 2,
    top: 0,
    right: 0,
});

const NavButtons = styled("ul")({
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
    height: 70,
    width: 450,
});

const LearnButton = styled("a")({
    background: 'linear-gradient(45deg, rgb(90, 9, 125), rgb(188, 84, 253))',
    color: 'white',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 'bold',
    padding: '10px 40px',
    borderRadius: 25,
    cursor: 'pointer',
});

const SignIn = styled("a")({
    color: 'rgb(67, 139, 255)',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 'bold',
    padding: '7px 40px',
    border: '3px solid rgb(67, 139, 255)',
    borderRadius: 25,
    cursor: 'pointer',
});

export default function NavBar() {
    return (
        <NavigationBar>
            <Image
                src="/site_logo.png"
                width={204}
                height={60}
                alt="Site Logo"
            />
            <div>
                <NavButtons>
                    <li><LearnButton>Learn for free</LearnButton></li>
                    <li><SignIn>Sign in</SignIn></li>
                </NavButtons>
            </div>
        </NavigationBar>
    );
}