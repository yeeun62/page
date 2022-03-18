import styled from "styled-components";
import Photo from "./Photo";
import Video from "./Video";
import Text from "./Text";

const libContentWrapper = styled.div``;

function LibraryContents({ libIndex, listOpen }: any) {
  return (
    <div className="libContentWrapper">
      {[<Photo />, <Video />, <Text />][libIndex]}
    </div>
  );
}

export default LibraryContents;
