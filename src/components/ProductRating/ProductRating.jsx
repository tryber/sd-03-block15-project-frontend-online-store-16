import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ProductRating.css';

class ProductRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      comment: '',
    };
    this.changeComent = this.changeComent.bind(this);
    this.starRating = this.starRating.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  changeComent(event) {
    this.setState({ comment: event.target.value });
  }

  starRating(rating) {
    this.setState({ rating });
  }

  submitButton() {
    this.setState({ comment: '', rating: 0 });
  }

  render() {
    const { rating, comment } = this.state;
    return (
      <div>
        <textarea
          data-testid="product-detail-evaluation"
          onChange={this.changeComent}
          rows="8"
          value={comment}
        />
        <div>
          <h5>Avaliação</h5>
          {[...Array(5)].map((star, index) => {
            const ratingStars = index + 1;
            return (
              <label htmlFor={index} key={star}>
                <input
                  className="star"
                  type="radio"
                  id={index}
                  onClick={() => this.starRating(ratingStars)}
                />
                <FaStar color={ratingStars <= rating ? '#ffc107' : '#e4e5e9'} size={25} />
              </label>
            );
          }) }
        </div>
        <button onClick={this.submitButton}>Enviar</button>
      </div>
    );
  }
}

export default ProductRating;
