import "../styles/Error.css";

const Error = ({errorMsg}) => {
    return ( 
        <div className="error-box">
            Errore! {errorMsg}
        </div>
     );
}
 
export default Error;