interface ContentProps {
  toc: string[];
  currentChapter: string | null;
  chapterContent: string;
  fetchChapter: (chapter: string) => void;
}

const Content = ({
  toc,
  currentChapter,
  chapterContent,
  fetchChapter,
}: ContentProps) => {
  return (
    <div className="content">
      {currentChapter ? (
        <>
          <h2 className="content-subhead">{currentChapter}</h2>
          <div className="chapter-content">{chapterContent}</div>
        </>
      ) : (
        <>
          <h2 className="content-subhead">Table of Contents</h2>
          <div className="pure-menu">
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
        </>
      )}
    </div>
  );
};

export default Content;
