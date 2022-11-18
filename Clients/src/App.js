import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/AboutMe/About";
import Services from "./components/Service/Services";
import Resume from "./components/Resume/Resume";
import ProjectWork from "./components/Project/Project";
import Blog from "./components/Blog/Blog";
import Contact from "./components/ContactMe/Contact";
import Footer from "./components/Footer/Footer";
import Achievements from "./components/Resume/Achievement/Achievements";
import Education from "./components/Resume/Education/Education";
import Internship from "./components/Resume/Internship/Internship";
import Skills from "./components/Resume/Skills/Skills";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function App() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  useEffect(() => {

    setTimeout(() => {
      handleOpen()
    }, 5000)
    setTimeout(() => {
      handleClose()
    }, 8000)
  }, [])



  return (
    <>
      <Router>

        <div className="App">
          <Navbar />
          <Home />
          <Services />
          <About />
          <Resume />
          <ProjectWork />
          <Blog />
          <Contact />
          <Footer />
        </div>

        <Routes>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={ProjectWork} />
          <Route path="/blogs" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/achievement" component={Achievements} />
          <Route path="/education" component={Education} />
          <Route path="/internship" component={Internship} />
          <Route path="/skills" component={Skills} />
        </Routes>
      </Router>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    </>
  );
}

export default App;