export default function NavBar() {
  return (
    <>
      <div
        className="title-bar"
        data-responsive-toggle="example-menu"
        data-hide-for="medium"
      >
        <button
          className="menu-icon"
          type="button"
          data-toggle="offCanvasLeft1"
        ></button>
        <div className="title-bar-title">Menu</div>
      </div>
      <div
        className="off-canvas position-left"
        id="offCanvasLeft1"
        data-off-canvas
      >Contenido</div>

      <div className="top-bar" id="example-menu">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Books</li>
            <li>
              <ul className="menu vertical">
                <li>
                  <a href="#">Home</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <input type="search" placeholder="Search" />
            </li>
            <li>
              <button type="button" className="button">
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
