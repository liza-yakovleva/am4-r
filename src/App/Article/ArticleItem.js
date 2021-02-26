import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./article.css"

class ArticleItem extends Component {

    render() {

        const {
          id,
            date,
    month,
    image,
    s_name,
    share,
    comment,
    name,
    description,
    text,
    long_text,
    genre,
    category,
        } = this.props;

        return (
          <>
    <div className="artc-article-img-name">
      <div className="artc-article-img-name__img">
        <div className="artc-article-img-name__img-date artc-color-2">
          <span className="artc-date-number">{date}</span>
          <span className="artc-date-month">{month}</span>
        </div>
        <div className="artc-article-img-name__img-image">
          <img src={image} alt="img"/>
        </div>
      </div>
      <div className="artc-article-img-name__state">
        <div className="artc-article-name">{s_name}</div>
        <div className="artc-art-ico-box">
          <div className="artc-art-num">{share}</div>
          <div className="artc-dowland-ico"><i className="fas fa-rocket"></i></div>
          <div className="artc-art-num">{comment}</div>
          <div className="artc-comment-ico"><i className="far fa-comment-alt"></i></div>
        </div>
      </div>
    </div>
    <div className="artc-article-main-name">{name}</div>
    <div className="artc-article-main-content">
      <p className="artc-italic">{description}</p>
      <p className="artc-norm">{text}</p>
    </div>
    </>
        )
    }
}


ArticleItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
};

ArticleItem.defaultProps = {
    description: "No description",
    image: "images/no-image.png",
};

export default ArticleItem;
