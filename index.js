const dayjs = require('dayjs')

module.exports = (start, end, direction = 'forward') => {
  if (!start || !end) {
    console.error('NEED START AND END DATE <YYYY-MM-DD>')
    return false
  }
  const s = dayjs(start)
  const e = dayjs(end)
  const dateArr = []
  const l = e.diff(s, 'day')
  for (let i = 0; i <= l; i++) {
    dateArr.push(s.add(i, 'day').format('YYYY_MM_DD'))
  }
  switch (direction) {
    case 'backward':
      return dateArr.reverse()
    default:
      return dateArr
  }
}
