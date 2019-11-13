import React, {Component} from 'react';

// Stubbed out navigation component that actually does nothing (links not live)
// Just an example of breaking down the application layout
class TopNav extends Component
{
    render()
    {
        return (
            <div className={this.props.debug_mode ? "TopNav purple_border" : "TopNav"}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
        );
    }
}

export default TopNav;
