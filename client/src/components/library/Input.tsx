import styled from "styled-components";
import { Padding } from "../../recycleStyle";

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
interface inputProps {
  canvasState: any;
}

function Input({ canvasState }: inputProps): React.ReactElement {
  return (
    <InputWrap>
      <FormWrap>
        <form>
          <button type="button">인풋 삽입</button>
        </form>
      </FormWrap>
    </InputWrap>
  );
}

export default Input;
