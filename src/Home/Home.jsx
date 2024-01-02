import Banner from "../Components/Banner/Banner";
import Course from "../Components/Course/Course";
import AboutInstructor from "../Components/Course/CourseContent/AboutInstructor";
import Socal from "../Components/Social/Socal";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Course></Course>
            <AboutInstructor></AboutInstructor>
            <Socal></Socal>
        </div>
    );
};

export default Home;