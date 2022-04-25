import React, { useState } from "react";
import "../src/styles.css";
import CreateNote from "./Components/CreateNote";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Note from "./Components/Note";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNotes = (note) => {
    setAddItem((previous) => {
      return [...previous, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currentData, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNotes} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
