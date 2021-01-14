import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import { withRouter } from 'react-router';
import { PageHeader, DateSearch } from '../../Components';
import { Api } from '../../Services';

const RecruitersActivityPage = () => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState([]);
  const [statsCount, setStatsCount] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const getRecuiterStats = async (startDate, endDate) => {
    setLoading(true);
    let recruiterStats = null;
    try {
      if (startDate == null || startDate === '' || startDate === 'undefined') {
        recruiterStats = await Api().get(`/Recruiters/GetRecruitersActivity`);
      } else {
        let startYear = startDate.getFullYear();
        let startMonth = ('0' + (startDate.getMonth() + 1)).slice(-2);
        let startDay = ('0' + startDate.getDate()).slice(-2);
        let myStart = `${startYear}-${startMonth}-${startDay}`;

        let endYear = endDate.getFullYear();
        let endMonth = ('0' + (endDate.getMonth() + 1)).slice(-2);
        let endDay = ('0' + endDate.getDate()).slice(-2);
        let myEnd = `${endYear}-${endMonth}-${endDay}`;

        recruiterStats = await Api().get(
          `/Recruiters/GetRecruitersActivity?startDate=${myStart}&endDate=${myEnd}`,
        );
      }
      setStats(recruiterStats.data);
      setStatsCount(recruiterStats.data.length);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onSearchButtonClick = (e) => {
    e.preventDefault();
    getRecuiterStats(startDate, endDate);
  };

  const renderRecruiter = (recruiter, index) => {
    return (
      <tr key={index}>
        <td className='text-center'>{recruiter.ProfileRef}</td>
        <td className='text-center'>{recruiter.LastName}</td>
        <td className='text-center'>{recruiter.FirstName}</td>
        <td className='text-center'>{recruiter.EventDate}</td>
        <td className='text-center'>{recruiter.EventTime}</td>
        <td className='text-center'>{recruiter.VacancyStartDate}</td>
        <td className='text-center'>{recruiter.BookingStartDate}</td>
        <td className='text-center'>{recruiter.OrganisationName}</td>
        <td className='text-center'>{recruiter.OpportunityName}</td>
        <td className='text-center'>{recruiter.VacancyRef}</td>
        <td className='text-center'>{recruiter.EventType}</td>
        <td className='text-center'>{recruiter.RecruiterName}</td>
      </tr>
    );
  };

  const handleStartDateChange = (date) => {
    if (date == null) {
      setStartDate(null);
    } else {
      let year = date.getFullYear();
      let month = ('0' + date.getMonth()).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);

      setStartDate(new Date(year, month, day));
    }
  };
  const handleEndDateChange = (date) => {
    if (date == null) {
      setEndDate(null);
    } else {
      let year = date.getFullYear();
      let month = ('0' + date.getMonth()).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);
      setEndDate(new Date(year, month, day));
    }
  };

  const handleClearFormClick = () => {
    setStartDate(null);
    setEndDate(null);
    getRecuiterStats();
  };

  useEffect(() => {
    (async () => {
      getRecuiterStats();
    })();
  }, []);

  return (
    <>
      <div className='container-fluid'>
        <PageHeader Text='Recruiter Activity' />
        <DateSearch
          handleClearFormClick={handleClearFormClick}
          onSearchButtonClick={onSearchButtonClick}
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          loading={loading}
        />
        {!loading && (
          <>
          <span>Count: {statsCount} </span>
          <table className='table table-striped'>
            <thead>
              <tr  className='text-center'>
                <th>Profile Ref</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <th>Vacancy Start Date</th>
                <th>Booking Start Date</th>
                <th>Organisation</th>
                <th>Vacancy</th>
                <th>Vacancy Ref</th>
                <th>Event Type</th>
                <th>Recruiter</th>
              </tr>
            </thead>
            <tbody>{stats.map(renderRecruiter)}</tbody>
          </table>
          </>
        )}
      </div>
    </>
  );
};

const RecruitersActivity = withRouter(RecruitersActivityPage);
export default RecruitersActivity;
