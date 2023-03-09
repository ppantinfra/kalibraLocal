import React, { Component } from 'react';
import { VictoryLabel } from 'victory';
// import { ColorHelper } from '../../core/helper/ColorHelper';

class ActivityLoggerPieLabel extends Component<{ isShowLabel: boolean } & Record<string, unknown>> {
    render() {
        const { datum, isShowLabel } = this.props as any;
        return (
            <g>
                <VictoryLabel
                    {...this.props}
                    textAnchor="middle"
                    text={isShowLabel === true ? datum.label : ''}
                    lineHeight={[2, 1]}
                    style={[
                        { fontSize: 11, fontFamily: 'Poppins', fill: datum?.showSelectedColor ? '#46D7CB' : '' },
                        { fontSize: 11, fontFamily: 'Poppins', fill: datum?.showSelectedColor ? '#33B7B8' : '' }
                    ]}
                />
            </g>
        );
    }
}

export default ActivityLoggerPieLabel;
