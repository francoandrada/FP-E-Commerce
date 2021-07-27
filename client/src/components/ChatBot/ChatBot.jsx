import ChatBot from 'react-simple-chatbot';
import { useHistory } from "react-router-dom";
export function ComponentCatalog(){
    const history = useHistory();
   function handleClick() {
    history.push("/catalog");
  }
  return (
    <button type="button" onClick={handleClick}>
      Go Catalog
    </button>
  );
}

function Bot (){


    return(
        <div>
            <ChatBot 
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
                    { value: 2, label: 'Favorites', trigger: '3' },
                    { value: 3, label: 'Payments', trigger: '5' },
                  ],
                },
                {
                  id: '3',
                  message: 'blabla',
                  trigger: '5',
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
                        {value: 5, label:'Mercado Pago', trigger: '8'}
                    ]
                  },
                {
                    id:'7',
                    message: 'crippp',
                    end: true
                },
                {
                    id:'8',
                    message: 'Market Paid in six, three and twelve installments without interest!',
                
                }
              ]}
  
/>
        </div>
    )
}
export default Bot;


