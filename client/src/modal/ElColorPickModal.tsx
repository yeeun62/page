import { useEffect, useState } from "react";
import { CanvasColor } from "../files/ColorBundle";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { ColorWrap, ColorTop, ColorMiddle, ColorBottom } from "../recycleStyle";

interface ElColor {
    setElColorOpen: React.Dispatch<React.SetStateAction<boolean>>;
    elColor: string;
    setElColor: React.Dispatch<React.SetStateAction<string>>;
    canvasState: any;
}

function ElColorPickModal({
    setElColorOpen,
    elColor,
    setElColor,
    canvasState,
}: ElColor): React.ReactElement {
    const [hex, setHex] = useState("#FFFFFF");
    const [picker, setPicker] = useState(false);
    const [color, setColor] = useColor("hex", elColor);

    useEffect(() => {
        setHex(elColor.toUpperCase());
    }, [elColor]);

    useEffect(() => {
        setHex(color.hex.toUpperCase());
        setElColor(color.hex);
        itemColor(color.hex);
    }, [color]);

    function itemColor(color: string) {
        const items = canvasState.getActiveObjects();
        items.forEach((item: any) => {
            item.set("fill", color);
            canvasState.renderAll();
        });
    }

    const checkHex = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
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
        const sameHex = hex[1] === hex[2] && hex[2] === hex[3];

        if (hex.length === 7) {
        } else if (hex.length === 4 && sameHex) {
            setHex(hex.toUpperCase() + hex.slice(1).toUpperCase());
        } else {
            const zero = "0".repeat(7 - hex.length);
            setHex(`${hex}${zero}`.toUpperCase());
        }
        itemColor(hex);
    };

    function colorPick(color: string) {
        setHex(color.toLocaleUpperCase());
        setElColor(color);
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
                        <p className="defaltPalette">기본 팔레트</p>
                        <ul>
                            {CanvasColor.map((colorArr, i) => {
                                return (
                                    <li key={i}>
                                        {colorArr.map((color) => {
                                            return (
                                                <div
                                                    key={color}
                                                    style={{
                                                        background: color,
                                                    }}
                                                    onClick={() =>
                                                        colorPick(color)
                                                    }
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
