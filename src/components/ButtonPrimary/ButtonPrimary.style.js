import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  background-color: ${({theme}) => theme.primaryStrongCyan};
  width: 100%;
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme}) => theme.neutralVeryDarkCyan};
  padding: .75rem 1rem;
  border: none;
  border-radius: .5rem;
  ${(props) => props.primary ? 'text-transform: uppercase;' : ''}
  ${(props) => props.disabled === 'true' ? 'opacity: .3;' : 'cursor: pointer;'}
  //can't detect if props is disabled might fix later
  &:active:hover {
    background-color: ${({theme}) => theme.neutralLightCyanHover};
  }
`