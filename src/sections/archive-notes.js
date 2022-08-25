import React from 'react';
import NoteList from '../notes/note-list';
import EmptyMessage from '../notes/empty-message';
import { NoteItem, NoteContent, NoteTitle, NoteDate, NoteBody, NoteAction } from '../notes/note-item';
import DeleteButton from '../notes/delete-button';
import MakeActiveButton from '../notes/make-active-button';

export default function ArchiveNotes({ notes, onClickDeleteButton, onClickMakeActiveButton }) {
  return (
    notes.length > 0
      ? <NoteList>
          {notes.map((note) => (
              <NoteItem key={note.id}>
                <NoteContent>
                  <NoteTitle>
                    {note.title}
                  </NoteTitle>
                  <NoteDate>
                    {note.date}
                  </NoteDate>
                  <NoteBody>
                    {note.body}
                  </NoteBody>
                </NoteContent>
                <NoteAction>
                  <DeleteButton
                    onClick={onClickDeleteButton}/>
                  <MakeActiveButton
                    onClick={onClickMakeActiveButton}/>
                </NoteAction>
              </NoteItem>
            )
          )}
        </NoteList>
      : <EmptyMessage/>
  );
}

