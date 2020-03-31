import React from 'react';
import './App.css';

import { ButtonGrid } from '@musicenviro/ui-elements';

import MIDISounds from 'midi-sounds-react';
import { drumSounds } from './config';



class App extends React.Component {
	
	midiSounds: any

	handleButton(row: number, column: number) {

		const index = (3 - row) * 4 + column;
		console.log(index);
		(this.midiSounds as any).playDrumsNow([drumSounds[index]])
	}

	render() {

	return (
		<div className="App">
			<MIDISounds 
				ref={(ref) => this.midiSounds = ref}
				drums={drumSounds}
			/>
			<header>drum pad with midi</header>
			<div id="main">
				<ButtonGrid onButtonDown={(row, col) => this.handleButton(row, col)}/>
			</div>
		</div>
	)}
}

export default App;
