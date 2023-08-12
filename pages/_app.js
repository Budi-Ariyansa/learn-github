import '@/styles/globals.css'
import localFont from 'next/font/local'

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps}/>
    </main>
  )
}
