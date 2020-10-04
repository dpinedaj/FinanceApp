import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";

function Sidebar(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
        <>
            <SidebarParent>
                <div style={{position: 'fixed'}}>
                    {
                        SidebarItems.map((item, index)=> {
                            return (
                                <Link to={item.route}>
                                    <SidebarItem key={item.name}
                                                 active={index === activeIndex}
                                    >
                                        <p>{item.name}</p>
                                    </SidebarItem>
                                </Link>
                            );
                        })
                    }

                </div>
                <div className="behind-the-scenes"/>
            </SidebarParent>
        </>
    );
}

export default Sidebar;

const parentColor = "#4b4647"
const parentHeight = "100%";
const parentWidth = "250px";
const parentMinHeight = "100vh";
const behindBarWidth = "250px";

const SidebarParent = styled.div`
  background: ${parentColor};
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: ${parentWidth};
    height: ${parentHeight};
    min-height: ${parentMinHeight};
  }
  
  .behind-the-scenes {
    width: ${behindBarWidth};
    
  }
`;


const activeItemColor = "#c34a36"
const itemPadding = "16px 24px"
const itemTransition = "all 0.25s ease-in-out";
const itemBackground = props => props.active ? activeItemColor: "";
const itemMargin = "4px 12px";
const itemBorderRadius = "4px";
const itemFontColor = "white";
const itemFontWeight = "bold";
const itemTextDecoration = "none";
const itemHoverCursor = "pointer";
const itemHoverNotBackground = "#c34a36";

const SidebarItem = styled.div`
  padding: ${itemPadding};
  transition: ${itemTransition};
  background: ${itemBackground}; 
  margin: ${itemMargin};
  border-radius: ${itemBorderRadius};

  p {
    color: ${itemFontColor};
    font-weight: ${itemFontWeight};
    text-decoration: ${itemTextDecoration};
  }
  
  &:hover {
    cursor:${itemHoverCursor};
  }
  
  &:hover:not(:first-child) {
    background: ${itemHoverNotBackground};
  }
`;
