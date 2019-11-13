import React, {Component} from 'react';
import TopNav from "./layout/TopNav"
import BtmNav from "./layout/BtmNav"
import ScoreBoard from "./ScoreBoard";
import Player from "./Player";

// This component serves as the top level container for our app and
// all child components.
class MainComponentContainer extends Component
{
    constructor(props)
    {
        super(props);
        // Here's all the prop values we pass down to child components (not including callback functions). Since these don't change
        // in this demo so really didn't have to keep these around in state. Just here as an example.
        this.state = {
            the_name_of_the_game: "Top of the World Ma!", // whatever title u want
            player_one_name: "Left Player", // what to name one of the players
            player_two_name: "Right Player", // what to name the other player
            last_player_move: "Waiting for a Move", // start with move status as none
            debug_mode: false // Simple flag to toggle debug messages in console and footer
        };
    }

    // This callback function will be called from child Player components anytime they need to update the
    // top level state (the value for the last move of submit button clicked will eventually get passed down to scoreboard child component)
    somebody_clicked_something = (which_player, text_for_btn_clicked) =>
    {
        let player_move = `${which_player} just ${text_for_btn_clicked}`;
        this.setState({
            last_player_move: player_move
        });
        if (this.state.debug_mode) console.log(player_move);
    };

    // Helper function to toggle debug mode. This callback will be used from bottom Nav to lift up to parent state
    toggle_debug_mode = (new_mode) => {
        console.log(`Parent debug mode changed to ${new_mode}`);
        this.setState({debug_mode: new_mode})
    };

    // Render the demo app container and all the child components within.
    // This includes some simple top and bottom navigation (links do nothing in this demo however) Just an example
    // of breaking down the application layout
    render()
    {
        // Toggle border on if in debug mode so student can see component grouping(s)
        return (
            <div className={this.state.debug_mode ? "container red_border" : "container"}>
                <div className="grid_container">
                    <TopNav debug_mode={this.state.debug_mode}/>
                    <ScoreBoard boardTitle={this.state.the_name_of_the_game}
                                lastPlayerMove={this.state.last_player_move} debug_mode={this.state.debug_mode}/>
                    <Player className={'the_thing_on_the_left'} player_name={this.state.player_one_name}
                            callback_if_your_btn_clicked={this.somebody_clicked_something} debug_mode={this.state.debug_mode}/>
                    <Player className={'the_thing_on_the_right'} player_name={this.state.player_two_name}
                            callback_if_your_btn_clicked={this.somebody_clicked_something} debug_mode={this.state.debug_mode}/>
                    <BtmNav debug_mode={this.state.debug_mode} callback_when_debug_mode_toggled={this.toggle_debug_mode}/>
                </div>
            </div>
        );
    }
}

export default MainComponentContainer;
