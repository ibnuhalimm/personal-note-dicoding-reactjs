import './App.css';

function App() {
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
          <h2>
            Buat Catatan
          </h2>
          <form>
            <p className="note-input__title__char-limit">
              Sisa Karakter : 100
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

        <h2>
          Catatan Aktif
        </h2>
        <div className="notes-list">
          <div className="note-item">
            <div className="note-item__content">
              <h3 className="note-item__title">
                Babel
              </h3>
              <p className="note-item__date">
                Kamis, 14 April 2022
              </p>
              <p className="note-item__body">
                Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
              </p>
            </div>
            <div className="note-item__action">
              <button className="note-item__delete-button">
                Delete
              </button>
              <button className="note-item__archive-button">
                Archive
              </button>
            </div>
          </div>
        </div>

        <h2>
          Catatan Aktif
        </h2>
        <p className="notes-list__empty-message">
          Tidak ada catatan
        </p>
      </main>
    </>
  );
}

export default App;
