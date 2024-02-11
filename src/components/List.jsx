import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const getTitle = useRef();
  const getContent = useRef();

  const saveTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const saveContentToState = (e) => {
    setContent(e.target.value);
  };

  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreate();
  };

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const editPost = (id) => {
    setEditId(id);
    toggleEdit();
  };

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = posts.map((eachPost) => {
      if (eachPost.id === editId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setPosts(updatedPost);
    toggleEdit();
  };

  const deletePost = (id) => {
    const modifiedPost = posts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setPosts(modifiedPost);
  };

  if (isCreate)
  {
    return (
      <>
        <Create
          saveTitleToState={saveTitleToState}
          saveContentToState={saveContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
      </>
    );
  }
  else if (isEdit) 
  {
    const post = posts.find((post) => {
      return post.id === editId;
    });
    return (
      <Edit
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
      />
    );
  }
  return (
    <>
      <h2>All Posts</h2>
      {
      !posts.length ? 
      (
        <div>
          <h3>There is nothing to see here!</h3>
        </div>
      ) : 
      (
        posts.map((eachPost) => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
      )}

      <br />
      <br />
      <button onClick={toggleCreate}>Create New</button>
    </>
  );
};

export default List;
