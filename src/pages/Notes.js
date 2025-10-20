import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

function Notes() {
  const classes = ["9", "10", "11", "12"];
  return (
    <div className="notes-container">
      <h2>Select Your Class</h2>
      <div className="classes-list">
        {classes.map((cls) => (
          <Link key={cls} to={`/notes/${cls}`} className="class-card">
            Class {cls}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Notes;
