import * as React from 'react';
import Header from '../../Mols/Header';
import PlayerContainer from '../../Orgs/PlayerContainer';
import ScoreContainer from '../../Orgs/ScoreContainer';
import MainTemplate from '../../Templates/MainTemplate';

export default React.memo(() => (
  <MainTemplate>
    <Header />
    <PlayerContainer />
    <ScoreContainer />
  </MainTemplate>
));
