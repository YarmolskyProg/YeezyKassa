import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <>
            <div className="support_tg">
                <a href="https://t.me/yeezykassasupport" target="_blank"><img src="/img/sup_img.png" alt="" /></a>
            </div>
            <div className="header">
                <div className="center">
                    <Link to="/"><img className="logo" src="/img/logo.png" alt="" /></Link>

                    <ul>
                        <li><Link to="/">ГЛАВНАЯ</Link></li>
                        <li><Link to="/blog">БЛОГ</Link></li>
                        <li><Link to="/regulations">РЕГЛАМЕНТ</Link></li>
                        <li><Link to="/contacts">КОНТАКТЫ</Link></li>
                    </ul>


                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>

                        <ul className="menu__box">
                            <li><Link className="menu__item" to="/index">Главная</Link></li>
                            <li><Link className="menu__item" to="/blog">Блог</Link></li>
                            <li><Link className="menu__item" to="/regulations">Регламент</Link></li>
                            <li><Link className="menu__item" to="/contacts">Контакты</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header