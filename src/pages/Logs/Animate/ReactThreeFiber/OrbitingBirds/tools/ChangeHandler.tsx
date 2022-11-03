import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <textarea
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
    </div>
  );
};

export default App;
