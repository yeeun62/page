import styled from "styled-components";
import UpLoad from "./UpLoad";
import Photo from "./Photo";
import Video from "./Video";
import Text from "./Text";

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
  setUpload: React.Dispatch<React.SetStateAction<object>>;
  canvasState: object;
  setCanvasState: React.Dispatch<React.SetStateAction<object>>;
}

function LibraryContents({
  libIndex,
  listOpen,
  setUpload,
  canvasState,
  setCanvasState,
}: LibraryContentsProps) {
  return (
    <LibContentWrapper open={listOpen}>
      {
        [
          <UpLoad
            setUpload={setUpload}
            canvasState={canvasState}
            setCanvasState={setCanvasState}
          />,
          <Photo />,
          <Video />,
          <Text canvasState={canvasState} setCanvasState={setCanvasState} />,
        ][libIndex]
      }
    </LibContentWrapper>
  );
}

export default LibraryContents;
