import React from 'react';
import './App.css'

import { ButtonGrid } from '@musicenviro/ui-elements'

function App() {
  return (
		<div className="App">
			<header>drum pad with midi</header>
			<div id="main">
				<ButtonGrid />
			</div>
		</div>
  );
}

export default App;
