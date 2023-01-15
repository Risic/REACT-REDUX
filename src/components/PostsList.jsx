import { useSelector } from 'react-redux'
import CreatePost from "./CreatePost";
import PostItem from './PostItem';

const PostsList = () => {
    const posts = useSelector ((state) => state.posts)
    return (
        <div className="posts-wrapper">
            <CreatePost />
            <div className="posts-list">
                {posts.map((post, index) => (
                    <PostItem key={index} {...post}/>
                ))}
            </div>
        </div>
    )
};

export default PostsList;