import React from 'react';

export default function ArchiveButton({ onClick }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={onClick}>
      Archive
    </button>
  );
}
