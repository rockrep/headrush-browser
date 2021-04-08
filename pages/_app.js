import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [headrushRoot, setHeadrushRoot] = useState('')
  const router = useRouter()

  // useEffect(() => {
  //   if (headrushRoot !== '') router.push('/browser')
  // }, [router, headrushRoot])

  return <Component {...pageProps} headrushRoot={headrushRoot} setHeadrushRoot={setHeadrushRoot} />
}

export default MyApp
