import logoFacebook from '../../assets/logoFacebook.png';
import logoTwitter from '../../assets/logoTwitter.png';
import logoYoutube from '../../assets/logoYoutube.png';
import logoLinkedin from '../../assets/logoLinkedin.png';
import logoInstagram from '../../assets/logoInstagram.png';
import s from './footer.module.scss';

export default function Footer() {
    return (
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <ul>
                        <li><a href="#"><img src={logoFacebook} alt="Facebook" /></a></li>
                        <li><a href="#"><img src={logoTwitter} alt="Twitter" /></a></li>
                        <li><a href="#"><img src={logoYoutube} alt="YouTube" /></a></li>
                        <li><a href="#"><img src={logoLinkedin} alt="LinkedIn" /></a></li>
                        <li><a href="#"><img src={logoInstagram} alt="Instagram" /></a></li>
                    </ul>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    );
}
