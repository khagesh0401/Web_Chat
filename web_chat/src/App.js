import "./App.css";
import logo from "./Images/l.png";
import search from "./Images/loupe.png";
import allchat from "./Images/chatting.png";
import work from "./Images/folder.png";
import friends from "./Images/friends.png";
import news from "./Images/megaphone.png";
import profile from "./Images/account.png";
import edit from "./Images/edit.png";
import archieve from "./Images/box.png";

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

      <div className="logo-collection">
        <div className="allchat">
          <img src={allchat} alt="allchat" height="30px" />
          All chats
        </div>
        <div className="work">
          <img src={work} alt="work" height="30px" />
          Work
        </div>
        <div className="friends">
          <img src={friends} alt="friends" height="30px" />
          Friends
        </div>
        <div className="news">
          <img src={news} alt="news" height="30px" />
          News
        </div>
        <div className="archivechat">
          <img src={archieve} alt="archieve chat" height="30px" />
          Archive chats
        </div>
        <hr />
        <div className="profile">
          <img src={profile} alt="profile" height="30px" />
          Profile
        </div>
        <div className="profile">
          <img src={edit} alt="edit" height="30px" />
          Edit
        </div>
      </div>
    </div>
  );
}

function Contactlist() {
  return (
    <div className="contact-list">
      <div className="search-contact-div">
        <img src={search} alt="search logo" />
        <input type="text" className="search-contact-input" />
      </div>
    </div>
  );
}

function Chatwindow() {
  return (
    <div className="chat-window">
      Chat window
      <div >
        <img src={logo} alt="logo" className="chatwindow-logo"/>
      </div>
    </div>
  );
}
function Mediabar() {
  return <div className="media-bar">Media bar</div>;
}
