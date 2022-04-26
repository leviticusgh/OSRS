import React from 'react';

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {student: []};
                this.headers = [
                    { key: 'stuid', label: 'Id'},
                    { key: 'name', label: 'Name' },
                    { key: 'email', label: 'Email' },
                    { key: 'othername', label: 'Phone Number' },
                    { key: 'email', label: 'Level' }
                ];
            }
             
            componentDidMount() {
                fetch('http://localhost/REACT%20APPS/osrs/src/fetch.php').then(response => {
                    console.log(response);
                    return response.json();
                  }).then(result => {
                    console.log(result);
                    this.setState({
                        student_rs:result
                    }); 
                  }).catch(err => {
                    console.log("Error Reading data " + err);
                  });
            }
                 
            render() {
                const studentFound = this.state.student_rs && this.state.student_rs.length;
                if(studentFound) {
                    return (
                        <div className="container"><h1 className='text-center'>STUDENTS REGISTRY PAGE</h1>
                            <div id="msg"></div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        {
                                            this.headers.map(function(h) {
                                                return (
                                                    <th key={h.key}>{h.label}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.student_rs.map(function(item, index) {
                                        return (
                                            <tr key={index}>
                                              <td>{item.stuid}</td>
                                              <td>{item.firstname}{" "}{item.lastname}{" "}{item.othername}</td>
                                              <td>{item.email}</td>
                                              <td>{item.phone_number}</td>
                                              <td>{item.level}</td>
                                            </tr>
                                        )}.bind(this))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                } else {
                    return (
                        <div id="container">
                            No product found
                        </div>
                    )
                }
            }
        }

export default App;