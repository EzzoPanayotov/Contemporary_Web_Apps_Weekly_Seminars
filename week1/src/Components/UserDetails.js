import React from "react";
import '../CSS/UserDetails.css';

const UserDetails = () =>
{
    return(
        <center>
            <table className = "userDetails">
                <thead>
                    <tr>
                        <th>Fisrt Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hristo</td>
                        <td>Panayotov</td>
                        <td>5panah54@solent.ac.uk</td>
                        <td>123456789</td>
                    </tr>
                    <tr>
                        <td>Felix</td>
                        <td>Johnson</td>
                        <td>felix@gmail.com</td>
                        <td>567942351</td>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td>Davidson</td>
                        <td>peter@gmail.com</td>
                        <td>465782134</td>
                    </tr>
                </tbody>
                </table>
        </center>
    )
}

export default UserDetails;