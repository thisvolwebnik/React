export const PostItem = (props) => {
  const { title, description, number } = props;

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>
        <div>{description}</div>
      </div>
      <div className="post__action">
        <button type="button">Удалить</button>
      </div>
    </div>
  );
};
