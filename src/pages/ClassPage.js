import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ClassPage.css";

function ClassPage() {
  const { classId } = useParams();
  const [selectedNote, setSelectedNote] = useState(null);

  // Sample notes with multiple video links
  const notesData = {
    "9": [
      {
        topic: "Introduction to Computer Fundamentals",
        noteLink: "https://drive.google.com/file/d/1mFVftOlm0mBrFz42wBLkRNYyTvFXOiAa/view?usp=sharing",
        videoLinks: [
          "https://www.youtube.com/watch?v=YxcTBB6_bws",
          "https://www.youtube.com/watch?v=yFSEf6TOzDQ",
        ]
      },
      {
        topic: "AI,ML ,Domains of AI ,Applications of AI",
        noteLink: "https://drive.google.com/file/d/1IsbMEuLMtgy8HUoH59UNE05JmFhTLc0b/view?usp=sharing",
        videoLinks: [
          "https://www.youtube.com/watch?v=ad79nYk2keg",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU",
        ]
      },
      {
        topic: "AI project life cycle & Types of Models",
        noteLink: "https://drive.google.com/file/d/1Icq3-QXQh5JX7vvVSHtesrqeMBqzlV2U/view?usp=drive_link",
        videoLinks: [
          "https://www.youtube.com/playlist?list=PLO7HHXt7m9Gz-PVdCbZLxvgzS682XBVJ5",
          "https://www.youtube.com/watch?v=bLak-_CnJTg"
        ]
      }
    ],
    "10": [
      {
        topic: "Getting started with computer fundamentals",
        noteLink: "https://drive.google.com/file/d/1ZEYanPg6guWLZxN6iFZiEahATXK555Nj/view?usp=sharing",
        videoLinks: ["https://www.youtube.com/watch?v=YxcTBB6_bws",
          "https://www.youtube.com/watch?v=IafPEfUfcGU"
        ]
      },
      {
        topic: "Introduction to operating System",
        noteLink: "https://drive.google.com/file/d/1_a7bL1V1GrFc7Dkct5uiVbNNCfuqCcbA/view?usp=sharing",
        videoLinks: ["https://www.youtube.com/watch?v=0ZjkUMKy6x0",
                    "https://www.youtube.com/watch?v=GDKIxBr6yhI"
        ]
      }
    ],
    "11": [
      {
        topic: "Getting started with computer fundamentals",
        noteLink: "https://drive.google.com/file/d/1ZEYanPg6guWLZxN6iFZiEahATXK555Nj/view?usp=sharing",
        videoLinks: ["https://www.youtube.com/watch?v=YxcTBB6_bws"]
      },
       {
        topic: "Introduction to AI (Unit1)",
        noteLink: "https://drive.google.com/file/d/1IsbMEuLMtgy8HUoH59UNE05JmFhTLc0b/view?usp=sharing",
        videoLinks: [
          "https://www.youtube.com/watch?v=ad79nYk2keg",
          "https://www.youtube.com/watch?v=ukzFI9rgwfU",
        ]
      },
       {
        topic: "Unit 1:All Done",
        noteLink: "https://drive.google.com/file/d/1VPWddMzvITdCLlt9WUoiiYrdwOZRRn0z/view?usp=drive_link",
        videoLinks: [
          "https://www.youtube.com/watch?v=1FZ0A1QCMWc",
          "https://www.youtube.com/watch?v=CMrHM8a3hqw",
        ]
      }
    ],
    "12": [
      {
        topic: "Getting started with computer fundamentals",
        noteLink: "https://drive.google.com/file/d/1ZEYanPg6guWLZxN6iFZiEahATXK555Nj/view?usp=sharing",
        videoLinks: ["https://www.youtube.com/watch?v=YxcTBB6_bws",
                    "https://www.youtube.com/watch?v=EGQh5SZctaE"
        ],
      },
      {
        topic: "Java Installation on windows,Mac",
        noteLink: "https://www.geeksforgeeks.org/linux-unix/download-install-java-windows-linux-macos/",
        videoLinks: ["https://www.youtube.com/watch?v=WGQN0HKGnu0",
                    "https://www.youtube.com/watch?v=wXotUgqOdh8"
        ],
      },
      {
        topic: "Building the foundation to learn Java",
        noteLink: "https://drive.google.com/file/d/1AiReeLO7th_LYmOh5zZ9cToR9qA6w9yr/view?usp=sharing",
        videoLinks: ["https://www.youtube.com/watch?v=YF59k3gZeb4",
                    "https://www.youtube.com/watch?v=D3DqJrlckbs"
        ],
      }
    ]
  };

  const classNotes = notesData[classId] || [];

  return (
    <div className="classpage-container">
      <h2>Class {classId} Notes</h2>
      <p>Below are topics, notes & video links. New content will be added daily.</p>

      <div className="notes-list">
        {classNotes.map((note, index) => (
          <div key={index} className="note-item">
            <h3>{note.topic}</h3>

            <div className="btn-group">
              <a href={note.noteLink} target="_blank" rel="noreferrer" className="btn">Download</a>

              {note.videoLinks.map((link, i) => (
                <a key={i} href={link} target="_blank" rel="noreferrer" className="btn watch">
                  Watch Video {i + 1}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedNote && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedNote.topic}</h2>
            <p>{selectedNote.content}</p>
            <button className="close-btn" onClick={() => setSelectedNote(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClassPage;
