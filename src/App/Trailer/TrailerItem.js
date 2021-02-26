import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./trailer.css"

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
           <img src={image} alt="img" />
         <div className="trail-cont-box-tr">
        <div className="trail-rating-tr"><i className="fas fa-play"></i></div>
      <div className="trail-name-tr">{name}</div>
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
