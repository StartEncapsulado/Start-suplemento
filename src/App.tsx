// React import is automatically included in modern React setups
import './App.css';
import startLogo from './assets/start-logo.png';
import productImage from './assets/product-image.png';
import energyIcon from './assets/energy-icon.png';
import memoryIcon from './assets/memory-icon.png';
import immunityIcon from './assets/immunity-icon.png';
import concentrationIcon from './assets/concentration-icon.png';
import dispositionIcon from './assets/disposition-icon.png';
import fatigueIcon from './assets/fatigue-icon.png';
import secureIcon from './assets/secure-icon.png';
import guaranteeIcon from './assets/guarantee-icon.png';
import privacyIcon from './assets/privacy-icon.png';
import doctorImage from './assets/doctor-image.png';
import testimonial1 from './assets/testimonial1.jpg';
import testimonial2 from './assets/testimonial2.jpg';
import testimonial3 from './assets/testimonial3.jpg';

function App() {
  return (
    <div className="App">
      {/* Banner de Urgência */}
      <div className="urgency-banner">
        <p>ATENÇÃO: Devido à ALTA DEMANDA gerada pela procura no tratamento, nossos frascos estão QUASE ESGOTADOS!</p>
      </div>

      {/* Cabeçalho e Chamada Principal */}
      <header className="hero-section">
        <div className="container">
          <div className="logo-container">
            <img src={startLogo} alt="START! Logo" className="logo" />
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1>O ÚNICO suplemento que aumenta sua energia, melhora a memória e reduz a fadiga em apenas 7 dias</h1>
              <p>O REVOLUCIONÁRIO tratamento que irá agir de dentro para fora e revitalizar por completo sua disposição e bem-estar! Combinação exclusiva de vitaminas e minerais essenciais.</p>
              <a href="#offer" className="cta-button">QUERO COMPRAR AGORA</a>
              <div className="trust-badges">
                <div className="badge">
                  <img src={secureIcon} alt="Compra Segura" />
                  <span>Compra Segura</span>
                </div>
                <div className="badge">
                  <img src={guaranteeIcon} alt="Satisfação Garantida" />
                  <span>Satisfação Garantida</span>
                </div>
                <div className="badge">
                  <img src={privacyIcon} alt="Privacidade Protegida" />
                  <span>Privacidade Protegida</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={productImage} alt="START! Suplemento" />
            </div>
          </div>
        </div>
      </header>

      {/* Benefícios Principais */}
      <section className="formula-section">
        <div className="container">
          <h2>Qual o <span className="highlight">segredo</span> da nossa fórmula?</h2>
          <p>
            Nossa fórmula é verdadeiramente inovadora e única, com uma poderosa combinação de vitaminas e minerais essenciais. 
            Este tratamento revolucionário age diretamente na raiz do problema, aumentando sua energia, melhorando a memória e reduzindo a fadiga. 
            A fórmula do nosso tratamento é OFICIALMENTE a única do mercado que une os melhores ativos para um tratamento rápido e eficaz!
          </p>
        </div>
      </section>

      {/* Ícones de Benefícios */}
      <section className="benefits-icons">
        <div className="container">
          <div className="icon-grid">
            <div className="benefit-icon">
              <img src={energyIcon} alt="Energia" />
              <h3>AUMENTA A ENERGIA</h3>
            </div>
            <div className="benefit-icon">
              <img src={memoryIcon} alt="Memória" />
              <h3>MELHORA A MEMÓRIA</h3>
            </div>
            <div className="benefit-icon">
              <img src={fatigueIcon} alt="Fadiga" />
              <h3>REDUZ A FADIGA</h3>
            </div>
            <div className="benefit-icon">
              <img src={immunityIcon} alt="Imunidade" />
              <h3>FORTALECE A IMUNIDADE</h3>
            </div>
            <div className="benefit-icon">
              <img src={concentrationIcon} alt="Concentração" />
              <h3>MELHORA A CONCENTRAÇÃO</h3>
            </div>
            <div className="benefit-icon">
              <img src={dispositionIcon} alt="Disposição" />
              <h3>AUMENTA A DISPOSIÇÃO</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Eficácia Comprovada */}
      <section className="efficacy-section">
        <div className="container">
          <div className="section-header">
            <div className="efficacy-badge">Eficácia Comprovada</div>
            <h2>Confira abaixo o poder do tratamento em seu corpo e mente</h2>
          </div>
          
          <div className="benefits-columns">
            <div className="benefit-column">
              <div className="benefit-image energy"></div>
              <h3>ENERGIA</h3>
              <p>Com o poder da natureza, START! proporciona mais energia e disposição para suas atividades diárias! Combate a fadiga e o cansaço desde a primeira semana de uso.</p>
            </div>
            
            <div className="benefit-column">
              <div className="benefit-image memory"></div>
              <h3>MEMÓRIA</h3>
              <p>Melhora significativa na memória e concentração. Diga adeus às falhas de memória e dificuldade de concentração no trabalho e estudos.</p>
            </div>
            
            <div className="benefit-column">
              <div className="benefit-image immunity"></div>
              <h3>IMUNIDADE</h3>
              <p>Fortalece seu sistema imunológico, proporcionando mais resistência contra doenças e aumentando sua vitalidade.</p>
            </div>
          </div>
          
          <a href="#offer" className="cta-button">QUERO COMPRAR AGORA</a>
        </div>
      </section>

      {/* Nova Seção de Vídeo */}
      <section className="video-section">
        <div className="container">
          <h2>Veja o START! <span className="highlight">em ação</span></h2>
          <p>Assista ao vídeo e descubra como o START! pode transformar sua energia, memória e disposição em apenas alguns dias.</p>
          
          <div className="video-container">
            {/* Substitua o src pela URL do seu vídeo do YouTube ou outro serviço */}
            <iframe 
              className="responsive-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Vídeo START! Suplemento" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          
          <div className="video-cta">
            <p>Não espere mais para transformar sua vida. Experimente START! hoje mesmo!</p>
            <a href="#offer" className="cta-button">QUERO EXPERIMENTAR AGORA</a>
          </div>
        </div>
      </section>

      {/* Especialistas Recomendam */}
      <section className="experts-section">
        <div className="container">
          <h2>Especialistas <span className="highlight">usam e recomendam!</span></h2>
          <p>Confira o que os especialistas estão falando sobre esse revolucionário tratamento.</p>
          
          <div className="expert-content">
            <img src={doctorImage} alt="Especialista em nutrição" className="expert-image" />
            <div className="expert-quote">
              <p>"Como especialista em nutrição, recomendo START! para meus pacientes que sofrem com fadiga, baixa energia e problemas de memória. Os resultados são impressionantes e a formulação é baseada em evidências científicas sólidas."</p>
              <p className="expert-name">- Dra. Mariana Silva, Nutricionista</p>
            </div>
          </div>
          
          <a href="#offer" className="cta-button">QUERO COMPRAR AGORA</a>
        </div>
      </section>

      {/* Composição e Diferenciais */}
      <section className="composition-section">
        <div className="container">
          <h2>O que torna START! tão eficaz?</h2>
          <p>Nossa fórmula exclusiva combina vitaminas e minerais essenciais em dosagens cientificamente comprovadas para maximizar os resultados.</p>
          
          <div className="ingredients-list">
            <div className="ingredient">
              <h3>Complexo B (B1, B2, B3, B5, B6, B9, B12)</h3>
              <p>Essenciais para o metabolismo energético, função neurológica e redução da fadiga</p>
            </div>
            <div className="ingredient">
              <h3>Magnésio</h3>
              <p>Reduz o cansaço e a fadiga, melhora a função muscular e nervosa</p>
            </div>
            <div className="ingredient">
              <h3>Ferro</h3>
              <p>Combate a anemia, aumenta a disposição e melhora o transporte de oxigênio</p>
            </div>
            <div className="ingredient">
              <h3>Zinco</h3>
              <p>Fortalece o sistema imunológico e melhora a função cognitiva</p>
            </div>
            <div className="ingredient">
              <h3>Vitamina C</h3>
              <p>Potente antioxidante, melhora a absorção de ferro e fortalece a imunidade</p>
            </div>
            <div className="ingredient">
              <h3>Vitamina D3</h3>
              <p>Fundamental para o bem-estar geral, função muscular e imunológica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos de Clientes */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Quem usa, aprova!</h2>
          <p>Veja o que nossos clientes estão falando sobre START!</p>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <img src={testimonial1} alt="Cliente 1" className="testimonial-image" />
              <div className="testimonial-content">
                <p>"Depois de apenas 2 semanas usando START!, minha energia voltou completamente! Não sinto mais aquele cansaço ao acordar e consigo me concentrar muito melhor no trabalho."</p>
                <p className="testimonial-name">- Carlos M., 42 anos</p>
                <div className="rating">★★★★★</div>
              </div>
            </div>
            
            <div className="testimonial">
              <img src={testimonial2} alt="Cliente 2" className="testimonial-image" />
              <div className="testimonial-content">
                <p>"Minha memória melhorou significativamente! Não esqueço mais compromissos e consigo me lembrar de detalhes importantes nas reuniões. START! mudou minha vida profissional."</p>
                <p className="testimonial-name">- Ana P., 38 anos</p>
                <div className="rating">★★★★★</div>
              </div>
            </div>
            
            <div className="testimonial">
              <img src={testimonial3} alt="Cliente 3" className="testimonial-image" />
              <div className="testimonial-content">
                <p>"Eu estava sempre cansado e com baixa imunidade. Desde que comecei a tomar START!, minha disposição aumentou e não fiquei mais doente. Recomendo a todos!"</p>
                <p className="testimonial-name">- Roberto S., 45 anos</p>
                <div className="rating">★★★★★</div>
              </div>
            </div>
          </div>
          
          <a href="#offer" className="cta-button">QUERO COMPRAR AGORA</a>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="faq-section">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3>Quanto tempo leva para ver resultados?</h3>
              <p>A maioria dos usuários começa a sentir os primeiros resultados entre 7 e 14 dias de uso contínuo. Para resultados completos, recomendamos o uso por pelo menos 30 dias.</p>
            </div>
            
            <div className="faq-item">
              <h3>Quais são os efeitos colaterais?</h3>
              <p>START! é formulado com ingredientes naturais e seguros. Não foram relatados efeitos colaterais significativos. Em casos raros, pode ocorrer leve desconforto gastrointestinal, que geralmente desaparece com o uso contínuo.</p>
            </div>
            
            <div className="faq-item">
              <h3>Como devo tomar?</h3>
              <p>Recomenda-se a ingestão de 2 cápsulas ao dia, preferencialmente pela manhã, ou conforme orientação de médico ou nutricionista.</p>
            </div>
            
            <div className="faq-item">
              <h3>Posso tomar junto com outros medicamentos?</h3>
              <p>Embora START! seja um suplemento natural, recomendamos consultar seu médico antes de usar se você estiver tomando medicamentos ou tiver condições médicas pré-existentes.</p>
            </div>
            
            <div className="faq-item">
              <h3>Por quanto tempo devo tomar?</h3>
              <p>Para melhores resultados, recomendamos o uso contínuo por pelo menos 3 meses. Muitos usuários optam por continuar o uso para manutenção dos benefícios.</p>
            </div>
            
            <div className="faq-item">
              <h3>Quem não deve tomar?</h3>
              <p>START! não é recomendado para gestantes, lactantes e crianças. Pessoas com condições médicas pré-existentes devem consultar um profissional de saúde antes de iniciar o uso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia e Segurança */}
      <section className="guarantee-section">
        <div className="container">
          <h2>Satisfação Garantida ou seu Dinheiro de Volta</h2>
          <p>Estamos tão confiantes nos resultados que oferecemos garantia de satisfação. Se não estiver satisfeito, devolvemos seu dinheiro.</p>
          
          <div className="security-badges">
            <div className="security-badge">
              <img src={secureIcon} alt="Compra 100% Segura" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="security-badge">
              <img src={guaranteeIcon} alt="Satisfação Garantida" />
              <span>Satisfação Garantida</span>
            </div>
            <div className="security-badge">
              <img src={privacyIcon} alt="Privacidade Protegida" />
              <span>Privacidade Protegida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta e Chamada Final */}
      <section id="offer" className="offer-section">
        <div className="container">
          <div className="offer-header">
            <h2>OFERTA ESPECIAL POR TEMPO LIMITADO</h2>
            <p>Escolha a opção que melhor se adapta às suas necessidades:</p>
          </div>
          
          <div className="packages">
            <div className="package">
              <h3>1 Frasco</h3>
              <div className="package-image">
                <img src={productImage} alt="1 Frasco de START!" />
              </div>
              <div className="package-price">
                <p className="price">R$ 197,00</p>
                <p className="installment">ou 12x de R$ 16,42</p>
              </div>
              <a href="https://pagamento.exemplo.com/1frasco" className="package-button">COMPRAR AGORA</a>
            </div>
            
            <div className="package popular">
              <div className="popular-tag">MAIS POPULAR</div>
              <h3>3 Frascos</h3>
              <div className="package-image">
                <img src={productImage} alt="3 Frascos de START!" />
              </div>
              <div className="package-price">
                <p className="old-price">De R$ 591,00</p>
                <p className="price">Por R$ 497,00</p>
                <p className="installment">ou 12x de R$ 41,42</p>
                <p className="discount">Economize R$ 94,00</p>
              </div>
              <a href="https://pagamento.exemplo.com/3frascos" className="package-button">COMPRAR AGORA</a>
            </div>
            
            <div className="package">
              <div className="best-value-tag">MELHOR CUSTO-BENEFÍCIO</div>
              <h3>5 Frascos</h3>
              <div className="package-image">
                <img src={productImage} alt="5 Frascos de START!" />
              </div>
              <div className="package-price">
                <p className="old-price">De R$ 985,00</p>
                <p className="price">Por R$ 747,00</p>
                <p className="installment">ou 12x de R$ 62,25</p>
                <p className="discount">Economize R$ 238,00</p>
              </div>
              <a href="https://pagamento.exemplo.com/5frascos" className="package-button">COMPRAR AGORA</a>
            </div>
          </div>
          
          <div className="final-cta">
            <h3>NÃO PERCA ESTA OPORTUNIDADE!</h3>
            <p>Transforme sua energia, memória e disposição com START!</p>
            <a href="#offer" className="cta-button large">QUERO COMPRAR AGORA</a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={startLogo} alt="START! Logo" />
            </div>
            <div className="footer-links">
              <a href="#terms">Termos de Uso</a>
              <a href="#privacy">Política de Privacidade</a>
              <a href="#contact">Contato</a>
            </div>
          </div>
          <div className="footer-disclaimer">
            <p>Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte seu médico antes de iniciar qualquer suplementação.</p>
            <p>&copy; 2025 START! Suplementos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
