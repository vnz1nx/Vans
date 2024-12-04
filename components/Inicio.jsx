import "./styleVans.css"; 
import CompPrincipal from "./CompPrincipal";

export default function Inicio() {
  return (
    <>
      <div className="inicio">
        <CompPrincipal />

        <div className="opcoes">
          <div className="dropdown" id="Web">
            <span>WEB</span>
            <div className="dropdown-content">
              <a href="#">Aplicativo</a><br/>
              <a href="#">Contato</a><br/>
              <a href="#">Lojas Fisicas</a>
            </div>
          </div>

          <div className="dropdown" id="Novidades">
            <span>NOVIDADES</span>
            <div className="dropdown-content">
              <a href="#">Blusas</a><br/>
              <a href="#">Calças</a><br/>
              <a href="#">Tenis</a><br/>
              <a href="#">Conjuntos</a>
            </div>
          </div>

          <div className="dropdown" id="Kids">
            <span>KIDS</span>
            <div className="dropdown-content">
              <a href="#">Tenis</a><br/>
              <a href="#">Brindes</a><br/>
              <a href="#">Prêmios</a>
            </div>
          </div>

          <div className="dropdown" id="Feminino">
            <span>FEMININO</span>
            <div className="dropdown-content">
              <a href="#">Blusas</a><br/>
              <a href="#">Calças</a><br/>
              <a href="#">Tenis</a><br/>
              <a href="#">Vestidos</a>
            </div>
          </div>

          <div className="dropdown" id="Masculino">
            <span>MASCULINO</span>
            <div className="dropdown-content">
              <a href="#">Blusas</a><br/>
              <a href="#">Calças</a><br/>
              <a href="#">Tenis</a><br/>
              <a href="#">Jaquetas</a>
            </div>
          </div>

          <div className="dropdown" id="Latest">
            <span>LATEST</span>
            <div className="dropdown-content">
              <a href="#">Contratos</a><br/>
              <a href="#">Funcionários</a><br/>
              <a href="#">Lojas</a>
            </div>
          </div>

          <div className="dropdown" id="Sale">
            <span>SALE</span>
            <div className="dropdown-content">
              <a href="#">Contratos</a><br/>
              <a href="#">Peças</a><br/>
              <a href="#">Lojas</a>
            </div>
          </div>
        </div>

        <h1 className="Titulo1">VANS IS OLD SKOOL</h1>

        <p className="TextoVans">
          A Vans é líder em moda com calçados e<br/>
          acessórios de alta qualidade<br/>
          e estilo autêntico.
        </p>

        <button id="Butao1">COMPRAR AGORA ᐳ</button>
      </div>
    </>
  );
}
