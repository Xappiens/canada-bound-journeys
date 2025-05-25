const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

// Endpoint para recibir datos del formulario
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, source } = req.body;
  
  console.log('Datos recibidos:', { name, email, phone, message, source });

  try {
    // Enviar datos a Frappe
    const response = await axios.post('https://frappe.xappiens.com/api/resource/CRM Lead', {
      name: name,
      email: email,
      phone: phone,
      message: message,
      source: source
    }, {
      headers: {
        'Authorization': `token ${process.env.FRAPPE_API_KEY}`,
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