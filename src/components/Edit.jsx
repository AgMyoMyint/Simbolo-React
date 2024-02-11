import React from "react";

const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
}) => {
  return (
    <>
      <form>
        <h1>Edit Post</h1>
        <input
          type="text"
          defaultValue={title}
          onChange={saveTitleToState}
          placeholder="title"
        />
        <br />
        <br />
        <textarea
          placeholder="contents"
          onChange={saveContentToState}
          defaultValue={content}
        ></textarea>
        <br />
        <br />
        <button onClick={updatePost}>Update Post</button>
      </form>
    </>
  );
};
export default Edit;
