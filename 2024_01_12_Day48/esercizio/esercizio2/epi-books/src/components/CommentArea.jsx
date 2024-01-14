import React  from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default function CommentArea({
  isCommentLoading,
  handleSubmitComment,
  handleDeleteComment,
  comments,
  selectedBook,
  titleSelected,
  errorMsg
}) {
  return (
    <div className="comment-area">
        <h2>{titleSelected}</h2>
        <CommentList
          asin={selectedBook}
          comments={comments}
          isCommentLoading={isCommentLoading}
          handleDeleteComment={handleDeleteComment}
          errorMsg={errorMsg}
          titleSelected={titleSelected}
        />
        <AddComment
          titleSelected={titleSelected}
          asin={selectedBook}
          handleSubmitComment={handleSubmitComment}
          errorMsg={errorMsg}
        />
      </div>
  )
}


// export default class CommentArea extends Component {

//   componentDidMount() {
//    this.props.getData()
//   }

//   render() {
//     return (
//       <div className="comment-area">
//         <h2>{this.props.titleSelected}</h2>
//         <CommentList
//           selected={this.props.selected}
//           asin={this.props.selectedBook}
//           comments={this.props.comments}
//           isCommentLoading={this.props.isCommentLoading}
//           handleDeleteComment={this.props.handleDeleteComment}
//           errorMsg={this.props.errorMsg}
//           titleSelected={this.props.titleSelected}

//         />
//         <AddComment
//           titleSelected={this.props.titleSelected}
//           selected={this.props.selected}
//           asin={this.props.selectedBook}
//           handleSubmitComment={this.props.handleSubmitComment}
//           errorMsg={this.props.errorMsg}
//         />
//       </div>
//     );
//   }
// }
