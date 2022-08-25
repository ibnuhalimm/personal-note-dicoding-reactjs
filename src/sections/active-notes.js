import React from 'react';
import NoteList from '../notes/note-list';
import EmptyMessage from '../notes/empty-message';
import { NoteItem, NoteContent, NoteTitle, NoteDate, NoteBody, NoteAction } from '../notes/note-item';
import DeleteButton from '../notes/delete-button';
import ArchiveButton from '../notes/archive-button';

export default function ActiveNotes({ notes, onClickDeleteButton, onClickArchiveButton }) {
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
                    <ArchiveButton
                      onClick={onClickArchiveButton}/>
                  </NoteAction>
                </NoteItem>
              )
            )}
          </NoteList>
        : <EmptyMessage/>
    );
}

