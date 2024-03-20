import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%", // Adjust the width of the modal as needed
  maxWidth: "100%", // Set a maximum width for responsiveness
  maxHeight: "100%", // Set a maximum height for responsiveness
  overflow: "auto", // Enable scrolling if content exceeds modal size
  zIndex: 1000,
  backgroundColor: "#1E2126",
  padding: "20px", // Add some padding for content spacing
  borderRadius: "10px", // Add rounded corners for aesthetic
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {children}
        <button onClick={onClose}>&times; </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
