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
  return (
    <DesignWrap>
      <Header />
      <div>
        <Library />
        <Editor />
      </div>
    </DesignWrap>
  );
}

export default DesignPage;
