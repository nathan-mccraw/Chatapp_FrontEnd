const ChatWindow = () => {
  return (
    <div className="container d-flex flex-column bg-secondary">
      <div className="row h4 m-0 pt-4 pb-2 justify-content-center">
        Chat Title
      </div>
      <div className="row flex-grow-1 m-4 p-2 border rounded shadow">
        <div className="row align-items-baseline">
          <div className="col-auto ms-4">Andy: </div>
          <div className="col-auto text-light bg-primary m-4 me-1 ms-1 fp-1 ps-2 pe-3 shadow border border-dark rounded-pill">
            Chat Window Div
          </div>
          <div
            className="col-auto fw-lighter"
            style={{ letterSpacing: ".15rem" }}
          >
            12:53 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
