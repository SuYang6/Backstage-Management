import React from "react";
import { NavLink } from "react-router-dom";
// import { connect } from 'react-redux'
// import { switchMenu, saveBtnList } from './../../redux/action'
import MenuConfig from "./../../config/menuConfig";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import "./index.less";
const { SubMenu } = Menu;

class NavLeft extends React.Component {
  state = {
    currentKey: ""
  };
  // 菜单点击
  // handleClick = ({ item, key }) => {
  //   if (key == this.state.currentKey) {
  //     return false;
  //   }
  //   // 事件派发，自动调用reducer，通过reducer保存到store对象中
  //   const { dispatch } = this.props;
  //   dispatch(switchMenu(item.props.title));
  //   this.setState({
  //     currentKey: key
  //   });
  //   // hashHistory.push(key);
  // };
  // componentWillMount() {
  //   const menuTreeNode = this.renderMenu(MenuConfig);

  //   this.setState({
  //     menuTreeNode
  //   })
  // }
  // // 菜单渲染
  // renderMenu = (data) => {
  //   return data.map((item) => {
  //     if (item.children) {
  //       return (
  //         <SubMenu title={item.title} key={item.key}>
  //           {this.renderMenu(item.children)}
  //         </SubMenu>
  //       )
  //     }
  //     return <Menu.Item title={item.title} key={item.key}>
  //       <NavLink to={item.key}>{item.title}</NavLink>
  //     </Menu.Item>
  //   })
  // }
  // homeHandleClick = () => {
  //   const { dispatch } = this.props;
  //   dispatch(switchMenu('首页'));
  //   this.setState({
  //     currentKey: ""
  //   });
  // };
  render() {
    return (
      <div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          theme="dark"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                subnav 1
              </span>
            }
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                subnav 2
              </span>
            }
          >
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                subnav 3
              </span>
            }
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default NavLeft;
