import CommentCard from "@/components/comment_card/page";
import Rating from '@mui/material/Rating';

export default function TrustLearners() {
    return (
        <div className="trust-learners">
            <h2>We have an enormous community of 50 million learners which trust us</h2>
            <div className="comment-collection">
                <CommentCard>
                    <div className="comment">
                        <h3 className="comment-title">Perfect Solution in perfect time</h3>
                        <p className="comment-text">
                            I had a 100% satisfaction experience with lingland team. My problem was resolved in 48h as I said.
                        </p>
                    </div>
                    <div className="user-info">
                        <Rating name="user-rating" value={5} readOnly/>
                        <p className="user"><span className="username">Joa, </span>22 October</p>
                    </div>
                </CommentCard>
                <CommentCard>
                    <div className="comment">
                        <h3 className="comment-title">This website is easy to ...</h3>
                        <p className="comment-text">The website is easy to access and navigate.</p>
                    </div>
                    <div className="user-info">
                        <Rating name="user-rating" value={5} readOnly/>
                        <p className="user"><span className="username">Mari, </span>22 October</p>
                    </div>
                </CommentCard>
                <CommentCard>
                    <div className="comment">
                        <h3 className="comment-title">Best support</h3>
                        <p className="comment-text">
                            I write to LingLand often and always get a good response. My most recent experience was with Katya. She was super helpful and kind. She got extra help for me as my question was complicated. Then she followed up.
                        </p>
                    </div>
                    <div className="user-info">
                        <Rating name="user-rating" value={5} readOnly/>
                        <p className="user"><span className="username">Kathrine, </span>14 October</p>
                    </div>
                </CommentCard>
                <CommentCard>
                    <div className="comment">
                        <h3 className="comment-title">Outstanding support</h3>
                        <p className="comment-text">
                            My problem was solved within one day. The support is responding to my questions very fast. Super!
                        </p>
                    </div>
                    <div className="user-info">
                        <Rating name="user-rating" value={5} readOnly/>
                        <p className="user"><span className="username">Abby, </span>14 October</p>
                    </div>
                </CommentCard>
                <CommentCard>
                    <div className="comment">
                        <h3 className="comment-title">A new customer and so far very good</h3>
                        <p className="comment-text">
                            A new customer and so far, impressed with the course, and the speedy response to my technical questions.
                        </p>
                    </div>
                    <div className="user-info">
                        <Rating name="user-rating" value={5} readOnly/>
                        <p className="user"><span className="username">Mark, </span>11 October</p>
                    </div>
                </CommentCard>
                <CommentCard>
                    <div className="comment">
                        <h3 className="comment-title">Way better than Duolingo</h3>
                        <p className="comment-text">
                            In the last three days, I have learned more Italian on LingLand than on Duolingo for months. The lessons (I can speak only for lower A1-A2 levels) are very well structured and there is plenty of vocabulary to explore.
                        </p>
                    </div>
                    <div className="user-info">
                        <Rating name="user-rating" value={5} readOnly/>
                        <p className="user"><span className="username">Simona Marinova, </span>9 October</p>
                    </div>
                </CommentCard>
                <CommentCard>
                    <div className="comment">
                        <h3 className="comment-title">The best learning language app out there</h3>
                        <p className="comment-text">
                            I have tried out several Language Learning Apps over the years (like Duolingo, Babbel and so on). LingLand is definitely my favorite so far. Great pace to the learning progression without being too repetitive!
                        </p>
                    </div>
                    <div className="user-info">
                        <Rating name="user-rating" value={5} readOnly/>
                        <p className="user"><span className="username">Edgar Tomson, </span>5 October</p>
                    </div>
                </CommentCard>
                <div className="more">
                    <p>and 11K+ more</p>
                </div>
            </div>
        </div>
    );
}