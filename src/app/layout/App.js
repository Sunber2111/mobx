import React from "react";
import Navbar from "../../feature/nav/Navbar";
import { Grid, Container, GridColumn } from "semantic-ui-react";
import Color from '../../feature/color/Color'
import { observer } from "mobx-react-lite";

const App = () => {
  return (
    <Container style={{marginTop:'7em'}}>
      <Grid>
        <GridColumn width={10}><Navbar/> </GridColumn>
        <GridColumn width={6}> <Color/> </GridColumn>
      </Grid>
    </Container>
  );
};

export default observer(App);

// react hook ver mới nhất của react 
// trong react hook 
// useState <=> setState và State 
// useEffect <=> componentDidMount + componentWillUnmount + ....
// useContext <=> context có sẵn hoặc trong Mobx
// các component dùng state trong store ( mobx) thì đều phải nối đến observer trong mobx-react-lite