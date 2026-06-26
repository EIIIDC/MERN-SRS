import "../App.css";

const Home = () => {
  return (
    <div className="flexbox justify-center h-screen">
      <div className="flexbox h-screen  sm:grid-cols-[260px_1fr] md:grid-rows-[80px_1fr] grid-cols-[80px_1fr] grid-rows-[60px_1fr]  md:transition-normal duration-200">
        {/* Grid layout with 2 columns and 2 rows       
        <aside class="  row-span-2 bg-gray-300 border-r border-gray-400">
          {" "}
          
          <div class="flex flex-col items-center p-4 gap-4 h-full">
            <div class="w-12 h-12 bg-gray-500 rounded-lg">
              <p>center icon</p>
            </div>
            <div class="w-full h-8 bg-gray-400 rounded">
              <p>data1</p>
            </div>
            <div class="w-full h-8 bg-gray-400 rounded">
              <p>data2</p>
            </div>

            <div class="w-full h-8 justify-end bg-gray-400 rounded  text-center">
              <p>logout</p>
            </div>
          </div>
        </aside>
*/}
        <nav className="group fixed top-0 left-0 w-full z-50 border-gray-500 text-white">
          {" "}
          {/* Grid Navbar container */}
          <div className="flex items-center justify-between px-11 h-full transform -translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0  ">
            <span className="font-bold ">
              <ul className="flex gap-5">
                <li>
                  {" "}
                  <button className="rounded-md p-1 mt-3 hover:bg-accentblue focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {" "}
                    <a href="">INVENTORY</a>{" "}
                  </button>{" "}
                </li>{" "}
                {/* link 1 */}
                <li>
                  <button className="rounded-md p-1 mt-3 hover:bg-accentblue focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {" "}
                    <a href="">REQUESTS</a>
                  </button>
                </li>{" "}
                {/* link 2 */}
                <li>
                  <button className="rounded-md p-1 mt-3 hover:bg-accentblue focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {" "}
                    <a href="">REPORTS</a>
                  </button>
                </li>{" "}
                {/* link 3 */}
                <li>
                  {" "}
                  <button className="rounded-md p-1 mt-3 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {" "}
                    <a href="">MANAGE</a>{" "}
                  </button>{" "}
                </li>{" "}
                {/* link 4 */}
              </ul>
            </span>

            <div className="flex gap-1 mr-2">
              <div class="w-auto font-bold  rounded-md p-1 mt-2">
                <button className="rounded-md p-1  hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {" "}
                  <a href="">Ernesto III</a>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="grid bg-bgblue min-h-full p-12 overflow-y-auto">
          {/* Grid content container */}
          <div className="grid lg:grid-cols-3 overscroll-contain items-center justify-center min-h-full gap-4 border-gray-500 text-gray-300 transform transition-transform duration-500 ease-in-out hover:scale-105  ">
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500 ">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
            <p className="text-2xl font-semibold text-center p-30 border-solid border-2 rounded-lg border-gray-500 hover:border-green-500">
              test
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
