import React, {Component} from 'react';

class ScoreBoard extends Component
{
    // The scoreboard component displays a title and the last move the player made.
    // These values get passed down from the Parent component as props.
    // The scoreboard doesn't need to pass anything back up to be passed down to other components,
    // so we don't get/need a callback function as we are NOT lifting state back up.

    // Render the scoreboard
    render()
    {
        return (
            <div className={"all_the_info_i_need_to_track_for_this_view"}>
                <h1>{this.props.boardTitle}</h1>
                <h3>{this.props.lastPlayerMove}</h3>
            </div>
        );
    }
}

export default ScoreBoard;
