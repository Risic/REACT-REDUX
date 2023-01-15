import PostStats from "./PostStats";



const PostItem = (props) => {

    const {
        author,
        avatar,
        nickname,
        postDate,
        text,
        postImage
    } = props;
    
    return (
        <div className="post-item" key={postDate}>
            <div className="post-avatar">
                <img src={avatar} alt="Avatar" />
            </div>
            <div className="post-main">
                <div className="post-author">
                    <div className="name">
                        <p>{author}</p>
                    </div>
                    <div className="nickname">
                        <p>{nickname}</p>
                    </div>
                    <div className="date">
                        <p>{postDate}</p>
                    </div>
                </div>
                <div className="post-text">
                    <p>{text}</p>
                </div>
                <div className="post-image">
                    <img src={postImage} alt="Picturep" />
                </div>
                <PostStats {...props}/>
            </div>
        </div>
    )
};

export default PostItem;