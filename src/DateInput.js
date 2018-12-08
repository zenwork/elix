import { stateChanged } from './utilities.js';
import * as symbols from './symbols.js';
import CalendarElementMixin from './CalendarElementMixin.js';
import Input from './Input.js';


const previousStateKey = Symbol('previousState');


const Base =
  CalendarElementMixin(
    Input
  );


class DateInput extends Base {

  componentDidMount() {
    if (super.componentDidMount) { super.componentDidMount(); }
    this.$.inner.addEventListener('blur', () => {
      this[symbols.raiseChangeEvents] = true;
      this.setState({
        focused: false
      });
      this[symbols.raiseChangeEvents] = false;
    });
    this.$.inner.addEventListener('focus', () => {
      this[symbols.raiseChangeEvents] = true;
      this.setState({
        focused: true
      });
      this[symbols.raiseChangeEvents] = false;
    });
  }

  get defaultState() {
    return Object.assign({}, super.defaultState, {
      date: null,
      focused: false
    });
  }

  refineState(state) {
    let result = super.refineState ? super.refineState(state) : true;
    state[previousStateKey] = state[previousStateKey] || {
      date: null,
      focused: false,
      value: null
    };
    const changed = stateChanged(state, state[previousStateKey]);
    const { date, focused, value } = state;
    if (changed.date || changed.focused) {
      // Update value from date if we're not focused.
      if (!focused) {
        if (date !== null) {
          const dateTimeFormat = new Intl.DateTimeFormat(state.locale, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
          });
          const formattedDate = dateTimeFormat.format(date);
          if (state.value !== formattedDate) {
            state.value = formattedDate;
            result = false;
          }
        } else if (state.value !== '') {
          state.value = '';
          result = false;
        }
      }
    } else if (changed.value) {
      // Update date from value.
      const parsedDate = parseDate(value);
      if (parsedDate === null) {
        if (date !== null) {
          state.date = null;
          result = false;
        }
      } else {
        if (date === null || parsedDate.getTime() !== date.getTime()) {
          state.date = parsedDate;
          result = false;
        }
      }
    }
    return result;
  }

}


// Parse the given text as a date.
// Ignore whitespace at the beginning.
// If there are no date separators, return null.
// If there's only one date separator, add the current year.
function parseDate(text) {
  const dateRegex = /^\s*(\d+)[\/\-. ](\d+)(?:[\/\-. ](\d+))?/;
  const match = dateRegex.exec(text);
  if (!match) {
    return null;
  }
  const time = Date.parse(text);
  if (isNaN(time)) {
    return null;
  }
  const date = new Date(time);
  if (!match[3]) {
    const currentYear = (new Date()).getFullYear();
    date.setFullYear(currentYear);
  }
  return date;
}


export default DateInput;
customElements.define('elix-date-input', DateInput);