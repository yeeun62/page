import styled from "styled-components";

const LibListWrapper = styled.div`
  width: 70px;
  height: 93vh;
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

  button {
    font-size: 1.5rem;
    width: 64px;
    height: 4rem;
  }

  button:hover {
    color: #e0de1b;
  }
`;

function LibraryList({ libIdxHandler, libIndex, listOpen, setListOpen }: any) {
  const libstStyle: { [key: string]: React.CSSProperties } = {
    point: { backgroundColor: "#ffffed" },
    notPoint: { backgroundColor: "transparent" },
  };

  const pStyle: { [key: string]: React.CSSProperties } = {
    point: { color: "#e0de1b" },
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
