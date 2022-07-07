import styled from "styled-components";
import { Padding } from "../../../recycleStyle";
import { fabric } from "fabric";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "fabric/fabric-impl";

const Category1 = styled.div`
    overflow: hidden;
    width: 100%;

    ul {
        width: 100%;
        display: flex;
        overflow: hidden;
        max-width: 400px;

        li {
            margin-right: 10px;
        }
    }
`;

function AddPixabay({ canvasState }: any): React.ReactElement {
    const [category, setCategory] = useState([
        {
            id: 6792528,
            pageURL: "",
            type: "photo",
            tags: "",
            previewURL: "",
            previewWidth: 150,
            previewHeight: 100,
            webformatURL: "",
            webformatWidth: 640,
            webformatHeight: 427,
            largeImageURL: "",
            imageWidth: 6000,
            imageHeight: 4000,
            imageSize: 11775993,
            views: 1062368,
            downloads: 972244,
            collections: 14796,
            likes: 520,
            comments: 107,
            user_id: 7645255,
            user: "",
            userImageURL: "",
        },
    ]);

    async function getCategory() {
        const url = process.env.REACT_APP_HANDLE_API_URL;
        try {
            const result = await axios.get(`${url}/page/pixabay`);
            if (result.status === 200) {
                setCategory(result.data.data);
            }
        } catch (err) {
            alert("삐빅 픽사베이 사진을 불러오지 못했습니다 😅");
        }
    }

    useEffect(() => {
        getCategory();
    }, []);

    function addPic(url: string) {
        fabric.Image.fromURL(url, (image: Image) => {
            canvasState.add(image);
            canvasState.renderAll();
        });
    }

    return (
        <Padding>
            <Category1>
                {category.length > 1 ? (
                    <ul>
                        <li key="category-background">background</li>
                        {category.map((image: any) => {
                            return (
                                <li
                                    key={image.id}
                                    onClick={() => {
                                        addPic(image.webformatURL);
                                    }}
                                >
                                    <img
                                        src={image.previewURL}
                                        alt={image.tags}
                                        width={image.previewWidth}
                                        height={image.previewHeight}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>loading...</p>
                )}
            </Category1>
        </Padding>
    );
}

export default AddPixabay;
