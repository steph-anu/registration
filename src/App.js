import logo from './logo.svg';
import './App.css';
import { ValidateTime, ValidateDate } from './lib/validation';
import { MakeReservation } from './lib/calendar';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

function App() {

  let label=['Project name', 'Purpose','Contact person', 'Email'];
  let labelfix = label.map(name => name.replace(' ',''));

  let labels = []; //https://stackoverflow.com/questions/2383484/how-to-create-a-dynamic-object-in-a-loop
  for (var i = 0; i < label.length; i++) {
    labels.push({label:label[i], labelfix:labelfix[i]});
  }

  function getInputs(e) {
    e.preventDefault();
    let inputs = {};
    labelfix.forEach(id => {
      inputs[id] = document.getElementById(id).value;
    })
    inputs["Day"] = document.getElementById("Day").value;
    inputs["Starttime"] = document.getElementById("Starttime").value;
    inputs["Endtime"] = document.getElementById("Endtime").value;
    console.log(inputs);
  }

  return (
    <div className="App">
      <ReactEmbeddedGoogleCalendar publicUrl = "https://calendar.google.com/calendar/embed?src=cscae19m9abei8bv23e1queim8%40group.calendar.google.com&ctz=America%2FLos_Angeles" height="500px"/>
      <div id="reservations">
        {/* <h1 id="reserve-head">Make a reservation</h1> */}
        <form id="reserve" onSubmit={getInputs}> 
          {labels.map((labels) => { //https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs
            return <label for={labels.labelfix}> {labels.label}
              <div class="inputwrap">
                <input id={labels.labelfix} name={labels.labelfix}/>
              </div>
            </label>
          })}
          <label title="mm/dd/yyyy">Day 
            <div class="inputwrap">
              <input type="date" id="Day" name="Day"/>
            </div>
          </label>
          <label>Start time <span title="format: hh:mm AM/PM">(?)</span>
            <div class="inputwrap">
              <input type="time" id="Starttime" name="Starttime"/>
            </div>
          </label>
          <label>End time <span title="format: hh:mm AM/PM">(?)</span>
            <div class="inputwrap">
              <input type="time" id="Endtime" name="Endtime"/>
            </div>
          </label>

          <input type="submit" id="submitb" value="Reserve now!" />
        </form>
        
      </div>
    </div>
  );

  
}

export default App;
