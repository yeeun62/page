import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import { useState } from "react";
import { fabric } from "fabric";
import { JsonForms } from "@jsonforms/react";

const InputWrap = styled.div`
  width: 100%;

  form {
    width: 100%;

    button {
      width: inherit;
      height: 40px;
      background-color: #e0de1b;
      color: #fff;
      font-weight: 700;
      border-radius: 0.3rem;
      font-size: 1rem;
    }
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
  const addInput = () => {};
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
