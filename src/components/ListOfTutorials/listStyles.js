import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
  margin-top: 20px;
  & > a {
    min-width: 220px;
    min-height: 150px;
    flex-grow: 3;
    min-height: 150px;
    & > div {
      height: 100%;
    }
  }
`
