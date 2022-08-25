import React from 'react';

export default function DeleteButton({ onClick }) {
  return (
    <button
      className="note-item__delete-button"
      onClick={onClick}>
      Delete
    </button>
  );
}
