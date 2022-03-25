import styled from "styled-components";
import UpLoad from "./UpLoad";
import Photo from "./Photo";
import Video from "./Video";
import Text from "./Text";
import Input from "./Input";

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
  canvasState: object;
}

function LibraryContents({
  libIndex,
  listOpen,
  canvasState,
}: LibraryContentsProps) {
  return (
    <LibContentWrapper open={listOpen}>
      {
        [
          <UpLoad canvasState={canvasState} />,
          <Photo />,
          <Video />,
          <Text canvasState={canvasState} />,
          <Input />,
        ][libIndex]
      }
    </LibContentWrapper>
  );
}

export default LibraryContents;
