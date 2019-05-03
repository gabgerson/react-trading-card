class Homepage extends React.Component {
	render(){
		return(
        <div>
            <h1><p className = "welcomeGreeting">HELLO USER!</p></h1>
            <p><a href="/cards">Trading Cards!</a></p>
            <p><img src="/static/img/balloonicorn.jpg"/></p>
            <p>Balloonicorn</p>
        </div>);
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));