import { Component } from "react";


class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + (this.props.elementId), {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDU5NDBkOGEyMDAwMThhNDhhNWQiLCJpYXQiOjE3MDMxNjc0NjMsImV4cCI6MTcwNDM3NzA2M30.FNp9FtH_mjgQMWxR5u1GspMZqWYZCQWt0yAN8lWvDN4",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        this.setState({ comments: data });
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    
    return (
      <div className={`rounded-3 bg-light mt-1 ${this.props.selected ? "d-block" : "d-none"}`}>
        <p>Comments: </p>
        <ul>
          {this.state.comments.map(comment => (
            <li key={comment._id} className="text-start">{comment.comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CommentArea;
