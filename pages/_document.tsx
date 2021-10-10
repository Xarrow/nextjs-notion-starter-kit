import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.png' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/favicon.ico'
            />
            <link
              rel='icon'
              type='image/ico'
              sizes='96x96'
              href='/favicon.ico'
            />
            <link
              rel='icon'
              type='image/ico'
              sizes='32x32'
              href='/favicon.ico'
            />
            <link
              rel='icon'
              type='image/ico'
              sizes='16x16'
              href='/favicon.ico'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
