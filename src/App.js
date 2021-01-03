import { useState, useEffect } from 'react'

//useEffect, we want some form of side effect every time something happens (resembles componentDidMount)
//provide states in the 2nd arg array to specifically run hook whenever those states change

export default function App() {
  //const [resourceType, setResourceType] = useState('posts')
  //const [items, setItems] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    //basically the cleanup, this return will call first when current useEffect is running to clean up whatever we did last time useEffect was called
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);
  /*useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType]);*/

  /*return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );*/
  return (
    <div>
      {windowWidth}
    </div>
  );
}
