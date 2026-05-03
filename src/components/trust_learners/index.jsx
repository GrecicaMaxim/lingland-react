import CommentCard from "@/components/comment_card";
import mapping_data from "@/mapping_data.json";

const comment_cards = mapping_data.comment_cards;

export default function TrustLearners() {
    return (
        <div className="trust-learners">
            <h2>We have an enormous community of 50 million learners which trust us</h2>
            <div className="comment-collection">
                {comment_cards.map((n) => (
                    <CommentCard
                        key={n.id}
                        title={n.Title}
                        comment={n.Comment}
                        user={n.User}
                        date={n.Date}/>
                ))}
                <div className="more">
                    <p>and 11K+ more</p>
                </div>
            </div>
        </div>
    );
}