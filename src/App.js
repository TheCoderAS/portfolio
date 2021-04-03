import React from 'react';
import './App.css';
import AOS from 'aos'

import Dash from './components/Dash'
class App extends React.Component{
	componentDidMount(){
        AOS.init()
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
