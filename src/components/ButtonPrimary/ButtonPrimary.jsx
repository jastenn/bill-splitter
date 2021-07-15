import React, { useContext } from 'react'
import * as Styled from './ButtonPrimary.style'
import { InputData } from '../../provider/InputDataProvider'

const ButtonPrimary = ({isBtnDisabled}) => {
  const {dispatchInput} = useContext(InputData)
  const disabled = isBtnDisabled
  const clickHandler = () => {
    dispatchInput({type: 'reset'})
  }
  return (
    <Styled.Button primary onClick={clickHandler} disabled={disabled ? 1 : 0}>
      Reset
    </Styled.Button>
  )
}

export default ButtonPrimary
