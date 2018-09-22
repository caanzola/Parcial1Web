import React, {Component} from 'react';
import Papa from 'papaparse';
import FileGraphic from "./FileGraphic";
import JsonGraphic from "./JsonGraphic";
import vegaEmbed from 'vega-embed';

export default class Principal extends Component {

constructor(props){
        super(props);
        
         this.state = {
              value: '',
              csv:{},
              tipo:'',
              json:{},
              mensajeJson:""
        }


        this.fileUpload = this.fileUpload.bind(this)
        this.jsonUpload = this.jsonUpload.bind(this)
        this.updateData = this.updateData.bind(this)
        this.saveVis = this.saveVis.bind(this)
    }

  fileUpload(event){

    this.setState({ tipo:'csv'});

    let file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      download: true,
      complete: (results) => {
        this.updateData(results.data);
      }
    });

  }

  jsonUpload(event){

    let inputText = document.getElementById("text1").value

     try {
      let data = JSON.parse(inputText);
      this.setState({ json: data });

    this.setState({tipo:'json', "mensajeJson":"Json submited succesfully!"})
    } catch (error) {
      console.log("aca hay error");
      this.setState({mensajeJson:"Something is wrong with the Json, please check and repair"})
      console.log(error);
    }


    console.log(this.state.json)
  }


  updateData(result) {
    var dataParsed = result
    this.setState({ csv: dataParsed});
    console.log(this.state.csv)
  }

  saveVis(event){
    console.log("hola")
    console.log(event)
  }


	render() {

    let grafica = null;
    let mensaje = this.state.mensajeJson;
    let boton = null;

    if(this.state.tipo=='csv')
    {
      grafica = (<FileGraphic spec={this.state.csv}/>)
        boton = (<button type="button" onClick={this.saveVis}> Save Visualization </button>)
    }
    else if(this.state.tipo=='json')
    {
      grafica = (<JsonGraphic spec={this.state.json} />)
      boton = (<button type="button" onClick={this.saveVis}> Save Visualization </button>)
    }

		return (
            <div>
            <div class = "banner">

            </div>
              <div class="row">
                  <div class="column"> 

                  <form onSubmit={this.onJsonUpload}>
                        <div class="form-group">
                          <div class="custom-file">

                            <label class="custom-file-label" htmlFor="customFile"> <h1>Choose file (.csv): </h1> </label>
                            <input id="fileUp" type="file" class="custom-file-input" accept=".csv"  value={this.state.file} onChange={ this.fileUpload }/>
                            <br/>

                          </div>
                          <label>
                            <h1>Write your Json here:</h1>
                          </label>
                          <textarea id = "text1" rows="20" cols="50"/>
                          <br/>
                          <button type="button" onClick={this.jsonUpload}> Submit </button>
                        </div>
                        </form>

                  </div>
                  <div class="column"> 

                      <h1>Visualization:</h1>

                      {grafica}
                      <p></p>
                      {mensaje}
                      <p></p>
                      {boton}

                  </div>
              </div>
            </div>
		);
	}
}
