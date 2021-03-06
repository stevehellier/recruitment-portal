import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

import { withRouter } from 'react-router';
import { PageHeader, DateSearch } from '../../Components';
import { Api } from '../../Services';

const PermStatsPage = () => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const getRecuiterStats = async (startDate, endDate) => {
    setLoading(true);
    let recruiterStats = null;
    try {
      if (startDate == null || startDate === '') {
        recruiterStats = await Api().get(`/Recruiters/GetPermRecruitersStats`);
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
          `/Recruiters/GetPermRecruitersStats?startDate=${myStart}&endDate=${myEnd}`,
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
        <td className='text-center'>{recruiter.ClientCalls}</td>
        <td className='text-center'>{recruiter.VacanciesCreated}</td>
        <td className='text-center'>{recruiter.Interviews}</td>
        <td className='text-center'>{recruiter.Emailed}</td>
        <td className='text-center'>{recruiter.Offers}</td>
        <td className='text-center'>{recruiter.Invoiced}</td>
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
  };

  useEffect(() => {
    (async () => {
      getRecuiterStats();
    })();
  }, []);

  return (
    <>
      <Container fluid>
        <PageHeader Text='Recruiter Stats (Perm)' />
        <DateSearch
          handleClearFormClick={handleClearFormClick}
          onSearchButtonClick={onSearchButtonClick}
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          loading={loading}
        />
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th className='text-center'>Candidate Calls</th>
              <th className='text-center'>Client Calls</th>
              <th className='text-center'>Vancancies Created</th>
              <th className='text-center'>Interviews</th>
              <th className='text-center'>Emailed</th>
              <th className='text-center'>Offers</th>
              <th className='text-center'>Invoiced</th>
            </tr>
          </thead>
          <tbody>{stats.map(renderRecruiter)}</tbody>
        </table>
      </Container>
    </>
  );
};

const PermStats = withRouter(PermStatsPage);
export default PermStats;
