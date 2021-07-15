import styled from 'styled-components';
const flex = (align = 'stretch', justify = 'flex-start', direction = 'row') => {
	return `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;
};
export const PaginationBox = styled.div`
  ${flex('center', 'center')};
  color: white;
  width: 100%;

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
  ${flex('center', 'space-evenly')};
  padding: 10px;

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
  width: 100%;
  height: 100%;
  border-radius: 5px;

  &:hover {
    background: orange;
  }
`;
