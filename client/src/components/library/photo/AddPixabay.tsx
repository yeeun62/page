import styled from "styled-components";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import axios from "axios";

function AddPixabay({ canvasState }: any): React.ReactElement {
  const [category, setCategory] = useState<[{}]>([{}]);

  useEffect(() => {
    const getCategory = async () => {
      const url = process.env.REACT_APP_HANDLE_API_URL;
      try {
        const result = await axios.get(`${url}/v1/page/pixabay`);
        console.log(result);
        if (result.status === 200) {
          setCategory(result.data.data);
        }
      } catch (err) {
        //alert("삐빅 픽사베이 사진을 불러오지 못했습니다 😅");
      }
    };

    getCategory();
  }, []);

  return <></>;
}

export default AddPixabay;
