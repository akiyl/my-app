import * as React from "react";
type AddCommentProps = {
  textData: string | number;
};
const AddComment: React.FC<AddCommentProps> = ({ textData }) => {
  return (
    <div>
      <div>
        <span>
          <img src="" alt="" />
        </span>
        <span>juliusomo</span> <span>just now</span>
        <div>
          <button> delete</button>
          <button> edit</button>
        </div>
      </div>
      <div>{textData}</div>
    </div>
  );
};
export default AddComment;
