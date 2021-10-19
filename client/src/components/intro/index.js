import "./styles.scss";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="container intro">
      <div className="userdetail">
        <div
          style={{
            color: "#EA4123",
            lineHeight: 0.1,
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Node Developer",
                "React Developer",
                "Database Designer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div>
          <h1 style={{ color: "white", marginTop: "6px" }}>
            Hi, I'm Kiran Ghimire
          </h1>
        </div>

        <div>
          <div>
            <p style={{ textAlign: "justify" }}>
              I am a college student at Islington College. I was a software
              development intern at Reduct Nepal. Currently I am working as a
              backend development intern at Ek Solutions.
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "50%" }}>
        <img
          height="400"
          width="300"
          style={{ objectFit: "cover" }}
          src="https://images.unsplash.com/flagged/photo-1563807556028-4ee2b3253dbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
        />
      </div>
    </div>
  );
};

export default Intro;
