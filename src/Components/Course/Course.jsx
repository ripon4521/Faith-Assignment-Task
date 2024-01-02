import CourseContent from "./CourseContent/CourseContent";
import CoursePrice from "./CoursePrice/CoursePrice";


const Course = () => {

    return (
        <div className="flex flex-col lg:flex-row container mx-auto  justify-between ">
            <div className="lg:flex-1 p-2">
                <CourseContent></CourseContent>
            </div>
            <div className="">
                <CoursePrice></CoursePrice>
            </div>
        </div>
    );
};

export default Course;