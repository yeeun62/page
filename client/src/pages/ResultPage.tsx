import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Logo } from "../recycleStyle";

const ResultWrap = styled.div`
    height: 100vh;
    background-color: #ffffde;

    h1 {
        text-align: center;
        margin-top: 3rem;
    }
`;

const ResultTop = styled.div`
    height: 7vh;
    padding-left: 1.3rem;
    display: flex;
    align-items: center;
`;

const ResultContent = styled.div`
    height: 93vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        box-shadow: 0 0 5px #ddd;
    }
`;

function ResultPage(): React.ReactElement {
    const { uuid } = useParams();
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        axios
            .post(
                `${process.env.REACT_APP_HANDLE_API_URL}/page/find`,
                { uuid },
                { withCredentials: true }
            )
            .then((el) => setImageURL(el.data.data));
    }, [uuid]);

    return (
        <ResultWrap>
            <ResultTop>
                <Link to="/">
                    <Logo fontSize="2rem">handle</Logo>
                </Link>
            </ResultTop>
            {imageURL ? (
                <ResultContent>
                    <div>
                        <img src={imageURL} alt="캔버스 이미지" />
                    </div>
                </ResultContent>
            ) : (
                <h1>이미지 불러오는 중....</h1>
            )}
        </ResultWrap>
    );
}

export default ResultPage;
