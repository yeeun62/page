import { useEffect, useState } from "react";
import { CanvasColor } from "../files/ColorBundle";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { ColorWrap, ColorTop, ColorMiddle, ColorBottom } from "../recycleStyle";
interface ColorPickProps {
  setCanvasColorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  canvasState: any;
}

function ColorPickModal({ setCanvasColorOpen, canvasState }: ColorPickProps) {
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
            <p className="defaltPalette">기본 팔레트</p>
            <ul>
              {CanvasColor.map((colorArr, i) => {
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

export default ColorPickModal;
