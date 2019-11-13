import React, {Component} from 'react';

class ScoreBoard extends Component
{


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
