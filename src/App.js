import React from 'react';
import './App.css';
import SectionTitle from './sections/section-title';
import NoteList from './notes/note-list';
import { NoteItem, NoteContent, NoteTitle, NoteDate, NoteBody, NoteAction } from './notes/note-item';
import EmptyMessage from './notes/empty-message';
import DeleteButton from './notes/delete-button';
import ArchiveButton from './notes/archive-button';
import MakeActiveButton from './notes/make-active-button';
import { getInitialData, showFormattedDate } from './utils';
import NoteModel from './utils/note-model';

class App extends React.Component {
  initialTitleLength = 20;

  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
      maxLengthTitle: this.initialTitleLength,
      titleLengthLeft: this.initialTitleLength,
      note: {
        title: '',
        body: ''
      }
    };
  }

  onChangeTitleNoteHandler = (e) => {
    let currentLength = e.target.value.length;

    this.setState((state, props) => ({
      titleLengthLeft: state.maxLengthTitle - currentLength,
      note: {
        ...state.note,
        title: e.target.value.slice(0, state.maxLengthTitle)
      }
    }));
  }

  onChangeBodyNoteHandler = (e) => {
    this.setState((state, props) => ({
      note: {
        ...state.note,
        body: e.target.value
      }
    }));
  }

  saveNoteHandler = (e) => {
    e.preventDefault();

    if (this.state.note.title.trim() === '' || this.state.note.body.trim() === '') {
      return false;
    }

    this.setState((state, props) => ({
      notes: [...state.notes, NoteModel(state.note.title, state.note.body)],
      note: {
        title: '',
        body: ''
      },
      titleLengthLeft: this.initialTitleLength
    }));
  }

  deleteNoteHandler = (id) => {
    const existingNotes = this.state.notes.filter(note => {
      return note.id !== id;
    });

    this.setState((state, props) => ({
      notes: existingNotes
    }));
  }

  archiveNoteHandler = (id) => {
    const updatedNotes = this.state.notes.map(note =>
      note.id === id ? { ...note, archived: true } : note
    );

    this.setState((state, props) => ({
      notes: updatedNotes
    }));
  }

  makeActiveNoteHandler = (id) => {
    const updatedNotes = this.state.notes.map(note =>
      note.id === id ? { ...note, archived: false } : note
    );

    this.setState((state, props) => ({
      notes: updatedNotes
    }));
  }

  onChangeSearchHandler = (e) => {
    this.setState((state, props) => ({
      searchKeyword: e.target.value
    }));
  }

  render() {
    const activeNotes = this.state.notes.filter(note => {
      if (this.state.searchKeyword !== '') {
        return note.archived === false && note.title.toLowerCase().includes(this.state.searchKeyword);
      }

      return note.archived === false;
    });

    const archiveNotes = this.state.notes.filter(note => {
      if (this.state.searchKeyword !== '') {
        return note.archived === true && note.title.toLowerCase().includes(this.state.searchKeyword);
      }

      return note.archived === true;
    });

    return (
      <>
        <header className="note-app__header">
          <h1>
            Personal Note
          </h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Cari catatan"
              onChange={this.onChangeSearchHandler}
              value={this.state.searchKeyword}/>
          </div>
        </header>
        <main className="note-app__body">

          <div className="note-input">
            <SectionTitle>
              Buat Catatan
            </SectionTitle>
            <form onSubmit={(e) => this.saveNoteHandler(e)}>
              <p className="note-input__title__char-limit">
                Sisa Karakter : {this.state.titleLengthLeft}
              </p>
              <input
                type="text"
                className="note-input__title"
                placeholder="Judul"
                maxLength={this.state.maxLengthTitle}
                onChange={this.onChangeTitleNoteHandler}
                value={this.state.note.title}/>
              <textarea
                className="note-input__body"
                placeholder="Isi Catatan"
                onChange={this.onChangeBodyNoteHandler}
                value={this.state.note.body}
                />
              <button
                type="submit">Simpan Catatan</button>
            </form>
          </div>

          <SectionTitle>
            Catatan Aktif
          </SectionTitle>
          {activeNotes.length > 0
            ? <NoteList>
                {activeNotes.map((note) => (
                    <NoteItem key={note.id}>
                      <NoteContent>
                        <NoteTitle>
                          {note.title}
                        </NoteTitle>
                        <NoteDate>
                          {showFormattedDate(note.createdAt)}
                        </NoteDate>
                        <NoteBody>
                          {note.body}
                        </NoteBody>
                      </NoteContent>
                      <NoteAction>
                        <DeleteButton
                          onClick={() => this.deleteNoteHandler(note.id)}/>
                        <ArchiveButton
                          onClick={() => this.archiveNoteHandler(note.id)}/>
                      </NoteAction>
                    </NoteItem>
                  )
                )}
              </NoteList>
            : <EmptyMessage/>
          }

          <SectionTitle>
            Arsip
          </SectionTitle>
          {archiveNotes.length > 0
            ? <NoteList>
                {archiveNotes.map((note) => (
                    <NoteItem key={note.id}>
                      <NoteContent>
                        <NoteTitle>
                          {note.title}
                        </NoteTitle>
                        <NoteDate>
                          {showFormattedDate(note.createdAt)}
                        </NoteDate>
                        <NoteBody>
                          {note.body}
                        </NoteBody>
                      </NoteContent>
                      <NoteAction>
                        <DeleteButton
                          onClick={() => this.deleteNoteHandler(note.id)}/>
                        <MakeActiveButton
                          onClick={() => this.makeActiveNoteHandler(note.id)}/>
                      </NoteAction>
                    </NoteItem>
                  )
                )}
              </NoteList>
            : <EmptyMessage/>
          }
        </main>
      </>
    );
  }
}

export default App;
