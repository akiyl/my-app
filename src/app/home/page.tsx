"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Likes from "@/components/likes";
const Home = () => {
  const [likes, setlikes] = useState("");
  return (
    <>
      <h1>home</h1>
      <div>
        <div>
          <Likes />
          <div>
            <span>
              <img src="" alt="" />
            </span>
            <span>amyrobson</span> <span>1 month ago</span>
            <button> reply</button>
          </div>
          <div>
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You’ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </div>
        </div>{" "}
        <div>
          <Likes />
          <div>
            <span>
              <img src="" alt="" />
            </span>
            <span>maxblagun</span> <span>2 month ago</span>
            <button> reply</button>
          </div>
          <div>
            Woah, your project looks awesome! How long have you been coding for?
            I’m still new, but think I want to dive into React as well soon.
            Perhaps you can give me an insight on where I can learn React?
            Thanks!.
          </div>
        </div>
      </div>
      <section>
        <div>
          <span>
            <img src="" alt="" />
          </span>
          <input type="text" />
          <button>send</button>
        </div>
      </section>
    </>
  );
};
export default Home;
