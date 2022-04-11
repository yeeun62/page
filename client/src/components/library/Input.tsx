import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import schema from "../../schema.json";
import uischema from "../../uischema.json";

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormWrap = styled(Padding)`
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

const Temporary = styled(Padding)``;

interface inputProps {
  canvasState: any;
}

function Input({ canvasState }: inputProps): React.ReactElement {
  const initialData = {
    name: "이름을 입력해 주세요.",
  };

  const [data, setData] = useState(initialData);

  return (
    <InputWrap>
      <FormWrap>
        <form>
          <button type="button">인풋 삽입</button>
        </form>
      </FormWrap>
      <Temporary>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          // onChange={({ data, _errors }) => setData(data)}
        />
      </Temporary>
    </InputWrap>
  );
}

export default Input;
