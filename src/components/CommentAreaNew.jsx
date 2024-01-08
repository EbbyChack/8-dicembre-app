import { Component } from "react";

class CommentAreaNew extends Component {
    render() {
        return (
            <div>
            <h4 className="mt-5">Comment area</h4>
            <p>{this.props.comments}</p>
            </div>
        )
    }
}
export default CommentAreaNew;