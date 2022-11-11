import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const Markdown = (props) => {
   const markdown = props.markupData;
   
    return(
      <div className='left-container'>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>

    );
}

export default Markdown;