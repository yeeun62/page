import styled from "styled-components";

const LibListWrapper = styled.div`
  width: 70px;
  height: 94vh;
  border-right: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

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
`;

function LibraryList({ setLibIndex, libIndex, listOpen, setListOpen }: any) {
  const listStyle: { [key: string]: React.CSSProperties } = {
    point: { backgroundColor: "#ffffed" },
    notPoint: { backgroundColor: "transparent" },
  };

  const pStyle: { [key: string]: React.CSSProperties } = {
    point: { color: "#e0de1b" },
    notPoint: { color: "#707070" },
  };

  return (
    <LibListWrapper>
      <ul>
        <li
          onClick={() => setLibIndex(0)}
          style={libIndex === 0 ? listStyle.point : listStyle.notPoint}
        >
          <img
            src={`./img/${libIndex === 0 ? `albumBtnPoint` : `albumBtn`}.svg`}
            alt="사진"
          />
          <p style={libIndex === 0 ? pStyle.point : pStyle.notPoint}>사진</p>
        </li>
        <li
          onClick={() => setLibIndex(1)}
          style={libIndex === 1 ? listStyle.point : listStyle.notPoint}
        >
          <img
            src={`./img/${libIndex === 1 ? `videoBtnPoint` : `videoBtn`}.svg`}
            alt="동영상"
          />
          <p style={libIndex === 1 ? pStyle.point : pStyle.notPoint}>동영상</p>
        </li>
        <li
          onClick={() => setLibIndex(2)}
          style={libIndex === 2 ? listStyle.point : listStyle.notPoint}
        >
          <img
            src={`./img/${libIndex === 2 ? `textBtnPoint` : `textBtn`}.svg`}
            alt="텍스트"
          />
          <p style={libIndex === 2 ? pStyle.point : pStyle.notPoint}>텍스트</p>
        </li>
      </ul>
      <button onClick={() => setListOpen(!listOpen)}>
        {listOpen ? "<<" : ">>"}
      </button>
    </LibListWrapper>
  );
}

export default LibraryList;
