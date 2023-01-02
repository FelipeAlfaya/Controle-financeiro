import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 5px 15px;
  width: 30%;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-around;
  width: 100%;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }
`

export const Title = styled.h1`
  font-size: 20px;
  color: #333;
`

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`
