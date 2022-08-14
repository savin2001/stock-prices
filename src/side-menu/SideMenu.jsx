import Search from "../components/search/Search.jsx";

const SideMenu = () => {
  return (
    <aside className="drawer-side ">
      <label htmlFor="my-drawer-2" className="drawer-overlay" />
      <div className="menu p-4 bg-secondary w-80 max-w-xs relative">
        <header className="sticky top-0 pt-4 left-0 z-50 bg-secondary">
          <div className="title mb-6">
            <h1 className="flex-1 text-xl px-2 mx-2 text-primary">Nasdaq</h1>
          </div>
          <div className="mb-6">
            <Search smallScreen={"hidden"} largeScreen={"block"} />
          </div>
        </header>

        <ul className="overflow-y-auto text-base-content bg-base-100 p-4 rounded-md">
          {Array.from(Array(6)).map((_, index) => (
            <li key={index}>
              <a>Sidebar Item {index + 1}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
