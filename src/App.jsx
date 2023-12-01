import { useState, useEffect } from 'react';
import MainPage from './components/MainPage';

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  const LoadingState = () => {
    return (
      <div class="wrapper flex h-screen justify-center items-center">
      <div className='flex flex-col items-center justify-center w-[380px] '>
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Tushar Anand
          </text>
        </svg>
        <svg className='-mt-[100px]'>
          <text className='text2' x="50%" y="50%" dy=".35em" text-anchor="middle">
            Full Stack Web Developer
          </text>
        </svg>
      </div>
    </div>
    
    );
  };

  return (
    <>
      {loading ? <LoadingState /> : <MainPage />}
    </>
  );
}

export default App;
