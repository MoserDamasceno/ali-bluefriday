import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import HubspotForm from "../components/hubspot-form"


import "../styles/pages/index.scss"

export default function Home() {

  return (
    <Layout>
      <Seo title="Home" />

      <section className="container" id="banner">
        <div className="grid-container">
          <div className="grid">
            <div className="col content-banner">
              <div className="img-mobile">
              <StaticImage src="../images/bluefriday-2.png" alt="Blue Friday"></StaticImage>
              </div>
              <h1>Quer aproveitar a Black Friday <br/>mas está no <span>vermelho</span>?</h1>
              <p>
                Aproveite as melhores promoções do ano <br/>
                <span>sem usar os limites do cartão nem o 13⁰.</span> </p>
                <p><b>Dinheiro fácil, rápido e sem burocracia!</b></p>
            </div>
            <div className="col">
              <div className="form-hubspot">
                <div className="header-form">
                  <h2>Simule agora</h2>
                </div>
                <HubspotForm></HubspotForm>
                <p>Lorem ipsum may be used as a placeholder before final copy is available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dinheiro-na-conta" className="container">
        <div className="grid-container">
          <div className="grid">
            <div className="col">
              <h2>Dinheiro na conta AGORA e a primeira <br/>parcela só pro ANO QUE VEM!</h2>
            </div>
          </div>
          <div className="grid grid-2">
            <div className="col">
              <div className="image">
                <StaticImage src="../images/img-sem-juros.png" alt="Sem juros"></StaticImage>
              </div>
              <div className="content">
                <h3>Sem juros</h3>
                <p>Até <b>R$ 1.000,00 SEM JUROS</b> <br/>de verdade!</p>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <StaticImage src="../images/img-calendario.png" alt="calendario"></StaticImage>
              </div>
              <div className="content">
                <h3>SÓ PAGA ANO <br/>QUE VEM</h3>
                <p>Primeira parcela <b>só em 2023!</b></p>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <StaticImage src="../images/img-dinheiro-rapido.png" alt="dinheiro rapido"></StaticImage>
              </div>
              <div className="content">
                <h3>DINHEIRO RÁPIDO</h3>
                <p>Dinheiro na conta em <b>até 24hs</b><br/> depois de aprovado!</p>
              </div>
            </div>
            <div className="col">
              <div className="image">
                <StaticImage src="../images/img-credito.png" alt="credito"></StaticImage>
              </div>
              <div className="content">
                <h3>CRÉDITO <br/>PRÉ-APROVADO</h3>
                <p><b>Sem consulta</b> ao SPC e Serasa!</p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <p>Vai perder essa?</p>
              <a href="#" className="btn btn-azul">Fale Conosco</a>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="container">
        <div className="grid-container">
          <div className="grid">
            <div className="col">
              <h2>Compre AGORA sem usar seu limite do cartão! <br/>RÁPIDO, FÁCIL e EXCLUSIVO!</h2>
              <p>O dinheiro cai na sua conta em até 24 horas depois de aprovado e você <br/>compra o que quiser e onde desejar!</p>
            </div>
          </div>
          <div className="grid grid-produtos">
            <div className="col">
              <div className="images-produtos">
                <StaticImage src="../images/img-produto-01.jpg" alt="Produto 01"></StaticImage>
                <StaticImage src="../images/img-produto-01.jpg" alt="Produto 01"></StaticImage>
                <StaticImage src="../images/img-produto-01.jpg" alt="Produto 01"></StaticImage>
              </div>
              <p><b>R$ 500</b> em <b>6x SEM JUROS</b>, de verdade</p>
            </div>
            <div className="col">
              <div className="images-produtos">
                <StaticImage src="../images/img-produto-02.jpg" alt="Produto 02"></StaticImage>
                <StaticImage src="../images/img-produto-02.jpg" alt="Produto 02"></StaticImage>
                <StaticImage src="../images/img-produto-02.jpg" alt="Produto 02"></StaticImage>
              </div>
              <p><b>R$ 1.000</b> em <b>3x SEM JUROS</b>, de verdade <br/>ou <b>10x</b> com <b>taxa de 0,99%</b> </p>
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <a href="#" className="btn btn-branco">Eu quero!</a>
            </div>
          </div>
        </div>
      </section>

      <section id="liberdade-financeira" className="container">
        <div className="grid-container">
          <div className="grid">
            <div className="col">
              <h2>
                Liberdade financeira de verdade! <br/>
                Condições imperdíveis para você aproveitar a Black <br/>Friday do seu jeito, onde e como quiser
              </h2>
            </div>
          </div>
          <div className="grid grid-3">
            <div className="col">
              <div className="box-preco">
                <span className="preco">
                  R$ 500
                </span>
                <hr />
                <span className="condicao">
                  6x SEM JUROS
                </span>
                <span className="textinho">
                  de verdade
                </span>
              </div>
            </div>
            <div className="col">
            <div className="box-preco">
                <span className="preco">
                  R$ 1.000
                </span>
                <hr />
                <span className="condicao">
                  3x SEM JUROS
                </span>
                <span className="textinho">
                  de verdade
                </span>
              </div>
            </div>
            <div className="col">
            <div className="box-preco">
                <span className="preco">
                  R$ 1.000
                </span>
                <hr />
                <span className="condicao">
                  10x COM TAXA DE <span>0,99%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <a href="#" className="btn btn-verde">Solicite agora</a>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="container">
        <div className="grid-container">
          <div className="grid">
            <div className="col">
              <div className="logo-footer">
                <StaticImage src="../images/logo-footer.png" alt="Logo footer"></StaticImage>
              </div>
            </div>
          </div>
        </div>
      </footer>

    
    </Layout>
    )
  }
  