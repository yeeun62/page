import { useState } from "react";
import styled from "styled-components";
import { Logo, Btn } from "../recycleStyle";

const HeaderWrap = styled.header`
  width: 100%;
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
}

function Header({ canvasSize, setCanvasSize }: HeaderProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [sizeControlOpen, setSizeControlOpen] = useState(false);

  const sizeSaveHandler = () => {
    setSizeControlOpen(false);
    setCanvasSize({ width, height });
  };

  return (
    <HeaderWrap>
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
              />
              <span>X</span>
              <input
                type="text"
                onChange={(e) => setHeight(Number(e.target.value))}
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
      <SaveBtn>
        <img src="img/saveImg.png" alt="저장이미지" />
      </SaveBtn>
    </HeaderWrap>
  );
}

export default Header;
