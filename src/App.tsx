import React, { useState } from "react";
import { useSpeech } from "react-text-to-speech";

export default function CustomSpeechComponent() {
  // State to store user input
  const [userText, setUserText] = useState("This library is awesome!");

  const { Text, speechStatus, isInQueue, start, pause, stop } = useSpeech({
    text: userText,
  });

  // Handle input changes
  const handleTextChange = (e) => {
    setUserText(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Text to Speech</h2>

      {/* Input field for user text */}
      <textarea
        value={userText}
        onChange={handleTextChange}
        placeholder="Enter text to be spoken..."
        style={{
          padding: "10px",
          minHeight: "100px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {/* Display the text */}
      <div
        style={{
          margin: "10px 0",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        <Text />
      </div>

      {/* Control buttons */}
      <div style={{ display: "flex", columnGap: "0.5rem" }}>
        {speechStatus !== "started" ? (
          <button
            onClick={start}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Start
          </button>
        ) : (
          <button
            onClick={pause}
            style={{
              padding: "8px 16px",
              backgroundColor: "#FFC107",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Pause
          </button>
        )}
        <button
          onClick={stop}
          style={{
            padding: "8px 16px",
            backgroundColor: "#F44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Stop
        </button>
      </div>

      {/* Status indicator */}
      <div style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
        Status: {speechStatus || "idle"}
      </div>
    </div>
  );
}
