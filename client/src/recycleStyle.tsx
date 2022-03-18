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
