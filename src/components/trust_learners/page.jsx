import CommentCard from "@/components/comment_card/page";

export default function TrustLearners() {
    return (
        <div className="trust-learners">
            <h2>We have an enormous community of 50 million learners which trust us</h2>
            <div className="comment-collection">
                <CommentCard
                    title="Perfect Solution in perfect time"
                    comment="I had a 100% satisfaction experience with lingland team. My problem was resolved in 48h as I said."
                    user="Joa"
                    date="22 October"/>
                <CommentCard
                    title="This website is easy to ..."
                    comment="The website is easy to access and navigate."
                    user="Mari"
                    date="22 October"/>
                <CommentCard
                    title="Best support"
                    comment="I write to LingLand often and always get a good response. My most recent experience was with Katya. She was super helpful and kind. She got extra help for me as my question was complicated. Then she followed up."
                    user="Kathrine"
                    date="14 October"/>
                <CommentCard
                    title="Outstanding support"
                    comment="My problem was solved within one day. The support is responding to my questions very fast. Super!"
                    user="Abby"
                    date="14 October"/>
                <CommentCard
                    title="A new customer and so far very good"
                    comment="A new customer and so far, impressed with the course, and the speedy response to my technical questions."
                    user="Mark"
                    date="11 October"/>
                <CommentCard
                    title="Way better than Duolingo"
                    comment="In the last three days, I have learned more Italian on LingLand than on Duolingo for months. The lessons (I can speak only for lower A1-A2 levels) are very well structured and there is plenty of vocabulary to explore."
                    user="Simona Marinova"
                    date="9 October"/>
                <CommentCard
                    title="The best learning language app out there"
                    comment="I have tried out several Language Learning Apps over the years (like Duolingo, Babbel and so on). LingLand is definitely my favorite so far. Great pace to the learning progression without being too repetitive!"
                    user="Edgar Tomson"
                    date="5 October"/>
                <div className="more">
                    <p>and 11K+ more</p>
                </div>
            </div>
        </div>
    );
}