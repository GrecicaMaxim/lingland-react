'use client';
import Image from "next/image";
import { styled } from "@mui/system";

const SupportForm = styled("form")({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 950,
    backgroundColor: 'white',
    boxShadow: '10px 10px 7px rgba(32, 32, 32, 0.4)',
    borderRadius: 15,
    margin: '50px auto',
    padding: 35,
});

const SendBtn = styled("button")({
    color: 'white',
    backgroundColor: 'rgb(134, 87, 208)',
    paddingTop: 15,
    paddingBottom: 15,
    width: 150,
    fontSize: 18,
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 24
});

const Pink = styled("div")({
    backgroundColor: "#e6c8fe",
    height: '100vh',
    margin: 0,
    overflowY: 'hidden'
});

export default function Support() {
    return (
        <Pink>
            <SupportForm>
                <p>Email address</p>
                <input type="email" style={{width: '100%', height: '30px'}}/>
                <p>Topic</p>
                <input type="text" style={{width: '100%', height: '30px'}}/>
                <p>Description</p>
                <input type="text" height={'100px'} style={{width: '100%', height: '200px'}}/>
                <p>Attached files</p>
                <input type="file"/>
                <SendBtn>Send</SendBtn>
            </SupportForm>
        </Pink>
    );
}