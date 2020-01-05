import { getLogout } from '../../users'

const logout = (history) => {
  const sure = window.prompt('Are you sure you want to logout? yes/no')
  if(sure === 'yes' || sure === 'y'){
    getLogout('admin')
    window.location = '/'
  }
}

export default logout
