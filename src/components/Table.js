import React,{ Component } from 'react';

import { checkPreferred } from '../helpers';

class Table extends Component{
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
                    <tr>
                        <th>Participants</th>
                        {venueIds.map((id,i) => (
                            <th
                            className={`${checkPreferred(id,participantsById,venueIds) ? "green" : ""}`}
                            key={i}>
                                <div>{venuesById[id].name}</div>
                                <div>{venuesById[id].categories[0].name}</div>
                            </th>
                        ))}
                    </tr>
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
                                    <button
                                    className={`${participantsById[id].vote === venue ? "voted" : ""}`}
                                    onClick={() => editParticipant(id,"vote",venue)}>VOTE</button>
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

export default Table;