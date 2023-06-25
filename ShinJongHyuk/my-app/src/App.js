import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a href={'/read/'+t.id} onClick={event => {
        event.preventDefault()
        props.onChangeMode(t.id)
      }}>{t.title}</a>
      </li>)
  }
  return (
    <nav>
        <ol>
           {lis}
        </ol>
      </nav>
  )
}

function Article(props) {
  return (
    <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
  ) 
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        const title = event.target.title.value
        const body = event.target.body.value
        props.onCreate(title, body)
      }}>
        <p><input type="text" name="title" placeholder='title'/></p>
        <p><textarea name="body" placeholder='body'></textarea></p>
        <p><input type="submit" value="Create"/></p>
      </form>
    </article>
  )
}

function Updata(props){
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        const title = event.target.title.value
        const body = event.target.body.value
        props.onUpdate(title, body)
      }}>
        <p><input type="text" name="title" placeholder='title' value={title} onChange={event => {
          setTitle(event.target.value)
        }}/></p>
        <p><textarea name="body" placeholder='body' value={body} onChange={event => {
          setBody(event.target.value)
        }}></textarea></p>
        <p><input type="submit" value="Update"/></p>
      </form>
    </article>
  )
}

function App() {
  const [mode,setMode] = useState("WELCOME")
  const [id, setId] = useState(null)
  const [nextId, setNextId] = useState(4)
  function Header(props) {
    return (
      <header>
          <h1><a href="/" onClick={(event) => {
            event.preventDefault()
            props.onChangeMode()
          }}>{props.title}</a></h1>
        </header>
    )
  }
  const [topics,setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ])
  let content = null
  let contextControl = null
  if (mode==='WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"/>
  } else if (mode === 'READ') {
    let title, body = null
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title
        body = topics[i].body
      }
    content = <Article title={title} body={body}/>
    }
    contextControl =<> <a href="/update" onClick={event => {
      event.preventDefault()
      setMode('UPDATE')
    }}>Update</a>
    <input type="button" value="Delete" onClick={() => {
      const newTopics = []
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id !== id)
        newTopics.push(topics[i])
      }
      setTopics(newTopics)
      setMode('WELCOME')
    }}/>
    </>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title, body)=> {
      const newTopic = {id:nextId, title:title, body:body}
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics)
      setMode('READ')
      setId(nextId)
      setNextId(nextId + 1)
    }}/>
  } else if (mode === 'UPDATE') {
    const result = topics.filter(topic => topic.id === id)
    content = <Updata title={result[0].title} body={result[0].body} onUpdate={(title, body) => {
      const updatedTopic = {id:id ,title:title, body:body}
      const newTopics = [...topics]
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic
          break
        }
      setTopics(newTopics)
      setMode('READ')
      }
    }}/>
  }
  
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WOLCOME')
      }}/>
      <Nav topics = {topics} onChangeMode={(id) => {
        setMode("READ")
        setId(id)
      }}/>
      {content}
      <a href="/create" onClick={event => {
        event.preventDefault()
        setMode("CREATE")
      }}>Create</a>
      <br />
      {contextControl}
    </div>
  );
}

export default App;
