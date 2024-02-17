import React from "react";

const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
}) => {
  return (
    <form className="container">
      <h5>Create New Post</h5>

      <input
        className="form-control"
        type="text"
        placeholder="title"
        ref={getTitle}
        onChange={saveTitleToState}
      />
      <br />
      <br />
      <textarea
        className="form-control"
        placeholder="content"
        ref={getContent}
        onChange={saveContentToState}
      ></textarea>

      <br />
      <br />

      <button className="btn btn-sm btn-success" onClick={savePost}> Create Post </button>
      &nbsp;
      <a href="./components/List.jsx" className="btn btn-sm btn-default">Cancel</a>
    </form>
  );
};

export default Create;
