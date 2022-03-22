import styled from "styled-components";

const LibListWrapper = styled.div`
  width: 70px;
  height: 93vh;
  padding: 1.3rem 0rem;
  border-right: 1px solid #ddd;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 1;

  li {
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    img {
      width: 40%;
      height: 50%;
      display: block;
      margin: 5px auto;
    }

    p {
      font-size: 10px;
      font-weight: 700;
    }
  }

  button {
    font-size: 1rem;
    font-weight: 600;
    width: 64px;
    height: 4rem;
  }

  button:hover {
    color: #e0de1b;
  }
`;

interface LibListProps {
  libIndex: number;
  libIdxHandler: (i: number) => void;
  listOpen: boolean;
  setListOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function LibraryList({
  libIndex,
  libIdxHandler,
  listOpen,
  setListOpen,
}: LibListProps) {
  const libstStyle: { [key: string]: React.CSSProperties } = {
    point: { backgroundColor: "#ffffd9" },
    notPoint: { backgroundColor: "transparent" },
  };

  const pStyle: { [key: string]: React.CSSProperties } = {
    point: { color: "#a3a000" },
    notPoint: { color: "#707070" },
  };

  const isTrue = (n: number) => libIndex === n && listOpen;

  return (
    <LibListWrapper>
      <ul>
        <li
          onClick={() => libIdxHandler(0)}
          style={isTrue(0) ? libstStyle.point : libstStyle.notPoint}
        >
          <img
            src={`./img/${isTrue(0) ? `uploadBtnPoint` : `uploadBtn`}.png`}
            alt="업로드"
          />
          <p style={isTrue(0) ? pStyle.point : pStyle.notPoint}>업로드</p>
        </li>
        <li
          onClick={() => libIdxHandler(1)}
          style={isTrue(1) ? libstStyle.point : libstStyle.notPoint}
        >
          <img
            src={`./img/${isTrue(1) ? `albumBtnPoint` : `albumBtn`}.svg`}
            alt="사진"
          />
          <p style={isTrue(1) ? pStyle.point : pStyle.notPoint}>사진</p>
        </li>
        <li
          onClick={() => libIdxHandler(2)}
          style={isTrue(2) ? libstStyle.point : libstStyle.notPoint}
        >
          <img
            src={`./img/${isTrue(2) ? `videoBtnPoint` : `videoBtn`}.svg`}
            alt="동영상"
          />
          <p style={isTrue(2) ? pStyle.point : pStyle.notPoint}>동영상</p>
        </li>
        <li
          onClick={() => libIdxHandler(3)}
          style={isTrue(3) ? libstStyle.point : libstStyle.notPoint}
        >
          <img
            src={`./img/${isTrue(3) ? `textBtnPoint` : `textBtn`}.svg`}
            alt="텍스트"
          />
          <p style={isTrue(3) ? pStyle.point : pStyle.notPoint}>텍스트</p>
        </li>
      </ul>
      <button onClick={() => setListOpen(!listOpen)}>
        {listOpen ? "<<" : ">>"}
      </button>
    </LibListWrapper>
  );
}

export default LibraryList;
