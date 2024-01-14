import React from 'react'
import "../styles/MyFooter.css";

export default function MyFooter() {
  return (
    <div className='footer m-4'>
I         <p className='copyright'> &copy;EpiBooks  {new Date().getFullYear()}</p>
      </div>
  )
}


// export default class 
//  extends Component {
//   render() {
//     return (
//       <div className='footer'>
//         <p className='copyright'> &copy;EpiBooks  {new Date().getFullYear()}</p>
//       </div>
//     )
//   }
// }
