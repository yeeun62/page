import styled from "styled-components";
import { Btn } from "../recycleStyle";

const NoticeWrap = styled.div`
  width: 510px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    line-height: 1.4rem;
  }
`;

const CloseBtn = styled(Btn)`
  border-radius: 0.4rem;
  margin-top: 1rem;
`;

interface URLNoticeProps {
  uuid: string;
  setNoticeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function URLNoticeModal({ uuid, setNoticeOpen }: URLNoticeProps) {
  return (
    <NoticeWrap>
      <p>{`https://page.handle.market/${uuid}`}</p>
      <p>위 링크에 접속하시면 저장하신 이미지를 보실 수 있습니다😎</p>
      <CloseBtn
        width="4rem"
        height="1.4rem"
        fontSize="0.7rem"
        onClick={() => setNoticeOpen(false)}
      >
        닫기
      </CloseBtn>
    </NoticeWrap>
  );
}

export default URLNoticeModal;
