import "./Header.css";
import ArrowBackIcon from "../../assets/icons/ArrowBackIcon.jsx"

function Header({ title, subtitle, children, variant, showIcon, goBack }) {
    return (
        <header className={`header header-${variant}`}>
            <div className="header-text">
            {showIcon && (<button className="back-button" onClick={goBack}>
                <ArrowBackIcon/>
            </button>)}
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
            </div>
            {children}
        </header>
    );
}

export default Header;