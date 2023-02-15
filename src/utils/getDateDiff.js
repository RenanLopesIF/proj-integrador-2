const SEC_IN_MINUTES = (sec) => sec / 60;
const SEC_IN_HOURS = (sec) => SEC_IN_MINUTES(sec) / 60;
const SEC_IN_DAYS = (sec) => SEC_IN_HOURS(sec) / 24;
const SEC_IN_MONTH = (sec) => SEC_IN_DAYS(sec) / 30;
const SEC_IN_YEAR = (sec) => SEC_IN_MONTH(sec) / 12;

const MINUTES_IN_SECONDS = (min) => min * 60;
const HOURS_IN_SECONDS = (hours) => MINUTES_IN_SECONDS(hours * 60);
const DAYS_IN_SECONDS = (days) => HOURS_IN_SECONDS(days * 24);
const MONTH_IN_SECONDS = (months) => DAYS_IN_SECONDS(months * 30);
const YEAR_IN_SECONDS = (years) => MONTH_IN_SECONDS(years * 12);

function getDiffSeconds(dt1, dt2) {
  return Math.abs(dt1.getTime() - dt2.getTime()) / 1000;
}

export function getDateDiff(timestamp) {
  const date1 = new Date(Date.now());
  const date2 = new Date(timestamp);

  const diffSeconds = getDiffSeconds(date1, date2);

  const isBefore = date2.getTime() < date1.getTime();
  // eslint-disable-next-line no-undef
  const rtf = new Intl.RelativeTimeFormat('pt-BR', { style: 'short' });

  const result = isBefore ? -diffSeconds : diffSeconds;

  if (diffSeconds < MINUTES_IN_SECONDS(1)) {
    const secAgo = Math.ceil(result);
    return rtf.format(secAgo, 'seconds');
  } else if (diffSeconds < HOURS_IN_SECONDS(1)) {
    const minAgo = Math.ceil(SEC_IN_MINUTES(result));
    return rtf.format(minAgo, 'minutes');
  } else if (diffSeconds < DAYS_IN_SECONDS(1)) {
    const hAgo = Math.ceil(SEC_IN_HOURS(result));
    return rtf.format(hAgo, 'hours');
  } else if (diffSeconds < MONTH_IN_SECONDS(1)) {
    const dAgo = Math.ceil(SEC_IN_DAYS(result));
    return rtf.format(dAgo, 'days');
  } else if (diffSeconds < YEAR_IN_SECONDS(1)) {
    const mAgo = Math.ceil(SEC_IN_MONTH(result));
    return rtf.format(mAgo, 'months');
  } else {
    const yAgo = Math.ceil(SEC_IN_YEAR(result));
    return rtf.format(yAgo, 'years');
  }
}
