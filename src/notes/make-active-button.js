import React from 'react';

export default function MakeActiveButton({ onClick }) {
  return (
    <button
      className="note-item__make-active-button"
      onClick={onClick}>
      Make Active
    </button>
  );
}
