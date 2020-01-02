
const activer = (props,items) => {
  const path = props.location.pathname.split('/').filter(i => i)[0]
  return items.map(i => {
    if(i.to === '/' && path === undefined){
      i.isActive = true
      return i
    }
    i.isActive = i.to.includes(path)
    return i
  })
}

export default activer
