import "./Projects.css";
const Projects = () => {
  return (
    <div className="main">
      <div className="project">
        <h1 className="pmaster">Assignment Management</h1>
        <h3 className="psecond">Based on HTML/ CSS/ JAVASCRIPT</h3>
        <h5 className="details">
          In this project a user can keep a track of all the assignment
          according to the Due date. It contains All/ Past/ Future tabs on which
          the data is segregated
        </h5>
        <a
          href="https://nitin-baslay.github.io/Assignment-Management/"
          target={"_blank"}
        >
          <h5 className="link">Link to Assignment-Management App</h5>
        </a>
      </div>
      <div className="project">
        <h1 className="pmaster">Movie Ticket Booking</h1>
        <h3 className="psecond">Based on React JS & Redux</h3>
        <h5 className="details">
          In this web application a user can select a choice of seats from 3
          different category and a summary will be available at checkout page
          where user will get all the selections along with the final price of
          tickets.
        </h5>
        <a href="https://movie-ticket-cxcx.onrender.com" target={"_blank"}>
          <h5 className="link">Link to Movie-Ticket App</h5>
        </a>
      </div>
      <div className="project">
        <h1 className="pmaster">Colorify App</h1>
        <h3 className="psecond">Based on React JS</h3>
        <h5 className="details">
          This project was build with the help of firebase authetication. In
          this a user can signup for getting access of the app. Post signup user
          can do login and store his/her choice of colors. Each user will have
          their own store of colors.
        </h5>
        <a href="https://colorify.onrender.com" target={"_blank"}>
          <h5 className="link">Link to Colorify App</h5>
        </a>
      </div>
      <div className="project">
        <h1 className="pmaster">Thali Food Ordering App</h1>
        <h3 className="psecond">Based on React JS</h3>
        <h5 className="details">
          In this project a user can order a thali from an app in which he/she
          can add the dishes they like and simultaneously they can increase/
          decrease the quantity of items. Also they have a feature to delete a
          particular item from the selection. On the checkout page user will get
          all the food items summary along with prices and total amount.
        </h5>
        <a href="https://thali-app-vbxf.onrender.com" target={"_blank"}>
          <h5 className="link">Link to Thali App</h5>
        </a>
      </div>
      <div className="project">
        <h1 className="pmaster">To do App</h1>
        <h3 className="psecond">Based on React JS</h3>
        <h5 className="details">
          A project in which a user can store all the todo tasks in one go along
          with the due date. A user can see the data based on the due date and a
          message will float if due date has been passed. It also give a
          functionality to mark the work checked if it is done along with an
          option to delete the entry.
        </h5>
        <a href="https://to-do-kdto.onrender.com" target={"_blank"}>
          <h5 className="link">Link to To-do App</h5>
        </a>
      </div>
      <div className="project">
        <h1 className="pmaster">Tip Calculator</h1>
        <h3 className="psecond">Based on React JS</h3>
        <h5 className="details">
          This application keeps a track of all the tips awarded to a particular
          user by different guests. It shows which guest gave how much amount
          and in summary it shows the total number of tips along with a final
          amount.
        </h5>
        <a href="https://tip-calculator-1mnc.onrender.com" target={"_blank"}>
          <h5 className="link">Link to Tip-Calculator App</h5>
        </a>
      </div>
      <div className="project">
        <h1 className="pmaster">Chatting App</h1>
        <h3 className="psecond">Based on React JS</h3>
        <h5 className="details">
          I tried to create a Chatting app where user can register him/herself.
          After successfull registration and login user can have access to
          general section where he/she can do the chat with other users. Also
          there is a feature where user can create/ edit/ delete custom rooms.
        </h5>
        <a href="https://slack-1rjs.onrender.com/" target={"_blank"}>
          <h5 className="link">Link to Chatting App</h5>
        </a>
      </div>
      <div className="project">
        <h1 className="pmaster">Books Management App</h1>
        <h3 className="psecond">Based on React JS</h3>
        <h5 className="details">
          This app is based on React & Redux library. In this app a user can
          have a track of his/her books reading status for the predefined
          bookset. It has three sections Currently Reading/ To-Read/ Already
          Read. Also a user can search a particular book from the books
          database.
        </h5>
        <a href="" target={"_blank"}>
          <h5 className="link">Link to Books Management App</h5>
        </a>
      </div>
    </div>
  );
};
export default Projects;
