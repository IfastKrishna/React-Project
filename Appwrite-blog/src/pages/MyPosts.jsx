import appwiteService from "../appwrite/config";
import { PostCard, Container } from "../components/index.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwiteService.getAllPost().then((posts) => {
      if (posts) {
        const myPosts = posts.documents.filter(
          (post) => post.userId === userData.$id
        );
        setPosts(myPosts);
      }
    });
  }, []);
  return (
    <div className="w-full flex justify-center flex-wrap gap-4 p-8">
      {posts.map((post) => (
        <PostCard key={post.$id} {...post} />
      ))}
    </div>
  );
}

export default MyPosts;
