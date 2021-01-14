import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import { withRouter } from 'react-router';
import { PageHeader, DateSearch } from '../../Components';
import { Api } from '../../Services';

const ContractStatsPage = () => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const getRecuiterStats = async (startDate, endDate) => {
    setLoading(true);
    let recruiterStats = null;
    try {
      if (startDate == null || startDate === '' || startDate === 'undefined') {
        recruiterStats = await Api().get(`/Recruiters/GetRecruitersStats`);
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
          `/Recruiters/GetRecruitersStats?startDate=${myStart}&endDate=${myEnd}`,
        );
      }
      setStats(recruiterStats.data);
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
        <td>{recruiter.RecruiterName}</td>
        <td className='text-center'>{recruiter.CandidateCalls}</td>
        <td className='text-center'>{recruiter.Emailed}</td>
        <td className='text-center'>{recruiter.Accepted}</td>
        <td className='text-center'>{recruiter.Confirmed}</td>
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
        <PageHeader Text='Recruiter Stats (Contract)' />
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
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Name</th>
                <th className='text-center'>Candidate Calls</th>
                <th className='text-center'>Emailed</th>
                <th className='text-center'>Accepted</th>
                <th className='text-center'>Confirmed</th>
              </tr>
            </thead>
            <tbody>{stats.map(renderRecruiter)}</tbody>
          </table>
        )}
      </div>
    </>
  );
};

const ContractStats = withRouter(ContractStatsPage);
export default ContractStats;
