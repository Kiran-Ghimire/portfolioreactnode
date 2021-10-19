import { Timeline } from "antd";
import {
  DiReact,
  DiNodejs,
  DiMysql,
  DiJava,
  DiJavascript1,
  DiCss3,
} from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import "./styles.scss";

const Education = () => {
  return (
    <div className="container education">
      <h1 style={{ marginBottom: "50px" }}>Education</h1>
      <Timeline mode="alternate">
        <Timeline.Item color="#f84525">
          <h2 style={{ color: "#f84525" }}>Bachelors (2018 - 2021)</h2>
          <h3 style={{ marginTop: "-0.4rem" }}>Islington College</h3>
        </Timeline.Item>
        <Timeline.Item color="#f84525">
          <h2 style={{ color: "#f84525" }}>Bachelors (2018 - 2021)</h2>
          <h3 style={{ marginTop: "-0.4rem" }}>Islington College</h3>
        </Timeline.Item>
        <Timeline.Item color="#f84525">
          <h2 style={{ color: "#f84525" }}>Bachelors (2018 - 2021)</h2>
          <h3 style={{ marginTop: "-0.4rem" }}>Islington College</h3>
        </Timeline.Item>
      </Timeline>
      <div className="top_expertise">
        <h1 style={{ marginBottom: "50px" }}>TOP EXPERTISE</h1>
        <div className="skills">
          <DiReact />
          <DiNodejs />
          <DiMysql />
          <DiJava />
          <DiJavascript1 />
          <AiFillHtml5 />
          <DiCss3 />
        </div>
      </div>
    </div>
  );
};

export default Education;
