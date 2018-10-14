import React from 'react'
import PropTypes from 'prop-types'

import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'

import styles from '../styles/SearchTodo.css'

const showHideCompleted = {
  border: '1px solid rgba(0, 0, 0, 0.23)',
  borderRadius: '4px',
}

class SearchTodo extends React.Component {
  static propTypes = {
    showCompleted: PropTypes.bool,
    toggleCompletedDisplay: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    showCompleted: false,
  }
  handleToggleShow = event => {
    const {
      toggleCompletedDisplay,
    } = this.props
    toggleCompletedDisplay(event.target.checked)
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
        <div style={ styles.InputWrapper }>
          <Input
            placeholder="Search items"
            style={ styles.Input }
            onChange={handleSearchChange}
            inputProps={{
              'aria-label': 'Search items',
            }}
          />
        </div>
        <div
          style={ showHideCompleted }
          title="Show completed items" >
          <Checkbox
            color="default"
            checked={ showCompleted }
            onChange={ handleToggleShow }
          />
        </div>
      </div>
    )
  }
}

export default SearchTodo
