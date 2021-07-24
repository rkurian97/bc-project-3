import React, {useEffect} from "react";
import SocialSideMenu from "../components/SocialSideMenu";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_MY_FRIENDS } from "../utils/queries";
import ReviewCard from "../components/ReviewCard";

const FriendPosts = () => {
    const { data } = useQuery(QUERY_MY_FRIENDS);
    console.log(data)
    const userData = data?.me.friends || {};
    
    useEffect(() => {
    }, [])

    return (
        <div className="h-screen w-screen flex bg-gray-200">
            <SocialSideMenu />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-gray-200">
                {
                    userData?.[0] && userData.map(friend => (
                        friend.reviews.map((review, _index) => (
                            <ReviewCard
                                key={_index}
                                gameTitle={review.gameTitle}
                                reviewText={review.reviewText}
                                username={friend.username}
                                videoGameId={review.videoGameId}
                                rating={review.rating}
                                createdAt={review.createdAt}
                                profile={false}
                            />

                        ))
                    ))
                }
            </div>
        </div>
    );
};

export default FriendPosts;