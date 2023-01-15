import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/action';
import ANAKIN_IMAGE from '../images/Anakin.webp';

const AUTHORS = [
    {
        author: 'Anakin Skywalker',
        avatar: ANAKIN_IMAGE,
        nickname: '@dart_vader',
    },
    {
        author: 'Sheev Palpatine',
        avatar: "https://static.wikia.nocookie.net/rustarwars/images/e/e2/Palpatine-CEUEEd.png",
        nickname: '@sith_lord',
    },
    {
        author: 'Yoda',
        avatar: 'https://static.wikia.nocookie.net/rustarwars/images/f/fd/Yoda_Rendezvous_cover.jpg',
        nickname: '@green_jedy',
    }
]

const CreatePost  = () => {
    const [text, setText] = useState('');
    const [imgLink, setImgLink] = useState('');
    const [author, setAuthor] = useState('Anakin Skywalker');
    const selectedAuthor = AUTHORS.find((item) => item.author === author);

    const getCurrentDate = () => {
        const newDate = new Date();
        const date = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();

        return `${date}.${month < 10 ? `0${month}` : `${month}`}.${year}`
    }
    
    const dispatch = useDispatch();
    const onCreatePost = (event) => {
        event.preventDefault();
        dispatch(addPost({
            text,
            postImage: imgLink,
            ...selectedAuthor,
            postDate: getCurrentDate(),
            likes: 0,
            comments: 0,
            reposts: 0,
        }));
        // setAuthor('');
        setText('');
        setImgLink('');
    }
    return (
        <div className="create-post">
            <h1>Create  your post</h1>
            <form className="posts-form" onSubmit={onCreatePost}>
                <select className='author-select' name="authors" id="authors" 
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option className='author-option' value="Author" disabled>Author</option>
                    {AUTHORS.map((item, index) => {
                        return (
                            <option value={item.author} key={index}>
                                {item.author}
                            </option>
                        )
                    })}
                </select>
                <textarea
                    className='form-text'
                    type="text"
                    placeholder="Post text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    className='form-image-link'
                    type="url"
                    placeholder="Image link"
                    value={imgLink}
                    onChange={(e) => setImgLink(e.target.value)}
                />
                <button className='submit-button' type="submit" onClick={onCreatePost}>
                    Create
                </button>
            </form>
        </div>
    )
};

export default CreatePost;