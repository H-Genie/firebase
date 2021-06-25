import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useFirestore } from '../modules/useFirestore';
import { updateComment, deleteComment } from '../modules/crudComment';

const Comments = () => {
    const comments = useFirestore()

    return (
        <>
            {comments.map(comment =>
                <div key={comment.id} style={{ display: 'flex', alignItems: 'center' }}>
                    <p>
                        · {comment.comment} ({comment.nickname}) {comment.date}
                    </p>
                    <AiOutlineEdit
                        style={{ marginLeft: "10px" }}
                        onClick={() => updateComment(comment.id, comment.password, comment.comment)}
                    />
                    <AiOutlineDelete
                        onClick={() => deleteComment(comment.id, comment.password)}
                    />
                </div>
            )}
        </>
    )
}

export default Comments;