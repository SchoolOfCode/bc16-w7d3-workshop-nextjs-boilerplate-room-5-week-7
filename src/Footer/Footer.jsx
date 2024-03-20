
import "./Footer.css";


function Footer() {

//const socials = []
//const info = []

    return (
        <footer className="site-footer">
        <div className="find-us">
          <p>Find us on:</p>
          <p>
            Facebook
            <br />
            Instagram
            <br />
            Tiktok
          </p>
        </div>
        <div className="copyright">
          <p>© Fireplace Palace</p>
          <p>
            <a href="#">Info@firepalace.co.uk</a>
          </p>
        </div>
      </footer>

    );
  }
  
  export default Footer;