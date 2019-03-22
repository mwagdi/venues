import React,{ Component } from 'react';
import { connect } from 'react-redux';

import Table from './components/Table';
import { fetchVenues } from './store/actions';

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
                <Table />
            </React.Fragment>
        )
    }
}

export default connect(null,{ fetchVenues })(App);