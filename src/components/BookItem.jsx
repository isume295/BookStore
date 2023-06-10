/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { styled } from 'styled-components';

export default function BookItem({ list }) {
  return (
    <Div>
      <div className="book-detail">
        <div className="details">
          <span className="category">{list.category}</span>
          <h3 className="title">{list.title}</h3>
          <span className="author">{list.author}</span>
        </div>
        <div className="interactions">
          <button type="button">Comment</button>
          <div className="line" />
          <button type="button">Remove</button>
          <div className="line" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress" />
      <div className="progress-update" />
    </Div>
  );
}

const Div = styled.div`
margin: 20px 3rem;
height: 10.625rem;
padding: 2rem 9.188rem 1.625rem 1.688rem;
background-color: white;
border: solid 1px #e8e8e8;
display: flex;
justify-content: flex-start;
align-items: center;
.book-detail{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .details {
        display: flex;
        flex-direction: column;
      .category {
        font-family: Montserrat;
        font-size: 0.875rem;
        font-weight: bold;
        opacity: 0.5;
        color: #121212;
      }
      .title{
        font-family: RobotoSlab;
        font-size: 1.375rem;
        font-weight: bold;
        letter-spacing: -0.2px;
        color: #121212;
      }
      .author{
        font-family: RobotoSlab;
        font-size: 0.875rem;
        font-weight: 300;
        color: #4386bf;
      }
    }
   .interactions {
    display: flex;
    /* gap: 10px; */
    .line{
        width: 0.125rem;
        height: 1.5rem;
        margin: 0 0.5rem;
        border: solid 1px #e8e8e8;
    }
    button {
      background-color: white;
      color: #4386bf;
      border: none;
      padding-right: 10px;
      font-family: RobotoSlab;
      font-size: 0.875rem;
      font-weight: 300;
    }
   } 

}

`;
