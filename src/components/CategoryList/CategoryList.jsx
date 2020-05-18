import React from 'react';
import * as api from '../../services/api';
import './CategoryList.css'

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories()
      .then((list) => this.setState({ categories: list }));
  }

  render() {
    const { categories } = this.state;
    const { handleCheck } = this.props;
    return (
      <div className="category-container">
        <h2 className="list-title">Category List</h2>
        <div className="categories-list">
          {categories.map(({ id, name }) => (
            <label htmlFor="category selection" key={id} className="label">
              <input
                data-testid="category"
                type="checkBox"
                onChange={() => handleCheck(id)}
                className="check-box"
              />
              {name}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryList;
