// src/components/JobDetails.js
import React from "react";

const JobDetails = ({ job }) => {
  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>{job.location}</p>
      <p>{job.category}</p>
      <p>{job.company_name}</p>
      <p>{job.employment_type}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
