import "../App.css";

const Home = () => {
  return (
    <div className="flexbox justify-center h-screen">
      <div class="grid h-screen sm:grid-cols-[260px_1fr] md:grid-rows-[80px_1fr] grid-cols-[80px_1fr] grid-rows-[60px_1fr]  md:transition-normal duration-200">
        <aside class="  row-span-2 bg-gray-300 border-r border-gray-400">
          {" "}
          {/* Grid Sidebar container */}
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

        <nav class="bg-gray-400 border-b border-gray-500">
          {" "}
          {/* Grid Navbar container */}
          <div class="flex items-center justify-between px-8 h-full">
            <span class="font-bold text-gray-800">
              <ul class="flex gap-5">
                <li>button a</li> {/* link 1 */}
                <li>button b</li> {/* link 2 */}
                <li>button c</li> {/* link 3 */}
              </ul>
            </span>
            <div class="w-10 h-10 bg-gray-600 rounded-full">
              <p>icon container</p>
            </div>
          </div>
        </nav>

        <main class=" bg-bgblue overflow-y-auto p-8">
          {/* Grid content container */}
          <div class="flex flex-col items-center justify-center min-h-full border-4 border-dashed border-gray-500 text-gray-300">
            <p class="text-2xl font-semibold"></p>
            <p></p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
