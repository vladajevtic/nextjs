import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
        <div id="content"  className="site-content">
          <div id="primary" className="content-area">
            <div>
              <main id="main" className="site-main">
                {children}
              </main>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Layout;