import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ava from "../../assets/image/png/ava.png";
import { BsThreeDotsVertical } from "react-icons/bs";

function CommentCl(props) {
  return (
    <div>
      <div className="line" />
      <div className="ava-comment">
        <div className="avatar">
          <img className="ava" src={ava} alt="avatar" />
        </div>
        <div className="name-comment">
          <p className="name">olaf</p>
          <p className="comment">
            Jadilah pembaca yang cerdas dengan membaca ulasan buku terbaru dari
            para ahli di Book Review.
          </p>
        </div>
        <div className="dots-comment">
          <details class="dropdown">
            <summary role="button">
              <BsThreeDotsVertical size={15} />
            </summary>
            <ul>
              <li className="dropdown-li">
                <a href="#">Update</a>
              </li>
              <li className="dropdown-li">
                <a href="#">Delete</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}

CommentCl.propTypes = {};

export default CommentCl;
