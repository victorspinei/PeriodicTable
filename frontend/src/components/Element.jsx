import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from "./Modal.jsx";
import "./Element.css"
import axios from 'axios';


function Element({ symbol }) {
  const [modal, setModal] = useState(false);

  const formatAtomicMass = () => {
    return String(atomic_weight.toFixed(3));
  }

  const [element, setElement] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/elements?symbol=${symbol}`)
      .then(response => {
        if (response.data[0] === null) {
          throw new Error("Element not found")
        }
        setElement(response.data[0]);
      })
      .catch(() => {
        // console.error(error);
        setElement({
          symbol: "H",
          name: "Hydrogen",
          atomic_number: 1,
          atomic_weight: 1.008,
          electron_configuration: "1s¹",
          group: 1,
          period: 1,
          block: "s",
          category: "Nonmetal",
          color: "Colorless",
          oxidation_states: [-1],
          higher_oxidation_states: null,
          compounds_with_hydrogen: ["H2", "H2O"],
          melting_point: 14.01,
          boiling_point: 20.28,
          density: 0.0899
        });
      })
      .finally(() => {
        setLoading(false); // Set loading to false whether the request succeeded or failed
      });

  }, [symbol]);

  const atomic_weight = element['atomic_weight'];
  const atomic_number = element['atomic_number'];
  const name = element['name'];
  const element_symbol = element['symbol'];

  const format_number = () => {
    return String(atomic_number).padStart(3, "0");
  }
  const format_name = () => {
    return name.toLowerCase()
  }

  return (
    <>
      { loading ? 
        (<p>Loading ...</p>) : (
          <> 
            <div onClick={() => setModal(true)} className="element">
              <span className="element-number">{ atomic_number }</span>
              <p className="element-symbol">{ element_symbol }</p>
              <p className="element-weight">{ formatAtomicMass() }</p>
              <p className="element-name">{ name }</p>
            </div>
            <Modal openModal={modal} closeModal={() => setModal(false)}>
              <section className='modal-header'>
                <span className='modal-symbol'>{element_symbol}</span>
                <h2 className='modal-title'>{name}</h2>
                <p>{ "TODO:" }</p>
              </section>
              <section className='element-video'>
                <video controls autoPlay={true} >
                  <source src={`//www.gstatic.com/culturalinstitute/searchar/assets/element_${format_number()}_${format_name()}/desktop_dark.mp4`}/>
                </video>
              </section>
              <section className='modal-chemistry'>
                <p>Mass: { formatAtomicMass() }</p>
                <p>Electron C.: { element['electron_configuration'] }</p>
                <p>Group: { element['group'] }</p>
                <p>Period: { element['period'] }</p>
                <p>Block: { element['block'] }</p>
                <p>Category: { element['category'] }</p>
                <p>Color: { element['color'] }</p>
                <p>Melting point: { element['melting_point'] }</p>
                <p>boiling point: { element['boiling_point'] }</p>
                <p>Density: { element['density'] }</p>
                <p>Discovery date: { "TODO:" }</p>
                <p>Discovered by: { "TODO:" }</p>
              </section>
            </Modal>
          </>
        )}
    </>
  )
}

Element.propTypes = {
  symbol: PropTypes.string.isRequired,
}

export default Element;
