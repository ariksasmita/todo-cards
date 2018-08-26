import React from 'react'
import PropTypes from 'prop-types'

class SearchTodo extends React.Component {
  static propTypes = {
    showCompleted: PropTypes.bool,
    toggleCompletedDisplay: PropTypes.func.isRequired,
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
  render() {
    const { 
      showCompleted,
    } = this.props
    const { handleToggleShow } = this
    return (
      <div>
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
