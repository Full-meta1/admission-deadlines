import React from 'react';
    
    let AdmissionDeadlines = () => {
        return (
            <div>   
                <div className="table-responsive">
                    <table border="1" cellPadding="1" cellSpacing="1" style={{width: '100%', marginBottom: '0px'}}>
                        <colgroup>
                            <col />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Early Priority Decision & International Deadline</strong></p>
                                </td>
                                <td>
                                    <p>April 16, 2026</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Priority Deadline</strong></p>
                                </td>
                                <td>
                                    <p>June 2, 2026</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Extended Deadline*</strong></p>
                                </td>
                                <td>
                                    <p>July 30, 2026</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>*Applications are accepted after the Extended Deadline. Enrollment continues over summer, space permitting.</p>
            </div>
        )
    }
export default AdmissionDeadlines;
