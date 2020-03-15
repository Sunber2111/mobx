import React, { useContext, Fragment, useState } from "react";
import { Button, Input, Icon, GridRow } from "semantic-ui-react";
import ColorStore from "../../app/store/colorStore";
import { observer } from "mobx-react-lite";

const Navbar = () => {
  const { ShowMode, addProduct } = useContext(ColorStore);

  const [data, setData] = useState('')

  const onChange = (e)=>{
    setData(e.target.value)
  }

  return (
    <Fragment>
      <GridRow>
      <Button.Group >
        <Button onClick={() => ShowMode(false)}>Hide</Button>
        <Button.Or text="or" />
        <Button positive onClick={() => ShowMode(true)}>
          Show
        </Button>
      </Button.Group>
      </GridRow>
      <Input
        value={data}
        onChange={(e)=>onChange(e)}
        style={{marginTop:'2em'}}
        icon={<Icon name="add circle" inverted circular link onClick={()=>addProduct({name:data})} />}
        placeholder="Add Product..."
      />
    </Fragment>
  );
};

export default observer(Navbar);
