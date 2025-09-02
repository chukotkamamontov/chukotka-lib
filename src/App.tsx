import { Button } from 'chukotka-ui';

function App() {

  const handleButtonClick = () => {
    console.log('[click]');
  }

  return (
    <>
      <div>
        <Button variant='secondary' onClick={handleButtonClick}>Click me</Button>
      </div>
    </>
  )
};

export default App;
