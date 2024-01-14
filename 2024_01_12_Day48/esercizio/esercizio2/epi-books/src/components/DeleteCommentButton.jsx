import React from "react";


export default function DeleteCommentButton({handleDeleteComment, id}) {
  return (
    <button
        className="btn btn-danger my-4"
        onClick={() => handleDeleteComment(id)}
      >
        elimina
      </button>
  )
}


// export default class DeleteCommentButton extends Component {
//   render() {
//     console.log(this.props.id);
//     return (
//       <button
//         className="btn btn-danger my-4"
//         onClick={() => this.props.handleDeleteComment(this.props.id)}
//       >
//         elimina{" "}
//       </button>
//     );
//   }
// }
