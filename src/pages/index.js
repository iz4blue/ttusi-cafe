import React from 'react'
import Header from 'components/layout-header'
import SubNav from 'components/layout-sub_nav'
import Section from 'components/layout-section'
import IndexRoot from 'components/layout-root-index'
import Footer from 'components/layout-footer'
import 'components/global/global.css'

export default () => (
  <main>
    <Header />
    <Section>
      <SubNav />
      <IndexRoot />
    </Section>
    <Footer />
  </main>
)
