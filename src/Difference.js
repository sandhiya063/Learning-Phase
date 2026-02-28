import React from 'react';
import './Difference.css';
const Difference=()=>
{
    return(
       <>
       <center>
       <div className="set">
       <h1><b>Difference Between State and Props</b></h1>
       <br/>
       <table border='1'>
        <thead>
        <tr>
            <th><b>Feature</b></th>
            <th><b>State</b></th>
            <th><b>Props</b></th>
        </tr>
        </thead>
        <tbody className>
        <tr>
            <td><b>Ownership</b></td>
            <td>Controlled by the component</td>
            <td>Controlled by the parent</td>
        </tr>
        <tr>
            <td><b>Mutability</b></td>
            <td>Mutable (changeable)</td>
            <td>Immutable (read-only)</td>
        </tr>
        <tr>
            <td><b>Update Mechanism</b></td>
            <td>this.setState or hook setter</td>
            <td>Cannot be updated by child</td>
        </tr>
        <tr>
            <td><b>Data Flow</b></td>
            <td>Internal to component</td>
            <td>Parent to child (one-way)</td>
        </tr>
        <tr>
            <td><b>Purpose</b></td>
            <td>Dynamic data, interactivity</td>
            <td>Configuration, data passing</td>
        </tr>
        </tbody>
      </table>
      </div>
      </center>
       </>
 )
}
export default Difference;