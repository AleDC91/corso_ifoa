import React, {Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

// export default function CommentArea(
//   getData,
//   titleSelected,
//   selected,
//   selectedBook,
//   comments,
//   isCommentLoading,
//   handleDeleteComment,
//   errorMsg,
//   handleSubmitComment
// ) {
//   // useEffect(() => {
//   //   getData();
//   // }, []);

//   return (
//     <div className="comment-area">
//       <h2>{titleSelected}</h2>
//       <CommentList
//         selected={selected}
//         asin={selectedBook}
//         comments={comments}
//         isCommentLoading={isCommentLoading}
//         handleDeleteComment={handleDeleteComment}
//         errorMsg={errorMsg}
//       />
//       <AddComment
//         selected={selected}
//         asin={selectedBook}
//         handleSubmitComment={handleSubmitComment}
//         errorMsg={errorMsg}
//       />
//     </div>
//   );
// }

export default class CommentArea extends Component {

  componentDidMount() {
   this.props.getData()
  }

  render() {
    return (
      <div className="comment-area">
        <h2>{this.props.titleSelected}</h2>
        <CommentList
          selected={this.props.selected}
          asin={this.props.selectedBook}
          comments={this.props.comments}
          isCommentLoading={this.props.isCommentLoading}
          handleDeleteComment={this.props.handleDeleteComment}
          errorMsg={this.props.errorMsg}
        />
        <AddComment
        titleSelected={this.props.titleSelected}
          selected={this.props.selected}
          asin={this.props.selectedBook}
          handleSubmitComment={this.props.handleSubmitComment}
          errorMsg={this.props.errorMsg}
        />
      </div>
    );
  }
}
