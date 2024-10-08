import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import { TableOfContents } from "./types";
import "./App.css";

function App() {
  const [toc, setToc] = useState<string[]>([]);
  const [currentChapter, setCurrentChapter] = useState<string | null>(null);
  const [chapterContent, setChapterContent] = useState<string>("");

  useEffect(() => {
    fetchToc();
  }, []);

  const fetchToc = async () => {
    try {
      const response = await axios.get<TableOfContents>("/api/toc");
      setToc(response.data.chapters);
    } catch (error) {
      console.error("Error fetching table of contents:", error);
    }
  };

  const fetchChapter = async (chapter: string) => {
    try {
      const chapterUrl = chapter.toLowerCase().replace(/\s+/g, "-");
      const response = await axios.get<string>(`/api/${chapterUrl}`);
      setChapterContent(response.data);
      setCurrentChapter(chapter);
    } catch (error) {
      console.error("Error fetching chapter:", error);
    }
  };

  return (
    <div id="layout">
      <Sidebar toc={toc} fetchChapter={fetchChapter} />
      <div id="main">
        <Header />
        <Content
          toc={toc}
          currentChapter={currentChapter}
          chapterContent={chapterContent}
          fetchChapter={fetchChapter}
        />
      </div>
    </div>
  );
}

export default App;
