import React from 'react';
import './App.css';
import SectionTitle from './sections/section-title';
import { getInitialData } from './utils';
import ActiveNotes from './sections/active-notes';
import ArchiveNotes from './sections/archive-notes';
import NoteModel from './utils/note-model';

class App extends React.Component {
  initialTitleLength = 10;

  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      maxLengthTitle: this.initialTitleLength,
      titleLengthLeft: this.initialTitleLength,
      note: {
        title: '',
        body: ''
      }
    };
  }

  onChangeTitleNoteHandler = (e) => {
    let currentLength = typeof(e.target.value) !== null
      ? e.target.value.length
      : 0;

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

    this.setState((state, props) => ({
      notes: [...state.notes, NoteModel(state.note.title, state.note.body)],
      note: {
        title: '',
        body: ''
      },
      titleLengthLeft: this.initialTitleLength
    }));
  }

  deleteNoteHandler = () => {
    alert('Delete this note');
  }

  archiveNoteHandler = () => {
    alert('Archive this note');
  }

  makeActiveNoteHandler = () => {
    alert('Make active this note');
  }

  render() {
    const activeNotes = this.state.notes.filter(note => {
      return note.archived === false;
    });

    const archiveNotes = this.state.notes.filter(note => {
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
              placeholder="Cari catatan" />
          </div>
        </header>
        <main className="note-app__body">

          <div className="note-input">
            <SectionTitle>
              Buat Catatan
            </SectionTitle>
            <form onSubmit={this.saveNoteHandler}>
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
          <ActiveNotes
            notes={activeNotes}
            onClickDeleteButton={this.deleteNoteHandler}
            onClickArchiveButton={this.archiveNoteHandler}/>

          <SectionTitle>
            Arsip
          </SectionTitle>
          <ArchiveNotes
            notes={archiveNotes}
            onClickDeleteButton={this.deleteNoteHandler}
            onClickMakeActiveButton={this.makeActiveNoteHandler}/>
        </main>
      </>
    );
  }
}

export default App;
