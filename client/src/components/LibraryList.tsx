import styled from "styled-components";

const LibListWrapper = styled.ul`
  width: 64px;
  height: 100vh;
  border-right: 1px solid #ddd;

  li {
    width: 64px;
    height: 56px;
    text-align: center;
    border-right: 1px solid #ddd;
    padding: 5px 0;

    img {
      width: 45%;
      display: block;
      margin: 5px auto;
    }

    p {
      font-size: 11px;
    }
  }

  .pointing {
    background-color: #ffffed;
  }

  .notPointed {
    background-color: transparent;
  }

  button {
    position: absolute;
    bottom: 2rem;
    left: 0;
    background-color: transparent;
    font-size: 1.5rem;
    width: 64px;
  }
`;

function LibraryList({
  libraryChoice,
  library,
  listOpen,
  listOpenHandler,
}: any) {
  return (
    <LibListWrapper>
      <li
        onClick={() => libraryChoice("album")}
        className={library.album ? "pointing" : "notPointed"}
      >
        <img
          src={`./img/${library.album ? `albumBtnPoint` : `albumBtn`}.svg`}
          alt="사진"
        />
        <p>사진</p>
      </li>
      <li
        onClick={() => libraryChoice("video")}
        className={library.video ? "pointing" : "notPointed"}
      >
        <img
          src={`./img/${library.video ? `videoBtnPoint` : `videoBtn`}.svg`}
          alt="동영상"
        />
        <p>동영상</p>
      </li>
      <li
        onClick={() => libraryChoice("text")}
        className={library.text ? "pointing" : "notPointed"}
      >
        <img
          src={`./img/${library.text ? `textBtnPoint` : `textBtn`}.svg`}
          alt="텍스트"
        />
        <p>텍스트</p>
      </li>
      <button onClick={listOpenHandler}>{listOpen ? "<<" : ">>"}</button>
    </LibListWrapper>
  );
}

export default LibraryList;
