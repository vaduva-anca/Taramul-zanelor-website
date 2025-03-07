const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Configurare transporter Nodemailer (Gmail exemplu)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint pentru primirea datelor din formular și trimiterea email-urilor
app.post('/send-email', async (req, res) => {
  const { copil, mama, tata, program, acorduri } = req.body;
  console.log(copil);
  console.log(tata);
  console.log(program);
  // Conținut email
  const mailOptionsMama = {
    from: process.env.EMAIL_USER,
    to: mama.email,
    subject: 'Confirmare înscriere copil',
    text: `
      Bună ziua ${mama.prenume},

      Vă confirmăm că am primit cererea dvs. de înscriere pentru copilul ${copil.prenume} ${copil.nume}.

      Program ales: ${program}

      Mulțumim,
      Grădinița XYZ
    `,
  };

  const mailOptionsTata = {
    from: process.env.EMAIL_USER,
    to: tata.email,
    subject: 'Confirmare înscriere copil',
    text: `
      Bună ziua ${tata.prenume},

      Vă confirmăm că am primit cererea dvs. de înscriere pentru copilul ${copil.prenume} ${copil.nume}.

      Program ales: ${program}

      Mulțumim,
      Grădinița XYZ
    `,
  };

  try {
    await transporter.sendMail(mailOptionsMama);
    await transporter.sendMail(mailOptionsTata);
    
    res.status(200).json({ message: 'Email-uri trimise cu succes!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'A apărut o eroare la trimiterea email-urilor.' });
  }
});

app.listen(3000, () => console.log('Server pornit pe portul 3000'));
