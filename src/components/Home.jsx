import React from "react";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';

DataTable.use(DT);
class Home extends React.Component {

    constructor(props) {
        super(props);
        // Initialize state with 'isVisible' set to true
        this.state = {
            isVisible: true,
        };
    }

    contentDivStyle = {
        display: "flex",
        justifyContent: "center",  // Horizontally center
        alignItems: "flex-start",   // Align to the top
        // width: "80%",
        // maxWidth: "1200px",         /* Optional: max-width to avoid content stretching too wide */
    };
    render() {
        return (
            <div style={this.contentDivStyle}>
                {/* <h1>Home Component</h1> */}
                <DataTable className="display">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Extn.</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>Rakesh</td>
                                <td>SD1</td>
                                <td>Sakinaka</td>
                                <td>5523</td>
                                <td>02-02-2022</td>
                                <td>15.LPA</td>
                            </tr>
                        </tbody>
                    </thead>
                </DataTable>

            </div >
        )
    }
}

export default Home;