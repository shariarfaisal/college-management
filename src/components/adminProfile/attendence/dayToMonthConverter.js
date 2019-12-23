
const dayToMonthConverter = (data,months) => {
  const mn = months.map(i => {
    i.days = []
    return i
  })
  return data.reduce((a,b) => {
    const date = b.date.split('-')[1]
    a[date-1].days.push(b)
    return a
  },mn)
}

export default dayToMonthConverter
