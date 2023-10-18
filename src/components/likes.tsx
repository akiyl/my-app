import * as React from "react";
import { useState } from "react";
const Likes = () => {
  const [clicked, isClicked] = useState(false);
  const [like, setLikes] = useState(0);
  const addFunc = () => {
    if (like === 0) {
      setLikes(like + 1);
    } else {
      setLikes(like);
    }
  };
  const subFunc = () => {
    if (like === 0) {
      setLikes(like - 1);
    } else {
      setLikes(like);
    }
  };
  return (
    <>
      <div>
        <div>
          <button onClick={addFunc}>+</button>
          <span>{like}</span>
          <button onClick={subFunc}>-</button>
        </div>
      </div>
    </>
  );
};
export default Likes;
