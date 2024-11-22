import LogoTwitter from "../../assets/LogoTwitter.png";
import LogoFacebook from "../../assets/LogoFacebook.png";
import LogoInstagram from "../../assets/LogoInstagram.png";
import LogoYoutube from "../../assets/LogoYoutube.png";
import LogoLinkedin from "../../assets/LogoLinkedin.png";
import s from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.parte1}>
        <p>4002-8922</p>
        <section className={s.logos}>
          <nav>
            <ul>
              <li><a href="#" title="Facebook"> <img src={LogoFacebook} alt="Ícone do Facebook" /></a></li>
              <li><a href="#" title="Twitter"><img src={LogoTwitter} alt="Ícone do Twitter" /></a></li>
              <li><a href="#" title="Youtube"><img src={LogoYoutube} alt="Ícone do Youtube" /></a></li>
              <li><a href="#" title="Linkedin"><img src={LogoLinkedin} alt="Ícone do Linkedin" /></a></li>
              <li><a href="#" title="Instagram"><img src={LogoInstagram} alt="Ícone do Instagram" /></a></li>
            </ul>
          </nav>
        </section>
      </section>
      <section className={s.parte2}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
