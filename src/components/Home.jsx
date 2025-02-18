import React from "react";
import { Table, InputGroup, FormControl, Pagination, Button } from "react-bootstrap";
import TableComponent from "./TableComponent";
import AuthContext from "./AuthContext";

class Home extends React.Component {
  // static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      currentPage: 1,
      productsPerPage: 5,
      products: [
        { id: 1, name: "Apple Watch", price: "₦350,000", category: "Accessories", quantity: "7", rating: "5" },
        { id: 2, name: "Fitness watch", price: "₦10,000", category: "Fitness", quantity: "23", rating: "2" },
        { id: 3, name: "Beach dress", price: "₦25,000", category: "Clothing", quantity: "5", rating: "4" },
        { id: 4, name: "Washing machine", price: "₦260,000", category: "Electronics", quantity: "10", rating: "4" },
        { id: 5, name: "Blue Jeans", price: "₦10,000", category: "Clothing", quantity: "50", rating: "5" },
        { id: 6, name: "Samsung Watch", price: "₦270,000", category: "Accessories", quantity: "7", rating: "3" },
        { id: 7, name: "Yoga mat", price: "₦15,000", category: "Fitness", quantity: "15", rating: "4" },
        { id: 8, name: "Jumpsuit", price: "₦15,700", category: "Clothing", quantity: "30", rating: "5" },
        { id: 9, name: "Hand mixer", price: "₦50,000", category: "Electronics", quantity: "10", rating: "4" },
        { id: 10, name: "Pallazo", price: "₦12,000", category: "Clothing", quantity: "4", rating: "3" },
      ],
      sortDirection: 'asc',
      sortColumn: 'id'
    };
  }

  tableHeader=[
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price' },
    { key: 'category', label: 'Category' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'rating', label: 'Rating' },
      { key: 'action', label: 'Action' }
  ]

  onDelte=(id)=>{
    console.log('deleting : '+id)
  }
  onEdit=(id)=>{
    console.log('editin : '+id)
  }

  // loginHandler=()=>{
  //   console.log('loginHandler')
  //   this.context.login();
  //   console.log('user : '+this.context.authState.isLoggedIn)

  // }

  // logoutHandler=()=>{
  //   console.log('loginHandler')
  //   this.context.logout();
  // }

  render() {

    return (
      <div >
        {/* <Button className="primary" onClick={this.loginHandler}>Login</Button>
        <Button className="primary" onClick={this.logoutHandler}>Logout</Button> */}
        <TableComponent data={this.state.products} columns={this.tableHeader} onDelete={this.onDelte} onEdit={this.onEdit}/>
      </div>
    );
  }
}

export default Home;
