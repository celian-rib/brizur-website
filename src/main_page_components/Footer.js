import '../stylesheets/Footer.css'

function Footer(){
    return(
        <div className="Footer">
            <div className="footerInfo">
                <p>Made by Riboulet Célian</p>
                <a id='licenceImg' rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                    <img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/>
                </a>
                <p>This work is licensed under a : 
                </p>
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                    Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
                </a>
            </div>
        </div>
    );
}
export default Footer;