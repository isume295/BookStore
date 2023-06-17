import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { Circle } from 'rc-progress';
import { getBooks, removeBook } from '../redux/books/booksSlice';

export default function BookItem({ list }) {
  const dispatch = useDispatch();

  const handleRemove = async (id) => {
    await dispatch(removeBook(id));
    await dispatch(getBooks());
  };
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
          <button
            type="button"
            onClick={() => handleRemove(list.item_id)}
          >
            Remove
          </button>
          <div className="line" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="detail-container">
        <div className="progress-container">
          <Circle percent={50} strokeColor="#379cf6" strokeWidth={6} trailColor="#e8e8e8" trailWidth={6} style={{ width: 90 }} strokeLinecap="square" />
          <div className="bar-detail">
            <span className="percent-number">50%</span>
            <span className="completed">completed</span>
          </div>
        </div>
        <div className="details update-progress">
          <span className="chapter">CURRENT CHAPTER</span>
          <h3 className="chapter c-size">Chapter 14</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
margin: 20px 3rem;
height: 10.625rem;
padding: 2rem 1.688rem 1.625rem 1.688rem;
background-color: white;
border: solid 1px #e8e8e8;
display: flex;
justify-content: space-between;
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

   .detail-container{
    width: 40%;
    display: flex;
    gap: 50px;
   
    .progress-container{
      width: 50%;
    
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      border-right: 1.4px solid #e8e8e8;

      .bar-detail{
        display: flex;
        flex-direction: column;
        .percent-number{
         font-family: Montserrat;
         font-size: 2.5rem;
         color: #121212;
        }
        .completed{
          width: 5rem;
         opacity: 0.5;
        font-family: Montserrat;
        font-size: 1.3rem;
        color: #121212;
        }
      }
    }
     .chapter{
    opacity: 0.5;
    font-family: RobotoSlab;
    font-size: 1rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
     }
     .c-size {
      font-size: 1rem;
      padding-bottom: 20px;
     }
     button{
        width: 100%;
        font-family: RobotoSlab;
        padding: 8px 0;
        font-size: 0.813rem;
        letter-spacing: 0.5px;
        color: #fff;
        background-color: #0290ff;
        border-radius: 3px;
        border: solid 1px #0290ff;
        font-weight: 300;
  
 
 
 
    }
   }

`;
