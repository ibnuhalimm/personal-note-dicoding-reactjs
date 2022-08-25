import React from 'react';

export function NoteItem({ children }) {
  return <div className="note-item">{children}</div>;
}

export function NoteContent({ children }) {
  return <div className="note-item__content">{children}</div>;
}

export function NoteTitle({ children }) {
  return <h3 className="note-item__title">{children}</h3>;
}

export function NoteDate({ children }) {
  return <p className="note-item__date">{children}</p>;
}

export function NoteBody({ children }) {
  return <p className="note-item__body">{children}</p>;
}

export function NoteAction({ children }) {
  return <p className="note-item__action">{children}</p>;
}
