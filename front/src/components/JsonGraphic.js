import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';

export default class JsonGraphic extends Component {

	constructor(props) {
    super(props);

    this.state = {
      spec: props.spec
    };
  }

  drawGraph() {
  	var data = [
				  {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
				  {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
				  {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
		  		];

    vegaEmbed(this.div, this.state.spec, { defaultStyle: true }).catch(console.warn).then((res) =>  res.view.insert("data", data).run());;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({spec: nextProps.spec},() => this.drawGraph());
  }

  componentDidMount() {
    this.drawGraph();
  }

  render() {
    return <div ref={div => (this.div = div)} />;
  }
}