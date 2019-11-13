import React, {Component} from 'react';

// Stubbed out navigation component that actually does nothing (links not live)
// Just an example of breaking down the application layout
// Note we could have passed the text down from Parent as props instead of hard-coding
// it here.
class BtmNav extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            debug_mode: this.props.debug_mode
        };


    }

    // Handle toggle of debug mode on/off
    on_toggle_debug = (ev) =>
    {
        ev.preventDefault();
        console.log(`DEBUG mode toggled to ${ev.target.checked}`);
        this.setState({debug_mode: ev.target.checked});
        this.props.callback_when_debug_mode_toggled(ev.target.checked);
    };

    // A new Render appears!
    render()
    {
        // We have to wrap stock HTML checkbox element for React to handle properly
        // TODO: Go back and better understand why only wrapping the stock checkbox element is what worked :-(
        const Checkbox = props => (
            <input type="checkbox" {...props} />
        );

        const debug_el_content =
            <p>
                <span className={"red_border"}>Main App Container</span>&nbsp; {/*throw in a non-breaking space between each bit of text*/}
                <span className={"purple_border"}>Top Navigation</span>&nbsp;
                <span className={"green_border"}>Score Board</span>&nbsp;
                <span className={"blue_border"}>Player(s)</span>&nbsp;
                <span className={"pink_border"}>Bottom Navigation</span>
            </p>
        ;

        // Build bottom nav text based on if debug mode active
        let btm_nav_content = this.state.debug_mode ? debug_el_content:<p>Turn DEBUG on to get console logs and to highlight component hierarchy...</p>
        return (
            <div className={this.state.debug_mode ? "BottomNav pink_border" : "BottomNav"}>
                <label>
                    Toggle Debug Mode:&nbsp;
                    <Checkbox
                        checked={this.state.debug_mode}
                        onChange ={this.on_toggle_debug}>
                    </Checkbox>
                </label>
                {btm_nav_content}
            </div>
        );
    }
}

export default BtmNav;
