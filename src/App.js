import React from 'react';
import './App.css';
import CreateNote from './sections/create-note';
import SectionTitle from './sections/section-title';
import { getInitialData } from './utils';
import ActiveNotes from './sections/active-notes';
import ArchiveNotes from './sections/archive-notes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData()
    };

    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.makeActiveNoteHandler = this.makeActiveNoteHandler.bind(this);
  }

  deleteNoteHandler() {
    alert('Delete this note');
  }

  archiveNoteHandler() {
    alert('Archive this note');
  }

  makeActiveNoteHandler() {
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
          <CreateNote/>

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
