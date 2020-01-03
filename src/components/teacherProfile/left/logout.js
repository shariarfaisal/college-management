const logout = (history) => {
  const sure = window.prompt('Are you sure you want to logout? yes/no')
  if(sure === 'yes' || sure === 'y'){
    localStorage.removeItem('teacher')
    window.location = '/login/teacher'
  }
}

export default logout
