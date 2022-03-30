import { useState, useRef } from "react";
import LibraryContents from "./LibraryContents";
import LibraryList from "./LibraryList";

interface LibraryProps {
  canvasState: object;
  setInputStyle: React.Dispatch<
    React.SetStateAction<{
      width: number;
      height: number;
      top: number;
      left: number;
      id: string;
    }>
  >;
}

function Library({ canvasState, setInputStyle }: LibraryProps) {
  const idx = useRef(0);
  const [libIndex, setLibIndex] = useState(idx.current);
  const [listOpen, setListOpen] = useState(true);

  const libIdxHandler = (i: number): void => {
    idx.current = i;
    setLibIndex(idx.current);
    setListOpen(true);
  };

  return (
    <div>
      <LibraryList
        libIndex={libIndex}
        libIdxHandler={libIdxHandler}
        listOpen={listOpen}
        setListOpen={setListOpen}
      />
      <LibraryContents
        libIndex={libIndex}
        listOpen={listOpen}
        canvasState={canvasState}
        setInputStyle={setInputStyle}
      />
    </div>
  );
}

export default Library;
