import { useState } from "react";
import LibraryContents from "./LibraryContents";
import LibraryList from "./LibraryList";

interface LibraryProps {
  canvasState: any;
}

function Library({ canvasState }: LibraryProps): React.ReactElement {
  const [libIndex, setLibIndex] = useState<number>(0);
  const [listOpen, setListOpen] = useState<boolean>(true);

  return (
    <div>
      <LibraryList
        libIndex={libIndex}
        setLibIndex={setLibIndex}
        listOpen={listOpen}
        setListOpen={setListOpen}
      />
      <LibraryContents
        libIndex={libIndex}
        listOpen={listOpen}
        canvasState={canvasState}
      />
    </div>
  );
}

export default Library;
