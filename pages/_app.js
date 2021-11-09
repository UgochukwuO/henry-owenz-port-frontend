import { ModalContainer, ModalProvider } from '@faceless-ui/modal'
import { Cell, GridProvider } from '@faceless-ui/css-grid'
import { Grid } from '@faceless-ui/css-grid'
import zIndex from '../css/typescript-util/zIndex'

import Header from '../components/layout/Header'
import '../css/globals.css'
import { WindowInfoProvider } from '@faceless-ui/window-info'
import { base } from '../css/typescript-util/base'
import breakpoints from '../css/typescript-util/breakpoints'
import GridContainer  from '../components/layout/GridContainer'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
  <WindowInfoProvider breakpoints={breakpoints}>
      <ModalProvider zIndex={zIndex.modal}>
        <GridProvider
        rowGap={{
          s: base(2),
          m: base(2),
          l: base(2),
          xl: base(2),
        }}
        colGap={{
          s: base(2),
          m: base(2),
          l: base(2),
          xl: base(2),
        }}
        sols={{
          s: 8,
          m: 8,
          l: 12,
          xl: 12
        }}
        >
          <div className="app">
          <Header />
              <Component {...pageProps} />)
          <Footer />
          </div>
        </GridProvider>
        <ModalContainer />
      </ModalProvider>
  </WindowInfoProvider>
  )
}

export default MyApp

/*
<Grid>
          <Cell cols={3}>
            Content
          </Cell>

          <Cell cols={3}>
            Content
          </Cell>
        </Grid>
*/