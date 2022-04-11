import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo, Btn } from "../recycleStyle";

const MainWrap = styled.div`
  height: 100vh;
  background-color: #ffffde;
  display: flex;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateBtn = styled(Btn)`
  margin-top: 1.3rem;
  border-radius: 2rem;
`;

function MainPage(): React.ReactElement {
  return (
    <MainWrap>
      <ContentWrap>
        <Logo fontSize="5rem">handle</Logo>
        <Link to="design">
          <CreateBtn
            type="button"
            width="7.5rem"
            height="2.5rem"
            fontSize="1rem"
          >
            만들러 가기
          </CreateBtn>
        </Link>
      </ContentWrap>
    </MainWrap>
  );
}

export default MainPage;
