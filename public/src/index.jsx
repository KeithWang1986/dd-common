import * as React from 'react';
import ReactDOM from 'react-dom';

import './css/common.css';

class App extends React.Component {
    render() {
        return (
            <span>Hello World</span>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));