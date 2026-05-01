import React, { Component } from 'react';
import AdmissionDeadline from './AdmissionDeadlineItem'
import Loading from '../Loading/Loading'

class AdmissionDeadlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: '',
            program: '',
            admissionDeadline: [],
            timeout: false,
            loading: true
        }
    }
    
    gatherParams() {

        let pathArray = window.location.pathname.split('/')
        let schoolName = pathArray[1].toUpperCase()
        let programName = pathArray[2].toUpperCase()

        this.setState({school: schoolName, program: programName})
        return 

    }

    componentDidMount() {

        const url = '/manage/service/api/program.deadlines/deadlines/id'
        
        this.gatherParams();

        fetch(url, {
            headers: {
                'Authorization': 'Bearer d144400b-bd7a-4552-9565-a947ad81f302'
            }
        })
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                let data;
                try {
                    data = JSON.parse(text);
                } catch (e) {
                    throw new Error('Response is not valid JSON');
                }

                const filtered = Array.isArray(data)
                                    ? data.filter(item =>
                                                item.AcademicProgramRoundKey.toUpperCase() === this.state.school &&
                                                item.AcademicProgramFormattedName.toUpperCase() === this.state.program)  
                                    : [];
                                    
                this.setState({
                    admissionDeadline: filtered,
                    loading: false
                });
                console.log(this.state)
            })
            .catch((error) => {
                this.setState({timeout:true})
                console.log(error)
            })
    }

    
    renderItems() {
        if (this.state.loading) {
            return <Loading data={this.state} />;
        }
        if (Array.isArray(this.state.admissionDeadline) && this.state.admissionDeadline.length > 0) {
            return (
                <div>
                    {this.state.admissionDeadline.map((item, i) => (
                        <AdmissionDeadline key={i} item={item} />
                    ))}
                </div>
            );
        }
        return <div>No results found.</div>;
    }
    
    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table border="1" cellPadding="1" cellSpacing="1" style={{width: '100%', marginBottom: '0px'}}>
                        <tbody>
                            {this.renderItems()}
                        </tbody>
                    </table>
                </div>
                <p>*Applications are accepted after the Extended Deadline. Enrollment continues over summer, space permitting.</p>
            </div>
        )
    }
}
export default AdmissionDeadlines;
