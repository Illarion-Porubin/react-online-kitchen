import React from "react";
import s from "./About.module.scss";
import js from "../../assets/svg/skills/js.svg";
import ts from "../../assets/svg/skills/typescript.svg";
import react from "../../assets/svg/skills/react.svg";
import redux from "../../assets/svg/skills/redux.svg";
import html from "../../assets/svg/skills/html-5.svg";
import css from "../../assets/svg/skills/css3.svg";
import sass from "../../assets/svg/skills/sass.svg";
import github from "../../assets/svg/skills/github.svg";
import mysql from "../../assets/svg/skills/mysql.svg";
import postgresql from "../../assets/svg/skills/postgresql.svg";
import mongodb from "../../assets/svg/skills/mongodb.svg";
import materialui from "../../assets/svg/skills/material-ui.svg";
import node from "../../assets/svg/skills/node.svg";
import { Header } from "../../components/header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";

export const About: React.FC = () => {
  const icons = [
    js,
    ts,
    react,
    redux,
    html,
    css,
    sass,
    github,
    mysql,
    postgresql,
    mongodb,
    materialui,
    node,
  ];
  return (
    <>
      <Header />
      <div className="container">
        <section className={s.about}>
          <div className={s.mainInfo}>
            <h1 className={s.title}>Информация обо мне</h1>
            <div className={s.info}>
              <p className={s.text}>
                Здравствуйте! Меня зовут Илларион, мне 28 и я full-stack
                developer.<br/>Закончил (Новороссийский колледж радиоэлектронного
                приборостроения) - НКРП, получил среднее специальное
                образование.
              </p>
              <p className={s.text}>
                Вот уже 4 года я занимаюсь веб разработкой, за это время было
                создано много проектов различной сложности начиная от
                одностраничника с использованием Gulp и заканчивая интернет
                магазином с применением: React, Redux, Redux-toolkit,
                Redux-persist, React-router-dom, Axios, MySql, Sequelize,
                Passport-google-oauth20 и т.д.
              </p>
              <p className={s.text}>
                Я не проходил обучение в “онлайн школах” где за 6
                месяцев из тебя якобы сделают гуру web или back разработки, так
                как всё это очень сомнительно. <br /> Информацию для обучения
                беру из докуменаций, открытых источников и на YouTub. <br/> Весь мой
                опыт постигался долгие 4 года, за это время я успел поработать
                на фрилансе и с коллективом.
              </p>
              <p className={s.text}>
                Буду рад с вами сотрудничать, ниже оставлю ссылки на обратную
                связь и другие мои проекты.
              </p>
            </div>
            <div className={s.links}>
              <div className={s.feedback}>
                <h1 className={s.title}>Обратная связь</h1>
                <a className={s.link} href="/#">
                  Ссылка на GitHub
                </a>
                <a className={s.link} href="/#">
                  Ссылка на Google почту
                </a>
              </div>
              <div className={s.projects}>
                <h1 className={s.title}>Другие проекты</h1>
                <a className={s.link} href="/#">
                  Ссылка на другой проект
                </a>
                <a className={s.link} href="/#">
                  Ссылка на другой проект
                </a>
              </div>
            </div>
          </div>
          <div className={s.dopInfo}>
            <h1 className={s.title}>Технологии которые я использую </h1>
            <div className={s.skills}>
              <Swiper
                modules={[Scrollbar, Autoplay]}
                effect="fade"
                slidesPerView={7}
                autoplay={true}
                loop={true}
                breakpoints={{
                  720: {
                    slidesPerView: 7,
                  },
                  620: {
                    slidesPerView: 6,
                  },
                  520: {
                    slidesPerView: 5,
                  },
                  420: {
                    slidesPerView: 4,
                  },
                  220: {
                    slidesPerView: 3,
                  },
                }}
              >
                {icons.map((item, id: number) => {
                  return (
                    <SwiperSlide className={s.slider} key={id}>
                      <img className={s.slide} src={item} alt={item} key={id} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
