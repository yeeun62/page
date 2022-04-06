import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import { useState } from "react";
import { fabric } from "fabric";

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  form {
    width: inherit;
  }

  button {
    display: block;
    width: inherit;
    height: 40px;
    margin-bottom: 1rem;
    text-align: center;
    line-height: 40px;
    background-color: #e0de1b;
    color: #fff;
    font-weight: 700;
    border-radius: 3px;
    font-size: 16px;
  }
`;
interface inputProps {
  canvasState: any;
  setInputStyle: React.Dispatch<
    React.SetStateAction<{
      width: number;
      height: number;
      top: number;
      left: number;
      id: string;
    }>
  >;
}

function Input({ canvasState, setInputStyle }: inputProps) {
  const [inputId, setInputId] = useState(1);

  function addInput() {
    const inputRect = new fabric.Rect({
      width: 200,
      height: 20,
      left: 100,
      top: 100,
      fill: "white",
      stroke: "#ccc",
      name: `input${inputId}`,
    });
    inputRect.on("mouseout", (e) => inputHandler(e));
    canvasState.add(inputRect);
    let inputEl = document.createElement("input") as HTMLInputElement;
    inputEl.setAttribute("id", `input${inputId}`);
    inputEl.setAttribute("class", "inputEl");
    inputEl.setAttribute("type", "text");
    let canvasWrapper = document.querySelector(
      "#canvasWrapper"
    ) as HTMLDivElement;
    canvasWrapper.appendChild(inputEl);
    setInputId((prev) => prev + 1);
  }

  function inputHandler(e: any) {
    if (e.target) {
      setInputStyle({
        width: e.target.scaleX * e.target.width * 0.95,
        height: e.target.scaleY * e.target.height * 0.95,
        top: e.target.top + 2,
        left: e.target.left + 2,
        id: e.target.name,
      });

      let target = document.getElementById(e.target.name);
    }
  }

  return (
    <InputWrap>
      <Padding>
        <form>
          <button type="button" onClick={addInput}>
            인풋 삽입
          </button>
        </form>
      </Padding>
    </InputWrap>
  );
}

export default Input;
