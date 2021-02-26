import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./game.css"

class GameItem extends Component {

    render() {

        const {
          id,
    image,
                      name,
                      description,
    s_description,

            text,
                      long_text,
    share,
            comment,
            reiting,
            genre,
    category,
        } = this.props;

        return (
          <>
                      <img src={image} alt="img"/>
      <div className="gam-game-cont-box">
       
        <div className="gam-game-rating">{reiting}</div>
      <div className="gam-game-name">{name}</div>
      <div className="gam-descrip-name">{description} <span className="gam-descrip-name-green">{s_description}</span></div>
      <div className="gam-game-text">{text}</div>
      <div className="gam-game-ico-box">
        <div className="gam-game-num">{share}</div>
        <div className="gam-dowland-ico"><i className="fas fa-rocket"></i></div>
        <div className="gam-game-num">{comment}</div>
        <div className="gam-comment-ico"><i className="far fa-comment-alt"></i></div>
        </div>
          
 </div>
</>
        )
    }
}


GameItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
};

GameItem.defaultProps = {
    description: "No description",
    image: "images/no-image.png",
};

export default GameItem;
