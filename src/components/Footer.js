/*


MIT License

Copyright (c) 2021 Sannidhay vashal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


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
              <ul className ="footer__list">
                <li className = "footer__item"><a target ="_blank" rel="noreferrer" href="https://github.com/svsannidhay/path-finding-visualiser" className = "footer__link">Github</a></li>
                <li className = "footer__item"><a target ="_blank" rel="noreferrer" href="https://codeforces.com/profile/sv_sannidhay" className = "footer__link">Codeforces</a></li>
                <li className = "footer__item"><a target ="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sannidhay-vashal-50435217a/" className = "footer__link">LinkedIn</a></li>
                <li className = "footer__item"><a target ="_blank" rel="noreferrer" href="https://www.codechef.com/users/sv_sannidhay" className = "footer__link">Codechef</a></li>
                <li className = "footer__item"><a target ="_blank" rel="noreferrer" href="https://www.hackerearth.com/@sannidhay" className = "footer__link">HackerEarth</a></li>
              </ul>
            </div>
            <div className = "footer__navigation">
              <ul className="footer__list">
                <li className = "footer__item"><a className = "footer__link" href="/#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li className = "footer__item"><a className = "footer__link" href="/#"><ion-icon name="logo-google"></ion-icon></a></li>
                <li className = "footer__item"><a className = "footer__link" href="/#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li className = "footer__item"><a className = "footer__link" href="/#"><ion-icon name="logo-instagram"></ion-icon></a></li>
              </ul>    
            </div>
          </div>
        </div>
        <div className = "row footer__copyright-box">
          <p className="footer__copyright">
            Copyright &copy; 2021 Path finding visualiser All rights reserved |  <a href="/#" className ="footer__link">Terms of Service</a>  |  Designed and Developed by Sannidhay Vashal.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;