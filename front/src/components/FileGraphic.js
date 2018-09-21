import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';

export default class FileGraphic extends Component {

	constructor(props) {
    super(props);

    this.state = {
      spec: props.spec
    };
}

	drawGraph() {
		var spec = {
			      '$schema': 'https://vega.github.io/schema/vega-lite/v3.0.0-rc6.json',
			      'description': 'A simple bar chart with embedded data.',
			      'data': {
			        'name': 'myData' 
			      },
			      'mark': 'bar',
			      'encoding': {
			        'y': {'field': 'a', 'type': 'ordinal'},
			        'x': {'field': 'b', 'type': 'quantitative'}
			      }
			    };

	var data = this.state.spec

    vegaEmbed(this.div, spec, { defaultStyle: true }).catch(console.warn).then((res) =>  res.view.insert("myData", data).run());
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
