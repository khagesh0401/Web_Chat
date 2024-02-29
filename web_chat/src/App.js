import "./App.css";
import logo from "../src/l.png";
export default function App() {
  return (
    <div className="App">
      <Sidenav />
      <Contactlist />
      <Chatwindow />
      <Mediabar />
    </div>
  );
}

function Sidenav() {
  return (
    <div className="side-nav-bar">
      <img src={logo} alt="Logo" height="50px" />
      Side nav bar
    </div>
  );
}

function Contactlist() {
  return (
    <div className="contact-list">
      <div className="search-contact-div">
        <input type="text" className="search-contact-input" />
      </div>
    </div>
  );
}

function Chatwindow() {
  return <div className="chat-window">Chat window</div>;
}
function Mediabar() {
  return <div className="media-bar">Media bar</div>;
}
