import React from "react";
import DeleteCommentButton from "./DeleteCommentButton";
import "../styles/SingleComment.css";
import { FaStar, FaRegStar } from "react-icons/fa";


export default function SingleComment({comment, comments, handleDeleteComment}) {

  const stars = comment.rate;
  return (
    <div className="single-comment d-flex justify-content-between my-2">
        <div className="comment my-2">
          <p>{comment.comment}</p>
          <div className="rate d-flex flex-wrap">
            {(() => {
              switch (stars) {
                case 1:
                  return (
                    <div>
                      <FaStar className="star" />
                      <FaRegStar className="half-star" />
                      <FaRegStar className="half-star" />
                      <FaRegStar className="half-star" />
                      <FaRegStar className="half-star" />
                    </div>
                  );
                case 2:
                  return (
                    <div>
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaRegStar className="half-star" />
                      <FaRegStar className="half-star" />
                      <FaRegStar className="half-star" />
                      <FaRegStar className="half-star" />
                    </div>
                  );
                case 3:
                  return (
                    <div>
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaRegStar className="half-star" />
                      <FaRegStar className="half-star" />
                    </div>
                  );
                case 4:
                  return (
                    <div>
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaRegStar className="half-star" />
                    </div>
                  );
                case 5:
                  return (
                    <div>
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </div>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </div>
        <DeleteCommentButton
          id={comment._id}
          comments={comments}
          handleDeleteComment={handleDeleteComment}
        />
      </div>
  )
}




// export default class SingleComment extends Component {
//   render() {
//     const stars = this.props.comment.rate;

//     return (
//       <div className="single-comment d-flex justify-content-between my-2">
//         <div className="comment my-2">
//           <p>{this.props.comment.comment}</p>
//           <div className="rate d-flex flex-wrap">
//             {(() => {
//               switch (stars) {
//                 case 1:
//                   return (
//                     <div>
//                       <FaStar className="star" />
//                       <FaRegStar className="half-star" />
//                       <FaRegStar className="half-star" />
//                       <FaRegStar className="half-star" />
//                       <FaRegStar className="half-star" />
//                     </div>
//                   );
//                 case 2:
//                   return (
//                     <div>
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaRegStar className="half-star" />
//                       <FaRegStar className="half-star" />
//                       <FaRegStar className="half-star" />
//                       <FaRegStar className="half-star" />
//                     </div>
//                   );
//                 case 3:
//                   return (
//                     <div>
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaRegStar className="half-star" />
//                       <FaRegStar className="half-star" />
//                     </div>
//                   );
//                 case 4:
//                   return (
//                     <div>
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaRegStar className="half-star" />
//                     </div>
//                   );
//                 case 5:
//                   return (
//                     <div>
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                       <FaStar className="star" />
//                     </div>
//                   );
//                 default:
//                   return null;
//               }
//             })()}
//           </div>
//         </div>
//         <DeleteCommentButton
//           id={this.props.comment._id}
//           comments={this.props.comments}
//           handleDeleteComment={this.props.handleDeleteComment}
//         />
//       </div>
//     );
//   }
// }
