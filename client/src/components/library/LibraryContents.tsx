import styled from "styled-components";
import UpLoad from "./UpLoad";
import Photo from "./Photo";
import Video from "./Video";
import Text from "./Text";
import Input from "./Input";
import { fabric } from "fabric";

const LibContentWrapper = styled.div<{ open: boolean }>`
  width: 360px;
  border-right: 1px solid #ddd;
  padding: 1.4rem;

  position: ${(props) => (props.open ? "relative" : "absolute")};
  left: ${(props) => (props.open ? "0px" : "-360px")};
  transition: 0.5s;
`;

interface LibraryContentsProps {
  libIndex: number;
  listOpen: boolean;
  canvasState: any;
}

function LibraryContents({
  libIndex,
  listOpen,
  canvasState,
}: LibraryContentsProps) {
  const videoAdd = () => {
    const video: any = document.getElementsByTagName("video");
    var video1 = new fabric.Image(video, {
      left: 200,
      top: 300,
      angle: -15,
      originX: "center",
      originY: "center",
      objectCaching: false,
    });
    canvasState.add(video1);
    video1.getElement();

    fabric.util.requestAnimFrame(function render() {
      canvasState.renderAll();
      fabric.util.requestAnimFrame(render);
    });
  };
  return (
    <LibContentWrapper open={listOpen}>
      {
        [
          <UpLoad canvasState={canvasState} />,
          <Photo />,
          <Video />,
          <Text canvasState={canvasState} />,
          <Input canvasState={canvasState} />,
        ][libIndex]
      }
    </LibContentWrapper>
  );
}

export default LibraryContents;
