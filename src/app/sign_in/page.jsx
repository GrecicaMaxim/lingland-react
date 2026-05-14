'use client';
import Image from "next/image";
import { styled } from "@mui/system";
import Form from 'next/form';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignInBG = styled("div")({
    backgroundColor: '#b0c8f7',
    overflowY: 'hidden'
});

const SignBox = styled("div")({
    padding: 35,
    borderRadius: 15,
    backgroundColor: 'white',
    width: 400,
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '10px 10px 7px rgba(32, 32, 32, 0.4)'
});

const RegisterText = styled("div")({
    display: 'flex',
    marginTop: 30,
    marginBottom: 15,
    gap: 5
});

const ContinueBtn = styled("button")({
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    width: 330,
    borderRadius: 24,
    marginBottom: 8,
    backgroundColor: 'white',
    textAlign: 'center',
    border: '2px solid #d7d7d7'
});

const SignInForm = styled(Form)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 330
});

const ForgotPassword = styled("a")({
    marginBottom: 20
});

const SubmitBtn = styled("button")({
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    width: 150,
    borderRadius: 24,
    backgroundColor: 'rgb(83, 83, 218)',
    color: 'white',
    border: 'none',
    margin: '5px auto',
});

export default function SignIn() {
    return (
        <SignInBG>
            <SignBox>
                <h1>Sign in</h1>
                <RegisterText>
                    <p>Don't have an account? </p>
                    <Link href="/">Register</Link>
                </RegisterText>
                <ContinueBtn><GoogleIcon sx={{fontSize: '22px', marginRight: '15px'}}/>Continue with Google</ContinueBtn>
                <ContinueBtn><AppleIcon sx={{fontSize: '22px', marginRight: '15px'}}/>Continue with Apple</ContinueBtn>
                <ContinueBtn><FacebookIcon sx={{fontSize: '22px', marginRight: '15px'}}/>Continue with Facebook</ContinueBtn>
                <p>or</p>
                <SignInForm>
                    <p>Email</p>
                    <input type="email" style={{width: '100%'}}/>
                    <p>Password</p>
                    <input type="password" style={{width: '100%'}}/>
                    <ForgotPassword>Forgot your password?</ForgotPassword>
                    <SubmitBtn>Sign in</SubmitBtn>
                </SignInForm>
            </SignBox>
        </SignInBG>
    );
}