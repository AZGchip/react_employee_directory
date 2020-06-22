var App = React.createClass({

    getInitialState: function(){
        return [
            {id:1,name:"Some Name"}
        ]
    },

    addChild: function() {
        // State change will cause component re-render
        this.setState(this.state.concat([
            {id:2,name:"Another Name"}
        ]))
    },

    render: function() {
        return (
            <div>
                <h1>App main component! </h1>
                <button onClick={this.addChild}>Add component</button>
                {
                    this.state.map((item) => (
                        <SampleComponent key={item.id} name={item.name}/>
                    ))
                }
            </div>
        );
    }

});