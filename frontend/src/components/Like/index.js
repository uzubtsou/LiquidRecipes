import React, {Component} from "react";

class Like extends Component {

  putLike() {
    if (!this.props.pressed)
      this.props.interaction.createLike(this.props.entityId);
    else
      this.props.interaction.removeLike(this.props.entityId);
    
  }

  render() {
    return (
      <div onClick={this.putLike.bind(this)}>
        <span className={"label " + (this.props.pressed ? "label-primary" : "label-success")}>
          ❤️ {this.props.likes.length === 0 ? "No likes" : this.props.likes.length}
        </span>
      </div>
    );
  }
}

export const LikeComponent = Like;
