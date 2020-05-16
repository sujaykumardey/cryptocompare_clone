import React, { Component } from 'react';

class News extends Component {
    state = {  }
    render() { 
        console.log(this.props.news,"news")
        return (
            <div className="News m-2">
                <div  sytle={{width: "100px",height: "100px"}}>
                  <img clasName="news-image" sytle={{width: "100px",height: "100px",size: "30%"}}src={this.props.news.imageurl} alt="news-img"/>
                </div>
                <div className="news-conent m-2">
                   <div className="news-title" style={{color:"#f79a35"}}>{this.props.news.source_info.name}</div>
                   <h5 className="news-heading" style={{color:"#337ab7"}}>{this.props.news.title}</h5>
                  <p className="news-info">{this.props.news.body}</p>
                   <div style={{color: "#999",fontSize:"13px"}}>Categories:{this.props.news.categories}</div>
                </div>
            </div>
          );
    }
}
 
export default News;