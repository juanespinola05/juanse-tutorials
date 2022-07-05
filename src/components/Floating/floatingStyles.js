import styled from 'styled-components'

const variants = {
  pink: ['var(--pink)', 'var(--white)'],
  white: ['var(--white)', 'black']
}

export const Div = styled.div`
  min-height: 70px;
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ color }) => variants[color][0]};
  color: ${({ color }) => variants[color][1]};
`
