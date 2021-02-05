import Landing from './components/landing/landing';
import Overview from './components/overview/overview';
import HowItWorks from './components/howItWorks/howItWorks';
import AuctionItems from './components/auctionItems/auctionItems';
import Organizations from './components/organizations/organizations';
import './App.css';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Overview/>
      <HowItWorks/>
      <AuctionItems/>
      <Organizations/>
    </div>
  );
}

export default App;
