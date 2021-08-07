const ChatInput = () => {
  return (
    <div className="container-fluid bg-dark text-light">
      <div className="col">
        <div className="row m-3 mt-4 justify-content-center align-items-center m-0">
          <div className="col-9">
            <textarea
              className="form-control"
              rows="2"
              placeholder="Chat..."
            ></textarea>
          </div>
          <div className="col">
            <button type="button" className="btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
