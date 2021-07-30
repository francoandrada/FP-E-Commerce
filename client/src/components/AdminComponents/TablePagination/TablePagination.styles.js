import styled from 'styled-components';
const flex = (align = 'stretch', justify = 'center', direction = 'row', wrap = 'wrap') => {
  return `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    // margin-left: 20%;
    
    // flex-wrap: ${wrap};
  `;
};
export const PaginationBox = styled.div`
  ${flex('center', 'center')};
  color: white;
  // width: 80%;
  margin-left: 40%;
  // margin: 0 20rem

  span {
    padding: 4px;
    border-radius: 3px;
    font-size: 20px;
    background: #2e2956;
    color: white;

    strong {
      color: orange;
    }
  }
`;

export const PaginationList = styled.ul`
  ${flex('center', 'center')};
  padding: 10px;
//  margin-left: 10%;
// width: 80%;
  li {
    ${flex('center', 'center')};
    width: 45px;
    height: 30px;
    margin: 10px;
    list-style: none;
    border: 1px solid #a9aac6;  
    border-radius: 5px;
  }
`;

export const PageButton = styled.button`
  width: 45px;
  height: 30px;
  margin: 10px;

  background-color:white;
  border:1px solid rgb(228, 50, 50);
  border-radius: 10px;
  &:hover {
    background: rgb(228, 50, 50);
  }
`;
