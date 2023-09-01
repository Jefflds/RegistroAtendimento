import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input,
    textarea {
      padding: 10px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      border-radius: 5px;
      font-size: 16px;
    }

    select {
      padding: 10px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      border-radius: 5px;
      font-size: 16px;
    }

    select option {
      background-color: white; 
      color: #333;
      font-size: 16px;
      border: none;
      border-radius: 5px;
    }

    button {
      background-color: #000;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #333;
      }
    }
  }
`;