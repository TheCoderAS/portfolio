import React from 'react';
import './App.css';
import AOS from 'aos'
import Dash from './components/Dash'
import {info} from './info'
class App extends React.Component{
	componentDidMount(){
        AOS.init()
		info()
	}
	
	
	render() {
		return (
		<div className="App">
			<Dash/>
		</div>
		);
	}
}
export default App;
