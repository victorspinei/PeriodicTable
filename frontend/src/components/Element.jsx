import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from "./Modal.jsx";
import "./Element.css";
import get_element from './api';

function Element({ symbol }) {
  const [modal, setModal] = useState(false); 
  const [elementData, setElementData] = useState(null); 

  const handleClick = async () => {
    try {
      const data = await get_element(symbol);
      setElementData(data);
    } catch (error) {
      console.error('Error fetching element:', error);
    }
  };

  const format_key = (key) => {
    let formatted = key.replace(/_/g, " "); 
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1); 
    return formatted;
  }

  return (
    <>
      <div onClick={() => setModal(true)} className="element">
        <h1>{symbol}</h1>
        <button onClick={handleClick}>Fetch Element</button> 
      </div>
      {modal && (
        <Modal openModal={modal} closeModal={() => setModal(false)}>
          {elementData ? (
            <div className='element'>
              <section>
                <h2>{elementData.name}</h2>
                <div>
                  Number: {elementData.atomic_number} <br />
                  Mass: {elementData.atomic_weight} <br />
                  Electron configuration: {elementData.electron_configuration}  <br />
                  Block: {elementData.block} <br />
                  Category: {elementData.category} <br />
                  Melting point: {elementData.melting_point} <br />
                  Boiling point: {elementData.boiling_point} <br />
                  Density: {elementData.density} <br />
                </div>
              </section>
              <section>
                Discovery: {elementData.discovery} <br />
                Discovered in: {elementData.discovered_in} <br /> 
                Appearance: {elementData.appearance} <br />
                Abundance: {elementData.abundance} <br />
              </section>
              <section>
                <h3>Uses</h3>
                <ul>
                  {elementData.uses.map((v, i) => (
                    <li key={i}>{v}</li> 
                  ))}
                </ul>
              </section>
              <section>
                <h3>Notable properties</h3>
                <ul>
                  {Object.entries(elementData.notable_properties).map(([key, value], i) => (
                    <li key={i}>{format_key(key)}: {value}</li> 
                  ))}
                </ul>
              </section>
              <section>
                <h3>Biology facts</h3>
                <ul>
                  {Object.entries(elementData.biology_facts).map(([key, value], i) => (
                    <li key={i}>{format_key(key)}: {value}</li> 
                  ))}
                </ul>
              </section>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Modal>
      )}
    </>
  );
}

Element.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Element;
