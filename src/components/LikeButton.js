import React, {useState} from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    return (
        <button className={"button button-like" + (liked ? " liked" : "")}
                onClick={() => {
                    setLiked(!liked)
                }}>
            <span>Like</span>
        </button>
    )
};

export default LikeButton
