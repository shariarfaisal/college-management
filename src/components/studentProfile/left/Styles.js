import styled from 'styled-components'
const Styles = styled.div`
  .nav{

    .nav-item{
      .nav-link{
        display: inline-block;
        color: rgb(20, 23, 26) !important;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
        overflow-wrap: break-word;
        line-height: 1.3125;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: 1px;
      }
      .nav-link:hover{
        color: black;
        background: lightblue;
        border-radius: 100px;
      }
      .active{
        color: black;
        background: lightblue;
        border-radius: 100px;
      }
    }
  }
`

export default Styles
