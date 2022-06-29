import React from 'react';
import './main.css' ;
class Employeelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            IsApiError: false
        }
    }
    componentDidMount() {
        fetch(" http://restapi.adequateshop.com/api/Metadata/GetEmployees")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        employees: result
                    });
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }
    render() {
        var employeeslist = this.state.employees;
        debugger;
        if (employeeslist && employeeslist.length > 0) {
            return (<div>
                <h2>Employees List Class Component</h2>
                <table className="table" id='cus'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>ZipCode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeslist.map(emp => (
                            <tr key={emp.Id}>
                                <td>{emp.Id}</td>
                                <td>{emp.Name}</td>
                                <td>{emp.Address}</td>
                                <td>{emp.City}</td>
                                <td>{emp.ZipCode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)
        }
        else {
            return (<div>No Record Found</div>)
        }
    }
}
export default Employeelist;