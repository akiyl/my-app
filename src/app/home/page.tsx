"use client";
import * as React from "react";
import { useState } from "react";
import Likes from "@/components/likes";
import AddComment from "@/components/comments";
import { comment } from "postcss";

const Home = () => {
  const [textData, setTextData] = useState<any>("");
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const handleDataId = (commentId: any) => {
    setReplyingTo(commentId);
  };

  const handleComments = (e: any) => {
    setTextData(e.target.value);
  };

  const handleReplyText = (e: any) => {
    setReplyText(e.target.value);
  };

  const handleReply = (commentId: any) => {
    // Handle the reply data as needed, e.g., save the reply text and the commentId
    setReplyingTo(null); // Close the reply input
    setReplyText(""); // Clear the reply text
  };

  const comments = [
    {
      id: 1,
      username: "amyrobson",
      text: "Impressive! Though it seems the drag feature could be improved...",
    },
    {
      id: 2,
      username: "maxblagun",
      text: "Woah, your project looks awesome! How long have you been coding for?...",
    },
    // Add more comments here
  ];

  return (
    <>
      <h1>home</h1>
      <div>
        <AddComment textData={textData} />
        {comments.map((comment) => (
          <div key={comment.id}>
            <Likes />
            <div>
              <span>
                <img src="" alt="" />
              </span>
              <span>1 month ago</span>
              <button onClick={() => handleDataId(comment.id)}>reply</button>
            </div>
            <div>{comment.text}</div>
            {replyingTo === comment.id && (
              <div>
                <div>
                  <span>
                    <img src="" alt="" />
                  </span>
                  {/* Display username */}
                </div>
                <form onSubmit={() => handleReply(comment.id)}>
                  <textarea
                    value={`@${comment.username} `}
                    onChange={handleReplyText}
                    className="text-black"
                  ></textarea>
                  <button className="bg-white text-black p-1 rounded-sm my-1">
                    send
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
      <section>
        <div>
          <span>
            <img src="" alt="" />
          </span>
          <form onSubmit={}>
            <input onChange={handleComments} className="text-black"></input>
            <button className="bg-white text-black p-1 rounded-sm my-1">
              Post Comment
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
