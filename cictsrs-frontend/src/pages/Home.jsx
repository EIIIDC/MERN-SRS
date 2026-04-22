import '../App.css';
 

const Home = () => {
    return (

<div class="grid grid-flow-col grid-rows-3 w-full h-screen "> 
 
    <div class=" row-span-3 bg-gray-300 "> {/* Grid Sidebar container */}
            <div class="flex flex-col items-center justify-center h-screen"> {/* FLex Nav Sidebar container */}
                
            
                
                
                
                
            </div>




    
        </div>
  
  
    <div class="col-span-2  bg-gray-400 "> {/* Grid Navbar container */}
         <div class="flex flex-col items-center justify-center h-screen"> {/* Flex Navbar container */} 







        </div>
        
        
        
        
    </div>
     <div class="col-span-2 row-span-2  bg-gray-600">{/* Grid content area cintainer */}
        <div class="flex flex-col items-center justify-center h-screen"> {/* Flex content area container */}

    





        </div>

     </div>

</div>
    );

    

}

export default Home;