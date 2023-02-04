import "../assets/styles/hero.css";
import HeroImg from "../assets/images/screen-mockups.svg";

export const Hero = () => {
  return (
    <>
      <main>
        <div className="hero-body">
          <h1 className="hero-title">Build The Community Your Fans Will Love</h1>
          <p className="hero-text">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
            connections with your users as you engage in genuine discussion.
          </p>
          <a href="#" className="btn btn-action">
            Get Started For Free
          </a>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="" />
        </div>
      </main>
    </>
  );
};
