import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import { fabric } from "fabric";
import Opacity from "./tools/Opacity";

const UpLoadWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

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
    const files = e.target.files;
    for (let file of files) {
      const fileType = file.type.split("/")[0];
      if (fileType === "image") {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          new (fabric.Image.fromURL as any)(fileReader.result, (image: any) => {
            image.scale(0.25);
            canvasState.add(image);
            canvasState.renderAll();
          });
        };
      } else if (fileType === "video") {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
          let videoE = getVideoElement(fileReader.result);
          let fab_video = new fabric.Image(videoE, {
            left: 100,
            top: 100,
          });
          canvasState.add(fab_video);
          videoE.play();
        };

        function getVideoElement(url: any) {
          let videoE = document.createElement("video");
          let source = document.createElement("source");
          videoE.width = 500;
          videoE.height = 500;
          videoE.crossOrigin = "anonymous";
          source.src = url;
          source.type = "video/mp4";
          videoE.appendChild(source);
          return videoE;
        }

        fabric.util.requestAnimFrame(function render() {
          canvasState.renderAll();
          fabric.util.requestAnimFrame(render);
        });
      }
    }
  };

  return (
    <UpLoadWrap>
      <Padding>
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
      </Padding>
      <Opacity canvasState={canvasState} />
    </UpLoadWrap>
  );
}

export default UpLoad;
