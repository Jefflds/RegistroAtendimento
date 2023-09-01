import styled from "styled-components";

export const ListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  .info-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    strong {
      font-weight: bold;
      margin-right: 10px;
      color: #333;
    }

    .info-row strong {
      width: 180px;
    }

    span {
      color: #666;
    }
  }

  .description {
    margin-top: 10px;
    color: #444;
  }

  button {
    background-color: #ff4f4f;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #d13f3f;
    }
  }
  .edit-button {
    background-color: #4caf50;
    margin-right: 10px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #45a049;
    }
  }

  .edit-form {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    input,
    textarea {
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      background-color: #4caf50;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #45a049;
      }
    }

    select,
    input[type="text"],
    textarea {
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    select {
      width: 100%;
      font-size: 14px;
      padding: 8px;
    }
  }
`;
