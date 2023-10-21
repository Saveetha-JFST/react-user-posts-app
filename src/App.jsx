import React from 'react'
import FooterComponent from './assets/components/FooterComponent/FooterComponent'
import NavigationComponent from './assets/components/NavigationComponent/NavigationComponent'

const App = () => {
  return (
    <React.Fragment>
      <NavigationComponent/>
      <FooterComponent/>
    </React.Fragment>
  )
}

export default App