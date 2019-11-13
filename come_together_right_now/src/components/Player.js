import React, {Component} from 'react';

class Player extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            name: this.props.player_name,
            custom_move: ''
        }
    }

    something_was_clicked = (ev) =>
    {
        // Hit up the callback function and give them the updated info
        console.log(this.state.name);
        this.props.callback_if_your_btn_clicked(this.state.name, `did a ${ev.target.value}`);
    };

    on_submit = (ev) =>
    {
        ev.preventDefault();
        if (this.state.custom_move === '') {return}
        this.props.callback_if_your_btn_clicked(this.state.name, `said, "${this.state.custom_move}"`);
        console.log(`Submit! ${this.state.custom_move}`);
        this.setState({custom_move: ''});
    }

    on_change = (ev) =>
    {
        this.setState({
            custom_move: ev.target.value
        });
        console.log(this.state.custom_move);
    };

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
                <form className="form-inline"  onSubmit={this.on_submit}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" onChange={this.on_change} id="what_to_say" placeholder="say something..."/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Do iT!</button>
                </form>

            </div>
        );


    }
}

export default Player;
