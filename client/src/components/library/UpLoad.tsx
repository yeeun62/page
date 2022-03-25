import styled from "styled-components";
import { fabric } from "fabric";
import { useRef } from "react";

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
}

function UpLoad({ canvasState }: UpLoadProps) {
  const videoRef = useRef<any>(0);

  const uploadFile = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    if (file.type.split("/")[0] === "image") {
      fileReader.onload = () => {
        new (fabric.Image.fromURL as any)(fileReader.result, (image: any) => {
          image.scale(0.25);
          canvasState.add(image);
          canvasState.renderAll();
        });
      };
    } else {
      console.log("동영상");
    }
  };

  return (
    <UpLoadWrap>
      <form>
        <video ref={videoRef} autoPlay loop muted style={{ width: "150px" }}>
          <source></source>
        </video>
        <Label>
          내 파일 업로드
          <input
            type="file"
            multiple={true}
            style={{ display: "none" }}
            accept="image/*, video/*"
            onChange={uploadFile}
          />
        </Label>
      </form>
    </UpLoadWrap>
  );
}

export default UpLoad;
