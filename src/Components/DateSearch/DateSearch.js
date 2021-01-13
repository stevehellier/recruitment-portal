import DatePicker from 'react-date-picker';
import { Button } from 'react-bootstrap';

import './DateSearch.css';

const DateSearch = (props) => {
  return (
    <div className='datepicker'>
      <form onSubmit={props.onSearchButtonClick}>
        <span>Search dates between </span>
        <DatePicker
          id='startdate'
          onChange={props.handleStartDateChange}
          value={props.startDate}
          locale='en-GB'
          showLeadingZeros
          clearIcon={null}
        />
        <span> and </span>
        <DatePicker
          id='endate'
          onChange={props.handleEndDateChange}
          value={props.endDate}
          locale='en-GB'
          showLeadingZeros
          clearIcon={null}
        />

        <Button
          disabled={props.loading}
          className='button__clear btn btn-info'
          onClick={props.handleClearFormClick}
        >
          Reset
        </Button>
        <Button
          disabled={props.loading}
          type='submit'
          className='button__search btn btn-success'
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default DateSearch;
