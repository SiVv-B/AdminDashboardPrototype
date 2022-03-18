import React from "react";
import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Protoype.Admin✨</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">000</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">0000</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://www.pinclipart.com/picdir/middle/535-5358840_transparent-queen-clipart-png.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}