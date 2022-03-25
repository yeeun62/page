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

  return (
    <DesignWrap>
      <Header
        canvasSize={canvasSize}
        setCanvasSize={setCanvasSize}
        canvasState={canvasState}
      />
      <div>
        <Library canvasState={canvasState} />
        <Editor
          canvasSize={canvasSize}
          canvasState={canvasState}
          setCanvasState={setCanvasState}
        />
      </div>
    </DesignWrap>
  );
}

export default DesignPage;
