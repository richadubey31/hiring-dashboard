
import './JobList.css';

import React, { useState, useEffect } from "react";
import axios from "axios";

const JobList = ({ searchParams }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch jobs from the backend based on search parameters
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const { keyword, city, category } = searchParams;
      const response = await axios.get("http://localhost:8000/jobs", {
        params: { keyword, city, category },
      });
      setJobs(response.data.data); 
      if (response.data.data.length > 0) {
        setSelectedJob(response.data.data[0]); // Set the first job as selected by default
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs whenever searchParams changes
  useEffect(() => {
    fetchJobs();
  }, [searchParams]);

  // Handle job selection
  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };
  // Display a message if no jobs match the search criteria
  if (!loading && jobs.length === 0) {
    return (
      <div className="no-jobs-message">
        <h2>Job Listings</h2>
        <p>No jobs match your search criteria. Please try again with different terms.</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div className="job-page">
      <div className="job-list-container">
        <h2>Job Listings</h2>
        <div className="job-scroll">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`job-item ${
                selectedJob?.id === job.id ? "selected" : ""
              }`}
              onClick={() => handleSelectJob(job)}
            >
              <h4>{job.title}</h4>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="job-details-container">
        {selectedJob ? (
          <div className="job-details">
            <h2>{selectedJob.title}</h2>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Category:</strong> {selectedJob.category}</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>
            <button
  className="apply-button"
  onClick={() =>
    window.location.href = `http://127.0.0.1:8000/?job_designation=${encodeURIComponent(selectedJob.title)}`
  }
>
  Apply Now
</button>

          </div>
        ) : (
          <p>Select a job to view details.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
