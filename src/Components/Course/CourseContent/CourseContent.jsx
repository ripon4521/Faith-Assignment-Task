import KeyTopic from "./KeyTopic";
import Navbar from "./Navbar";
import WhatExscpt from "./WhatExscpt";


const CourseContent = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            
           <div>
           <h1 className="text-4xl mt-10 font-dmsnas font-semibold ">About This Course</h1>
           <p className="mt-4 font-dmsnas ">This course distills wisdom from the Bhagavad Gita into four major themes. It covers mastering thoughts and emotions for inner peace (Mind Control), setting realistic goals and maintaining life balance (Managing Expectations), resolving conflicts with empathy and ethical principles (Conflict Resolution), and managing negative feelings while cultivating positivity t eos repellat minus nihil consectetur. Odio, nobis.</p>
            <p className="mt-4 font-dmsnas ">t, consectetur adipisicing elit. Neque exercitationem ea repellat laborum repellendus laudantium earum, dolore perferendis, odio nihil asperiores voluptatibus s repellat minus nihil consectetur. Odio, nobis. Deserunt blanditiis amet consequatur quod? Corporis nemo, at </p>

            <p className="mt-4 font-dmsnas ">
            Deserunt blanditiis amet consequatur quod? Corporis nemo, at aliquam quo reiciendis quaerat maiores soluta culpa similique quasi! Ratione obcaecati excepturi perspiciatis doloribus nesciunt eos repellat minus nihil consectetur. Odio, nobis. Deserunt blanditiis amet consequatur quod? Corporis nemo, at </p>
           </div>

           <WhatExscpt></WhatExscpt>
           <KeyTopic></KeyTopic>
           
        </div>
    );
};

export default CourseContent;