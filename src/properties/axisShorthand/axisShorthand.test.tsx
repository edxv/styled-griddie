import React from 'react'
import styled, { StyleSheetManager } from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import griddie from '../../index'

const StyledContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 4;
`

test('grid-row prefixes are added', () => {
  const tree = renderer
    .create(
      <StyleSheetManager stylisPlugins={[griddie]}>
        <StyledContainer />
      </StyleSheetManager>
    )
    .toJSON()

  expect(tree).toHaveStyleRule('-ms-grid-row', '1')
  expect(tree).toHaveStyleRule('-ms-grid-row-span', '1')
  expect(tree).toHaveStyleRule('grid-row', '1 / 2')
})

test('grid-column prefixes are added', () => {
  const tree = renderer
    .create(
      <StyleSheetManager stylisPlugins={[griddie]}>
        <StyledContainer />
      </StyleSheetManager>
    )
    .toJSON()

  expect(tree).toHaveStyleRule('-ms-grid-column', '2')
  expect(tree).toHaveStyleRule('-ms-grid-column-span', '2')
  expect(tree).toHaveStyleRule('grid-column', '2 / 4')
})
