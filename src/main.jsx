import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [page, setPage] = useState('home');
  const [largeText, setLargeText] = useState(() => localStorage.getItem('reda-large-text') === 'true');
  function changeText(event) {
    setLargeText(event.target.checked);
    localStorage.setItem('reda-large-text', String(event.target.checked));
  }
  return <div className={largeText ? 'app large-text' : 'app'}>
    <header><a className="brand" href="#" onClick={(event) => { event.preventDefault(); setPage('home'); }} aria-label="Reda, início">Reda<span>✳</span></a><span className="header-note">Uma ideia de cada vez.</span></header>
    <main>
      {page === 'home' ? <>
        <div className="intro"><span className="eyebrow">SEU ESPAÇO DE APRENDIZADO</span><h1>Grandes textos<br/>começam <em>aqui.</em></h1><p>Aprenda a colocar suas ideias no papel.<br/>Qual é o seu próximo desafio?</p></div>
        <div className="choices">
          <button className="course ssa" onClick={() => setPage('SSA3')}><span className="course-top"><span className="badge">01 / SSA3</span><span aria-hidden="true">↗</span></span><span className="course-title">SSA3</span><span className="course-description">Seu caminho até a UPE.</span><span className="course-bottom">Explorar aulas <span aria-hidden="true">→</span></span></button>
          <button className="course enem" onClick={() => setPage('ENEM')}><span className="course-top"><span className="badge">02 / ENEM</span><span aria-hidden="true">↗</span></span><span className="course-title">ENEM</span><span className="course-description">Suas ideias, novas possibilidades.</span><span className="course-bottom">Explorar aulas <span aria-hidden="true">→</span></span></button>
        </div>
        <button className="settings" onClick={() => setPage('settings')}><span><span aria-hidden="true">⚙</span> Configurações</span><span aria-hidden="true">→</span></button>
      </> : <section className="detail"><button className="back" onClick={() => setPage('home')}>← Voltar ao início</button>{page === 'settings' ? <><span className="eyebrow">DO SEU JEITO</span><h1>Configurações</h1><p>Ajuste sua experiência de leitura.</p><label className="text-setting"><span>Texto maior</span><input type="checkbox" checked={largeText} onChange={changeText}/></label></> : <><span className="eyebrow">SEU PRÓXIMO DESAFIO</span><h1>{page}</h1><p>As aulas de {page} estão sendo preparadas. Em breve, este será seu espaço para aprender e praticar.</p><span className="coming">Aulas em breve</span></>}</section>}
    </main><footer>FEITO PARA SUAS IDEIAS GANHAREM VOZ <span aria-hidden="true">✳</span></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
