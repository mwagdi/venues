import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { addParticipant,editParticipant } from '../store/actions';

class Table extends Component{
    // state = {
    //     participants: []
    // }
    render(){
        const {
            venueIds,
            venuesById,
            participantIds,
            participantsById,
            addParticipant,
            editParticipant
        } = this.props;
        if(venueIds.length === 0){
            return <div></div>
        }
        return (
            <React.Fragment>
                <table>
                    <th>
                        <td>Participants</td>
                        {venueIds.map((id,i) => (
                            <td key={i}>
                                <div>{venuesById[id].name}</div>
                                <div>{venuesById[id].categories[0].name}</div>
                            </td>
                        ))}
                    </th>
                    {participantIds.map((id,i) => (
                        <tr key={i}>
                            <td>
                                <input
                                onChange={e => editParticipant(id,"name",e.target.value)}
                                value={participantsById[id].name}
                                type="text" />
                            </td>
                            {venueIds.map((venue,j) => (
                                <td key={j}>
                                    <button onClick={() => editParticipant(id,"vote",venue)}>{venue}</button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </table>
                <a onClick={() => addParticipant()} className="btn">Add Participant</a>
            </React.Fragment>
        )
    }
}

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