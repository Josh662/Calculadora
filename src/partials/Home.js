import React, { useState } from 'react';

function Home () {
    const [conta, setConta] = useState("")

    function change(v) {
        let res = document.querySelector("#result")

        switch (v) {
            case "CE":
                res.innerText = ""
                break
            case "=":
                calc(res, res.innerText)
                break
            default:
                add(v)
        }
        setConta(res.innerText)
    }

    function calc(elem, exp) {
        exp = exp.replace(",", ".")
        exp = exp.replace("%", "*0.01")
        try {

            let r = eval(exp)
            r = String(r).replace(".", ",")
            if(!["undefined", "Infinity", "null"].includes(r)) {
                elem.innerText = r
            } else {
                alert("Expressão Inválida!")
            }
        } catch(err) {
            alert(`ERRO: ${err}`)
        }
        
    }

    function add(v) {
        let res = document.querySelector("#result")
        let max = 20
        if (res.innerText.length <= max) {
            res.innerText = `${res.innerText}${v}`
        } else {
            alert(`Não é possível inserir mais do que ${max} caracteres!`)
        }
    }


    const style = {
        section: {
            maxWidth: "1000px",
            width: "fit-content",
            margin: "0 auto",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            gap: "30px"
        },
        section__card: {
            padding: "20px 10px",
            maxWidth: "500px",
            height: "fit-content",
            borderRadius: "20px",
            gap: "10px",
            textAlign: "justify"
        },
        img_calc: {
            width: "200px",
            height: "auto",
            padding: "10px"
        },
        calc: {
            width: "400px",
            padding: "15px",
            backgroundColor: "#000000",
            borderRadius: "20px",
        },
        result: {
            width: "100%",
            height: "50px",
            padding: "10px",
            overflow: "hidden",
            marginBottom: "10px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            textAlign: "right"
        },
        btnc: {
            width: "90px",
            height: "50px",
            fontSize: "1em",
            borderRadius: "5px",
            cursor: "pointer"
        }
    }
    return (
        <>
            <section style={style.section}>
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124065.png" style={style.img_calc}></img>
                    <div style={style.section__card}>
                        <h1 style={{marginBottom: "10px"}}>Seja bem vindo!</h1>
                        <p>Esta é a calculadora Newton. Aqui você pode encontrar uma variedade de calculadoras gratuitas destinadas às mais diversas necessidades. Divirta-se! &#x1F60A;</p>
                    </div>
            </section>
            <section style={style.section}>
                <div style={style.calc}>
                    <h1 style={style.result} id="result"></h1>
                    <table>
                        <tbody>
                            <tr>
                                <td><button onClick={() => change("(")} style={style.btnc}>(</button></td>
                                <td><button onClick={() => change(")")} style={style.btnc}>)</button></td>
                                <td><button onClick={() => change("%")} style={style.btnc}>%</button></td>
                                <td><button onClick={() => change("CE")} style={style.btnc}>CE</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={() => change("7")} style={style.btnc}>7</button></td>
                                <td><button onClick={() => change("8")} style={style.btnc}>8</button></td>
                                <td><button onClick={() => change("9")} style={style.btnc}>9</button></td>
                                <td><button onClick={() => change("/")} style={style.btnc}>/</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={() => change("4")} style={style.btnc}>4</button></td>
                                <td><button onClick={() => change("5")} style={style.btnc}>5</button></td>
                                <td><button onClick={() => change("6")} style={style.btnc}>6</button></td>
                                <td><button onClick={() => change("*")} style={style.btnc}>*</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={() => change("1")} style={style.btnc}>1</button></td>
                                <td><button onClick={() => change("2")} style={style.btnc}>2</button></td>
                                <td><button onClick={() => change("3")} style={style.btnc}>3</button></td>
                                <td><button onClick={() => change("-")} style={style.btnc}>-</button></td>
                            </tr>
                            <tr>
                                <td><button onClick={() => change("0")} style={style.btnc}>0</button></td>
                                <td><button onClick={() => change(",")} style={style.btnc}>,</button></td>
                                <td><button onClick={() => change("=")} style={style.btnc}>=</button></td>
                                <td><button onClick={() => change("+")} style={style.btnc}>+</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Home;