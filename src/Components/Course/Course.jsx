import CourseContent from "./CourseContent/CourseContent";
import CoursePrice from "./CoursePrice/CoursePrice";


const Course = () => {

    return (
        <div className="flex container mx-auto  justify-between ">
            <div className="flex-1">
                <CourseContent></CourseContent>
            </div>
            <div className="">
                <CoursePrice></CoursePrice>
            </div>
        </div>
    );
};

export default Course;