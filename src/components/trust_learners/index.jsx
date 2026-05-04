'use client';
import CommentCard from "@/components/comment_card";
import mapping_data from "@/mapping_data.json";
import { styled } from "@mui/system";

const comment_cards = mapping_data.comment_cards;

const Trust_Learners = styled("div")({
    backgroundColor: 'white',
    paddingTop: 70,
    paddingBottom: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const Heading = styled("h2")({
    fontSize: 50,
    marginBottom: 70,
    width: 1000,
    textAlign: 'center',
});

const CommentCollection = styled("div")({
    display: 'grid',
    gridTemplateColumns: '350px 350px 350px',
    gridTemplateRows: '300px 300px 350px',
    gap: 25,
});

const More = styled("div")({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const MoreText = styled("p")({
    fontSize: 25,
    color: 'rgb(142, 142, 142)',
});

export default function TrustLearners() {
    return (
        <Trust_Learners>
            <Heading>We have an enormous community of 50 million learners which trust us</Heading>
            <CommentCollection>
                {comment_cards.map((n) => (
                    <CommentCard
                        key={n.id}
                        title={n.Title}
                        comment={n.Comment}
                        user={n.User}
                        date={n.Date}/>
                ))}
                <More>
                    <MoreText>and 11K+ more</MoreText>
                </More>
            </CommentCollection>
        </Trust_Learners>
    );
}