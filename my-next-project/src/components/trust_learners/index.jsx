import CommentCard from "@/components/comment_card";
import { fetchStrapi } from "@/lib/strapi";

const comment_cards = await fetchStrapi('/comment-cards?populate=*');

export default function TrustLearners() {
    return (
        <div className="trust-learners">
            <h2>We have an enormous community of 50 million learners which trust us</h2>
            <div className="comment-collection">
                {comment_cards.map((n) => (
                    <CommentCard
                        key={n.id}
                        title={n.title}
                        comment={n.comment}
                        user={n.user}
                        date={n.date}/>
                ))}
                <div className="more">
                    <p>and 11K+ more</p>
                </div>
            </div>
        </div>
    );
}