import React, { useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import ReviewSideMenu from "../components/ReviewSideMenu";
import { QUERY_ME } from "../utils/queries";
import ReviewCard from "../components/ReviewCard";

const Profile = () => {
    const { data } = useQuery(QUERY_ME);
    const userData = data?.me || {};

    useEffect(() => {

    }, [data]);
    return (
        <div className="h-screen w-screen flex bg-gray-200">
            <ReviewSideMenu />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {
                        data && userData.reviews.map(
                            (review, _index) => 
                                <ReviewCard
                                    key={_index}
                                    gameTitle={review.gameTitle}
                                    reviewText={review.reviewText}
                                    username={userData.username}
                                    videoGameId= {review.videoGameId}
                                    rating= {review.rating}
                                    createdAt= {review.createdAt}
                                    profile={true}
                                    id= {review._id}
                                />
                        )
                    }
            </div>
        </div>
    );
};

export default Profile;