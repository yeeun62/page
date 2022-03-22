import styled from "styled-components";
import { useRef } from "react";
import { readFile } from "fs";

const UpLoadWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  form {
    width: 100%;
  }
`;

const Label = styled.label`
  display: block;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #e0de1b;
  color: #fff;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
`;

interface UpLoadProps {
  setUpload: React.Dispatch<React.SetStateAction<object>>;
  canvasState: object;
  setCanvasState: React.Dispatch<React.SetStateAction<object>>;
}

function UpLoad({ setUpload }: UpLoadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setUpload(e.target.files[0]);
    }
  };

  return (
    <UpLoadWrap>
      <form>
        <Label>
          내 파일 업로드
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/jpg, image/jpeg, image/png, image/svg+xml, image/gif, image/pdf, video/mp4"
            ref={fileRef}
            onChange={uploadFile}
          />
        </Label>
      </form>
    </UpLoadWrap>
  );
}

export default UpLoad;
