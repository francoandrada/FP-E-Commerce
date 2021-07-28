import ChatBot from 'react-simple-chatbot';
import { useHistory } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

export function ComponentAbout(){
    const history = useHistory();
   function handleClick() {
    history.push("/about");
  }
  return (
    <button type="button" onClick={handleClick}>
      Click.. Go to section About
    </button>
  );
}

export function ComponentCryptoR(){
    const history = useHistory();
   function handleClick() {
    history.push("/cryptopayments");
  }
  return (
    <button type="button" onClick={handleClick}>
      Click.. Go Reviews Crypto
    </button>
  );
}
export function ComponentCatalog(){
    const history = useHistory();
   function handleClick() {
    history.push("/catalog");
  }
  return (
    <button type="button" onClick={handleClick}>
     Click.. Go Catalog
    </button>
  );

}

const theme = {
    background: '#000000',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#FF3C4A',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#FF3C4A',
    botFontColor: '#fff',
    userBubbleColor: '#f0f8ff',
    userFontColor: '#4a4a4a',
  };


function Bot (){


    return(
        <div>
            <ThemeProvider theme={theme}>
            
            <ChatBot 
             headerTitle="Personal Assistant"
            steps={[
                {
                  id: '1',
                  message: 'Hello welcome to Hadware Store ',
                  trigger: '2',
                },
                {
                  id: '2',
                  options: [
                    { value: 1, label: 'See catalog', trigger: '4' },
                    { value: 2, label: 'About us', trigger: '3' },
                    { value: 3, label: 'Payments', trigger: '5' },
                  ],
                },
                {
                  id: '3',
                  component: (<ComponentAbout/>),
                  end: true,
                },
                {
                  id: '4',
                 component: (<ComponentCatalog/>),
                  end: true,
                },
                {
                    id: '5',
                    options:[
                        {value: 4, label:'Crypto', trigger: '7'},
                        {value: 5, label:'Market Payment', trigger: '8'}
                    ]
                  },
                {
                    id:'7',
                    component: (<ComponentCryptoR/>),
                    end: true
                },
                {
                    id:'8',
                    options:[
                        {value:6, label:'Click.. Buy in catalog. ¡¡ Fill up your cart !!', trigger:'9' },
                        {value:7, label:'No, thanks! I need to make another query.', trigger:'2' },
                    ]
                },
                {
                    id: '9',
                    component: (<ComponentCatalog/>),
                    end: true,
                },
              ]}
            />
    </ThemeProvider>
        </div>
    )
}
export default Bot;


