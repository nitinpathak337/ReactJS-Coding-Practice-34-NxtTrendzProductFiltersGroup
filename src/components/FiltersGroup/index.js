import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    clearFilters,
    ratingsList,
    searchProduct,
    applyCategory,
    applyRating,
    category,
    rating,
  } = props

  const onSearch = event => {
    if (event.key === 'Enter') {
      searchProduct(event.target.value)
    }
  }

  const onCategory = event => {
    applyCategory(event.target.id)
  }

  const onRating = event => {
    applyRating(event.target.id)
  }

  const onClearFilter = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-el"
          onKeyDown={onSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="filter-heading">Category</h1>
      <ul className="list-categories">
        {categoryOptions.map(eachItem => (
          <li key={eachItem.categoryId}>
            <p
              id={eachItem.categoryId}
              className={`list-para-button ${
                eachItem.categoryId === category ? 'active' : ''
              }`}
              onClick={onCategory}
            >
              {eachItem.name}
            </p>
          </li>
        ))}
      </ul>
      <h1 className="filter-heading">Rating</h1>
      <ul className="list-categories">
        {ratingsList.map(eachItem => (
          <li key={eachItem.ratingId}>
            <button
              type="button"
              className="list-para-button"
              onClick={onRating}
            >
              <img
                id={eachItem.ratingId}
                className="rating-image"
                src={eachItem.imageUrl}
                alt={`rating ${eachItem.ratingId}`}
              />
              <p
                className={`list-para ${
                  eachItem.ratingId === rating ? 'active' : ''
                }`}
                id={eachItem.ratingId}
              >
                & up
              </p>
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="clear-filter-button"
        onClick={onClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
