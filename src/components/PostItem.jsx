import { Button } from "./UI/button/Button";
import { useNavigate } from "react-router-dom";

export const PostItem = (props) => {
  const { id, title, body, number, removePost } = props;
  const router = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__action">
        <Button onClick={() => router(`/posts/${id}`)}>Открыть пост</Button>
        <Button
          onClick={() => {
            removePost(id);
          }}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
