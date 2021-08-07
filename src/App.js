import FriendsSideBar from "./FriendsSideBar";
import ChatInput from "./ChatInput.js";
import ChatWindow from "./ChatWindow";

const App = () => {
  return (
    <div className="App container-fluid vh-100">
      <div className="row vh-100">
        <div className="col-md-auto p-0">
          <FriendsSideBar />
        </div>
        <div className="col p-0">
          <div className="row m-0 h-75">
            <ChatWindow />
          </div>
          <div className="row m-0 h-25">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
