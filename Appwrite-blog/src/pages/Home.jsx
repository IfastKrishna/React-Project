import React, { useEffect, useState } from "react";
import appwirteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwirteService.getAllPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  });
  if (posts.length === 0) {
    return (
      <Container>
        <div className="flex flex-wrap">
          <div className="p-3 w-full">
            <h1 className="text-3xl font-bold hover:text-gray-500">
              Login to read posts
            </h1>
          </div>
        </div>
      </Container>
    );
  }

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

export default Home;
