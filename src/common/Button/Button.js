import React from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const ButtonComponent = ({
  text,
  variant = 'primary',
  type = 'button',
  value,
  size,
  active = false,
  disabled = false,
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      value={value}
      size={size}
      active={active}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}
export default ButtonComponent

ButtonComponent.protoType = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}
