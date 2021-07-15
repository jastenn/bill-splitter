import React from 'react'
import * as Styled from './ButtonPrimary.style'

const ButtonPrimary = () => {
  const disabled = true
  const clickHandler = () => console.log(1)
  return (
    <Styled.Button primary onClick={clickHandler} disabled={disabled ? 1 : 0}>
      Reset
    </Styled.Button>
  )
}

export default ButtonPrimary
