import { useState, useEffect } from "react";
import LibraryContents from "./LibraryContents";
import LibraryList from "./LibraryList";

function Library() {
  const [libIndex, setLibIndex] = useState(0);
  const [listOpen, setListOpen] = useState(true);

  useEffect(() => {
    if (!listOpen) {
      setLibIndex(100);
    } else if (libIndex === 100) {
      setLibIndex(0);
    }
  }, [listOpen, libIndex]);

  return (
    <div>
      <LibraryList
        libIndex={libIndex}
        setLibIndex={setLibIndex}
        listOpen={listOpen}
        setListOpen={setListOpen}
      />
      <LibraryContents libIndex={libIndex} listOpen={listOpen} />
    </div>
  );
}

export default Library;
