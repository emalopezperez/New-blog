import Code from "./Code";
import Markdown from "markdown-to-jsx";

const ContentMarkdown = ({ markdown }) => {

  return (
    <Markdown
      className="prose "
      options={{
        overrides: {
          Code: {
            component: Code,
          },
        },
      }}>
      {markdown}
    </Markdown>
  );
};

export default ContentMarkdown;
