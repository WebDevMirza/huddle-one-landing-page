import "../assets/styles/header.css";
import Logo from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#" aria-level="Huddle home page">
            <img src={Logo} alt="Huddle" width={240} height={39} />
          </a>
        </div>

        <div className="trial">
          <a className="btn btn-trial" href="#">
            Try It Free
          </a>
        </div>
      </header>
    </>
  );
};
