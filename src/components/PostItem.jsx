export const PostItem = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>{post.description}</div>
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