import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useEffect, useState } from "react";

function AllPost() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    appwriteService
      .getAllPost([])
      .then((posts) => {
        if (posts) {
          setPost(posts.documents);
        }
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap gap-3 justify-center">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
