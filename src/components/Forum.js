import React, { Component } from 'react';
class Forum extends Component {
    render() { 
        return (<div className="forum-container m-2">
            <div className="forum-header">
               <img src=""/>
               <p>gojan in </p>
            </div>
            <div className="forum-content m-2">
                content
            </div>
            <div className="forum-footer">
             <div>
                 <span className="fa fa-clock-o"></span>

             </div>
             <div>
                <ul className="list-of-reaction">
                    <li><span className="fa fa-reply"></span>Reply</li>
                    <li><span className="fa fa-thumbs-o-up"></span>Agree</li>
                    <li><span className="fa fa-thumbs-o-down"></span>Disagree</li>
                </ul>
             </div>
            </div>
        </div>);
    }
}
 
export default Forum;