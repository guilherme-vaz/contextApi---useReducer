import { useContext } from 'react'
import { AppContext } from '../Context/Appstate';

const PostItem = ({ post: { title, id, body } }) => {
    const { deletePost } = useContext(AppContext)
    return (
        <li>
            <h2>{title}</h2>
            <p>{body}</p>
            <div>
                <i className='fas fa-edit'></i>
                <i className='fas fa-trash' onClick={() => deletePost(id)}></i>
            </div>
        </li>
    );
};

export default PostItem;
