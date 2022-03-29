import styled from "styled-components";
// import { CanvasInput } from "Canvasinput";

const InputWrap = styled.div``;

function Input() {
  // var input = new CanvasInput({
  //   canvas: document.getElementById("canvas"),
  //   fontSize: 18,
  //   fontFamily: "Arial",
  //   fontColor: "#212121",
  //   fontWeight: "bold",
  //   width: 300,
  //   padding: 8,
  //   borderWidth: 1,
  //   borderColor: "#000",
  //   borderRadius: 3,
  //   boxShadow: "1px 1px 0px #fff",
  //   innerShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
  //   placeHolder: "Enter message here...",
  // });

  return (
    <div>
      <p className="in">들어가</p>
      <button>input</button>
    </div>
  );
}

export default Input;
