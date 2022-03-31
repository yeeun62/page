import styled from "styled-components";

export const Logo = styled.p<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  color: #e0de1b;
  font-family: "Lobster";
`;

export const Btn = styled.button<{
  width: string;
  height: string;
  fontSize: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border: 2px solid #e0de1b;
  color: #bcb902;
  font-weight: bold;

  :hover {
    transition: 0.7s;
    background-color: #e0de1b;
    color: #fff;
  }
`;

//* library Content global div
export const Padding = styled.div`
  width: 100%;
  padding: 1.4rem;
`;

//* color modal start
export const ColorWrap = styled.div`
  width: 320px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #b2b2b2;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const ColorTop = styled.div`
  padding: 0.8rem;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;

  h3 {
    color: #555;
  }

  button {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .noneJusti {
    margin-right: 12.6rem;
  }
`;

export const ColorMiddle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  width: 100%;
  height: 20rem;
  border-bottom: 1px solid #ddd;

  .defaltPalette {
    font-size: 0.9rem;
    font-weight: 600;
    color: #888;
    margin-bottom: 0.4rem;
  }

  ul {
    height: 74%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li {
      display: flex;
      justify-content: space-between;

      div {
        border: 1px solid #ddd;
        border-radius: 0.4rem;
        width: 34px;
        height: 34px;
        cursor: pointer;
      }
    }
  }

  .palette_wrap {
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    width: 34px;
    height: 34px;
    cursor: pointer;
    background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
    margin-bottom: 1rem;
  }
`;

export const ColorBottom = styled.div`
  padding: 0rem 0.8rem;
  height: 3rem;
  display: flex;
  align-items: center;

  input {
    width: 40%;
    height: 70%;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding-left: 0.3rem;
    font-size: 1.2rem;
    letter-spacing: 1.4px;
  }
`;
//* color modal end
