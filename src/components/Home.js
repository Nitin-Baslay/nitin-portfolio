import "./Home.css";
import pic from "./nitin.jpg";
const Home = () => {
  return (
    <div className="alldata">
      <div className="home_container">
        <img src={pic} className="photo" />
        <div className="under">
          <h1 className="master">Nitin Kumar</h1>
          <h3 className="desig">Product & Business Professional</h3>
        </div>
      </div>
      <div className="about">
        <h3 className="data">
         I’m a results-driven professional with experience across product and technology, business operations, banking, entrepreneurship, and people management. I enjoy solving problems, improving processes, and working with people and technology to turn ideas into meaningful outcomes.
        </h3>
        <h3 className="data">
          My experience spans executive and stakeholder management, project coordination, e-commerce, technology development, business growth, and process optimization. At DCB Bank, I led cross-functional initiatives, managed stakeholder engagements, streamlined reporting, and supported a Finacle integration across 50+ branches. I have also gained hands-on experience in technology through React development and in business through managing an end-to-end e-commerce venture.
    </h3>
    <h3 className="data">
    Currently pursuing an MBA, I bring a combination of business understanding, technology exposure, analytical thinking, and people-focused leadership. Whether I’m building a product, improving a process, managing people, or driving a project, my focus remains the same: understand the problem, collaborate with the right people, and create practical solutions that deliver results.
    </h3>
    <h3 className="data">
            Welcome to my portfolio — a collection of my experience, projects, skills, and the work I’ve built along the way.
          </h3>
      </div>
    </div>
  );
};
export default Home;
