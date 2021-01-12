import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import cat from '../../images/cat.svg';
import facebook from '../../images/facebook.svg';




function Footer() {
  return (
<section className="footer">
  <div className="footer__logo">&reg; 2020 Supersite, Powered by News API</div>
  <div className="footer__links">
    <nav className="footer__navigation">
    <Link to="/"  className="footer__link">Главная</Link>
    <a href="https://praktikum.yandex.ru/"  className="footer__link" target="blunk">Яндекс.Практикум</a>
    </nav>
    <div className="footer__icons">
      <img className="footer__icon" src={cat} alt="иконка с кошечкой"/>
      <img className="footer__icon" src={facebook} alt="иконка фэйсбука"/>
    </div>
  </div>

</section>
  );
}

export default Footer;
