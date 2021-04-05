import React from 'react'
import logo from '../Images/logo5.png';

const Footer = () => {
  return (
    <footer>
      <div className ="footer">
        <div className = "row">
          <div className = "col-1-of-2 footer__branding">
              <div className = "footer__logo-box">
                <img src={logo} alt="logo" className = "footer__logo"/>
              </div>
            <div className ="footer__text">
              <h3 className ="footer__heading">
                <span className="footer__heading--main">Path Finding</span>
                <span className="footer__heading--sub">Visulaiser</span>
              </h3>
            </div>
          </div>
          <div className = "col-1-of-2" >
            <div className = "footer__navigation">
              <ul class="footer__list">
                <li className = "footer__item"><a target ="_blank" href="https://github.com/svsannidhay/path-finding-visualiser" className = "footer__link">Github</a></li>
                <li className = "footer__item"><a target ="_blank" href="https://codeforces.com/profile/sv_sannidhay" className = "footer__link">Codeforces</a></li>
                <li className = "footer__item"><a target ="_blank"  href="https://www.linkedin.com/in/sannidhay-vashal-50435217a/" className = "footer__link">LinkedIn</a></li>
                <li className = "footer__item"><a target ="_blank" href="https://www.codechef.com/users/sv_sannidhay" className = "footer__link">Codechef</a></li>
                <li className = "footer__item"><a target ="_blank" href="https://www.hackerearth.com/@sannidhay" className = "footer__link">HackerEarth</a></li>
              </ul>
            </div>
            <div className = "footer__navigation">
              <ul class="footer__list">
                <li className = "footer__item"><a className = "footer__link" href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li className = "footer__item"><a className = "footer__link" href="#"><ion-icon name="logo-google"></ion-icon></a></li>
                <li className = "footer__item"><a className = "footer__link" href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li className = "footer__item"><a className = "footer__link" href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
              </ul>    
            </div>
          </div>
        </div>
        <div className = "row footer__copyright-box">
          <p class="footer__copyright">
            Copyright &copy; 2021 Path finding visualiser All rights reserved |  <a href="#" class="footer__link">Terms of Service</a>  |  Designed and Developed by Sannidhay Vashal.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;