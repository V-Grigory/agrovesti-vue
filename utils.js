const getNormDate = (date) => {
  // let d = new Date('2018-07-06 07:29:34');
  if(!date) return;
  let d = new Date(date);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day  = d.getDate();
  let textMonth = {
    1: 'января',
    2: 'февраля',
    3: 'марта',
    4: 'апреля',
    5: 'мая',
    6: 'июня',
    7: 'июля',
    8: 'августа',
    9: 'сентября',
    10: 'октября',
    11: 'ноября',
    12: 'декабря',
  };
  return `${day} ${textMonth[month]} ${year}`;
};

module.exports = utils = {
  getNormDate
};
