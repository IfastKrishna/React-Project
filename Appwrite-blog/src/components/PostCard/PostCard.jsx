import React from "react";
import service from "../../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, content, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="relative h-[200px] w-[300px] rounded-md">
        <img
          src={service.getFilePreview(featuredImage)}
          alt={title}
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
