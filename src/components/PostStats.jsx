import { useState } from 'react';
import commentIcon from '../images/stat-icon/comment.svg';
import likeIcon from '../images/stat-icon/like.svg';
import replytIcon from '../images/stat-icon/reply.svg';
import shareIcon from '../images/stat-icon/share.svg';

const PostStatsItem = ({icon, val}) => {
    const [reaction, setReaction] = useState(false);
    const [value, setValue] = useState(val);

    const reactionClick = () => {
        setReaction(!reaction)
        
        !reaction 
        ?
        setValue((count) => count + 1)
        :
        setValue((count) => count - 1)
    };

    const setValueBlock = () => {
        if (val !== null) {
            return (
                <div className="stat-value">
                    {value}
                </div>
            )
        }
    }

    return (
        <button onClick={reactionClick} className="stats-item">
            <div className="stat-icon">
                <img src={icon} alt="sd" />
            </div>
            {setValueBlock()}
        </button>
    )
}

const PostStats = (props) => {
    const {
        likes,
        comments,
        reposts
    } = props;

    return (
        <div className="post-stats">
            <PostStatsItem icon={commentIcon} val={comments} />
            <PostStatsItem icon={replytIcon} val={reposts} />
            <PostStatsItem icon={likeIcon} val={likes} />
            <PostStatsItem icon={shareIcon} val={null}/>
        </div>
    )
};

export default PostStats;