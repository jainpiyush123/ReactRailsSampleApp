class NewFruit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    	name: null,
    	description: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(name,value) {
  	if(name && value) {
  	 this.setState({name:null, description:null})
  	 document.getElementById('desc').value = ''
  	 document.getElementById('name').value = ''

  	 this.props.handleFormSubmit(name,value)
    }
  }

  handleChange(event) {
  	this.setState({ [event.target.name]: event.target.value })
  }
  
  render(){
    return(
      <div>
        <input id="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder='Enter the name of the item'/>
        <input id="desc" name="description" value={this.state.description} onChange={this.handleChange.bind(this)} placeholder='Enter a description'/>
        <button onClick={ () => this.handleFormSubmit(this.state.name, this.state.description)}>Submit</button>
      </div>
    )    
  }
}


