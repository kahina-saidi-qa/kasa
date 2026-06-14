import "./footer.scss";
import logoFooter from "../Footer/logoFooter/LOGO (1).png";
function Footer() {
  return <footer>
    <div className="footer-container">
    <img src={logoFooter} alt="logo" className="logo-footer" />
    <p>© 2020 Kasa. All rights reserved</p>
   
    </div>
  </footer>;
}

export default Footer;
