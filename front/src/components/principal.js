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
              json:{}
        }


        this.fileUpload = this.fileUpload.bind(this)
        this.jsonUpload = this.jsonUpload.bind(this)
        this.updateData = this.updateData.bind(this)
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

    this.setState({tipo:'json'})
    let inputText = document.getElementById("text1").value

     try {
      let data = JSON.parse(inputText);
      this.setState({ json: data });
    } catch (error) {
      console.log(error);
    }

    console.log(this.state.json)
  }


  updateData(result) {
    var dataParsed = result
    this.setState({ csv: dataParsed});
    console.log(this.state.csv)
  }


	render() {

    let grafica = null;
    if(this.state.tipo=='csv')
    {
      grafica = (<FileGraphic spec={this.state.csv}/>)
    }
    else if(this.state.tipo=='json')
    {
      grafica = (<JsonGraphic spec={this.state.json} />)
    }

		return (
            <div>
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

                  </div>
              </div>
            </div>
		);
	}
}
