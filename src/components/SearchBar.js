import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    }
  }
  
  setSearch = (event) => {
    this.setState({ filter: event.target.value });
  }

  render () {
    return (
      <section>
         <input type="text" onChange={this.setSearch}/>
      </section>
    )
  }
}

export default SearchBar;
