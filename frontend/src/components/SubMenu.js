import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as RiIcons from 'react-icons/ri';
import { IconContext } from "react-icons";
import * as BsIcons  from "react-icons/bs";

const SidebarLink = styled(Link)`
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
`;

const SidebarLabel = styled.span`
  padding-top: 0.25rem;
`;

const DropdownLink = styled.span`
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
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <div>
      <SidebarLink className="rounded-md p-2 cursor-pointer" to={'/'} onClick={item.trends && showSubnav}>
        <div className="d-flex">
          <IconContext.Provider value={{size: 30 }}>
            <div className="pr-2">
              <RiIcons.RiBarChartBoxFill onClick={() => {item?.setOpen(!(item?.open)); setSubnav(!subnav); item?.setpad(!(item?.open))}}/>
            </div>
          </IconContext.Provider>
          <SidebarLabel className={`${!item.open && "hidden"} duration-200 text-sm` }>{item.Name}</SidebarLabel>
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
              <IconContext.Provider value={{ }}>
                <div className="pr-2">
                  {<BsIcons.BsGraphUp />}
                </div>
              </IconContext.Provider>
              <SidebarLabel className="text-xs">{trend.name}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
};

export default SubMenu;
