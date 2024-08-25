const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const res = await axios.post('http://localhost:5001/bfhi', parsedInput);
      setResponse(res.data);
      setFilteredData(null); // Reset the filtered data when new response comes
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Invalid JSON or error in processing!');
    }
  };
  
  app.post('/bfhi', (req, res) => {
    try {
      const { data } = req.body;
      const alphabets = data.filter(item => /^[A-Za-z]+$/.test(item));
      const numbers = data.filter(item => /^[0-9]+$/.test(item));
      const highestLowercaseAlphabet = alphabets.filter(item => /^[a-z]+$/.test(item)).sort().pop() || '';
  
      res.json({
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
      });
    } catch (error) {
      console.error('Backend Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
