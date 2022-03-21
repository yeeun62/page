import styled from "styled-components";

const Label = styled.label`
  display: block;
  width: 312px;
  height: 40px;
  margin: 20px 24px;
  text-align: center;
  line-height: 40px;
  background-color: #e0de1b;
  color: #fff;
  font-weight: 700;
  border-radius: 3px;
`;

function UpLoad() {
  return (
    <div>
      <form>
        <Label>
          내 파일 업로드
          <input
            type="file"
            style={{ display: "none" }}
            multiple
            accept="image/jpg, image/jpeg, image/png, image/svg+xml, image/gif, video/mp4"
          />
        </Label>
        <input type="text" placeholder="검색어를 입력하세요" />
      </form>
      <div className="uploadedFile"></div>
    </div>
  );
}

export default UpLoad;
