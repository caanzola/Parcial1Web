import React, { Component } from 'react';
import './App.css';

class App extends Component {

 constructor(){
        super();
        this.state = {
        	file:null
        }
        this.onChange = this.onChange.bind(this)

    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.fileUpload = this.fileUpload.bind(this)
    }

onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
     onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
  
 
    Papa.parse(this.state.file, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        data = results;
      }
    });
  }

  render() {
    return (
      <div className="App">


        <section class="abajo">

        <textarea 
        cols="40" 
        rows="20"
        ref = {(div) =>this.divTarget=div}>

        </textarea>
            
            <form onSubmit={this.onFormSubmit}>
              <h1>File Upload</h1>
            <input type="file" onChange={this.onChange} />
            <button type="submit" onClick={()=>{

              var obj = {
                "x":"",
                "y":{"":"","":""}
              };
              this.divTarget.value.JSON.stringify(obj, null, 2);
            }}
              >Upload</button>
          </form>

          <div>data</div>

        </section>
        
        
        
      </div>
    );
  }
}

export default App;
