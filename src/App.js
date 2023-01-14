import logo from './logo.svg';
// import './App.css';
import React from 'react';

class App extends React.Component {
  render() {

     let employees= [
    {empId:1234, name:'John', designation:'SPM', salary:'17000'},
    {empId:2222, name:'Jack', designation:'TL', salary:'20000'}
    
  ];
 
  return (<React.Fragment>
    <table style={{width: '60%'}} className='table'>
      <thead className='thread-light'>
      <tr>
        <th>Emp Id</th>
        <th>Emp Name</th>
        <th>Designation</th>
      </tr>
      </thead>
      <tbody>
        { employees.map(employee => {
          return employee.salary > 17000 ? (<tr key={employee.empId}>
            <td>{employee.empId}</td>
            <td>{employee.name}</td>
            <td>{employee.designation}</td>
          </tr>) : null
        })

        }
      </tbody>

    </table>
    
  </React.Fragment>
     
     
    )
 
      
   
   
  }
}

export default App;
