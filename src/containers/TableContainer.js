import { connect } from 'react-redux';

import { addParticipant,editParticipant } from '../store/actions';
import Table from './../components/Table';

const mapStateToProps = state => {
    const { venueIds,venuesById } = state.venues;
    const { participantIds,participantsById } = state.participants;
    return {
        venueIds,
        venuesById,
        participantIds,
        participantsById
    }
}

export default connect(mapStateToProps,{ addParticipant,editParticipant })(Table);