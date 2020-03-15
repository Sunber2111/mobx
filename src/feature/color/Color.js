import React, { useContext } from "react";
import colorStore from "../../app/store/colorStore";
import { observer } from "mobx-react-lite";
import { Segment, List, Label } from "semantic-ui-react";

const Color = () => {
  const { isShow, products } = useContext(colorStore);

  console.log(products);
  
  return (
    <div>
      {isShow && <h1>Hello</h1>}

      <Segment>
        <h1>Products List</h1>
        <List divided selection>
          {products.map(product => (
            <List.Item>
              <Label color="red" horizontal>
                {product.id}
              </Label>
              {product.name}
            </List.Item>
          ))}
        </List>
      </Segment>
      
    </div>
  );
};

export default observer(Color);
