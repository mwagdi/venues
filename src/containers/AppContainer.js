import { connect } from 'react-redux';

import { fetchVenues } from '../store/actions';
import App from '../App';

export default connect(null,{ fetchVenues })(App);