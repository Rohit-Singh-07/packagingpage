import { Switch } from 'antd';
import { useState } from 'react';

function CheckButton() {

    const [checked, setChecked] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('limegreen');

    const onChange = (checked) => {
      setChecked(checked);
      setBackgroundColor(checked ? 'limegreen' : 'gray')  
      };

  return (
    <>
       <Switch defaultChecked={checked} onChange={onChange} style={{ backgroundColor: backgroundColor }} />
    </>
  )
}

export default CheckButton
