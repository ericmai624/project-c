import React, { Component } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { extendMoment } from 'moment-range';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.moment = extendMoment(Moment);
    this.getDays = this.getDays.bind(this);
  }

  getDays() {
    const days = [];
    const { date } = this.props;

    this.moment.range(
      this.moment(date).startOf('month').startOf('week'),
      this.moment(date).endOf('month').endOf('week')
    ).by('days', day => {
      const element = (
        <div className='day' key={day.format('YYYYMMDD')}>
          {day.format('D')}
        </div>);
      days.push(element);
    });
    console.log(days);
    return days;
  }

  render() {
    return (
      <div>
        {this.getDays()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ date: state.date });

export default connect(mapStateToProps)(Calendar);