import { useState } from "react";
import styled from "styled-components";
import { Logo, Btn } from "../recycleStyle";
import Modal from "react-modal";
import URLNoticeModal from "../modal/URLNoticeModal";
import axios from "axios";
import { Canvas } from "fabric/fabric-impl";

const HeaderWrap = styled.header`
  height: 7vh;
  padding: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
`;

const SizeControl = styled.div<{ open: boolean }>`
  position: relative;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => (props.open ? "#a4a400" : null)};

  ::after {
    content: "";
    position: absolute;
    right: -14px;
    top: ${(props) => (props.open ? "40%" : "20%")};
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: ${(props) => (props.open ? "rotate(315deg)" : "rotate(135deg)")};
  }
`;

const SizeControlForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120%;
  width: 220px;
  height: 100px;
  background-color: #ffffde;
  border: 2px solid #f6f352;
  border-radius: 0.3rem;
  z-index: 2;

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 4.6rem;
      height: 1.6rem;
      border: 2px solid #e0de1b;
      border-radius: 0.2rem;
      padding-left: 0.4rem;
    }
  }
`;

const SizeSaveBtn = styled(Btn)`
  border-radius: 0.4rem;
  margin-top: 0.4rem;

  :hover {
    transition: 0s;
  }
`;

const SaveBtn = styled.button`
  width: 40px;
  border-radius: 0.3rem;
  background: linear-gradient(70deg, #15bfd9, #005e8d);

  img {
    width: 80%;
  }
`;

interface HeaderProps {
  canvasSize: { width: number; height: number };
  setCanvasSize: React.Dispatch<
    React.SetStateAction<{ width: number; height: number }>
  >;
  canvasState: any;
}

function Header({
  canvasSize,
  setCanvasSize,
  canvasState,
}: HeaderProps): React.ReactElement {
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  const [sizeControlOpen, setSizeControlOpen] = useState<boolean>(false);
  const [noticeOpen, setNoticeOpen] = useState<boolean>(false);
  const [uuid, setUuid] = useState<string>("");

  const sizeSaveHandler = () => {
    setSizeControlOpen(false);
    setCanvasSize({ width, height });
    canvasState.setWidth(width);
    canvasState.setHeight(height);
  };

  const createImage = async () => {
    const imageURL = canvasState.toDataURL("image/png");
    try {
      const createRequest = await axios.post(
        `${process.env.REACT_APP_HANDLE_API_URL}/page/create`,
        { info: imageURL },
        {
          withCredentials: true,
        }
      );
      setUuid(createRequest.data.uuid);
      setNoticeOpen(true);
    } catch (err) {
      alert("err..");
    }
  };

  return (
    <HeaderWrap>
      <Modal
        isOpen={noticeOpen}
        onRequestClose={() => setNoticeOpen(!noticeOpen)}
        className="content"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <URLNoticeModal uuid={uuid} setNoticeOpen={setNoticeOpen} />
      </Modal>
      <Logo fontSize="2rem">handle</Logo>
      <SizeControl
        open={sizeControlOpen}
        onClick={() => setSizeControlOpen(!sizeControlOpen)}
      >
        {canvasSize.width} X {canvasSize.height}
        {sizeControlOpen && (
          <SizeControlForm
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <div>
              <input
                type="text"
                onChange={(e) => setWidth(Number(e.target.value))}
                value={width}
              />
              <span>X</span>
              <input
                type="text"
                onChange={(e) => setHeight(Number(e.target.value))}
                value={height}
              />
              <span>PX</span>
            </div>
            <SizeSaveBtn
              type="button"
              width="90%"
              height="1.8rem"
              fontSize="0.8rem"
              onClick={sizeSaveHandler}
            >
              적용하기
            </SizeSaveBtn>
          </SizeControlForm>
        )}
      </SizeControl>
      <SaveBtn onClick={createImage}>
        <img src="img/saveImg.png" alt="저장이미지" />
      </SaveBtn>
    </HeaderWrap>
  );
}

export default Header;
