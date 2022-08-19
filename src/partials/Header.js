import {Link, Router} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import React from 'react';

function Header (props) {

    //const newHistory = createBrowserHistory();

    const colors = {
        blue: "#3B4CEB"
    }

    const style = {
        header: {
            width: "100%",
            height: "80px",
            padding: "10px",
            backgroundColor: colors.blue,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        },
        logo: {
            width: "50px",
            height: "50px",
        },
        logo__img: {
            width: "100%",
            height: "100%",
            borderRadius: "10px",
        },
        menu: {
            display: "flex",
            gap: "20px",
            color: "#ffffff",
        },
        menu__item: {
            color: "#ffffff",
            textDecoration: "none",
            textTransform: "uppercase",
        }
    }

    return (
        <header style={style.header}>
            <div style={style.logo}>
                <a href="/">
                    <img src="http://conteudo.imguol.com.br/c/noticias/07/2020/01/02/arte-para-o-tec-por-tras-da-calculadora-1577992106273_v2_1200x1200.jpg" style={style.logo__img}/>
                </a>
            </div>
            <nav>
                <Router history={props.history}>
                    <ul style={style.menu}>
{/*                         <li><Link to='/' style={style.menu__item}>Início</Link></li>
                        <li><Link to='/about' style={style.menu__item}>Sobre</Link></li>
                        <li><Link to='/calculators' style={style.menu__item}>Calculadoras</Link></li> */}
                        <li><a href='/' target="_self" style={style.menu__item}>Início</a></li>
                        <li><a href='/about' target="_self" style={style.menu__item}>Sobre</a></li>
                        <li><a href='/calculators' target="_self" style={style.menu__item}>Calculadoras</a></li>
                        <li><a href='https://github.com/Josh662' target="_blanck" rel="external" style={style.menu__item}>GitHub</a></li>
                    </ul>
                </Router>
            </nav>
        </header>
    )
}

export default Header;