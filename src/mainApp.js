import React from 'react';
import './App.css';
import CanvasJSReact from './canvasjs.react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef()
    this.state = {
      concentration: '',
      minSpeed: '',
      maxSpeed: '',
      initialSolutionViscosity: '',
      temperature: '',
      perfectGasConstant: '',
      kinematicViscosity: '',
      schmidtConst: '',
      liquidDensity: '',
      molecularWeight: '',
      vaporPressure: '',
      solventDiffusivity: '', 
      items: [],
      submit: false,
      isShown: false
 
    }; 
  this.myChangeHandler = this.myChangeHandler.bind(this);
  this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let items = [];
    this.divRef.current.classList.remove("grid-item");
    items.push(...Calculation(Number(this.state.concentration), Number(this.state.minSpeed), Number(this.state.maxSpeed), Number(this.state.initialSolutionViscosity), Number(this.state.temperature),
                              Number(this.state.perfectGasConstant), Number(this.state.kinematicViscosity), Number(this.state.schmidtConst), 
                              Number(this.state.liquidDensity), Number(this.state.molecularWeight), Number(this.state.vaporPressure), Number(this.state.solventDiffusivity)))    
    this.setState(function(){
      return {
        items: items,
        submit: true
      };
    });
  };

  myChangeHandler = (event) => {
    const {name, value} = event.target;
    const re = /^[0-9{1,2}{.}{\d{1-2}\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
    
    this.setState({[name]: value})
  }    
}

  onMouseEnter() {
    this.setState({isShown: !this.state.isShown})
  }

  onMouseLeave() {
    this.setState({isShown: !this.state.isShown})
  }

  componentWillUnmount () {
    this.table = this.table.destroy();
  }

  selectCustomSolvent = (event) => {
    event.preventDefault();
    var dropdown = document.getElementById("select1");
    if (dropdown.value == "Toluene"){
    this.setState(function(){
      return {
        concentration: '5',
        minSpeed: '300',
        maxSpeed: '3000',
        initialSolutionViscosity: '1',
        temperature: '303',
        perfectGasConstant: '82.06',
        kinematicViscosity: '0.1553',
        schmidtConst: '0.5474',
        liquidDensity: '0.87',
        molecularWeight: '92',
        vaporPressure: '0.029',
        solventDiffusivity: '0.086', 
      }
    });
    }
    else if (dropdown.value == "Xylene"){
      this.setState(function(){
        return {
          concentration: '5',
          minSpeed: '300',
          maxSpeed: '3000',
          initialSolutionViscosity: '1',
          temperature: '303',
          perfectGasConstant: '82.06',
          kinematicViscosity: '0.1553',
          schmidtConst: '0.5474',
          liquidDensity: '0.88',
          molecularWeight: '106.2',
          vaporPressure: '0.013',
          solventDiffusivity: '0.074', 
        }
      });
    }
    else if (dropdown.value == "Chloroform"){
      this.setState(function(){
        return {
          concentration: '5',
          minSpeed: '300',
          maxSpeed: '3000',
          initialSolutionViscosity: '1',
          temperature: '303',
          perfectGasConstant: '82.06',
          kinematicViscosity: '0.1553',
          schmidtConst: '0.5474',
          liquidDensity: '1.49',
          molecularWeight: '119.4',
          vaporPressure: '0.31',
          solventDiffusivity: '0.106', 
        }
      });
    }
  }

  renderDropdown(){
    return(
      <ul className="dropdown">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    );
  }
  render() {
    
    const {concentration, minSpeed, maxSpeed, initialSolutionViscosity, temperature, perfectGasConstant, kinematicViscosity,
           schmidtConst, liquidDensity, molecularWeight, vaporPressure, solventDiffusivity, isShown} = this.state;

    return (
      <div id='cont'>
    <div className="grid-container" style={{marginLeft: '100px', marginRight:'100px'}} >

      <div className="grid-item">
      <form onSubmit={this.mySubmitHandler} className='form-style-9'>
      <form id="form1">
		<p>
				<select id="select1" className='button' style={{float:'right'}} onChange={this.selectCustomSolvent}>
            <option>Custom solvent</option>
						<option value='Toluene'>Toluene</option>
						<option value='Xylene'>Xylene</option>
						<option value='Chloroform'>Chloroform</option>
				</select>
		</p>
</form>
    <br></br>
        <ul>

          <p>Spin coating initial values</p>
          <li>
            <div className="input-container">
            <Tooltip placement="right" trigger={['hover']}
             mouseLeaveDelay="0.3" animation="zoom" 
             overlay={<span>Polymer concentration <br></br> [wt%]</span>}>
            <img id="image1" src="https://img.icons8.com/small/16/000000/help.png"
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className='field-style field-split align-left'
        placeholder="Polymer Concentration"
        type='text'
        name='concentration'
        value={concentration}
        onChange={this.myChangeHandler}
        />

 </div>
 <div className="input-container">
     <Tooltip placement="right" trigger={['hover']} 
      mouseLeaveDelay="0.3" animation="zoom" 
      overlay={<span>Initial solution viscosity <br></br>[poise]</span>}>
            <img id="image2" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-right"
        placeholder='initial solution viscosity'
        type='text'
        name='initialSolutionViscosity'
        value={initialSolutionViscosity}
        onChange={this.myChangeHandler}
        />
         </div>

        </li>
        <li>
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']}
         mouseLeaveDelay="0.3" animation="zoom" 
         overlay={<span>Minimum spin speed <br></br> [rpm]</span>}>
            <img id="image1" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-left"
        placeholder='Min Speed'
        type='text'
        name='minSpeed'
        value={minSpeed}
        onChange={this.myChangeHandler}
        />
                 </div>
                 <div className="input-container">
                 <Tooltip placement="right" trigger={['hover']} 
                 mouseLeaveDelay="0.3" animation="zoom" 
                 overlay={<span>Maximum spin speed <br></br> [rpm]</span>}>
            <img id="image2" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-right"
        placeholder='Maximum Speed'
        type='text'
        name='maxSpeed'
        value={maxSpeed}
        onChange={this.myChangeHandler}
        />
                         </div>

        </li>
        <p>Polymer values</p>
        <li>
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']} 
        mouseLeaveDelay="0.3" animation="zoom" 
        overlay={<span>Temperature <br></br> [K]</span>}>
            <img id="image1" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-left"
        placeholder='Temperature'
        type='text'
        name='temperature'
        value={temperature}
        onChange={this.myChangeHandler}
        />
        </div>
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']}
         mouseLeaveDelay="0.3" animation="zoom"
          overlay={<span>Perfect gas constant <br></br> [atm * cm^3 / (mol * K)] </span>}>
            <img id="image2" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-right"
        placeholder='Perfect gas constant'
        type='text'
        name='perfectGasConstant'
        value={perfectGasConstant}
        onChange={this.myChangeHandler}
        />
        </div>

        </li>
        <li>
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']} 
        mouseLeaveDelay="0.3" animation="zoom"
         overlay={<span>kinematic viscosity of the peak gas phase <br></br> [cm^2 / s]</span>}>
            <img id="image1" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>

        <input
        className="field-style field-split align-left"
        placeholder='Kinematic viscosity'
        type='text'
        name='kinematicViscosity'
        value={kinematicViscosity}
        onChange={this.myChangeHandler}
        />
        

        </div>
        
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']} 
        mouseLeaveDelay="0.3" animation="zoom"
         overlay={<span>Constant depending on Schmidt's number <br></br> [-]</span>}>
            <img id="image2" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-right"
        placeholder="Const dependent on Schmidt's number"
        type='text'
        name='schmidtConst'
        value={schmidtConst}
        onChange={this.myChangeHandler}
        />
        </div>
        </li>
        <p>Solvent values</p>
        <li>
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']}
         mouseLeaveDelay="0.3" animation="zoom"
          overlay={<span>Liquid density <br></br> [g / cm^3]</span>}>
            <img id="image1" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-left"
        placeholder='Liquid Density'
        type='text'
        name='liquidDensity'
        value={liquidDensity}
        onChange={this.myChangeHandler}
        />
        </div>
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']}
         mouseLeaveDelay="0.3" animation="zoom"
          overlay={<span>Molecular weight of the solvent <br></br> [g/mol]</span>}>
            <img id="image2" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-right"
        placeholder='Molecular weight of the solvent'
        type='text'
        name='molecularWeight'
        value={molecularWeight}
        onChange={this.myChangeHandler}
        />
        </div>
        </li>
        <li>
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']}
         mouseLeaveDelay="0.3" animation="zoom"
          overlay={<span>Pure solvent vapor pressure <br></br> [atm]</span>}>
            <img id="image1" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-left"
        placeholder='Pure solvent vapor pressure'
        type='text'
        name='vaporPressure'
        value={vaporPressure}
        onChange={this.myChangeHandler}
        />
        </div>
        <div className="input-container">
        <Tooltip placement="right" trigger={['hover']}
         mouseLeaveDelay="0.3" animation="zoom"
          overlay={<span>Binary solvent diffusivity in the peak gas phase <br></br> [cm^2 / s]</span>}>
            <img id="image2" src="https://img.icons8.com/small/16/000000/help.png" 
            onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}/>
        </Tooltip>        <input
        className="field-style field-split align-right"
        placeholder='Binary solvent diffusivity'
        type='text'
        name='solventDiffusivity'
        value={solventDiffusivity}
        onChange={this.myChangeHandler}
        />
        </div>
        </li>
        <li>
      <input
      type='submit' value="Calculate"
      />
      </li>
      </ul>
      </form>
      </div>
      <div className="grid-item" id="resultsTable" ref={this.divRef}>
      {this.state.submit && <Table items={ this.state.items }/>}
      </div>
      <div  style={{gridColumn:'1/-1'}} id="resultsGraph">
      {this.state.submit && <Graph items={this.state.items} />}  
      </div>


      </div>      
      </div>

  );
  }
}
class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div >
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <table className='form-style-9'  cellPadding='6'
        style={{
          padding: '10px',
          fontFamily: 'arial',
          display: 'block',
          height: '550px',
          overflowY: 'auto',
          borderSpacing: '60px 0',
          }}>
          <tbody style={{display: 'block'}}>
            <tr>
              <th>Speed [rpm]</th>
              <th>Thickness [nm]</th>
            </tr>
            {items.map((item, index) => {
              return (
                <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
                >
                <tr key = {index}>
  
                  <td style={{textAlign: 'left', paddingLeft:'50px'}
                }>
                    {item[0]}
                    </td>
                  <td
                   style={{
                     width: '155%', 
                     position:'static', 
                     textAlign:'right', 
                     paddingRight:'30px'
                  }}>
                    {item[1]}
                    </td>
                </tr>
                </ReactCSSTransitionGroup>

              );
              
            })}

          </tbody>
        </table>
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}
     
