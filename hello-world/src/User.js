import React, { Component } from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return(
            <div className="Comment">
                <UserInfo user={this.state.author} />
                    <div className="Comment-text">
                    {this.state.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.state.date)}
                </div>
            </div>
        )
    }
}

export default User;
