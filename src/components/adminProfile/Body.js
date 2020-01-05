import React from 'react'
import LeftSection from './left/LeftSection'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'


const Body = ({children}) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <LeftSection />
        <Grid item md={9} lg={10}>
          <Grid container spacing={2}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

// <div className="mx-auto" style={{width:'80%'}}>
//   <div className="row">
//     <LeftSection />
//     <div className="col-md-9 col-lg-10">
//       <div className="row">
//         {children}
//       </div>
//     </div>
//   </div>
// </div>


export default Body
