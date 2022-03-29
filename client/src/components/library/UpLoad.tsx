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
    const fileType = file.type.split("/");
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    if (fileType[0] === "image") {
      fileReader.onload = () => {
        new (fabric.Image.fromURL as any)(fileReader.result, (image: any) => {
          image.scale(0.25);
          canvasState.add(image);
          canvasState.renderAll();
        });
      };
    } else if (fileType[0] === "video") {
      // fileReader.onload = () => {
      //   new (fabric.Image.fromURL as any)(fileReader.result, (image: Image) => {
      //     image.scale(1);
      //     canvasState.add(image);
      //   });
      // };

      fileReader.onload = (file: any) => {
        var video = new fabric.Image(file.target.result, {
          left: 100,
          top: 100,
          width: 200,
          height: 200,
          hasControls: true,
          originX: "center",
          originY: "center",
          objectCaching: true,
        });
        canvasState.add(video);
      };
      canvasState.renderAll();

      fabric.util.requestAnimFrame(function render() {
        canvasState.renderAll();
        fabric.util.requestAnimFrame(render);
      });
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
