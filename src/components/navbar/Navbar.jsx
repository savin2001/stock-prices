import { AiOutlineMenu } from "react-icons/ai";

import Search from "../search/Search.jsx";

const Navbar = () => {
  return (
    <div className="navbar bg-secondary shadow-md lg:hidden gap-2">
      <div className=" navbar-start">
        <a className="normal-case text-xl text-primary">Nasdaq</a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <Search smallScreen={'block'} largeScreen={'hidden'}/>
        </div>
      </div>
      <div className="navbar-end">
        <div className="side-menu">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button">
            <AiOutlineMenu className="h-6 w-6" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
