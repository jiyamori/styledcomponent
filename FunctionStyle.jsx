import React from 'react'
import styled from 'styled-components';
import ImageWe from './WebDeveloper.jpg';


const Container = styled.div`
display: flex;
background-color: lightgray;
`

const Left = styled.div`
width:60%;
background-color: lightgray;
display: flex;
padding: 10px 10px;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.div`
width: 100%;
font-size:28px;
line-height: 34px;
font-weight: bold;
color: darkred;
text-align: left;
padding-bottom: 10px;

`

const Description = styled.p`
font-size: 16px;
color: black;
width: 100%;
`

const Right = styled.div`
width:40%;
background-color: white;
display : flex;
align-items:left;
`

const WebImg = styled.img`
width : 375px;
height: auto;
`
 

 const FunctionStyle = () => {
  return (
    <Container>
        <Left><Title>
          IT- Management-IT Support and IT Services for everyone!
          </Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus, at. Laborum at earum eaque aspernatur distinctio,
             libero odit officia blanditiis totam, 
             quam id nesciunt! Esse adipisci modi vero quo aliquid!</Description>
          </Left>
        <Right><WebImg src ={ImageWe}/></Right>
    </Container>
  )
}

export default FunctionStyle;
