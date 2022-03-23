import styled from "styled-components";
import { fabric } from "fabric";
import { useState } from "react";

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
  margin-bottom: 1rem;
  text-align: center;
  line-height: 40px;
  background-color: #e0de1b;
  color: #fff;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
`;

interface UpLoadProps {
  canvasState: any;
  setCanvasState: React.Dispatch<React.SetStateAction<object>>;
}

function UpLoad({ canvasState, setCanvasState }: UpLoadProps) {
  const [imgUrl, setImgUrl] = useState("");

  const uploadFile: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    if (e.target.files !== null) {
      setImgUrl(URL.createObjectURL(e.target.files[0]));
      let newImg = new Image();
      newImg.onload = () => {
        var img = new fabric.Image(newImg, {
          angle: 0,
          left: 50,
          top: 50,
          scaleX: 0.25,
          scaleY: 0.25,
        });
        setCanvasState(canvasState.add(img));
      };
      newImg.src = imgUrl;
    }
  };

  return (
    <UpLoadWrap>
      <form>
        <Label>
          내 파일 업로드
          <input
            type="file"
            multiple={true}
            style={{ display: "none" }}
            accept="image/*, video/mp4"
            onChange={uploadFile}
          />
        </Label>
      </form>
    </UpLoadWrap>
  );
}

export default UpLoad;
