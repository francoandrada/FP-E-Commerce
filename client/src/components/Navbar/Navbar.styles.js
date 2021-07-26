import styled from 'styled-components';
const color = {
	background: '#e9e9e9',
	textColor: '686868',
};

function flex(justify, align, direction = 'row') {
	return `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;
}

export const NavContainer = styled.div`
  background-color: ${color.background};
  width: 100%;
  height: 5em;
  font-family: "Arial";
  display: flex;

  button:hover {
    cursor: pointer;
  }

  i {
    font-size: 25px;
  }
`;

export const LeftSide = styled.div`
  flex: 50%;
  ${flex('left', 'center')};

  button {
    display: none;
    margin-left: 20px;
  }

  #hidden {
    display: flex;
  }

  @media only screen and (max-width: 650px) {
    button {
      display: flex;
    }

    #hidden {
      position: absolute;
      left: 0px;
      top: 80px;
      max-height: 230px;
      height: auto;
      background-color: var(--gray);
      width: 100%;
      flex-direction: column;
      display: flex;
      align-items: center;

      a {
        margin: 10px;
        font-size: 15px;
      }
    }
  }
`;

export const Links = styled.div`
  max-height: 80px;

  a {
    text-decoration: none;
    color: ${color.textColor};
    font-size: 25px;
    margin-left: 15px;
  }

  @media only screen and (max-width: 880px) {
    a {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 750px) {
    a {
      font-size: 15px;
    }
  }

  // revisar este si algo anda mal
  @media only screen and (max-width: 750px) {
    & {
      display: flex;
    }
  }
`;

export const RightSide = styled.div`
  flex: 50%;
  ${flex('flex-end', 'center')};
  padding-right: 25px;

  input {
    width: 220px;
    height: 30px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    padding-left: 15px;
    color: black;
  }
`;

export const SearchButton = styled.button`
  height: 32px;
  width: 70px;
  font-size: 16px;
`;
