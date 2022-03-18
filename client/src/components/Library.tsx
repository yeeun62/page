import { useState } from "react";
import LibraryContents from "../components/LibraryContents";
import LibraryList from "../components/LibraryList";

function Library() {
  let libInitial: { album: boolean; video: boolean; text: boolean } = {
    album: true,
    video: false,
    text: false,
  };

  const [library, setLibrary] = useState(libInitial);
  const [listOpen, setListOpen] = useState(true);

  function listOpenHandler() {
    setListOpen(!listOpen);
  }

  function libraryChoice(name: string): void {
    setLibrary({ album: false, video: false, text: false, [name]: true });
  }

  return (
    <div>
      <LibraryList
        libraryChoice={libraryChoice}
        library={library}
        listOpen={listOpen}
        listOpenHandler={listOpenHandler}
      />
      <LibraryContents library={library} listOpen={listOpen} />
    </div>
  );
}

export default Library;
