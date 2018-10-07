import React from 'react'

import Button from '@material-ui/core/Button';

const Navigation = ({
  onPrev,
  onNext,
}) => {
  return (
    <div>
      <Button
        variant="outlined"
        onClick={ onPrev }>
        Prev
      </Button>
      <Button
        variant="outlined"
        onClick={ onNext }>
        Next
      </Button>
    </div>
  )
}

export default Navigation
