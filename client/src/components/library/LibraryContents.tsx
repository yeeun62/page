import styled from "styled-components";
import UpLoad from "./UpLoad";
import Photo from "./Photo";
import Video from "./Video";
import Text from "./Text";

const LibContentWrapper = styled.div<{ open: boolean }>`
  width: 360px;
  height: 100%;
  border-right: 1px solid #ddd;

  position: ${(props) => (props.open ? "relative" : "absolute")};
  left: ${(props) => (props.open ? "0px" : "-360px")};
  transition: 0.5s;
`;

function LibraryContents({
  libIndex,
  listOpen,
  setUpload
}: {
  libIndex: number;
  listOpen: boolean;
  setUpload: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <LibContentWrapper open={listOpen}>
      {
        [<UpLoad setUpload={setUpload} />, <Photo />, <Video />, <Text />][
          libIndex
        ]
      }
    </LibContentWrapper>
  );
}

export default LibraryContents;
