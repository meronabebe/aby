import React from "react";
import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero, SASBenefitsPage } from "./components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="bg-gray-400 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-gray-500 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero /> <br/><br/>
        </div>
      </div>

      <div className={`bg-gray-500 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={
              
              <>
                <Stats />
                <Business />
                <Billing />
                <Testimonials />
                <CardDeal />
                <CTA />
                <Footer />
              </>
            } />
            <Route path="/sas-benefits" element={<SASBenefitsPage />} />
            <Route path="/" element={<Stats />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
