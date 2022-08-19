import React from 'react';

function Footer () {
    const style = {
        footer: {
            width: "100%",
            padding:"20px",
            backgroundColor: "#000000"
        },
        credits: {
            textAlign: "center"
        },
        credits__text: {
            margin: "0",
            color: "#ffffff",
        }
    }
    return (
        <footer style={style.footer}>
            <div style={style.credits}>
                <p style={style.credits__text}>Esse site foi desenvolvido por <a href='https://github.com/Josh662' target="_blanck" rel="external" style={style.credits__text}>Joshua Lorenzo</a> usando <a href='https://pt-br.reactjs.org' target="_blanck" rel="external" style={style.credits__text}>ReactJS</a></p>
            </div>
        </footer>
    )
}

export default Footer;