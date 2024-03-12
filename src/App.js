import Homepage from './pages/Homepage';
import './assets/fonts/AvenirLTStd-Black.otf'
import './App.css';
import OpendeskRoom from './pages/OpendeskRoom';
import PrivateCabinsRoom from './pages/PrivateCabinsRoom';
import ConferenceRooms from './pages/ConferenceRooms';
import MeetingRooms from './pages/MeetingRooms';
import CustomerSupport from './pages/CustomerSupport';
import TalkOurExpert from './pages/TalkOurExpert';
import ExploreSpaces from './pages/ExploreSpaces';
import BookNowStart from './pages/BookNowStart';
import BookNowCheckout from './pages/BookNowCheckout';
import BookNowCheckoutDone from './pages/BookNowCheckoutDone';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import About from './pages/About';
import Locations from './pages/Locations';
import LocationStates from './pages/LocationStates';
import LocationStateSpecific from './pages/LocationStateSpecific';
import StateSpaceDetails from './pages/StateSpaceDetails';
import Articles from './pages/Articles';
import DownloadApp from './pages/DownloadApp';
import Membership from './pages/Membership';
import SpaceType from './pages/SpaceType';
import PlanType from './pages/PlanType';
import AgreementLength from './pages/AgreementLength';
import YourDetails from './pages/YourDetails';
import Payment from './pages/Payment';
import PaymentDone from './pages/PaymentDone';
import HireOurInteriorDesigner from './pages/HireOurInteriorDesigner';
import HowToDoIt from './pages/HowToDoIt';
import GetStarted from './pages/GetStarted';
import SpaceDetails from './pages/SpaceDetails';
import SearchOverlay from './pages/SearchOverlay';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/opendesk-room" element={<OpendeskRoom />} />
          <Route path="/privatecabin-room" element={<PrivateCabinsRoom />} />
          <Route path="/conference-room" element={<ConferenceRooms />} />
          <Route path="/meeting-room" element={<MeetingRooms />} />
          <Route path="/explore-spaces" element={<ExploreSpaces />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/location-state" element={<LocationStates />} />
          <Route path="/location-state-specific" element={<LocationStateSpecific />} />
          <Route path="/talk-our-expert" element={<TalkOurExpert />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/download-app" element={<DownloadApp />} />
          <Route path="/state-space-details" element={<StateSpaceDetails />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/book-now-start" element={<BookNowStart />} />
          <Route path="/book-now-checkout" element={<BookNowCheckout />} />
          <Route path="/book-now-checkout-done" element={<BookNowCheckoutDone />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/space-type" element={<SpaceType />} />
          <Route path="/plan-type" element={<PlanType />} />
          <Route path="/agreement-length" element={<AgreementLength />} />
          <Route path="/your-details" element={<YourDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-successful" element={<PaymentDone />} />
          <Route path="/hire-our-interior-designer" element={<HireOurInteriorDesigner />} />
          <Route path="/how-to-do-it" element={<HowToDoIt />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/space-details" element={<SpaceDetails />} />
          <Route path="/search-overlay" element={<SearchOverlay />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
