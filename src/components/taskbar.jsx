import React from "react";
import "../App.css";
import "./taskbar.css";
function Taskbar() {
  return (
    <div className="taskbar">
      <div className="nothing">
        <h1>.</h1>
      </div>
      <div className="logo">
        <img
          className="logo-img"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          alt="revolve"
        />
        <h1>Revolve</h1>
      </div>
      <div className="title">
        <h1>
          <span>Hi</span> Username,
        </h1>
      </div>
      <div className="search">
        <div className="input">
          <span className="material-symbols-outlined">search</span>
          <input id="dsc" placeholder="Search here..." className="inp"></input>
        </div>
      </div>
      <div className="lang">
        <img
          src="https://cdn.countryflags.com/thumbs/andorra/flag-round-250.png"
          alt="flag"
        ></img>
        <select name="countries" id="countries">
          <option
            value="ad"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag ad"
            data-title="Andorra"
          >
            Andorra
          </option>
          <option
            value="ae"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag ae"
            data-title="United Arab Emirates"
          >
            United Arab Emirates
          </option>
          <option
            value="af"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag af"
            data-title="Afghanistan"
          >
            Afghanistan
          </option>
          <option
            value="ag"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag ag"
            data-title="Antigua and Barbuda"
          >
            Antigua and Barbuda
          </option>
          <option
            value="ai"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag ai"
            data-title="Anguilla"
          >
            Anguilla
          </option>
          <option
            value="al"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag al"
            data-title="Albania"
          >
            Albania
          </option>
          <option
            value="am"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag am"
            data-title="Armenia"
          >
            Armenia
          </option>
          <option
            value="an"
            data-image="images/msdropdown/icons/blank.gif"
            data-imagecss="flag an"
            data-title="Netherlands Antilles"
          >
            Netherlands Antilles
          </option>
        </select>
        <div className="noti">
          <span className="material-symbols-outlined">notifications</span>
        </div>
      </div>
      <div className="profile">
        <div className="material">
          <span className="material-symbols-outlined">person</span>
        </div>
        <div className="usn">
          <h3>Username</h3>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Taskbar;
