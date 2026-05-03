import Rating from '@mui/material/Rating';

export default function CommentCard({title, comment, user, date}) {
    return (
        <div className="comment-card">
            <div className="comment">
                <h3 className="comment-title">{title}</h3>
                <p className="comment-text">{comment}</p>
            </div>
            <div className="user-info">
                <Rating name="user-rating" value={5} readOnly/>
                <p className="user"><span className="username">{user}, </span>{date}</p>
            </div>
        </div>
    );
}