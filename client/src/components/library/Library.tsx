import { useState } from "react";
import LibraryContents from "./LibraryContents";
import LibraryList from "./LibraryList";

function Library() {
  const [libIndex, setLibIndex] = useState(0);
  const [listOpen, setListOpen] = useState(true);

  return (
    <div>
      <LibraryList
        setLibIndex={setLibIndex}
        libIndex={libIndex}
        listOpen={listOpen}
        setListOpen={setListOpen}
      />
      <LibraryContents libIndex={libIndex} listOpen={listOpen} />
    </div>
  );
}

export default Library;
