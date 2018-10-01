import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/SearchTodo.css'

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
      <div className="search-todo" style={ styles.Wrapper }>
        <div>
          <input 
            type="text"
            ref="search"
            placeholder="Search items"
            style={ styles.Input }
            onChange={handleSearchChange} />
        </div>
        <div>
          <input
            type="checkbox"
            id="show-completed"
            onChange={ handleToggleShow }
            defaultChecked={ showCompleted }
            ref="show"/>
          <label htmlFor="show-completed"> Show completed</label>
        </div>
      </div>
    )
  }
}

export default SearchTodo
