import { useEffect, useState } from "react";
import styled from "styled-components";
import { colorBundle } from "../files/CanvasColor";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

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

  button {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .noneJusti {
    margin-right: 12.6rem;
  }
`;

const ColorMiddle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  width: 100%;
  height: 20rem;
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

  .palette_wrap {
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    width: 34px;
    height: 34px;
    cursor: pointer;
    background-color: red;
    margin-bottom: 1rem;

    .palette {
      width: 1000px;
      height: 2000px;
      background-color: blue;
    }
  }
`;

const ColorBottom = styled.div`
  padding: 0rem 0.8rem;
  height: 3rem;
  display: flex;
  align-items: center;

  input {
    width: 40%;
    height: 70%;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding-left: 0.3rem;
    font-size: 1.2rem;
    letter-spacing: 1.4px;
  }
`;

interface ColorPickProps {
  setCanvasColorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  canvasState: any;
}

function CanvasColorPickModal({
  setCanvasColorOpen,
  canvasState,
}: ColorPickProps) {
  const [hex, setHex] = useState("#FFFFFF");
  const [picker, setPicker] = useState(false);
  const [color, setColor] = useColor("hex", canvasState.backgroundColor);

  useEffect(() => {
    setHex(canvasState.backgroundColor);
  }, []);

  useEffect(() => {
    setHex(color.hex.toUpperCase());
    canvasState.backgroundColor = color.hex;
    canvasState.renderAll();
  }, [color]);

  const checkHex = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    const regex = /[a-fA-F0-9]/;

    if (inputValue && inputValue[inputValue.length - 1].match(regex)) {
      setHex(inputValue);
    } else if (inputValue.length > 2) {
      return;
    } else {
      setHex("#");
    }
  };

  const changeColor = () => {
    let sameHex = hex[1] === hex[2] && hex[2] === hex[3];

    if (hex.length === 7) {
      canvasState.backgroundColor = hex;
    } else if (hex.length === 4 && sameHex) {
      canvasState.backgroundColor = hex;
      setHex(hex.toUpperCase() + hex.slice(1).toUpperCase());
    } else {
      let zero = "0".repeat(7 - hex.length);
      canvasState.backgroundColor = `${hex}${zero}`;
      setHex(`${hex}${zero}`.toUpperCase());
    }
    canvasState.renderAll();
  };

  function colorPick(color: string) {
    setHex(color.toLocaleUpperCase());
    canvasState.backgroundColor = color;
    canvasState.renderAll();
  }

  return (
    <ColorWrap>
      <ColorTop>
        {picker ? (
          <>
            <button onClick={() => setPicker(false)}>{"<"}</button>
            <h3 className="noneJusti">직접 지정</h3>
          </>
        ) : (
          <>
            <h3>색상</h3>
            <button onClick={() => setCanvasColorOpen(false)}>X</button>
          </>
        )}
      </ColorTop>
      <ColorMiddle>
        {picker ? (
          <div className="palette">
            <ColorPicker
              width={300}
              height={250}
              color={color}
              onChange={setColor}
              hideHSV
              hideHEX
              hideRGB
            />
          </div>
        ) : (
          <>
            <div
              className="palette_wrap"
              onClick={() => setPicker(!picker)}
            ></div>
            <p>기본 팔레트</p>
            <ul>
              {colorBundle.map((colorArr, i) => {
                return (
                  <li key={i}>
                    {colorArr.map((color) => {
                      return (
                        <div
                          key={color}
                          style={{ background: color }}
                          onClick={() => colorPick(color)}
                        ></div>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </ColorMiddle>
      <ColorBottom>
        <input
          type="text"
          maxLength={7}
          value={hex}
          onChange={checkHex}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              changeColor();
            }
          }}
        />
      </ColorBottom>
    </ColorWrap>
  );
}

export default CanvasColorPickModal;
