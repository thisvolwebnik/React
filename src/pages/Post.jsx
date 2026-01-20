import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useEffect, useState } from "react";

export const Post = () => {
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    getPost(params.id);
  }, [params.id]);

  async function getPost(id) {
    const response = await PostService.getById(id);
    setPost(response.data);
  }

  if (!post) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <div>
        <p>{post.body}</p>
      </div>
    </>
  );
};
