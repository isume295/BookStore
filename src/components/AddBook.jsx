/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { styled } from 'styled-components';

export default function AddBook() {
  return (
    <Div>
      <span className="title">ADD NEW BOOK</span>
      <form action="">
        <input className="input-title" type="text" placeholder="Book title" />
        <input className="input-author" type="text" placeholder="Book author" />
        <button className="add-btn" type="submit">Add Book</button>
      </form>
    </Div>
  );
}

const Div = styled.div`
margin: 5px 3rem;
padding: 1rem    ;
border-top: solid 1px #e8e8e8;
display: flex;
flex-direction: column;
gap: 1rem;

.title {
    font-family: Montserrat;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: -0.18px;
    color: #888;
}

form{
    display: flex;
    gap: 10px;
    input {
        height: 2.813rem;
        padding: 0 10px;
        outline: none;
        border: 1px solid rgba(136, 136, 136, 0.5);
        border-radius: 4px;
        background-color: rgb(255, 255, 255);   
        font-family: Montserrat;
        font-size: 1rem; 
        letter-spacing: -0.15px;
    }

    .input-title {
        width: 50%
    }
    .input-author {
        width: 30%
    }
    button{
        width: 20%;
        font-family: RobotoSlab;
        font-size: 0.813rem;
        font-weight: bold;
        letter-spacing: 0.5px;
        color: #fff;
        background-color: #0290ff;
        border-radius: 3px;
        border: solid 1px #0290ff;
    }
}
`;
