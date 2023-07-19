export const Task = (props) => {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span>Read a book</span>
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};
