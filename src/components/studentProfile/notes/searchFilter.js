
const searchFilter = (data,search) => {
  if(search){
    const regExp = new RegExp(search,'i')
    return data.filter(i => i.title.match(regExp))
  }
  return data
}

export default searchFilter
