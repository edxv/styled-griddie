import React from 'react'
import styled, { StyleSheetManager } from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import griddie from '../../index'

const StyledContainer = styled.div`
  grid-template: 1fr 1fr / 1fr 2fr 1fr;
`

const StyledContainerRepeat = styled.div`
  grid-template: auto / repeat(3, 1fr);
`

test('grid-template prefixes are added', () => {
  const tree = renderer
    .create(
      <StyleSheetManager stylisPlugins={[griddie]}>
        <StyledContainer />
      </StyleSheetManager>
    )
    .toJSON()

  expect(tree).toHaveStyleRule('-ms-grid-rows', '1fr 1fr')
  expect(tree).toHaveStyleRule('-ms-grid-columns', '1fr 2fr 1fr')
  expect(tree).toHaveStyleRule('grid-template', '1fr 1fr / 1fr 2fr 1fr')
})

test('repeat function works', () => {
  const tree = renderer
    .create(
      <StyleSheetManager stylisPlugins={[griddie]}>
        <StyledContainerRepeat />
      </StyleSheetManager>
    )
    .toJSON()

  expect(tree).toHaveStyleRule('-ms-grid-rows', 'auto')
  expect(tree).toHaveStyleRule('-ms-grid-columns', '(1fr)[3]')
  expect(tree).toHaveStyleRule('grid-template', 'auto / repeat(3,1fr)')
})
