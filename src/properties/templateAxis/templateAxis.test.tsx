import React from 'react'
import styled, { StyleSheetManager } from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import griddie from '../../index'

const StyledContainer = styled.div`
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 2fr 1fr;
`

test('grid-template-rows prefixes are added', () => {
  const tree = renderer
    .create(
      <StyleSheetManager stylisPlugins={[griddie]}>
        <StyledContainer />
      </StyleSheetManager>
    )
    .toJSON()

  expect(tree).toHaveStyleRule('-ms-grid-rows', '1fr 1fr')
  expect(tree).toHaveStyleRule('grid-template-rows', '1fr 1fr')
})

test('grid-template-columns prefixes are added', () => {
  const tree = renderer
    .create(
      <StyleSheetManager stylisPlugins={[griddie]}>
        <StyledContainer />
      </StyleSheetManager>
    )
    .toJSON()

  expect(tree).toHaveStyleRule('-ms-grid-columns', '1fr 2fr 1fr')
  expect(tree).toHaveStyleRule('grid-template-columns', '1fr 2fr 1fr')
})