class Graph extends React.Component {	
  render() {
        const items = this.props.items;
       var i;
       var calcResult = items.map((item, index) => {
        return {x: item[0], y: Number(item[1])}
        }
          
          );
      const options = {
      
      animationEnabled: true,
      backgroundColor: "transparent",
      theme: "light2",
      title: {
        
        text: "Film Thickness",
        background: 'transparent'
       
      },
      axisX: {
        title: "spin speed (rpm)"
      },
      axisY: {
        title: "hf (nm)",
        logarithmic: true,
        includeZero: false
      },
      data: [{
        type: "spline",
        dataPoints: calcResult
      }]
    }

    return (
    <div>
      <CanvasJSChart options = {options} 
      />
    </div>
    );
  }
}
export default App;


function getLayerThickness (concentration, speed, initialSolutionViscosity, temperature, perfectGasConstant, 
  kinematicViscosity, schmidtConst, liquidDensity, molecularWeight, vaporPressure, solventDiffusivity ) {

  //polymer variables
  var w = speed / 60 * 2 * Math.PI; // prędkość obracania
  var T = temperature; // K; temperatura
  var xlinf = 0; // brak jednostki; końcowa część masy rozpuszczalnika w roztworze
  var R = perfectGasConstant; // atm * cm^3 / (mol * K); stała gazu doskonałego
  var vg = kinematicViscosity; // cm^2/s; kinematyczna lepkość szczytowej fazy gazowej
  var c = schmidtConst; // brak jednostki; stała zależna od liczby Schmidta

  //solution variables (testing on chloroform)
  var rho = liquidDensity; // g/cm^3; gęstość cieczy
  var M1 = molecularWeight; // g/mol; masa cząsteczkowa rozpuszczalnika
  var p10 = vaporPressure; // atm; prężność par czystego rozpuszczalnika
  var Dg = solventDiffusivity; // cm^2/s; binarna dyfuzyjność rozpuszczalnika w szczytowej fazie gazowej

  // equation 3
  var k = ((c * Dg) / (Math.sqrt(vg) * rho)) * ((p10 * M1) / (R * T)) * Math.sqrt(w);

  // from picture 3
  var x10 = 1.0 - concentration / 100.0;

  // equation 4
  var hw  = Math.pow(((3.0 * initialSolutionViscosity) / (2.0 * rho * w * w)) * k * (x10 - xlinf), 0.3333);

  var finalResult = (Math.round(((1.0 - x10) * hw * 10000000) * 100) / 100).toFixed(2);

  return finalResult;
  
}

function Calculation (concentration, minSpeed, maxSpeed, initialSolutionViscosity, temperature, perfectGasConstant, 
  kinematicViscosity, schmidtConst, liquidDensity, molecularWeight, vaporPressure, solventDiffusivity) {
  var tmpArr = [], // Temporary 1-dimensional array to hold all values
  arr = [], // The final 2-dimensional array
  rows = 31,
  cols = 2;
  var spin = (maxSpeed - minSpeed) / 30;
  var currentSpeed = minSpeed;
// Fill temporary array with "N"s
for (var i = 0; i < rows * cols; i += 1) {
  tmpArr.push(Math.round(currentSpeed));
  tmpArr.push(getLayerThickness(concentration, currentSpeed, initialSolutionViscosity, temperature, perfectGasConstant, 
    kinematicViscosity, schmidtConst, liquidDensity, molecularWeight, vaporPressure, solventDiffusivity));
  currentSpeed += spin;
}
for (var i = 0; i < rows; i += 1) {
  var row = tmpArr.slice(i * cols, (i + 1) * cols);
  arr.push(row);
}
  console.log(arr);
  return arr;
}
