import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function CardItem(props) {
  const { item, selectAll, setSelectAll } = props;
  const [checked, setChecked] = React.useState(false);
  const [handle, sethandle] = React.useState(selectAll === true ? true : '');
  //const selectAll = JSON.parse(window.localStorage.getItem('selectAll'));

  // useEffect(()=>{
  //   setChecked(selectAll);
  //   console.log(selectAll);
  // },[selectAll])

  const handleChange = () => {  
    if(selectAll === true)
    {
      setChecked(false);
      setSelectAll(false);
      sethandle(false);
    }
    if(selectAll === false)
    {
      setChecked(!checked);
    }
  };
  return (
    <div>
      <p>************************************</p>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <Checkbox
        checked={checked || selectAll || handle}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p>************************************</p>
    </div>
  );
}
