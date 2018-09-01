import React from 'react'
import PropTypes from 'prop-types'

class SearchTodo extends React.Component {
  static propTypes = {
    showCompleted: PropTypes.bool,
    toggleCompletedDisplay: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    showCompleted: false,
  }
  handleToggleShow = () => {
    const {
      toggleCompletedDisplay,
    } = this.props
    toggleCompletedDisplay(this.refs.show.checked)
  }
  handleSearchChange = () => {
    const { onSearchChange } = this.props
    const filterString = this.refs.search.value
    onSearchChange(filterString)
  }
  render() {
    const {
      showCompleted,
    } = this.props
    const { 
      handleToggleShow,
      handleSearchChange,
    } = this
    return (
      <div>
        <h4>Search component</h4>
        <input 
          type="text"
          ref="search"
          placeholder="Search items"
          onChange={handleSearchChange} />
        <input
          type="checkbox"
          onChange={ handleToggleShow }
          defaultChecked={ showCompleted }
          ref="show"/> Show completed
      </div>
    )
  }
}

export default SearchTodo
