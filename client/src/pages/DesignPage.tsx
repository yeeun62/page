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
  const [upload, setUpload] = useState<string>("");

  return (
    <DesignWrap>
      <Header canvasSize={canvasSize} setCanvasSize={setCanvasSize} />
      <div>
        <Library setUpload={setUpload} />
        <Editor
          canvasSize={canvasSize}
          setCanvasSize={setCanvasSize}
          upload={upload}
        />
      </div>
    </DesignWrap>
  );
}

export default DesignPage;
