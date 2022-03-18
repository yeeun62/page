import { useState } from "react";
import LibraryContents from "../components/LibraryContents";
import LibraryList from "../components/LibraryList";

function Library() {
  const [libIndex, setLibIndex] = useState(0);
  const [listOpen, setListOpen] = useState(true);

  function listOpenHandler() {
    setListOpen(!listOpen);
  }

  return (
    <div>
      <LibraryList
        setLibIndex={setLibIndex}
        libIndex={libIndex}
        listOpen={listOpen}
        listOpenHandler={listOpenHandler}
      />
      <LibraryContents libIndex={libIndex} listOpen={listOpen} />
    </div>
  );
}

export default Library;
