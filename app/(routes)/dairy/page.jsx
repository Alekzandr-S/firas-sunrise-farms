import React from 'react'
import { Cta, Header, Layout01, Layout011, Layout02, Layout022, Testimonia } from './components'
import { Layout03 } from './components/Layout-03'

const page = () => {
  return (
    <>
      <Header />
      <Layout01 />
      <Layout011 />
      <Layout03 />
      <Layout022 /> 
      <Layout02 />
      {/* <Testimonia /> */}
      <Cta />
    </>
  )
}

export default page