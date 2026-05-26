'use client';
import Image from "next/image";
import { styled } from "@mui/system";
import Link from 'next/link';

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
                    <li><Link className="learn-btn" href="/learn_for_free">Learn for free</Link></li>
                    <li><Link className="signin-btn" href="/sign_in">Sign in</Link></li>
                </NavButtons>
            </div>
        </NavigationBar>
    );
}