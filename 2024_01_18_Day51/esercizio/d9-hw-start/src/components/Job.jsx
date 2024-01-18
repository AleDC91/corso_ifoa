import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import "../styles/Job.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../actions/favouritesActions";

const Job = ({ data }) => {
const dispatch = useDispatch()
const favouriteList = useSelector(state => state.favourites)
 
function isFavouriteCheck() {
      if(favouriteList.includes(data.company_name)){
        return true;
      } else {
        return false;
      }
  }

  const isFavourite = isFavouriteCheck()
  // console.log(data)
  console.log(isFavourite)
  return (
    <>
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Button 
        className="bg-transparent border-0 me-2"
        onClick={() => {
          if(isFavourite){
          dispatch(removeFavourite(data))
        } else { 
          dispatch(addFavourite(data))
        }
        }}
        >
          {isFavourite ? (
            <FaStar className="star" />
          ) : (
            <FaRegStar className="star" />
          )}
        </Button>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
    </>
  );
};

export default Job;
