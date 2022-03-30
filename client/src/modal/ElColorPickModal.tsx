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

interface ElColor {
  setElColorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setElColor: React.Dispatch<React.SetStateAction<string>>;
  canvasState: any;
}

function ElColorPickModal({
  setElColorOpen,
  setElColor,
  canvasState,
}: ElColor) {
  const [hex, setHex] = useState("#FFFFFF");
  const [picker, setPicker] = useState(false);
  const [color, setColor] = useColor("hex", "#EEE");

  useEffect(() => {
    setHex(color.hex.toUpperCase());
    setElColor(color.hex);

    itemColor(color.hex);
    // const items = canvasState.getActiveObjects();
    // items.forEach((item: any) => {
    //   item.set("fill", color.hex);
    //   canvasState.renderAll();
    // });
  }, [color]);

  function itemColor(color: string) {
    const items = canvasState.getActiveObjects();
    items.forEach((item: any) => {
      item.set("fill", color);
      canvasState.renderAll();
    });
  }

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
    } else if (hex.length === 4 && sameHex) {
      setHex(hex.toUpperCase() + hex.slice(1).toUpperCase());
    } else {
      let zero = "0".repeat(7 - hex.length);
      setHex(`${hex}${zero}`.toUpperCase());
    }
    // const items = canvasState.getActiveObjects();
    // items.forEach((item: any) => {
    //   item.set("fill", hex);
    //   canvasState.renderAll();
    // });

    itemColor(hex);
  };

  function colorPick(color: string) {
    setHex(color.toLocaleUpperCase());
    setElColor(color);
    // const items = canvasState.getActiveObjects();
    // items.forEach((item: any) => {
    //   item.set("fill", color);
    //   canvasState.renderAll();
    // });

    itemColor(color);
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
            <button onClick={() => setElColorOpen(false)}>X</button>
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

export default ElColorPickModal;
