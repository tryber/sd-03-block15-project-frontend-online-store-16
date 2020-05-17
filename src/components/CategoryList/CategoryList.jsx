import React from 'react';
import * as api from '../../services/api';

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
      <div>
        <h2>Category List</h2>
        <div>
          {categories.map(({id, name}) => (
            <label key={id}>
              <input
                data-testid="category"
                type="checkBox"
                onChange={() => handleCheck(id)}
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
