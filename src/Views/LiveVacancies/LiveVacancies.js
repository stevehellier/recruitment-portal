import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router';
import { PageHeader } from '../../Components';
import { Api } from '../../Services';

const VacanciesPage = () => {
  const [loading, setLoading] = useState(false);
  const [vacancies, setVacancies] = useState([]);

  const getVacancies = async (startDate, endDate) => {
    setLoading(true);
    let vacanciesStats = null;
    try {
      if (startDate == null || startDate === '' || startDate === 'undefined') {
        vacanciesStats = await Api().get(`/Vacancies/GetVacancies`);
      } else {
        let startYear = startDate.getFullYear();
        let startMonth = ('0' + (startDate.getMonth() + 1)).slice(-2);
        let startDay = ('0' + startDate.getDate()).slice(-2);
        let myStart = `${startYear}-${startMonth}-${startDay}`;

        let endYear = endDate.getFullYear();
        let endMonth = ('0' + (endDate.getMonth() + 1)).slice(-2);
        let endDay = ('0' + endDate.getDate()).slice(-2);
        let myEnd = `${endYear}-${endMonth}-${endDay}`;

        vacanciesStats = await Api().get(
          `/Vacancies/GetVacancies?startDate=${myStart}&endDate=${myEnd}`,
        );
      }
      setVacancies(vacanciesStats.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const renderVacancies = (vacancy, index) => {
    return (
      <tr key={index}>
        <td>{vacancy.OpportunityRef}</td>
        <td>{vacancy.OpportunityName}</td>
        <td>{vacancy.NumberRequired}</td>
        <td>{vacancy.PersonsPlaces}</td>
        <td>{vacancy.OrganisationName}</td>
        <td>{vacancy.EmailCVSent}</td>
        <td>{vacancy.EmailSentPercentage}</td>
        <td>{vacancy.RoleType}</td>
        <td>{vacancy.DateOpened}</td>
        <td>{vacancy.RecsponsibleTeamCode}</td>
        <td>{vacancy.ContactRef}</td>
        <td>{vacancy.ContactName}</td>
        <td>{vacancy.Status}</td>
      </tr>
    );
  };

  useEffect(() => {
    (async () => {
      getVacancies();
    })();
  }, []);

  return (
    <>
      <div className='container-fluid'>
        <PageHeader Text='Live Vacancies' />
        {!loading && (
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Opportunity Ref</th>
                <th>Opportunity Name</th>
                <th>Required</th>
                <th>Placed</th>
                <th>Organisation Name</th>
                <th>Email CV Sent</th>
                <th>Email Sent %</th>
                <th>Type</th>
                <th>Date Opened</th>
                <th>Team</th>
                <th>Contact Ref</th>
                <th>Contact Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{vacancies.map(renderVacancies)}</tbody>
          </table>
        )}
      </div>
    </>
  );
};

const Vacancies = withRouter(VacanciesPage);
export default Vacancies;
