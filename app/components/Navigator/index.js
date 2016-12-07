import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Contaniner = styled.div`
  height: 70px;
  width: 100%;
  background-color: rgba(100,100,100, 0.6);
  position: fixed;
  top: 0;
  z-index: 100;
`;
const ListItem = styled.li`
  display: inline-block;
  padding: 10px;

  & a {
    color: white;
    text-decoration: none;
  }
`;
const Menu = styled.ul`
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
`;
const Logo = styled.div`
  display: inline-block;
  padding-left: 40px;
  font-size: 20px;
  line-height: 20px;
  color: white;
`;

const appName = '<OPENDOTA />';

class Navigator extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Contaniner>
        <Logo>{ appName }</Logo>
        <Menu>
          <ListItem><Link to={'/'}>首页</Link></ListItem>
          <ListItem><Link to={'/search'}>搜索</Link></ListItem>
          <ListItem><Link to={'/me'}>玩家主页</Link></ListItem>
          <ListItem><Link to={'/me/records'}>玩家个人记录</Link></ListItem>
          <ListItem><Link to={'/me/heroes'}>玩家英雄</Link></ListItem>
          <ListItem><Link to={'/me/matches'}>玩家近期比赛</Link></ListItem>
          <ListItem><Link to={'/heroes'}>英雄列表</Link></ListItem>
          <ListItem><Link to={'/heroes/1'}>英雄1</Link></ListItem>
          <ListItem><Link to={'/matches/1'}>比赛详情</Link></ListItem>
        </Menu>
      </Contaniner>
    );
  }
}

export default Navigator;
