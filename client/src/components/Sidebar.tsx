interface SidebarProps {
  toc: string[];
  fetchChapter: (chapter: string) => void;
}

const Sidebar = ({ toc, fetchChapter }: SidebarProps) => {
  return (
    <>
      <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
      </a>
      <div id="menu">
        <div className="pure-menu">
          <a className="pure-menu-heading" href="/">
            Table of Contents
          </a>
          <ul className="pure-menu-list">
            {toc.map((chapter, index) => (
              <li key={index} className="pure-menu-item">
                <a
                  href="#"
                  className="pure-menu-link"
                  onClick={() => fetchChapter(chapter)}
                >
                  {chapter}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
