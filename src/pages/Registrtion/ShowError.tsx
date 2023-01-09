import React from 'react';
import './ErrorStyle.sass'

type Props = {
  errText: string
};

const ShowError = ({ errText }: Props) => {
  return (
    <div>
      <span className='err'>{errText}</span>
    </div>
  );
};

export default ShowError;