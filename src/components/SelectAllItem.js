import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function SelectAllItem(props) {
  const { selectAll , setSelectAll } = props;
  //const [checked, setChecked] = React.useState(false);
  //JSON.stringify(window.localStorage.setItem('selectAll',checked));
  //localStorage.clear();

  const handleChange = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <h4>Select All</h4>
      <Checkbox
        checked={selectAll}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      
      
    </div>
  );
}