import React from "react";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import '../css/Home.css';



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

                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Software Engineer</td>
                            <td>New York</td>
                            <td>1234</td>
                            <td>2021-06-01</td>
                            <td>$80,000</td>
                        </tr>

                        <tr>
                            <td>Jane Smith</td>
                            <td>Product Manager</td>
                            <td>San Francisco</td>
                            <td>5678</td>
                            <td>2019-03-15</td>
                            <td>$95,000</td>
                        </tr>

                        <tr>
                            <td>David Brown</td>
                            <td>UX Designer</td>
                            <td>Chicago</td>
                            <td>9876</td>
                            <td>2020-10-11</td>
                            <td>$75,000</td>
                        </tr>

                        <tr>
                            <td>Emily White</td>
                            <td>HR Specialist</td>
                            <td>Los Angeles</td>
                            <td>2345</td>
                            <td>2018-07-22</td>
                            <td>$60,000</td>
                        </tr>

                        <tr>
                            <td>Michael Green</td>
                            <td>Marketing Director</td>
                            <td>Boston</td>
                            <td>6789</td>
                            <td>2022-05-19</td>
                            <td>$120,000</td>
                        </tr>

                        <tr>
                            <td>Alice Johnson</td>
                            <td>QA Engineer</td>
                            <td>Seattle</td>
                            <td>3456</td>
                            <td>2021-01-30</td>
                            <td>$70,000</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>Software Engineer</td>
                            <td>New York</td>
                            <td>1234</td>
                            <td>2021-06-01</td>
                            <td>$80,000</td>
                        </tr>

                        <tr>
                            <td>Jane Smith</td>
                            <td>Product Manager</td>
                            <td>San Francisco</td>
                            <td>5678</td>
                            <td>2019-03-15</td>
                            <td>$95,000</td>
                        </tr>

                        <tr>
                            <td>David Brown</td>
                            <td>UX Designer</td>
                            <td>Chicago</td>
                            <td>9876</td>
                            <td>2020-10-11</td>
                            <td>$75,000</td>
                        </tr>

                        <tr>
                            <td>Emily White</td>
                            <td>HR Specialist</td>
                            <td>Los Angeles</td>
                            <td>2345</td>
                            <td>2018-07-22</td>
                            <td>$60,000</td>
                        </tr>

                        <tr>
                            <td>Michael Green</td>
                            <td>Marketing Director</td>
                            <td>Boston</td>
                            <td>6789</td>
                            <td>2022-05-19</td>
                            <td>$120,000</td>
                        </tr>

                        <tr>
                            <td>Alice Johnson</td>
                            <td>QA Engineer</td>
                            <td>Seattle</td>
                            <td>3456</td>
                            <td>2021-01-30</td>
                            <td>$70,000</td>
                        </tr>   
                    </tbody>
                </DataTable>

                {/* <TableComponent/> */}

            </div >
        )
    }
}

export default Home;