import React from 'react';

function About () {
    const style = {
        section: {
            
        },
        begin: {
            width: "100%",
            height: "auto",
            padding: "40px 0",
            backgroundColor: "#0A4030",
            backgroundImage: "url('https://www.guiadoscuriosos.com.br/wp-content/uploads/2019/04/quem-criou-sImbolos-operacoes-fundamentais-matematica.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed"
        },
        begin__img: {
            width: "200px",
            height: "200px",
            display: "block",
            margin: "0 auto 20px",
            border: "5px solid #f7ab1e",
            borderRadius: "50%",
        },
        begin__card: {
            maxWidth: "700px",
            width: "fit-content",
            margin: "0 auto",
            padding: "15px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            textAlign: "justify"
        }
    }

    return (
        <>
            <section style={style.section}>
                <div style={style.begin}>
                    <img src='https://scontent.faqa1-1.fna.fbcdn.net/v/t1.6435-1/151619245_2521171641518875_3538167984114079484_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XlCWDqyPqU0AX_DN5Ji&_nc_ht=scontent.faqa1-1.fna&oh=00_AT9O3J5uR_hgqENyrR-N1-7eZqKiRByftvodLZ8v8SfR-g&oe=6323A5BA' style={style.begin__img}/>
                    <div style={style.begin__card}>
                        <h1 style={{marginBottom: "10px"}}>Seja bem vindo(a) ao Newton!</h1>
                        <p style={{textIndent: "1em"}}>Olá! Seja bem vindo(a) ao meu site. Meu nome é Joshua e eu sou um desenvolvedor junior. Criei esse site a fim de treinar e desenvolver minhas habilidades de programador, fique a vontade para utilizar e explorar minha aplicação!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;