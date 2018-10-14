import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';

const defaultStyle = {
  width: '15px',
  height: '15px',
}

const CrossIcon = (props) => {
  const styles = {...defaultStyle, ...props}
  return (
    <SvgIcon { ...styles }>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
  )
}

const PlusIcon = (props) => {
  const styles = {...defaultStyle, ...props}
  return (
    <SvgIcon { styles }>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
  )
}

export default {
  CrossIcon,
  PlusIcon,
}
