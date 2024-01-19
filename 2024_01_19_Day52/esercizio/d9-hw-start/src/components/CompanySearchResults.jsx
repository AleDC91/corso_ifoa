import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams, useSearchParams } from "react-router-dom";
import { getJobs } from "../actions/jobsActions";
import { useDispatch, useSelector } from "react-redux";
import ErrorComponent from "./ErrorComponent";
import LoadingJobs from "./LoadingJobs";

const CompanySearchResults = () => {
  const params = useParams();
  const jobs = useSelector(state => state.jobs.jobsList) 
  const loading = useSelector(state => state.jobs.loading)
  const error = useSelector(state => state.jobs.error) 
  const dispatch = useDispatch()
  console.log(jobs)

  useEffect(() => {
   dispatch(getJobs(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {loading && !error && <LoadingJobs />}
          {error && <ErrorComponent error={error} />}
          {jobs && jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
