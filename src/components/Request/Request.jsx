import * as api from '../../services/api';

function Request(categoryId, searchInput) {
  return api.getProductsFromCategoryAndQuery(categoryId, searchInput);
}

export default Request;
