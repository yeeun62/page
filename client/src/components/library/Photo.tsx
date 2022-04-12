import AddPixabay from "./photo/AddPixabay";

function Photo({ canvasState }: any): React.ReactElement {
  return (
    <div>
      <AddPixabay canvasState={canvasState} />
    </div>
  );
}

export default Photo;
