import React, { useState } from "react";
import add from "../add.png";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  };

  const addNote = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const backToNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div
        className="col-9 px-0 text-center my-auto mx-auto"
        onDoubleClick={backToNormal}
      >
        <form onSubmit={addNote}>
          {expand ? (
            <input
              className="noteTitle p-3 my-3"
              onChange={handleChange}
              value={note.title}
              name="title"
              type="text"
              placeholder="Title"
              autoComplete="off"
              required
            />
          ) : null}
          <br />

          <textarea
            className="noteContent p-3"
            onClick={expandIt}
            onChange={handleChange}
            value={note.content}
            name="content"
            cols="25"
            rows="5"
            placeholder="Take a note..."
            required
          ></textarea>
          <br />
          {expand ? (
            <button className="btnAdd" type="submit" title="Add Note">
              <img className="addIcon" src={add} alt="icon" />
            </button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
