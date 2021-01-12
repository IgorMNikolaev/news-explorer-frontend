import React from 'react';
import './About.css';

function About() {
  return (
<section className="about">
  <div className="about__info">
    <div className="about__image"></div>
    <div className="about__story">
      <h2 className="about__header" >Об авторе</h2>
      <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
      <br/>
      <br/>
Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
    </div>
  </div>
</section>
  );
}

export default About;
