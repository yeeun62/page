import styled from "styled-components";
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

function Input({ canvasState }: any) {
  const [style, setStyle] = useState({
    width: 0,
    height: 0,
    top: 100,
    left: 100,
  });
  const [inputId, setInputId] = useState(1);

  function addInput() {
    const inputRect = new fabric.Rect({
      width: 200,
      height: 20,
      left: 100,
      top: 100,
      fill: "transparent",
      stroke: "#ccc",
      name: `input${inputId}`,
    });
    inputRect.on("mouseout", (e) => inputHandler(e));
    canvasState.add(inputRect);
    setInputId((prev) => prev++);
  }

  function inputHandler(e: any) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      setStyle({
        width: obj.scaleX * obj.width * 0.95,
        height: obj.scaleY * obj.height * 0.95,
        top: obj.top,
        left: obj.left,
      });
      let input = document.querySelector("#" + e.target.name);
      if (input) {
        input.setAttribute(
          "style",
          `
      width: ${style.width};
      height: ${style.height};
      position: "absolute";
      top: ${style.top};
      left: ${style.left};
      border: "none";
      margin: "auto";
      background: "transparent";
    `
        );
      } else {
        let inputEl = document.createElement("input") as HTMLInputElement;
        inputEl.setAttribute("id", e.target.name);
        inputEl.setAttribute(
          "style",
          `
        width: ${style.width};
        height: ${style.height};
        position: "absolute";
        top: ${style.top};
        left: ${style.left};
        border: "none";
        margin: "auto";
        background: "transparent";
      `
        );
        let canvasWrapper = document.querySelector(
          "#canvasWrapper"
        ) as HTMLDivElement;
        canvasWrapper.appendChild(inputEl);
      }
    }
  }

  return (
    <InputWrap>
      <form>
        <button type="button" onClick={addInput}>
          인풋 삽입
        </button>
      </form>
    </InputWrap>
  );
}

export default Input;
