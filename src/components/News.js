import React, { Component } from 'react';

class News extends Component {
    state = {  }
    render() { 
        console.log(this.props.news,"news")
        return (
            <div className="news m-3">
                <div clasName="news-image">
                  <img className="news-img"src={this.props.news.imageurl} alt="news-img"></img>
                </div>
                <div className="news-conent">
                   <div className="news-title" >{this.props.news.source_info.name}</div>
                   <h5 className="news-heading">{this.props.news.title}</h5>
                   <p  className="news-info"numberOfLines={1}>
                 {this.props.news.body.length < 200
                ? `${this.props.news.body}`
                : `${this.props.news.body.substring(0, 200)}...`}
                 </p>
                   <div style={{color: "#999",fontSize:"13px"}}>Categories:{this.props.news.categories}</div>
                </div>
            </div>
          );
    }
}
 
export default News;