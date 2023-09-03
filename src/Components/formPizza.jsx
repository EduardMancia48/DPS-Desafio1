import React, { useState } from 'react';
import './formPizza.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function FormPizza() {
  const [pizzaSize, setPizzaSize] = useState('Personal');
  const [extraIngredients, setExtraIngredients] = useState(0);
  const basePrices = {
    Personal: 7.0,
    Mediana: 10.0,
    Grande: 12.0,
  };

  // Función para calcular el costo total de la pizza
  const calculateTotalCost = () => {
    const baseCost = basePrices[pizzaSize];
    let additionalCost = 0;

    if (extraIngredients === 1) {
      additionalCost = 1.0;
    } else if (extraIngredients === 2) {
      additionalCost = 0.75 * 2;
    } else if (extraIngredients === 3) {
      additionalCost = 0.5 * 3;
    } else if (extraIngredients > 3) {
      additionalCost = 0.25 * extraIngredients;
    }

    return baseCost + additionalCost;
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Pizzería "La Italiana"</Navbar.Brand>
        </Container>
      </Navbar>
      <h1>Pizzería "La Italiana"</h1>
      <h2>Personaliza tu pizza</h2>
      <div>
        <label>Tamaño de la pizza:</label>
        <select value={pizzaSize} onChange={(e) => setPizzaSize(e.target.value)}>
          <option value="Personal">Personal</option>
          <option value="Mediana">Mediana</option>
          <option value="Grande">Grande</option>
        </select>
      </div>
      <div>
        <label>Ingredientes adicionales:</label>
        <input
          type="number"
          value={extraIngredients}
          onChange={(e) => setExtraIngredients(parseInt(e.target.value))}
        />
      </div>
      <div>
        <p>Costo total: ${calculateTotalCost()}</p>
      </div>
    </div>
  );
}

export default FormPizza;
