import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
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
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




// Admin Dashboard
import AdHome from './components/Admin/home/AdHome';






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
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
        <Navbar />
        <Routes>

          {/* Client Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<ProjectWork />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievement" element={<Achievements />} />
          <Route path="/education" element={<Education />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/skills" element={<Skills />} />




          {/* Admin Routes */}
          <Route path="/admin/home" element={<AdHome />} />

        </Routes>
        <Footer />
      </Router>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Welcome....
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Hello I am sneh jaiswal Welcome to my portfoliyo webside.
          </Typography>
        </Box>
      </Modal>

    </>
  );
}

export default App;
