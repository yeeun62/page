import styled from "styled-components";

const libContentWrapper = styled.div``;

function LibraryContents({ library, listOpen }: any) {
  return (
    <div className="libContentWrapper">
      <ul>
        {library.album && (
          <li>
            <div className="libAlbumSection"></div>
            <div className="libAlbumSection"></div>
            <div className="libAlbumSection"></div>
          </li>
        )}
        {library.video && (
          <li>
            <div className="libVideoSection"></div>
            <div className="libVideoSection"></div>
            <div className="libVideoSection"></div>
          </li>
        )}
        {library.text && (
          <li>
            <div className="libTextSection"></div>
            <div className="libTextSection"></div>
            <div className="libTextSection"></div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default LibraryContents;
