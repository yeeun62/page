import styled from "styled-components";

const TextWrap = styled.div`
  width: 100%;
`;

const AddText = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;

  p {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.4rem;
  }

  button {
    width: 100%;
    text-align: left;
    padding-left: 0.8rem;
    color: #343434;
    background-color: #eee;
    border-radius: 0.2rem;
    margin: 0.2rem 0rem;
  }

  .titleTxt {
    height: 56px;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .subtitleTxt {
    height: 48px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .mainTxt {
    height: 40px;
    font-size: 1rem;
    font-weight: 600;
  }
`;

interface TextProps {
  canvasState: object;
  setCanvasState: React.Dispatch<React.SetStateAction<object>>;
}

function Text({ canvasState, setCanvasState }: TextProps) {
  return (
    <TextWrap>
      <AddText>
        <p>텍스트 추가</p>
        <button className="titleTxt">제목 텍스트</button>
        <button className="subtitleTxt">부제목 텍스트</button>
        <button className="mainTxt">본문 텍스트</button>
      </AddText>
    </TextWrap>
  );
}

export default Text;
