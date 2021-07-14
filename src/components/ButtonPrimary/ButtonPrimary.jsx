import React from 'react'
import * as Styled from './ButtonPrimary.style'

const ButtonPrimary = (disabled) => {
  return (
    <Styled.Button primary disabled={disabled ? 'true' : ''}>
      Reset
    </Styled.Button>
  )
}

export default ButtonPrimary
