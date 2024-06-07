import './App.css'
import React from 'react'
import { Textarea } from './Components/Textarea/Textarea'

const App: React.FC = () => {
  return (
    <div>
      {/* Default state */}
      <Textarea
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        style={{ minHeight: 100 }}
      />

      {/* Disabled state */}
      <Textarea
        disabled
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        style={{ minHeight: 100 }}
      />

      {/* Error state */}
      <Textarea
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        error="There has been an error."
        size="xSmall"
        style={{ minHeight: 100 }}
      />
      <Textarea
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        error="There has been an error."
        size="small"
        style={{ minHeight: 100 }}
      />
      <Textarea
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        error="There has been an error."
        size="mediumSmall"
        style={{ minHeight: 100 }}
      />
      <Textarea
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        error="There has been an error."
        size="large"
        style={{ minHeight: 100 }}
      />
    </div>
  )
}

export default App
