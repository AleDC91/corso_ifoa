import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Favourites() {
  const favouriteList = useSelector((state) => state.favourites);

  return (
<div className="favourites">
  <h1 className="text-center my-4">favourite list</h1>
  {favouriteList && (
    <ListGroup as="ul" className="mx-5">
      {favouriteList.map((company, index) => (
        <Link className="list-group-item" to={'/' + company} key={index}>{company}</Link>
      ))}
    </ListGroup>
  )}
</div>
  );
}
