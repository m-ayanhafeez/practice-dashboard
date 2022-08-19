import BarChart from "./Components/BarChart/BarChart";
import CardFirstRow from "./Components/CardsFirstRow/CardFirstRow";
import TableCard from "./Components/CardsTableThirdRow/TableCard";
import NavHeaderMain from "./Components/NavHeader/NavHeaderMain";
import MainSecondRow from "./Components/SecondRowCard/MainSecondRow";
// import CollapsibleExample from "./NavHeader/CollapsibleExample";
function App() {
  return (
   <div>
    <NavHeaderMain/>
   <CardFirstRow/>
   <MainSecondRow/>
   <TableCard/>
  <BarChart />

    </div>
  );
}

export default App;
