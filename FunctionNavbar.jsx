import React from 'react'
import styled from 'styled-components';
import LogoImage from './Logo (2).png';

const Container= styled.div`
    width : 100%;
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 20px 10px; */
padding: 10px;
`

const  Left = styled.div``;
const  Center = styled.div``;
const  Right = styled.div``;

const ItLogo = styled.img`
width:100px;
height:auto;
`

const Menu = styled.ul`
display: flex;
list-style: none;
margin: 10px;
`
const MenuItem = styled.li `
font-size: 20px;
font-weight: bold;
margin-right: 30px;
color: darkblue;
cursor: pointer;
&:hover{
    background-color: green;
    padding:  5px;
    border-radius:5px;
}
`

const Button = styled.button`
font-weight:bold;
background-color: darkblue;
border: 2px solid white;
cursor: pointer;
color: white;
padding:10px 10px;
border-radius: 10px;
/* margin : 20px 10px; */
`


 const Navbar = () => {
  return (
    
    <Container>
        <Left>
           <ItLogo src={LogoImage}/>
            </Left>
        <Center>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>About us</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Blog</MenuItem>
            </Menu>
        </Center>
        <Right>
            <Button> call us now  </Button>
        </Right>
    </Container>

  )
}

export default Navbar;
