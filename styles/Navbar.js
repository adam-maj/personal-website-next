import styled from 'styled-components'

export const Nav = styled.nav`
  background: #222222 !important;
  padding-left: 30px;
  padding-right: 30px;

  @media (min-width: 720px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`
export const Navlink = styled.a`
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 20px !important;
  margin-right: 30px;
  color: ${props => props.white && 'white !important'}
`
export const Brand = styled.a`
  font-family: 'Rubik' !important;
  font-weight: 800 !important;
  font-size: 35px !important;
  color: white !important;
  text-decoration: none !important;
  margin-bottom: 0px;

  @media (max-width: 720px) {
    display: none;
    margin-right: 0px;
  }
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
`