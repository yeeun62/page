import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
    materialRenderers,
    materialCells,
} from "@jsonforms/material-renderers";
import schema from "../../schema.json";
import uischema from "../../uischema.json";

const InputWrap = styled(Padding)`
    form {
        width: 100%;

        button {
            width: 100%;
            height: 40px;
            background-color: #e0de1b;
            color: #fff;
            font-weight: 700;
            border-radius: 0.3rem;
            font-size: 1rem;
        }
    }
`;
interface inputProps {
    canvasState: any;
}

function Input({ canvasState }: inputProps): React.ReactElement {
    // console.log(schema, uischema);
    const initialData = {
        name: "Max Power",
    };
    const [data, setData] = useState(initialData);

    // if (foo) foo++;

    // while (bar) baz();

    // if (foo) {
    //     baz();
    // } else qux();

    return (
        <InputWrap>
            <form>
                <button type="button">인풋 삽입</button>
            </form>
            <JsonForms
                schema={schema}
                uischema={uischema}
                data={data}
                renderers={materialRenderers}
                cells={materialCells}
                // onChange={({ data, _errors }) => setData(data)}
            />
        </InputWrap>
    );
}

export default Input;
