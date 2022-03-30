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

function Input({ canvasState }: any) {
  const addInput = () => {
    // let fab_video = new fabric.Image(inputEl, {
    //   left: 100,
    //   top: 100,
    // });

    // new fabric.Image (bg, (image: any) => {
    //   let input = getInputElement();
    //   image.scale(0.25);
    //   canvasState.add(image);
    //   canvasState.renderAll();
    // });

    // function getInputElement() {
    //   let inputEl = document.createElement("input");
    //   inputEl.width = 100;
    //   inputEl.height = 50;
    //   return inputEl;
    // }

    let inputEl = document.createElement("input");
    inputEl.width = 100;
    inputEl.height = 50;

    canvasState.add(inputEl);
    canvasState.renderAll();
  };

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
