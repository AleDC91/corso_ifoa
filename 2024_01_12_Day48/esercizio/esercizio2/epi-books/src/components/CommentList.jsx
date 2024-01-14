import React from "react";
import SingleComment from "./SingleComment";
import LoadingComments from "./LoadingComments";
import ErrorComponent from "./ErrorComponent";

export default function CommentList({
  isCommentLoading,
  errorMsg,
  comments,
  selected,
  handleDeleteComment,
  titleSelected
}) {
  return (
    <div className="comments-list m-3 ">
      {isCommentLoading && <LoadingComments />}
      {errorMsg && <ErrorComponent errorMsg={errorMsg} />}
      {!isCommentLoading &&
        comments &&
        comments.map((comment, index) => (
          <SingleComment
            comment={comment}
            key={index}
            selected={selected}
            comments={comments}
            isCommentLoading={isCommentLoading}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      {!isCommentLoading &&
        comments.length === 0 &&
        titleSelected !== "Seleziona un libro per vedere i commenti" && (
          <p className="text-center fw-bold py-3">
            Commenta per primo questo libro!
          </p>
        )}
    </div>
  );
}

// export default class CommentList extends Component {
//   render() {
//     return (
//       <div className="comments-list m-3 ">
//         {this.props.isCommentLoading && <LoadingComments />}
//         {this.props.errorMsg && <ErrorComponent errorMsg={this.props.errorMsg}/>}
//         {!this.props.isCommentLoading &&
//           this.props.comments.map((comment, index) => (
//             <SingleComment
//               comment={comment}
//               key={index}
//               selected={this.props.selected}
//               comments={this.props.comments}
//               isCommentLoading={this.props.isCommentLoading}
//               handleDeleteComment={this.props.handleDeleteComment}
//             />
//           ))}
//           {!this.props.isCommentLoading && this.props.comments.length === 0 && <p className="text-center fw-bold py-3">Commenta per primo questo libro!</p>}
//       </div>
//     );
//   }
// }
