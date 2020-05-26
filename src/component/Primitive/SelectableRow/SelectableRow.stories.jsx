import React from 'react'
import { storiesOf } from '@storybook/react'

import SelectableRow from '.'

import Icon from '../Icon'
import Type from '../Type'

const stories = storiesOf('Unsorted/SelectableRow', module)

stories.add('Info', () => <SelectableRow>Content</SelectableRow>, {
  info: {
    inline: true,
    text: `
      TBC
    `
  }
})

stories.add('As checkbox (default)', () => (
  <div>
    <SelectableRow name="exampleCheck" value="One">
      Content
    </SelectableRow>
    <SelectableRow name="exampleCheck" value="Two">
      Content
    </SelectableRow>
    <SelectableRow name="exampleCheck" value="Three">
      Content
    </SelectableRow>
  </div>
))

stories.add('As radio', () => (
  <div>
    <SelectableRow type="radio" name="exampleRadio" value="One">
      Content
    </SelectableRow>
    <SelectableRow type="radio" name="exampleRadio" value="Two">
      Content
    </SelectableRow>
    <SelectableRow type="radio" name="exampleRadio" value="Three">
      Content
    </SelectableRow>
  </div>
))

stories.add('Custom content', () => (
  <SelectableRow name="customContent" value="One">
    <Type as="h3" size="subtitle">
      Example Heading
    </Type>
    <Type size="base">
      <Icon type="_placeholder" a11yText="" /> Additional information
    </Type>
    <Type size="small">Even more content</Type>
  </SelectableRow>
))
