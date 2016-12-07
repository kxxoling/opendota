import React, { PropTypes as T } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const PlayerName = styled.h2`
  font-size: 20px;
`;
const AvatarContainer = styled.div`
  width: 120px;
  height: 120px;
  display: inline-block;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

class PlayerProfile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { profile } = this.props;
    return (
      <Container>
        <AvatarContainer>
          <Avatar src={profile.avatarfull} alt={profile.personaname} />
        </AvatarContainer>
        <PlayerName>{profile.personaname}</PlayerName>
      </Container>
    );
  }
}

PlayerProfile.propTypes = {
  profile: T.shape({
    personaname: T.string.isRequired,
    steamid: T.string.isRequired,
    cheese: T.number.isRequired,
    account_id: T.number.isRequired,
    loccountrycode: T.string,
    profileurl: T.string.isRequired,
    last_login: T.datetime,
    avatar: T.string,
    avatarmedium: T.string,
    avatarfull: T.string,
    name: T.string,
  }).isRequired,
  // mmr_estimate: T.object.isRequired,
  // tracked_until: T.string.isRequired,
  // competitive_rank: T.string,
  // solo_competitive_rank: T.string,
};

export default PlayerProfile;
