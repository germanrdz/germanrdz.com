import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'

import { Pre, LineNo } from './styles'

const HighlightedCode = ({ code }) => (
  <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
)

export default HighlightedCode;
