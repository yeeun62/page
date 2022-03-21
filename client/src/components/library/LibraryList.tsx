import styled from "styled-components";

const LibListWrapper = styled.div`
  width: 70px;
  height: calc(100vh - 6vh);
  border-right: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 1;

  li {
    width: 100%;
    height: 56px;
    text-align: center;
    padding: 5px 0;
    cursor: pointer;

    img {
      width: 45%;
      display: block;
      margin: 5px auto;
    }

    p {
      font-size: 10px;
      font-weight: 600;
    }
  }

  .pointing {
    background-color: #ffffed;
  }

  button {
    font-size: 1.5rem;
    width: 64px;
    height: 4rem;
  }
`;

function LibraryList({ libIndex, setLibIndex, listOpen, setListOpen }: any) {
  return (
    <LibListWrapper>
      <ul>
        <li
          onClick={() => {
            setLibIndex(0);
            setListOpen(true);
          }}
          className={libIndex === 0 ? "pointing" : "notPointed"}
        >
          <img
            src={`./img/${libIndex === 0 ? `albumBtnPoint` : `albumBtn`}.svg`}
            alt="사진"
          />
          <p>사진</p>
        </li>
        <li
          onClick={() => {
            setLibIndex(1);
            setListOpen(true);
          }}
          className={libIndex === 1 ? "pointing" : "notPointed"}
        >
          <img
            src={`./img/${libIndex === 1 ? `videoBtnPoint` : `videoBtn`}.svg`}
            alt="동영상"
          />
          <p>동영상</p>
        </li>
        <li
          onClick={() => {
            setLibIndex(2);
            setListOpen(true);
          }}
          className={libIndex === 2 ? "pointing" : "notPointed"}
        >
          <img
            src={`./img/${libIndex === 2 ? `textBtnPoint` : `textBtn`}.svg`}
            alt="텍스트"
          />
          <p>텍스트</p>
        </li>
      </ul>
      <button onClick={() => setListOpen(!listOpen)}>
        {listOpen ? "<<" : ">>"}
      </button>
    </LibListWrapper>
  );
}

export default LibraryList;
