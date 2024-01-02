const Navbar = () => {
    return (
        <div className="my-5 ">
            <ul className="flex gap-10  font-dmsnas text-2xl">
                <li className="hover:border-b-4 hover:border-blue-500">About</li>
                <li className="hover:border-b-4 hover:border-blue-500" >Instructor</li>
                <li className="hover:border-b-4 hover:border-blue-500">Reviews</li>
            </ul>
        </div>
    );
};

export default Navbar;