import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const MessageItem = ({
  date,
  profileImageUrl,
  text,
  username,
  removeMessage,
  isCurrentUser
}) => (
  <div>
    <li className="list-group-item">
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
        height="100"
        width="100"
        className="timeline-image"
      />
      <div className="message-area">
        <Link to="/">@{username} &nbsp;</Link>
        <span className="text-muted">
          <Moment className="text-muted" format="MMM DD YYYY">
            {date}
          </Moment>
        </span>
        <p>{text}</p>
        {isCurrentUser && (
          <a className="btn btn-danger" onClick={removeMessage}>
            Delete
          </a>
        )}
      </div>
    </li>
  </div>
);

export default MessageItem;
