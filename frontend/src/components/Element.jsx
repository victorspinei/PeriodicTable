import { useEffect, useState } from 'react';
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

  useEffect(() => {
    handleClick()
  }, [])

  const format_key = (key) => {
    let formatted = key.replace(/_/g, " "); 
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1); 
    return formatted;
  }

  return (
    <>
        {elementData && (
      <div onClick={() => setModal(true) } className='element'>
        <h2 className='element-symbol'>{symbol}</h2>
          <>
            <span className='element-number'>{elementData.atomic_number}</span>
            <span className='element-weight'>{elementData.atomic_weight}</span>
            <span className='element-name'>{elementData.name}</span>
          </>
      </div>
        )}
      {modal && (
        <Modal openModal={modal} closeModal={() => setModal(false)}>
          {elementData ? (
            <div className=''>
              <section>
                <h2>{elementData.name}</h2>
                <div>
                  {elementData.atomic_number && <p>Number: {elementData.atomic_number}</p>}
                  {elementData.atomic_weight && <p>Mass: {elementData.atomic_weight}</p>}
                  {elementData.electron_configuration && <p>Electron configuration: {elementData.electron_configuration}</p>}
                  {elementData.block && <p>Block: {elementData.block}</p>}
                  {elementData.category && <p>Category: {elementData.category}</p>}
                  {elementData.melting_point && <p>Melting point: {elementData.melting_point}</p>}
                  {elementData.boiling_point && <p>Boiling point: {elementData.boiling_point}</p>}
                  {elementData.density && <p>Density: {elementData.density}</p>}
                </div>
              </section>
              <section>
                {elementData.discovery && <p>Discovery: {elementData.discovery}</p>}
                {elementData.discovered_in && <p>Discovered in: {elementData.discovered_in}</p>}
                {elementData.appearance && <p>Appearance: {elementData.appearance}</p>}
                {elementData.abundance && <p>Abundance: {elementData.abundance}</p>}
              </section>
              <section>
                <h3>Uses</h3>
                <ul>
                  {elementData.uses && elementData.uses.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>Notable properties</h3>
                <ul>
                  {elementData.notable_properties && Object.entries(elementData.notable_properties).map(([key, value], i) => (
                    <li key={i}>{format_key(key)}: {value}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h3>Biology facts</h3>
                <ul>
                  {elementData.biology_facts && Object.entries(elementData.biology_facts).map(([key, value], i) => (
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
