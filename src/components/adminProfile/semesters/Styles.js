import styled from 'styled-components'

const Styles = styled.div`
  background: #c8c9ca17;
  width: 100%;
  max-height: "300px";
  overflow-Y: auto;
  ul{
    .nav-item{
      .nav-link{
        display: inline-block;
        border-radius: 100px;
      }
      .nav-link:hover{
        text-decoration: underline;
      }
    }
  }
`

export default Styles
