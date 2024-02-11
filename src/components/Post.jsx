import React from "react";
import PencileFullIcon from "./icons/PencileFullIcon";
import TrashFullIcon from "./icons/TrashFullIcon";

const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{content}</td>
      <td>
        <button className="btn btn-primary btn-sm me-2 post-btn-edit" onClick={() => editPost(id)}>
          <PencileFullIcon />
        </button>
        <button className="btn btn-danger btn-sm  post-btn-delete" onClick={() => deletePost(id)}>
          <TrashFullIcon />
        </button>
      </td>
    </tr>
  );
};
export default Post;
