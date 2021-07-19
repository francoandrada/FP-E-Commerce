import styled from 'styled-components';

export const SelectStyles = styled.select`
  padding: 8px 18px;
  border-radius: 8px;
  margin: 0 1rem;
  font-size: 14px;
  font-weight: 600px;
  background-color: rgb(228, 50, 50);
  color: white;
  border: 1px solid gray;

  &:hover {
    background-color: rgb(210, 39, 39);
  }

  option {
    background: white;
    color: rgb(228, 50, 50);
  }
`;
