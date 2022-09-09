import { useEffect, useState } from "react";

const App = (): JSX.Element => {
  const [allBookmarks, setAllBookMarks] = useState<
    chrome.bookmarks.BookmarkTreeNode[]
  >([]);

  useEffect(() => {
    chrome.bookmarks.search({}, (bookmarkItems) => {
      setAllBookMarks(bookmarkItems.filter((item) => "url" in item)); // url指定することでフォルダ以外のものに絞りこむ
    });
  }, []);

  return (
    <div>
      {allBookmarks.map((bookmark) => {
        return <p key={bookmark.id}>{bookmark.title}</p>;
      })}
    </div>
  );
};

export default App;