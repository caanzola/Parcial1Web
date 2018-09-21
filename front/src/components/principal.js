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
              file:'',
              tipo:''
        }

        this.onChange = this.onChange.bind(this)

        this.onFormSubmit = this.onFormSubmit.bind(this)

        this.fileUpload = this.fileUpload.bind(this)
        this.jsonUpload = this.jsonUpload.bind(this)
        this.updateData = this.updateData.bind(this)
    }

  onFormSubmit(e){

  }
  
  onChange(e) {


  }

  fileUpload(event){


    this.setState({ tipo:'csv'});

// console.log("holaa")
//     this.setState({file:event.target.files[0]})
//     console.log("file",this.state.file)

//      var datosString='';
//       let file = event.target.files[0];

//       Papa.parse(file, {
//           header: true,
//           download: true,
//           complete: (results) => {
//               this.updateData(results.data);
//             }
//           });

  }

  jsonUpload(event){

    this.setState({tipo:'json'})
  }


  updateData(result) {
    var data = result;

  }


	render() {

    let grafica = null;
    if(this.state.tipo=='csv')
    {
      grafica = (<FileGraphic/>)
    }
    else if(this.state.tipo=='json')
    {
      grafica = (<JsonGraphic/>)
    }

		return (
            <div>
              <div class="row">
                  <div class="column"> 

                  <form onSubmit={this.onJsonUpload}>
                        <div class="form-group">
                          <div class="custom-file">

                            <label class="custom-file-label" htmlFor="customFile"> <h1>Choose file (.csv): </h1> </label>
                            <input type="file" class="custom-file-input" id="customFile" value={this.state.file} onClick={ this.fileUpload }/>
                            <br/>

                          </div>
                          <label>
                            <h1>Write your Json here:</h1>
                          </label>
                          <textarea rows="20" cols="50"/>
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
