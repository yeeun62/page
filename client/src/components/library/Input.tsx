import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import { useState } from "react";
import { fabric } from "fabric";
import { JsonForms } from "@jsonforms/react";

const InputWrap = styled(Padding)`
  form {
    width: 100%;

    button {
      width: 100%;
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
}

function Input({ canvasState }: inputProps) {
  function addInput() {}

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
