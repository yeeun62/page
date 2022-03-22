import { useState } from "react";
import styled from "styled-components";
import Editor from "../components/Editor";
import Header from "../components/Header";
import Library from "../components/library/Library";

const DesignWrap = styled.div`
  div {
    display: flex;
  }
`;

function DesignPage() {
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });
  const [canvasState, setCanvasState] = useState({});
  const [upload, setUpload] = useState({});

  return (
    <DesignWrap>
      <Header canvasSize={canvasSize} setCanvasSize={setCanvasSize} />
      <div>
        <Library
          setUpload={setUpload}
          canvasState={canvasState}
          setCanvasState={setCanvasState}
        />
        <Editor
          canvasSize={canvasSize}
          upload={upload}
          canvasState={canvasState}
          setCanvasState={setCanvasState}
        />
      </div>
    </DesignWrap>
  );
}

export default DesignPage;
