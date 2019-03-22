import React,{ Component } from 'react';

import TableContainer from './containers/TableContainer';

class App extends Component{
    state = {
        location: ""
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchVenues(this.state.location);
    }
    render(){
        return(
            <React.Fragment>
                <h1>Lunchplace</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.location}
                    onChange={e => this.setState({ location: e.target.value })}
                    type="text" />
                    <input type="submit" value="Search"/>
                </form>
                <TableContainer />
            </React.Fragment>
        )
    }
}

export default App;