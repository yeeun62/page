import styled from "styled-components";
import { fabric } from "fabric";

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
  const uploadFile = (e: any) => {
    const file = e.target.files[0];
    let fileType = file.type.split("/");
    const fileReader = new FileReader();
    if (fileType[0] === "image") {
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        new (fabric.Image.fromURL as any)(fileReader.result, (image: any) => {
          image.scale(0.25);
          canvasState.add(image);
          canvasState.renderAll();
        });
      };
    } else {
      var video1El = document.createElement("video");
      fileReader.onload = (file: any) => {
        let fileContent = file.target.result;
        video1El.src = fileContent;
      };
      var video1 = new fabric.Image(video1El, {
        left: 0,
        top: 0,
        originX: "center",
        originY: "center",
        objectCaching: false,
      });
      canvasState.add(video1);
      canvasState.renderAll();
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
            accept="image/*, video/*"
            onChange={uploadFile}
          />
        </Label>
      </form>
    </UpLoadWrap>
  );
}

export default UpLoad;
