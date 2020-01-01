
const getLogout = (history) => {
  const sure = window.prompt('Are you sure you want to logout? yes/no')
  if(sure === 'yes' || sure === 'y'){
    localStorage.removeItem('student')
    window.location = '/login/student'
  }
}

export default getLogout
