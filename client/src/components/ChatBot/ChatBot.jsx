import ChatBot from 'react-simple-chatbot';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import UserView from '../UserComponents/UserView/UserView';


export function ComponentSession() {
	const history = useHistory();
	function handleClick() {
		history.push('/LogIn');
	}
	return (
		<button type='button' onClick={handleClick}>
			Click.. Log In..
		</button>
	);
}


export function ComponentRegister() {
	const history = useHistory();
	function handleClick() {
		history.push('/register');
	}
	return (
		<button type='button' onClick={handleClick}>
			Click.. Sign up..
		</button>
	);
}



export function ComponentAbout() {
	const history = useHistory();
	function handleClick() {
		history.push('/about');
	}
	return (
		<button type='button' onClick={handleClick}>
			Click.. Go to section About
		</button>
	);
}

export function ComponentCryptoR() {
	const history = useHistory();
	function handleClick() {
		history.push('/cryptopayments');
	}
	return (
		<button type='button' onClick={handleClick}>
			Click.. Go Reviews Crypto
		</button>
	);
}
export function ComponentCatalog() {
	const history = useHistory();
	function handleClick() {
		history.push('/catalog');
	}
	return (
		<button type='button' onClick={handleClick}>
			Click.. Go Catalog
		</button>
	);
}

const theme = {
	background: '#000000',
	fontFamily: 'Roboto',
	headerBgColor: '#FF3C4A',
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: '#FF3C4A',
	botFontColor: '#fff',
	userBubbleColor: '#f0f8ff',
	userFontColor: '#4a4a4a'
};

function Bot() {
	return (
		<ThemeProvider theme={theme}>
			<ChatBot
				floating={true}
				enableSmoothScroll={true}
				headerTitle='Personal Assistant'
				steps={[
					{
						id: '1',
						message: '¡Welcome to Hardware Store! ',
						trigger: '2'
					},
					{
						id: '2',
						options: [
							{ value: 1, label: 'Catalog', trigger: '4' },
							{ value: 2, label: 'About us', trigger: '3' },
							{ value: 3, label: 'Payments', trigger: '5' }
						]
					},
					{
						id:'3',
						options: [
							{ value: 1, label: 'Browse the About us', trigger: '44' },
							{ value: 2, label: 'Back to menu', trigger: '2' },
							
						]
					},
					{
						id:'44',
						message: 'Thanks for your visit!!',
						trigger: '333'
					},
					{
						id: '333',
						component: <ComponentAbout />,
						end: true
					},
					{
						id: '4',
						options: [
							{ value: 1, label: 'I want to see the catalog', trigger: '10' },
							{ value: 2, label: 'I want to buy', trigger: '11' },
						]
					},
					{
						id:'10',
						options: [
							{ value: 1, label: 'Browse the catalog', trigger: '33' },
							{ value: 2, label: 'Back to menu', trigger: '2' },
							
						]
					},
					{
						id: '33',
						message: 'In the catalog you can filter by price, categories, brands and also add to favorites!',
						trigger:'22'
					},
					{
						id: '22',
						component: <ComponentCatalog />,
						end: true
					},
					{
						id: '11',
						options: [
							{ value: 1, label: 'I am new here', trigger: '15' },
							{ value: 2, label: 'I have account', trigger: '16' },
						
						]
					},
					{
						id:'15',
						options: [
							{ value: 1, label: 'Sign Up', trigger: '77' },
							{ value: 2, label: 'Back to menu', trigger: '2' },
						
						]
					},
					{
						id: '77',
						message: 'Fantastic !! You must register to buy',
						trigger:'55'
					},
					{
						id: '55',
						component: <ComponentRegister/>,
						end: true
						
					},
					{
						id:'16',
						options: [
							{ value: 1, label: 'Log in', trigger: '71' },
							{ value: 2, label: 'Back to menu', trigger: '2' },
						
						]
					},
					{
						id: '71',
						message: 'Perfect! Enjoy your session You can see your purchase orders, your favorites and much more',
						trigger:'56'
					},
					{
						id: '56',
						component: <ComponentSession/>,
						end: true
					},
					{
						id: '5',
						options: [
							{ value: 4, label: 'Crypto', trigger: '7' },
							{ value: 5, label: 'Market Payment', trigger: '8' }
						]
					},
					{
						id:'7',
						options: [
							{ value: 4, label: 'I want to know how to pay with crypto', trigger: '777' },
							{ value: 5, label: 'Back to menu', trigger: '2' }
						]
					},
					{
						id: '777',
						message: 'In the following link the detailed information',
						trigger: '30'
					},
					{
						id: '30',
						component: <ComponentCryptoR />,
						end: true
					},
					{
						id: '8',
						options: [
							{
								value: 6,
								label: 'You can pay in 3, 6, 12 installments without interest! ..Buy with paid market',
								trigger: '9'
							},
							{
								value: 7,
								label: 'No, thanks! I need to make another query.',
								trigger: '2'
							}
						]
					},
					{
						id:'9',
						message:'¡¡ Fill up your cart !!',
						trigger:'69'
					},
					{
						id: '69',
						component: <ComponentCatalog/>,
						end: true
					}
				]}
			/>
		</ThemeProvider>
	);
}
export default Bot;
