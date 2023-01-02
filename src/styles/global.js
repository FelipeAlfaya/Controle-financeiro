import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }

  main {
    background: url("../../public/bg.jpg") no-repeat center center;
    background-size: cover;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: url('../../public/bg.jpg') no-repeat center center;
  }
`

export default Global
