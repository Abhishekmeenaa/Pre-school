// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/LayOut';
import Home from './Components/Home';
import ImageSlider from './Components/EuroKidsNavbar';
import TabComponent from './Pages/TabComponent';
import AboutUs from './Pages/AboutUs';
import VisionMission from './Pages/VisionMission';
import PreschoolPrograms from './Pages/PreschoolPrograms';
import FranchiseOpportunity from './Pages/FranchiseOpportunity';
import ContactUs from './Pages/ContactUs';
import ParentSpeak from './Pages/ParentSpeak';
import FAQAccordion from './Pages/FAQAccordion';
import Gallery from './Pages/Gallery';
import Careers from './Pages/Careers';
import BranchLocator from './Pages/BranchLocator';
import BlogsPage from './Pages/BlogsPage';
import AdmissionForm from './Pages/AdmissionForm';
import FranchiseCreate from './Pages/FranchiseCreate';
import OurPrograms from './Pages/OurPrograms';
import FixedButtons from './Components/Fixedbutton/FixedButtons;';
import Login from './Pages/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import SyllabusForm from './Components/Dashboard/SyllabusForm';
import PreschoolSyllabusTable from './Components/Dashboard/PreschoolSyllabusTable';
function App() {
  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/slider" element={<Layout><ImageSlider /></Layout>} />
        <Route path="/tabs" element={<Layout><TabComponent /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/vision" element={<Layout><VisionMission /></Layout>} />
        <Route path="/pro-school" element={<Layout><PreschoolPrograms /></Layout>} />
        <Route path="/franchise" element={<Layout><FranchiseOpportunity /></Layout>} />
        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
        <Route path="/parent-speak" element={<Layout><ParentSpeak /></Layout>} />
        <Route path="/faq" element={<Layout><FAQAccordion /></Layout>} />
      <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
      <Route path="/Career" element={<Layout><Careers  /></Layout>} />
       <Route path="/locate-branch" element={<Layout><BranchLocator/></Layout>} />
      <Route path="/blogs" element={<Layout><BlogsPage/></Layout>} />
      <Route path="/admission-form" element={<Layout><AdmissionForm/></Layout>} />
      <Route path='/franchise-create' element={<Layout> <FranchiseCreate/></Layout>} />
      <Route path='/our-programs' element={<Layout><OurPrograms/></Layout>} />
      <Route path='/login' element={<Layout><Login/></Layout>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/syllabusform' element={<SyllabusForm/>}/>
      <Route path='/PreschoolSyllabusTable' element={<PreschoolSyllabusTable/>}/>










      </Routes>
      <FixedButtons />
    </BrowserRouter>
  );
}

export default App;
