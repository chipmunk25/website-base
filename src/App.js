import React, { useEffect,  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import "./assets/bootstrap-icons/bootstrap-icons.css"
import "./assets/remixicon/remixicon.css" 
import "./assets/css/style.css"
import "./assets/css/file_manager.css"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import MainApp from "./containers"

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);





  return (
    <div className="App">
      <MainApp />
    </div>
  );
}

export default App;
