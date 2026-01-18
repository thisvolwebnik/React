import { Button } from "./UI/button/Button";

export const PostItem = (props) => {
  const { id, title, body, number, removePost } = props;

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__action">
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
