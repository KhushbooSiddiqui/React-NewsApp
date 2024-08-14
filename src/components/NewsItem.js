import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title,description, imageUrl, newsUrl} = this.props;

    return (
        <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://images.vexels.com/media/users/3/144618/raw/d4b43157b3dc86fd6c87277eeaff7ed7-live-breaking-news-header-image.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read full coverage</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
