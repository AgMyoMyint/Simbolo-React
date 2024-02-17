import React from "react";

const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
}) => {
  return (
    <form className="container">
      <h5 className="">Edit Post</h5>
      <input
        className="form-control"
        type="text"
        defaultValue={title}
        onChange={saveTitleToState}
        placeholder="title"
      />
      <br />
      <br />
      <textarea
        className="form-control"
        placeholder="contents"
        onChange={saveContentToState}
        defaultValue={content}
      ></textarea>
      <br />
      <br />
      <button onClick={updatePost} className="btn btn-sm btn-success">Update Post</button>
      &nbsp;
      <a href="./components/List.jsx" className="btn btn-sm btn-default">Cancel</a>
    </form>
  );
};
export default Edit;
