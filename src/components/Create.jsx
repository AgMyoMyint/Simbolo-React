import React from "react";

const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
}) => {
  return (
    <form>
      <h1>Create New Post</h1>

      <input
        type="text"
        placeholder="title"
        ref={getTitle}
        onChange={saveTitleToState}
      />
      <br />
      <br />
      <textarea
        placeholder="content"
        ref={getContent}
        onChange={saveContentToState}
      ></textarea>

      <br />
      <br />

      <button onClick={savePost}> Create Post </button>
    </form>
  );
};

export default Create;
