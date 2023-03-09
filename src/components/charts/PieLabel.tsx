import React, { Component } from 'react';
import { VictoryLabel } from 'victory';
import { ColorHelper } from '../../core/helper/ColorHelper';

class PieLabel extends Component<{ isShowLabel: boolean } & Record<string, unknown>> {
  render() {
    const { datum, isShowLabel } = this.props as any;
    const category = datum.label.split(' ')[0];
    return (
      <g>
        <VictoryLabel
          {...this.props}
          textAnchor="middle"
          text={isShowLabel === true ? datum.label : ''}
          style={{
            fontSize: 11,
            fontFamily: 'Poppins',
            fill: ColorHelper.getScoreColor(category),
          }}
        />
      </g>
    );
  }
}

export default PieLabel;
