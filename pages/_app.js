import '../styles/globals.css'
import Layout from '../commponed/layout/layout'
function MyApp({ Component, pageProps }) {
  return <Layout>
<Component {...pageProps} />
  </Layout> 
  
}

export default MyApp
