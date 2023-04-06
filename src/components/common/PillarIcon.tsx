import React from 'react';
import nourishIcon from '../../assets/images/bloodwork/nourish-icon.png';
import moveIcon from '../../assets/images/bloodwork/move-icon.png';
import connectIcon from '../../assets/images/bloodwork/connect-icon.png';
import growIcon from '../../assets/images/bloodwork/grow-icon.png';
import reflectIcon from '../../assets/images/bloodwork/reflect-icon.png';
import restIcon from '../../assets/images/bloodwork/rest-icon.png';
import { Chip } from '@mui/material';
import { ColorHelper } from '../../core/helper/ColorHelper';

type IProps = {
  pillarName?: string;
  isBig?: boolean,
  isCircle?: boolean
};

const PillarIcon = ({
  pillarName,
  isBig,
  isCircle
}: IProps) => {
  const pillars = ['Move', 'Connect', 'Nourish', 'Grow', 'Reflect', 'Rest'];
  if (pillarName === undefined || !pillars.includes(pillarName)) {
    return <></>;
  }

  const getIcon = () => {
    switch (pillarName) {
      case 'Rest':
        return restIcon;
      case 'Nourish':
        return nourishIcon;
      case 'Move':
        return moveIcon;
      case 'Connect':
        return connectIcon;
      case 'Grow':
        return growIcon;
      case 'Reflect':
        return reflectIcon;
      default:
        return reflectIcon;
    }
  };

  if (isCircle === true || (isBig != undefined && isBig === true)) {
    return (
      <Chip
        avatar={<img style={{ width: isBig === true ? 16 : 16, height: isBig === true ? 16 : 16, marginLeft: isBig === true ? '20px' : '20px' }} src={getIcon()} alt={''} />}
        label={''}
        sx={{
          width: isBig === true ? 24 : 24,
          backgroundColor: ColorHelper.getTransperentColor(pillarName),
          color: ColorHelper.getScoreColor(pillarName),
          fontSize: 10,
          height: isBig === true ? 24 : 24,
          borderRadius: isBig === true ? 24 : 24,
          justifyContent: 'center',
          padding: '2px 2px 2px 3px'
        }}
        className={'pillarIconChip'}
      />
    );
  }

  // icon only
  return (
    <Chip
      size='small'
      avatar={<img style={{ width: 16, height: 16 }} src={getIcon()} alt={''} />}
      label={pillarName}
      sx={{
        width: undefined,
        backgroundColor: ColorHelper.getTransperentColor(pillarName),
        color: ColorHelper.getScoreColor(pillarName),
        fontSize: '10px',
        fontWeight: '500',
        height: 20,
        borderRadius: 34,
        justifyContent: 'center',
        padding: '2px 2px 2px 3px'
      }}
      className={'pillarIconChip'}
    />
  );
};


export default PillarIcon;
