import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();
console.info(browserHistory);

export const locationReplace = (location) => {
  browserHistory.replace(location)
}

export const locationPush = (location) => {
  browserHistory.push(location)
}
