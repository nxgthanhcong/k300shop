import React from 'react'

const Sidebar = function (params) {
    return (
        <div className="main-sidebar">
            <aside id="sidebar-wrapper">
              <div className="sidebar-brand">
                <a href="index.html">Stisla</a>
              </div>
              <div className="sidebar-brand sidebar-brand-sm">
                <a href="index.html">St</a>
              </div>
              <ul className="sidebar-menu">
                  <li className="menu-header">Dashboard</li>
                  <li className="nav-item dropdown active">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a>
                    <ul className="dropdown-menu">
                      <li className="active"><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                    </ul>
                  </li>
                  <li className="menu-header">Starter</li>
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns"></i> <span>Layout</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="layout-default.html">Default Layout</a></li>
                      <li><a className="nav-link" href="layout-transparent.html">Transparent Sidebar</a></li>
                      <li><a className="nav-link" href="layout-top-navigation.html">Top Navigation</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns"></i> <span>Brand</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link">Brand List</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link" href="blank.html"><i className="far fa-square"></i> <span>Blank Page</span></a></li>
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-th"></i> <span>Bootstrap</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="bootstrap-alert.html">Alert</a></li>
                      <li><a className="nav-link" href="bootstrap-badge.html">Badge</a></li>
                      <li><a className="nav-link" href="bootstrap-breadcrumb.html">Breadcrumb</a></li>
                      <li><a className="nav-link" href="bootstrap-buttons.html">Buttons</a></li>
                      <li><a className="nav-link" href="bootstrap-card.html">Card</a></li>
                      <li><a className="nav-link" href="bootstrap-carousel.html">Carousel</a></li>
                      <li><a className="nav-link" href="bootstrap-collapse.html">Collapse</a></li>
                      <li><a className="nav-link" href="bootstrap-dropdown.html">Dropdown</a></li>
                      <li><a className="nav-link" href="bootstrap-form.html">Form</a></li>
                      <li><a className="nav-link" href="bootstrap-list-group.html">List Group</a></li>
                      <li><a className="nav-link" href="bootstrap-media-object.html">Media Object</a></li>
                      <li><a className="nav-link" href="bootstrap-modal.html">Modal</a></li>
                      <li><a className="nav-link" href="bootstrap-nav.html">Nav</a></li>
                      <li><a className="nav-link" href="bootstrap-navbar.html">Navbar</a></li>
                      <li><a className="nav-link" href="bootstrap-pagination.html">Pagination</a></li>
                      <li><a className="nav-link" href="bootstrap-popover.html">Popover</a></li>
                      <li><a className="nav-link" href="bootstrap-progress.html">Progress</a></li>
                      <li><a className="nav-link" href="bootstrap-table.html">Table</a></li>
                      <li><a className="nav-link" href="bootstrap-tooltip.html">Tooltip</a></li>
                      <li><a className="nav-link" href="bootstrap-typography.html">Typography</a></li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
                  <a href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                    <i className="fas fa-rocket"></i> Documentation
                  </a>
                </div>
            </aside>
          </div>
    );
}

export default Sidebar;