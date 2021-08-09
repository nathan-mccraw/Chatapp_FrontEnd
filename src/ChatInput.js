import React from "react";

const ChatInput = ({ submitMessage, ChatMessage, setChatMessage, user }) => {
  return (
    <div className="col">
      <div className="row m-3 mt-4 mb-4 justify-content-center align-items-center">
        <div className="col-9">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Chat..."
            value={ChatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={submitMessage}
          >
            Send
          </button>
        </div>
      </div>
      <div className="row mt4 justify-content-center align-items-baseline">
        <div className="col-auto p-1">sending message as:</div>
        <div className="col-auto p-1 h5 text-primary">
          {user && user.userName}
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
