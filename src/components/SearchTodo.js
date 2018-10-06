import React from 'react'
import PropTypes from 'prop-types'

import Input from '@material-ui/core/Input'

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
  handleSearchChange = event => {
    const { onSearchChange } = this.props
    onSearchChange(event.target.value)
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
          <Input
            placeholder="Search items"
            onChange={handleSearchChange}
            inputProps={{
              'aria-label': 'Search items',
            }}
          />
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
