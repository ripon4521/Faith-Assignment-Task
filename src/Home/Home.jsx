import Banner from "../Components/Banner/Banner";
import Course from "../Components/Course/Course";
import AboutInstructor from "../Components/Course/CourseContent/AboutInstructor";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Course></Course>
            <AboutInstructor></AboutInstructor>
        </div>
    );
};

export default Home;