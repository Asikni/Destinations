import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%", 
  maxWidth: "100%", 
  maxHeight: "100%", 
  overflow: "auto", 
  zIndex: 2,
  backgroundColor: "#1E2126",
  padding: "20px",
  borderRadius: "10px", 

};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 2,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <button className="modalCrossButton"onClick={onClose}>&times; </button>
        {children}

      </div>
    </>,
    document.getElementById("portal")
  );
}
