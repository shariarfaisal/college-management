import { useQuery } from '@apollo/react-hooks'
import query from './query'

function useMe(props) {
  const { data } = useQuery(query)
  if(data){
    return data
  }
}
export default useMe
