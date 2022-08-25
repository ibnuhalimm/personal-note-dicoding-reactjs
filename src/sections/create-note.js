import React from 'react';
import SectionTitle from './section-title';

export default function CreateNote({ maxTitleLength }) {
  return (
    <div className="note-input">
      <SectionTitle>
        Buat Catatan
      </SectionTitle>
      <form>
        <p className="note-input__title__char-limit">
          Sisa Karakter : {maxTitleLength}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Judul" />
        <textarea
          className="note-input__body"
          placeholder="Isi Catatan"></textarea>
        <button
          type="submit">Simpan Catatan</button>
      </form>
    </div>
  );
}
