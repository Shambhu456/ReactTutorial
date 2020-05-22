import React, { Component } from 'react'
import HoverCounter from './HoverCounter'
import ClickCounter from './ClickCounter'
import WithCounter2 from './WithCounter2'
import HoverCounterTwo from './HoverCounterTwo'
import RenderProps from './RenderProps'
export default class HighApp extends Component {
    render() {
        return (
            <div>
                <HoverCounter/>
                <ClickCounter name="Shambhu"/>
                <WithCounter2 />
                <HoverCounterTwo />
                <RenderProps name ="Shambhu"/>
            </div>
        )
    }
}
