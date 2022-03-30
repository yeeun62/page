import styled from "styled-components";

const FontStyleWrap = styled.div`
  width: 60%;
  margin-left: 5%;
  font-size: 1.5rem;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    li {
      width: 30px;
      height: 30px;
      display: block;
      margin: 0 5px;
      cursor: pointer;

      .styleBtn {
        display: block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #282828;
      }

      :hover {
        background-color: #eee;
      }
    }
  }
`;

function FontStyleTool({ canvasState }: any) {
  function fontWeightHandler(weight: number) {
    let obj = canvasState.getActiveObject();
    if (Object.values(obj).length) {
      obj.fontWeight = weight;
      canvasState.renderAll();
    }
  }

  function fontDecoHandler(attr: string) {
    let obj = canvasState.getActiveObject();
    if (Object.values(obj).length) {
      if (attr === "italic") {
        if (obj.fontStyle === "italic") {
          obj.fontStyle = "normal";
          canvasState.renderAll();
        } else {
          obj.fontStyle = "italic";
          canvasState.renderAll();
        }
      } else if (attr === "underline") {
        obj.__dimensionAffectingProps.styles.underline = true;
        canvasState.renderAll();

        // if (obj.style.underLine === "underline") {
        //   //obj.textDecoration = "normal";
        //   canvasState.renderAll();
        // } else {
        //   obj.textDecoration = "underline";
        //   canvasState.renderAll();
        // }
      }
    }
  }

  return (
    <FontStyleWrap>
      <ul>
        <li onClick={() => fontWeightHandler(800)}>
          <p className="styleBtn" style={{ fontWeight: "800" }}>
            B
          </p>
        </li>
        <li onClick={() => fontWeightHandler(500)}>
          <p className="styleBtn" style={{ fontWeight: "500" }}>
            R
          </p>
        </li>
        <li onClick={() => fontWeightHandler(200)}>
          <p className="styleBtn" style={{ fontWeight: "300" }}>
            L
          </p>
        </li>
        <li onClick={() => fontDecoHandler("italic")}>
          <i className="styleBtn">I</i>
        </li>
        <li onClick={() => fontDecoHandler("underline")}>
          <p className="styleBtn" style={{ textDecoration: "underline" }}>
            U
          </p>
        </li>
      </ul>
    </FontStyleWrap>
  );
}

export default FontStyleTool;
