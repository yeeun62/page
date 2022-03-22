import { useState, useRef } from "react";
import LibraryContents from "./LibraryContents";
import LibraryList from "./LibraryList";

interface LibraryProps {
  setUpload: React.Dispatch<React.SetStateAction<string>>;
}

function Library({ setUpload }: LibraryProps) {
  const idx = useRef(0);
  const [libIndex, setLibIndex] = useState(idx.current);
  const [listOpen, setListOpen] = useState(false);

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
        setUpload={setUpload}
      />
    </div>
  );
}

export default Library;
