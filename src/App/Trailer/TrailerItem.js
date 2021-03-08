import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import "./trailer.css"
import ReactPlayer from 'react-player/youtube'
class TrailerItem extends Component {

    render() {

        const {
          id,
           image,
            name,
            description,
            long_text,
            genre,
    category,
        } = this.props;

        return (
           <>
            <Link to={`/trailer/${id}`}> <img src={image} alt="img"></img></Link>
         <div className="trail-cont-box-tr">
        <div className="trail-rating-tr"><i className="fas fa-play"></i></div>
      <Link to={`/trailer/${id}`}><div className="trail-name-tr">{name}</div></Link>
      <div className="descrip-name-tr">{description}</div>  
       </div>
    </>
        )
    }
}


TrailerItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
};

TrailerItem.defaultProps = {
    description: "No description",
    image: "images/no-image.png",
};

export default TrailerItem;
