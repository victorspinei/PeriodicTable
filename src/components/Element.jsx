import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from "./Modal.jsx";
import "./Element.css";
import './ElementModal.css'
import elements from '../elementsV2.js';

function Element({ symbol, aditionalClass }) {
  const [modal, setModal] = useState(false); 
  const elementData = elements.find(item => item.symbol === symbol); 

  const format_key = (key) => {
    let formatted = key.replace(/_/g, " "); 
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1); 
    return formatted;
  }

  const formatLink = () => {
    return String(elementData.atomic_number).padStart(3, '0') + '_' + elementData.name.toLowerCase()
  }

  return (
    <>
      {elementData && (
        <div onClick={() => setModal(true) } className={`element ${aditionalClass}`}>
          <h2 className='element-symbol'>{symbol}</h2>
          <>
            <span className='element-number'>{elementData.atomic_number}</span>
            <span className='element-weight'>{elementData.atomic_weight}</span>
            <span className='element-name'>{elementData.nume_romana}</span>
          </>
        </div>
      )}
      {modal && (
        <Modal className='modal' openModal={modal} closeModal={() => setModal(false)}>
  {elementData ? (
    <div className='modal-div'>
      {/* mic helper pt. etichete RO */}
      {(() => {
        const roLabel = {
          atomic_number: 'Număr atomic',
          atomic_weight: 'Masă atomică',
          electron_configuration: 'Configurație electronică',
          block: 'Bloc',
          category: 'Categorie',
          melting_point: 'Punct de topire (K)',
          boiling_point: 'Punct de fierbere (K)',
          density: 'Densitate (g/L la STP)',
          group: 'Grup',
          period: 'Perioada',
          color: 'Culoare',
          discovery: 'Descoperire',
          discovered_in: 'Se găsește în',
          appearance: 'Aspect',
          abundance: 'Abundență',
          compounds_with_hydrogen: 'Compuși cu hidrogen',
          oxidation_states: 'Stări de oxidare',
          higher_oxidation_states: 'Stări de oxidare superioare',
          // notable_properties
          electronegativity: 'Electronegativitate (Pauling)',
          ionization_energy: 'Energie de ionizare (kJ/mol)',
          atomic_radius: 'Rază atomică (pm)',
          crystal_structure: 'Structură cristalină',
          magnetic_properties: 'Proprietăți magnetice',
          thermal_conductivity: 'Conductivitate termică',
          specific_heat_capacity: 'Căldură specifică',
          // biology_facts
          presence_in_human_body: 'Prezență în organism',
          role_in_human_body: 'Rol în organism',
          deficiency_effects: 'Deficit',
          excess_effects: 'Exces',
        };
        const t = (key) => roLabel[key] || format_key(key);

        return (
          <>
            <section>
              <h2 className={`modal-name ${aditionalClass}`}>{elementData.nume_romana}</h2>

              <div className='modal-basic-data'>
                {elementData.atomic_number && (
                  <p>{t('atomic_number')}: <span className={aditionalClass}>{elementData.atomic_number}</span></p>
                )}
                {elementData.atomic_weight && (
                  <p>{t('atomic_weight')}: <span className={aditionalClass}>{elementData.atomic_weight}</span></p>
                )}
                {elementData.electron_configuration && (
                  <p>{t('electron_configuration')}: <span className={aditionalClass}>{elementData.electron_configuration}</span></p>
                )}
                {elementData.group && (
                  <p>{t('group')}: <span className={aditionalClass}>{elementData.group}</span></p>
                )}
                {elementData.period && (
                  <p>{t('period')}: <span className={aditionalClass}>{elementData.period}</span></p>
                )}
                {elementData.block && (
                  <p>{t('block')}: <span className={aditionalClass}>{elementData.block}</span></p>
                )}
                {elementData.category && (
                  <p>{t('category')}: <span className={aditionalClass}>{elementData.category}</span></p>
                )}
                {elementData.color && (
                  <p>{t('color')}: <span className={aditionalClass}>{elementData.color}</span></p>
                )}
                {elementData.oxidation_states && (
                  <p>{t('oxidation_states')}: <span className={aditionalClass}>{elementData.oxidation_states.join(', ')}</span></p>
                )}
                {elementData.higher_oxidation_states && (
                  <p>{t('higher_oxidation_states')}: <span className={aditionalClass}>{elementData.higher_oxidation_states}</span></p>
                )}
                {elementData.compounds_with_hydrogen && (
                  <p>{t('compounds_with_hydrogen')}: <span className={aditionalClass}>{elementData.compounds_with_hydrogen.join(', ')}</span></p>
                )}
                {elementData.melting_point && (
                  <p>{t('melting_point')}: <span className={aditionalClass}>{elementData.melting_point}</span></p>
                )}
                {elementData.boiling_point && (
                  <p>{t('boiling_point')}: <span className={aditionalClass}>{elementData.boiling_point}</span></p>
                )}
                {elementData.density && (
                  <p>{t('density')}: <span className={aditionalClass}>{elementData.density}</span></p>
                )}
              </div>
            </section>

            <section className='model-extra'>
              <video autoPlay={true} loop>
                <source src={`https://www.gstatic.com/culturalinstitute/searchar/assets/element_${formatLink()}/desktop_dark.mp4`} />
              </video>
              <div>
                {elementData.discovery && (
                  <p>{t('discovery')}: <span className={aditionalClass}>{elementData.discovery}</span></p>
                )}
                {elementData.discovered_in && (
                  <p>{t('discovered_in')}: <span className={aditionalClass}>{elementData.discovered_in}</span></p>
                )}
                {elementData.appearance && (
                  <p>{t('appearance')}: <span className={aditionalClass}>{elementData.appearance}</span></p>
                )}
                {elementData.abundance && (
                  <p>{t('abundance')}: <span className={aditionalClass}>{elementData.abundance}</span></p>
                )}
              </div>
            </section>

            <section className='modal-list'>
              <h3>Utilizări <i>⚙️</i></h3>
              <ol>
                {elementData.uses && elementData.uses.map((v, i) => (
                  <li className={aditionalClass} key={i}>{v}</li>
                ))}
              </ol>
            </section>

            <section className='modal-list'>
              <h3>Proprietăți remarcabile <i>🔍</i></h3>
              <ul>
                {elementData.notable_properties && Object.entries(elementData.notable_properties).map(([key, value], i) => (
                  <li key={i}>{t(key)}: <span className={aditionalClass}>{value}</span></li>
                ))}
              </ul>
            </section>

            <section className='modal-list'>
              <h3>Biologie <i>🧬</i></h3>
              <ul>
                {elementData.biology_facts && Object.entries(elementData.biology_facts).map(([key, value], i) => (
                  <li key={i}>{t(key)}: <span className={aditionalClass}>{value}</span></li>
                ))}
              </ul>
            </section>

            {/* NOI: Compuși organici */}
            {(elementData.organic_compounds) && (
              <section className='modal-list'>
                <h3>Compuși organici <i>🧪</i></h3>
                {elementData.organic_compounds.overview && (
                  <p className={aditionalClass}>{elementData.organic_compounds.overview}</p>
                )}
                {elementData.organic_compounds.classes_with_examples && (
                  <ul>
                    {elementData.organic_compounds.classes_with_examples.map((item, i) => (
                      <li className={aditionalClass} key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {elementData.organic_compounds.role_in_organic_reactions && (
                  <p className={aditionalClass}><strong>Rol în reacții organice:</strong> {elementData.organic_compounds.role_in_organic_reactions}</p>
                )}
              </section>
            )}

            {/* NOI: Reacții de obținere */}
            {(elementData.preparation_reactions && elementData.preparation_reactions.length > 0) && (
              <section className='modal-list'>
                <h3>Reacții de obținere <i>⚗️</i></h3>
                <ol>
                  {elementData.preparation_reactions.map((r, i) => (
                    <li key={i}>
                      <span className={aditionalClass}><code>{r.equation}</code></span>
                      {r.notes && <div className={`note ${aditionalClass}`}>{r.notes}</div>}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* NOI: Proprietăți chimice */}
            {(elementData.chemical_properties && elementData.chemical_properties.length > 0) && (
              <section className='modal-list'>
                <h3>Proprietăți chimice <i>🧯</i></h3>
                <ul>
                  {elementData.chemical_properties.map((prop, i) => (
                    <li className={aditionalClass} key={i}>{prop}</li>
                  ))}
                </ul>
              </section>
            )}
          </>
        );
      })()}
    </div>
  ) : (
    <p>Se încarcă...</p>
  )}
</Modal>

      )}
    </>
  );
}

Element.propTypes = {
  symbol: PropTypes.string.isRequired,
  aditionalClass: PropTypes.string,
};

export default Element;
