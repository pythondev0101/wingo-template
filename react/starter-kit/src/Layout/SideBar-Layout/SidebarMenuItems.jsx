import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { LI, UL } from "../../AbstractElements";
import { MENUITEMS } from "./Menu";
import { Label } from "reactstrap";
import { useTranslation } from "react-i18next";

const SidebarMenuItems = ({ setMainMenu, sidebartoogle, setNavActive }) => {
  // eslint-disable-next-line
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const toggletNavActive = (item) => {
    if (window.innerWidth <= 991) {
      document.querySelector(".page-header").className = "page-header close_icon";
      document.querySelector(".main-nav").className = "main-nav close_icon ";
      if (item.type === "sub") {
        document.querySelector(".page-header").className = "page-header ";
        document.querySelector(".main-nav").className = "main-nav ";
      }
    }
    if (!item.active) {
      MENUITEMS.map((a) => {
        a.Items.filter((Items) => {
          if (a.Items.includes(item)) Items.active = false;
          if (!Items.children) return false;
          Items.children.forEach((b) => {
            if (Items.children.includes(item)) {
              b.active = false;
            }
            if (!b.children) return false;
            b.children.forEach((c) => {
              if (b.children.includes(item)) {
                c.active = false;
              }
            });
          });
          return Items;
        });
        return a;
      });
    }
    item.active = !item.active;
    setMainMenu({ mainmenu: MENUITEMS });
  };
  return (
    <Fragment>
      <UL attrUL={{ className: "simple-list nav-menu custom-scrollbar d-block" }}>
        <LI attrLI={{ className: "back-btn" }}>
          <div className="mobile-back text-end">
            <span>Back</span>
            <i className="fa fa-angle-right ps-2"></i>
          </div>
        </LI>
        {MENUITEMS.map((Item, i) => (
          <Fragment key={i}>
            {Item.Items.map((menuItem, i) => (
              <LI attrLI={{ className: "dropdown" }} key={i}>
                {menuItem.type === "sub" && (
                  <a
                    href="#javascript"
                    className={`nav-link menu-title ${menuItem.active || active ? "active" : ""}`}
                    onClick={(event) => {
                      event.preventDefault();
                      setNavActive(menuItem);
                    }}
                  >
                    {menuItem.icon !== undefined && <menuItem.icon />}
                    <span>{t(menuItem.title)}</span>
                    <div className="according-menu">{menuItem.active ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-right"></i>}</div>
                  </a>
                )}
                {menuItem.type === "link" && (
                  <Link to={menuItem.path} className={`nav-link menu-title ${menuItem.active ? "active" : ""}`} onClick={() => toggletNavActive(menuItem)}>
                    {menuItem.icon !== undefined && <menuItem.icon />}
                    <span>{t(menuItem.title)}</span>

                    {menuItem.badge && <Label className={menuItem.badge}>{menuItem.badgetxt}</Label>}
                  </Link>
                )}
                {menuItem.children && (
                  <UL
                    attrUL={{
                      className: "simple-list sidebar-submenu",
                      style: menuItem.active
                        ? sidebartoogle
                          ? {
                              opacity: 1,
                              transition: "opacity 500ms ease-in",
                            }
                          : { display: "block" }
                        : { display: "none" },
                    }}
                  >
                    <UL attrUL={{ className: "simple-list nav-submenu menu-content" }}>
                      {menuItem.children.map((childrenItem, index) => {
                        return (
                          <LI key={index}>
                            {childrenItem.type === "sub" && (
                              <a
                                href="javascript"
                                className={`${childrenItem.active ? "active" : ""}`}
                                onClick={(event) => {
                                  event.preventDefault();
                                  toggletNavActive(childrenItem);
                                }}
                              >
                                {t(childrenItem.title)}
                                <div className="according-menu">{childrenItem.active ? <i className="fa fa-caret-down"></i> : <i className="fa fa-caret-right"></i>} </div>
                              </a>
                            )}
                            {childrenItem.type === "link" && (
                              <Link to={childrenItem.path} className={`${childrenItem.active ? "active" : ""}`} onClick={() => toggletNavActive(childrenItem)}>
                                {t(childrenItem.title)}
                              </Link>
                            )}
                            {childrenItem.type === "exteral_link" && (
                              <>
                                <a target="_blank" className={`${childrenItem.active ? "active" : ""}`} href={childrenItem.path} onClick={() => toggletNavActive(childrenItem)}>
                                  {t(childrenItem.title)}
                                </a>
                              </>
                            )}
                            {childrenItem.children && (
                              <UL
                                attrUL={{
                                  className: "simple-list nav-sub-childmenu submenu-content",
                                  style: childrenItem.active ? { display: "block" } : { display: "none" },
                                }}
                              >
                                {childrenItem.children.map((childrenSubItem, key) => (
                                  <LI key={key}>
                                    {childrenSubItem.type === "link" && (
                                      <Link to={childrenSubItem.path} className={`${childrenSubItem.active ? "active" : ""}`} onClick={() => toggletNavActive(childrenSubItem)}>
                                        {t(childrenSubItem.title)}
                                      </Link>
                                    )}
                                  </LI>
                                ))}
                              </UL>
                            )}
                          </LI>
                        );
                      })}
                    </UL>
                  </UL>
                )}
              </LI>
            ))}
          </Fragment>
        ))}
      </UL>
    </Fragment>
  );
};
export default SidebarMenuItems;
