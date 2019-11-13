import React, {Component} from 'react';
import TopNav from "./layout/TopNav"
import BtmNav from "./layout/BtmNav"
import ScoreBoard from "./ScoreBoard";
import Player from "./Player";


class MainComponentContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            the_name_of_the_game: "Top of the World Ma!",
            player_one_name: "Left Player",
            player_two_name: "Right Player",
            last_player_move: "Waiting for a Move"
        };
    }

    somebody_clicked_something = (which_player, text_for_btn_clicked) =>
    {
        let player_move = `${which_player} just ${text_for_btn_clicked}`;
        this.setState({
            last_player_move: player_move
        });
        console.log(player_move);
    };

    render()
    {
        return (
            <div className={"container"}>
                <div className="grid_container">
                    <TopNav/>

                    <ScoreBoard boardTitle={this.state.the_name_of_the_game} lastPlayerMove={this.state.last_player_move}/>
                    <Player className={'the_thing_on_the_left'} player_name={this.state.player_one_name}
                            callback_if_your_btn_clicked={this.somebody_clicked_something}/>
                    <Player className={'the_thing_on_the_right'} player_name={this.state.player_two_name}
                            callback_if_your_btn_clicked={this.somebody_clicked_something}/>
                    <BtmNav/>
                </div>
            </div>
        );
    }
}

export default MainComponentContainer;
