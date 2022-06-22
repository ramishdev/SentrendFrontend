import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from "react-icons";
import * as BsIcons  from "react-icons/bs";

const SidebarLink = React.memo(styled(Link)`
  display: flex;
  color: #e1e9fc;
/*  justify-content: space-between;
  align-items: center;*/
  padding: 20px;
  list-style: none;
  height: 55px;
  align-items: center;

  text-decoration: none;
  font-size: 10px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`)

const SidebarLabel = React.memo(styled.span`
  padding-top: 0.25rem;
`)

const DropdownLink = React.memo(styled.span`
  height: 55px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`)

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {setSubnav(!subnav);item?.setsubopen(!subnav)};
  return (
    <>
      <SidebarLink className="rounded-md p-2 cursor-pointer" to={'/dashboard'} onClick={item.trends && showSubnav}>
        <div className="d-flex">
          <IconContext.Provider value={{size: '4em',className:"pr-2" }}>
            <>
              <RiIcons.RiBarChartBoxFill onClick={() => {item?.setOpen(!(item?.open)); setSubnav(!subnav); item?.setpad(!(item?.open))}}/>
            </>
          </IconContext.Provider>
          <SidebarLabel className={`${!item.open && "hidden"} duration-200 text-sm pt-2` }>{item.Name}</SidebarLabel>
        </div>
        <div  className={`${!item.open && "hidden"} origin-left duration-200`}>
          {item.trends && subnav
            ? <div className={'pl-20'}><RiIcons.RiArrowUpSFill /></div>
            : item.trends
            ? <div className={'pl-20'}><RiIcons.RiArrowDownSFill /></div>
            : null}
        </div>
      </SidebarLink>
      {subnav && item.open &&
        item.trends.map((trend, index) => {
          return (
            <DropdownLink className="rounded-md cursor-pointer" key={index} onClick={() => item.passTrends(trend)}>
              <IconContext.Provider value={{size:'1.5em',className: "pr-2"}} >
                <>
                  {<BsIcons.BsGraphUp />}
                </>
              </IconContext.Provider>
              <SidebarLabel className="text-xs">{trend.name}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default React.memo(SubMenu);
