import "../assets/styles/stats.css";
import Community from "../assets/images/icon-communities.svg";
import Message from "../assets/images/icon-messages.svg";

export const Stats = () => {
  return (
    <>
      <section>
        <div className="stats">
          <div className="community">
            <div>
              <img src={Community} alt="" width={47} height={41} />
            </div>
            <h2>1.4k+</h2>
            <p>Communities Formed</p>
          </div>
          <div className="message">
            <div>
              <img src={Message} alt="" width={47} height={41} />
            </div>
            <h2>2.7m+</h2>
            <p>Message Sent</p>
          </div>
        </div>
      </section>
    </>
  );
};
