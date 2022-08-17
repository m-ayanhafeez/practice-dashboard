import Left2SecondRow from "./Left2SecondRow";
import LeftSecondRow from "./LeftSecondRow";

function MainSecondRow(){
    return(
        <div className="d-flex mt-4 mx-3">
          <LeftSecondRow/>
          <Left2SecondRow/>
        </div>

    );
}

export default MainSecondRow    