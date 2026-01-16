export const PostItem = (props) => {
  const { id, title, description } = props;

  return (
    <div className="post">
      <div className="post__content">
        <strong>{id}. {title}</strong>
        <div>{description}</div>
      </div>
      <div className="post__action">
        <button
          type="button"
        >
          Удалить
        </button>
      </div>
    </div>
  )
}