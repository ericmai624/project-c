import moment from 'moment';

const PREV_MONTH = 'PREV_MONTH';
const NEXT_MONTH = 'NEXT_MONTH';

const initState = moment();

const updateMonth = (state = initState, action) => {
  switch (action.type) {
  case PREV_MONTH:
    return moment(state).subtract(1, 'month');
  case NEXT_MONTH:
    return moment(state).add(1, 'month');
  default:
    return state;
  }
};

export default updateMonth;