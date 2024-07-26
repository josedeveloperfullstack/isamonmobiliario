import  React from 'react' /*{ useState }*/;
import Navbar from './components/Navbar/Navbar';
/*import Navbar from './components/Navbar'*/
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'*/ 
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';




const App = () => {
  return <div> 
    <Navbar/>
    <Hero/>
    <Products />
    
    
    
    
    
  </div>;
};

export default App;

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='m-2 flex justify-star p-2 w-44 '>
        <a href="" target="_blank">
          <img src="https://scontent.fclo3-2.fna.fbcdn.net/v/t39.30808-6/275370101_524025752397432_605371491316457989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=nGwiTC7YlIUQ7kNvgFthk7x&_nc_ht=scontent.fclo3-2.fna&oh=00_AYC6CNgK3YZOAQwsjFNBv0lU24K1quZ2GxCIH_hKraEPsQ&oe=6691BBAE" className="logo" alt="Isamon logo" />
        </a>
      </div>
      
      <article>
        <header>
          <img alt="logo isamon" src="https://scontent.fclo3-2.fna.fbcdn.net/v/t39.30808-6/275370101_524025752397432_605371491316457989_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=nGwiTC7YlIUQ7kNvgFthk7x&_nc_ht=scontent.fclo3-2.fna&oh=00_AYC6CNgK3YZOAQwsjFNBv0lU24K1quZ2GxCIH_hKraEPsQ&oe=6691BBAE" />
          <div>
            <sstrong>Isamon</sstrong>
            <span>@ismon moviliaio</span>
          </div>
        </header>
        <aside>
          <button>
            seguir
          </button>
        </aside>
      </article>
    </>
  )
}

export default App*/
