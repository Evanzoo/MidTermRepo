import React, { Component } from 'react';
import './index.css';

class NewProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      quantity: 0,
      price: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  
    const { name, description, category, quantity, price } = this.state;
  
    const alertMessage = `Name: ${name}\nDescription: ${description}\nCategory: ${category}\nQuantity: ${quantity}\nPrice: ${price}`;
  
    window.alert(alertMessage);
  };

  render() {
    return (
      <div className="product-form">
        <form onSubmit={this.handleSubmit}>
          <h1>New Product</h1>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Category:</label>
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleCategoryChange}
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewProductForm;
