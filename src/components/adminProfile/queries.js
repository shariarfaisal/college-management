import { gql } from 'apollo-boost'


export const depQuery = gql` query{ departments{ id name students{ id } }}`

export const semesterQuery = gql` query{ semesters{ id name }}`

export const sessionQuery = gql` query{ sessions{ id year }}`
