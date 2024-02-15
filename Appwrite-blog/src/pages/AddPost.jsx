import React from "react";
import { PostForm, Container } from "../components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <div className="flex justify-center">
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
