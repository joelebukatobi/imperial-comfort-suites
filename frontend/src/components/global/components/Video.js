export default function Video({ modal, closeModal }) {
  return (
    <div className={modal ? 'video' : 'hidden'}>
      <main>
        <svg
          onClick={() => {
            closeModal(false);
          }}
          className=""
        >
          <use href="/images/sprite.svg#icon-something" />
        </svg>
        <video src="/videos/file.mp4" controls autoPlay muted></video>
      </main>
    </div>
  );
}
