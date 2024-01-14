import React from "react";
import "../styles/Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome to EpiBooks</h1>
      <div className="subtitle">
        <h2> " leggere senza intelligere è come nulla friggere " </h2>
        <p>
          <i> - Joani - </i>
        </p>
      </div>
    </div>
  );
}

// export default class Welcome extends Component {
//   render() {
//     return (
//       <div className="welcome">
//         <h1>Welcome to EpiBooks</h1>
//         <div className="subtitle">
//           <h2> " leggere senza intelligere è come nulla friggere " </h2>
//           <p><i> - Joani - </i></p>
//         </div>
//       </div>
//     );
//   }
// }
