import styled from "styled-components";

const AlignWrapper = styled.div`
  width: 30%;
  height: 5rem;

  ul {
    display: flex;
    width: 100%;
    text-align: center;

    li {
      width: calc(100% / 3);
      height: 5rem;
      cursor: pointer;

      span {
        line-height: 5rem;
      }
    }
  }
`;

function TextAlign({ canvasState }: any) {
  function textAlignHandler(align: string) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      obj.textAlign = align;
      canvasState.renderAll();
    } else {
      return null;
    }
  }
  return (
    <AlignWrapper>
      <ul>
        <li onClick={() => textAlignHandler("left")}>
          <span className="material-icons-outlined styleBtn">
            format_align_left
          </span>
        </li>
        <li onClick={() => textAlignHandler("right")}>
          <span className="material-icons-outlined styleBtn">
            format_align_center
          </span>
        </li>
        <li onClick={() => textAlignHandler("center")}>
          <span className="material-icons-outlined styleBtn">
            format_align_right
          </span>
        </li>
      </ul>
    </AlignWrapper>
  );
}

export default TextAlign;
