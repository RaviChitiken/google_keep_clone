import React from "react";
import deleteIcon from "../deleteIcon.png";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="container mx-auto mx-0 px-0">
        <div className="row  mx-0">
          <div className="noteContent col-lg-6 col-md-8 col-10 my-3  p-1  m-auto">
            <h5 className="p-3 mb-0">{props.title}</h5>
            <p className="p-3 mb-0">{props.content}</p>
            <button
              className="btnDelete m-3"
              title="Delete Note"
              onClick={deleteNote}
            >
              <img className="deleteIcon" src={deleteIcon} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
