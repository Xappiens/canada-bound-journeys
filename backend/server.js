const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

// Endpoint para recibir datos del formulario
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, source, season, zones } = req.body;
  
  console.log('Datos recibidos:', { name, email, phone, message, source, season, zones });
  console.log('URL Frappe:', process.env.FRAPPE_URL);
  console.log('API Key:', process.env.FRAPPE_API_KEY);
  console.log('API Secret:', process.env.FRAPPE_API_SECRET);

  try {
    const frappeUrl = `${process.env.FRAPPE_URL}/api/resource/CRM Lead`;
    console.log('URL completa:', frappeUrl);

    // Enviar datos a Frappe
    const response = await axios.post(frappeUrl, {
      first_name: name,
      email: email,
      mobile_no: phone,
      custom_message: message,
      source: 'CanadaBC'
    }, {
      headers: {
        'Authorization': `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Respuesta de Frappe:', response.data);
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error('Error al enviar datos a Frappe:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      error: error.response?.data || error.message,
      details: error.response?.data
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});