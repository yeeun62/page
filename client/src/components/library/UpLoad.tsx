import styled from "styled-components";
import { useRef } from "react";
import { readFile } from "fs";

const Label = styled.label`
  display: block;
  width: 312px;
  height: 40px;
  margin: 20px 24px;
  text-align: center;
  line-height: 40px;
  background-color: #e0de1b;
  color: #fff;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
`;

function UpLoad({ setUpload }: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setUpload(e.target.files[0]);
    }
  };

  return (
    <div>
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
    </div>
  );
}

export default UpLoad;
