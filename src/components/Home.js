import "./Home.css";
import pic from "./nitin.jpg";
const Home = () => {
  return (
    <div className="alldata">
      <div className="home_container">
        <img src={pic} className="photo" />
        <div className="under">
          <h1 className="master">Nitin Kumar</h1>
          <h3 className="desig"></h3>
        </div>
      </div>
      <div className="about">
        <h3 className="data">
         I’m a results-driven professional with experience across product and technology, business operations, banking, entrepreneurship, and people management. I enjoy solving problems, improving processes, and working with people and technology to turn ideas into meaningful outcomes.
        </h3>
        <h3 className="data">
          I have developed many types of front-end based applications and I am
          very passionate about building beautiful interfaces.
          <h3 />I have ability to collaborate effectively with senior developers
          and other co-workers. I enjoy working closely with team members to
          ensure workloads are effectively managed.
          <h3 className="data">
            Ready to apply my passion for coding to a talented engineering team
            to develop quality solutions.
          </h3>
        </h3>
      </div>
    </div>
  );
};
export default Home;
