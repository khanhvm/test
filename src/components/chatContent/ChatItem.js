// import { message } from "antd";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "../chatList/Avatar";
import person from "../../images/person default.jpg"

export default function ChatItem({ message }) {

    const { user } = useMoralis();

    

    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`${isUserMessage ? "chat__item" : ""}`}
      >
        <div className={`${isUserMessage ? "chat__item__user" : "chat__item__content"}`}>
          <div className="chat__msg">{message.get("message")}</div>
          <div className="chat__meta">
            <span style={{color: "white"}}>{message.get("username")}</span>
            <span style={{color: "white"}}>Seen 1.03PM</span>
          </div>
        </div>
        <Avatar isOnline="active" image={person} />
      </div>
    );
  }
