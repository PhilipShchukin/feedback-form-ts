import express from 'express';
import cors from 'cors';
import { messageValidation } from './services/validations';
import { message } from './services/message.controller';


const app = express();
app.use(cors());

app.use(express.json());


app.post('/', messageValidation,  message);


app.listen( 4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});