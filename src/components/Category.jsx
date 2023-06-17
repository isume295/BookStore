import React from 'react';
import { styled } from 'styled-components';

export default function Category() {
  return (
    <div>
      <Select id="category" name="category">
        <option value="" disabled selected>Category</option>
        <option value="non">non fiction</option>
        <option value="fiction">fiction</option>
      </Select>
    </div>
  );
}

const Select = styled.select`
        height: 2.813rem;
        padding: 0 10px;
        outline: none;
        border: 1px solid rgba(136, 136, 136, 0.5);
        border-radius: 4px;
        background-color: rgb(255, 255, 255);   
        font-size: 1rem; 
        letter-spacing: -0.15px;
        width: 100%;
        color: #787878;
`;
