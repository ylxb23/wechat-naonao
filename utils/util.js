const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${[year, month, day].map(formatNumber).join('/')}`
}
const formatDatetime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const MILLISECONDS_OF_DAY = 24 * 3600 * 1000;

const nextAnniversaryDays = (date) => {
  var _of = new Date();
  var _date = new Date(date);
  _date.setHours(23, 59, 59, 999);
  _of.setHours(23, 59, 58, 999);
  _date.setFullYear(_of.getFullYear());
  if(_of.getTime() > _date.getTime()) {
    _date.setFullYear(_of.getFullYear() + 1);
  }
  return Math.floor((_date.getTime() - _of.getTime()) / MILLISECONDS_OF_DAY);
}

const lastDaysOfDate = (date) => {
  var _now = new Date();
  return Math.ceil((date.getTime() - _now.getTime()) / MILLISECONDS_OF_DAY);
}

module.exports = {
  formatDate, formatDatetime, nextAnniversaryDays, lastDaysOfDate
}
