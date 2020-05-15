import React from 'react';
import * as api from '../services/api';


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
    return (
      <div>
        <h2>Category List</h2>
        <ul>
          {categories.map((category) => (
            <li
              data-testid="category"
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
