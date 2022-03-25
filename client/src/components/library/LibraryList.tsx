import styled from "styled-components";
import { ListBundle } from "../../files/ListBundle";

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

const Li = styled.li<{ choice: boolean }>`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background: ${(props) => (props.choice ? "#ffffd9" : "none")};

  img {
    width: 40%;
    height: 50%;
    display: block;
    margin: 5px auto;
  }

  p {
    font-size: 10px;
    font-weight: 700;
    color: ${(props) => (props.choice ? "#a3a000" : "none")};
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
  const isTrue = (n: number) => libIndex === n && listOpen;

  return (
    <LibListWrapper>
      <ul>
        {ListBundle.map((list, index) => {
          return (
            <Li
              key={list.name}
              choice={isTrue(index)}
              onClick={() => libIdxHandler(index)}
            >
              <img
                src={isTrue(index) ? `${list.src}Point.png` : `${list.src}.png`}
                alt={list.name}
              />
              <p>{list.name}</p>
            </Li>
          );
        })}
      </ul>
      <button onClick={() => setListOpen(!listOpen)}>
        {listOpen ? "<<" : ">>"}
      </button>
    </LibListWrapper>
  );
}

export default LibraryList;
