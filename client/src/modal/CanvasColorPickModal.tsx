import styled from "styled-components";
import {
  color_1,
  color_2,
  color_3,
  color_4,
  color_5,
} from "../files/CanvasColor";

const ColorWrap = styled.div`
  width: 320px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #b2b2b2;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ColorTop = styled.div`
  padding: 0.8rem;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;

  h3 {
    color: #555;
  }
`;

const ColorMiddle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  width: 100%;
  height: 16rem;
  border-bottom: 1px solid #ddd;

  p {
    font-size: 0.9rem;
    font-weight: 600;
    color: #888;
    margin-bottom: 0.4rem;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li {
      display: flex;
      justify-content: space-between;

      div {
        border: 1px solid #ddd;
        border-radius: 0.4rem;
        width: 34px;
        height: 34px;
        cursor: pointer;
      }
    }
  }
`;

const ColorBottom = styled.div`
  padding: 0rem 0.8rem;
  height: 3rem;
  display: flex;
  align-items: center;

  input {
    width: 34%;
    height: 70%;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
  }
`;

interface ColorPickProps {
  setCanvasColorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCanvasColor: React.Dispatch<React.SetStateAction<string>>;
}

function CanvasColorPickModal({
  setCanvasColorOpen,
  setCanvasColor,
}: ColorPickProps) {
  return (
    <ColorWrap>
      <ColorTop>
        <h3>색상</h3>
        <button onClick={() => setCanvasColorOpen(false)}>X</button>
      </ColorTop>
      <ColorMiddle>
        <p>기본 팔레트</p>
        <ul>
          <li>
            {color_1.map((color) => {
              return (
                <div
                  key={color}
                  data-canvas-color={color}
                  style={{ background: color }}
                  onClick={(e) =>
                    setCanvasColor(
                      `${(e.target as HTMLDivElement).getAttribute(
                        "data-canvas-color"
                      )}`
                    )
                  }
                ></div>
              );
            })}
          </li>
          <li>
            {color_2.map((color) => {
              return (
                <div
                  key={color}
                  data-canvas-color={color}
                  style={{ background: color }}
                  onClick={(e) =>
                    setCanvasColor(
                      `${(e.target as HTMLDivElement).getAttribute(
                        "data-canvas-color"
                      )}`
                    )
                  }
                ></div>
              );
            })}
          </li>
          <li>
            {color_3.map((color) => {
              return (
                <div
                  key={color}
                  data-canvas-color={color}
                  style={{ background: color }}
                  onClick={(e) =>
                    setCanvasColor(
                      `${(e.target as HTMLDivElement).getAttribute(
                        "data-canvas-color"
                      )}`
                    )
                  }
                ></div>
              );
            })}
          </li>
          <li>
            {color_4.map((color) => {
              return (
                <div
                  key={color}
                  data-canvas-color={color}
                  style={{ background: color }}
                  onClick={(e) =>
                    setCanvasColor(
                      `${(e.target as HTMLDivElement).getAttribute(
                        "data-canvas-color"
                      )}`
                    )
                  }
                ></div>
              );
            })}
          </li>
          <li>
            {color_5.map((color) => {
              return (
                <div
                  key={color}
                  data-canvas-color={color}
                  style={{ background: color }}
                  onClick={(e) =>
                    setCanvasColor(
                      `${(e.target as HTMLDivElement).getAttribute(
                        "data-canvas-color"
                      )}`
                    )
                  }
                ></div>
              );
            })}
          </li>
        </ul>
      </ColorMiddle>
      <ColorBottom>
        <input type="text" />
      </ColorBottom>
    </ColorWrap>
  );
}

export default CanvasColorPickModal;
