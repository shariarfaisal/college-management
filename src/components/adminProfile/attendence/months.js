const feb = new Date().getFullYear()%4 === 0 ? 29 : 28
const months = [
  {v:'01',m: 'January',days:[],td:31},
  {v:'02',m: 'February',days:[],td: feb},
  {v:'03',m: 'March',days:[],td:31},
  {v:'04',m: 'April',days:[],td:30},
  {v:'05',m: 'May',days:[],td:31},
  {v:'06',m: 'June',days:[],td:30},
  {v:'07',m: 'July',days:[],td:31},
  {v:'08',m: 'August',days:[],td:31},
  {v:'09',m: 'September',days:[],td:30},
  {v:'10',m: 'October',days:[],td:31},
  {v:'11',m: 'November',days:[],td:30},
  {v:'12',m: 'December',days:[],td:31},
]

export default months
