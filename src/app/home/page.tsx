"use client";
import * as React from "react";
import { useState } from "react";
import Likes from "@/components/likes";

const Home = () => {
  const [textData, setTextData] = useState<string | number>("");
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

  const addComment = () => {
    // Handle new comment submission
  };

  return (
    <>
      <h1>home</h1>
      <div>
        <section>
          <div>
            <span>
              <img src="" alt="" />
            </span>
            <form onSubmit={addComment}>
              <input
                type="text"
                onChange={handleComments}
                className="text-black"
              />
            </form>
            <button className="bg-white text-black p-1 rounded-sm my-1">
              send
            </button>
          </div>
        </section>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Likes />
            <div>
              <span>
                <img src="" alt="" />
              </span>
              <span>{comment.username}</span> <span>1 month ago</span>
              <button onClick={() => handleDataId(comment.id)}>reply</button>
            </div>
            <div>{comment.text}</div>
            {replyingTo === comment.id && (
              <div>
                <span>
                  <img src="" alt="" />
                </span>
                <span>{comment.username}</span> {/* Display username */}
                <form onSubmit={() => handleReply(comment.id)}>
                  <input
                    type="text"
                    value={replyText}
                    onChange={handleReplyText}
                    className="text-black"
                  />
                  <button className="bg-white text-black p-1 rounded-sm my-1">
                    send
                  </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
