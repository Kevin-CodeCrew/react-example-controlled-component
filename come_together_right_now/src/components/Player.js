import React, {Component} from 'react';

// The individual Player component. We can have as many of these as we need on the page at once.
// The component gets its details like 'name' based down from Parent as props. This includes a prop
// Containing a callback function we use to 'lift' the state back up to the Parent component.
class Player extends Component
{

    DEBUG = false; // Simple flag to toggle debug messages in console. Should really pass down as a prop from parent

    // Construct the component and setup state we will use to control the text input component
    constructor(props)
    {
        super(props);
        this.state = {
            name: this.props.player_name,
            custom_move: ''
        }
    }

    // One of the buttons was clicked. We get the text value of the button clicked from the event object generated when
    // the clicked event fires.
    something_was_clicked = (ev) =>
    {
        // Hit up the callback function and give them the updated info
        // Since this event happens only when the user click on of the buttons,  when this fires,
        // we lift the text value from the button they clicked as the 'last player move' to update shared state
        // in the parent.
        if (this.DEBUG) console.log(this.state.name);
        this.props.callback_if_your_btn_clicked(this.state.name, `did a ${ev.target.value}`);
    };

    // handle submission of the form which allows us to 'control' the form as a whole.
    // Since this event happens only when the user typed in a 'custom move' when this fires,
    // we lift the'custom move' text they entered as the 'last player move' to update shared state
    // in the parent.
    on_submit = (ev) =>
    {
        ev.preventDefault();
        if (this.DEBUG) console.log(`The player move value is ${ev.target.value}`);
        if (this.state.custom_move !== '' && this.state.custom_move !== undefined)
        {
            this.props.callback_if_your_btn_clicked(this.state.name, `said, "${this.state.custom_move}"`);
            if (this.DEBUG) console.log(`Submit! ${this.state.custom_move}`);
            this.setState({custom_move: ''});
        }
        else
        {
            window.alert('You need to type something in first');
        }
    };

    // With a controlled component we update the value we are keeping in state each time a new character typed into text field of form
    on_change = (ev) =>
    {
        if (this.DEBUG) console.log(`The change value is ${ev.target.value}`);
        this.setState({
            custom_move: ev.target.value
        });
        if (this.DEBUG) console.log(this.state.custom_move);
        ev.preventDefault();
    };

    // Render the Player component
    // Note that the text input field ONLY gets its value from 'state'  and continuously keeps state updated
    // as the User types something in, thus we control component. We also directly handle submission of the form
    // which allows us to 'control' the form as a whole as well.
    render()
    {
        return (
            <div className="thing"><p>{this.props.player_name}</p>
                <button type="button" className="btn btn-sm btn-block btn-primary" value={'Yell'}
                        onClick={this.something_was_clicked}>Yell
                </button>
                <button type="button" className="btn btn-sm btn-block btn-warning" value={'Clap'}
                        onClick={this.something_was_clicked}>Clap
                </button>
                <button type="button" className="btn btn-sm btn-block btn-secondary" value={'Laugh'}
                        onClick={this.something_was_clicked}>Laugh
                </button>
                <form className="form-inline" onSubmit={this.on_submit}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" value={this.state.custom_move} className="form-control" onChange={this.on_change} id="what_to_say"
                               placeholder="say something..."/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Do iT!</button>
                </form>

            </div>
        );


    }
}

export default Player;
