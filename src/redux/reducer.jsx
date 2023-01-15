import { ADD_POST } from "./action";
import ANAKIN_IMAGE from '../images/Anakin.webp';
import RAY_IMAGE from '../images/Ray.jpg';

const POST = [
    {
        author: 'Anakin Skywalker',
        avatar: ANAKIN_IMAGE,
        nickname: '@dart_vader',
        postDate: '12.07.2022',
        text: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
        postImage: RAY_IMAGE,
        likes: 15,
        comments: 2,
        reposts: 4
    },
    {
        author: 'Sheev Palpatine',
        avatar: "https://static.wikia.nocookie.net/rustarwars/images/e/e2/Palpatine-CEUEEd.png",
        nickname: '@sith_lord',
        postDate: '12.07.2023',
        text: 'My dear',
        postImage: 'https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C31%2C1600%2C800',
        likes: 154,
        comments: 42,
        reposts: 43
    },
    {
        author: 'Yoda',
        avatar: 'https://static.wikia.nocookie.net/rustarwars/images/f/fd/Yoda_Rendezvous_cover.jpg',
        nickname: '@green_jedy',
        postDate: '28.12.2022',
        text: 'Call me Master',
        postImage: 'https://lumiere-a.akamaihd.net/v1/images/5f4e48ae7cc5a900014b2369-image_4957e309.jpeg?region=0%2C48%2C1536%2C768',
        likes: 1405,
        comments: 210,
        reposts: 486
    }
];

const initialState = {
    posts: POST
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const posts = [action.payload, ...state.posts]
            return {
                ...state,
                posts
            }
        default:
            return state;
    }
}