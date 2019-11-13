import React, {Component} from 'react';

// Stubbed out navigation component that actually does nothing (links not live)
// Just an example of breaking down the application layout
// Note we could have passed the text down from Parent as props instead of hard-coding
// it here.
class BtmNav extends Component
{
    render()
    {
        return (
            <div className="BottomNav">
                Where the Wild Things Are
            </div>
        );
    }
}

export default BtmNav;
