"use client"
import styled from 'styled-components';
 
const Button = styled.button`
color: #ffffff;
font-size: 1.4em;
height: 50px;
width: 300px;
border-radius: 15px;
cursor: pointer;
background-color: #407575;
`;
export default function ButtonDevspot({ text }) {
    return (
      <Button>
        {text}
      </Button>
    );
  }