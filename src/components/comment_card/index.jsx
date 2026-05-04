'use client';
import Rating from '@mui/material/Rating';
import { styled } from "@mui/system";

const Comment_Card = styled("div")({
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)',
    padding: '24px 35px',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

const Title = styled("h3")({
    marginBottom: 20,
});

const Comment = styled("div")({
    marginBottom: 20,
});

const UserInfo = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
});

const Username = styled("span")({
    fontWeight: 'bold',
});

export default function CommentCard({title, comment, user, date}) {
    return (
        <Comment_Card>
            <div className="comment">
                <h3 className="comment-title">{title}</h3>
                <p className="comment-text">{comment}</p>
            </div>
            <UserInfo>
                <Rating name="user-rating" value={5} readOnly/>
                <p className="user"><Username>{user}, </Username>{date}</p>
            </UserInfo>
        </Comment_Card>
    );
}