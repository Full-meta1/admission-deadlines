import React from 'react';

const AdmissionDeadlineItem = ({item}) => (
    <tr>
        <td>
            <p className="round"><strong>{item.EntityProgramDatesDeadlineRoundType}</strong></p>
        </td>
        <td>
            <p className="deadline">{item.EntityProgramDatesApplicationDeadline}</p>
        </td>
    </tr>
);

export default AdmissionDeadlineItem;
