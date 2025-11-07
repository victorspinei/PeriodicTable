const elements = [
  {
  "symbol": "H",
  "name": "Hydrogen",
  "nume_romana": "Hidrogen",
  "atomic_number": 1,
  "atomic_weight": 1.008,
  "electron_configuration": "1s¹",
  "group": 1,
  "period": 1,
  "block": "s",
  "category": "Nemetal",
  "color": "Incolor",
  "oxidation_states": [-1, 0, 1],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["H2", "H2O"],
  "melting_point": 14.01,
  "boiling_point": 20.28,
  "density": 0.0899,
  "discovery": "Descoperit de Henry Cavendish în 1766 (denumit ulterior de Antoine Lavoisier).",
  "appearance": "Gazul de hidrogen este incolor, inodor, insipid, netoxic, nemetalic și foarte inflamabil; în stare normală este diatomic (H₂).",
  "discovered_in": "Se găsește în apă (H₂O) și în numeroși compuși anorganici și organici din natură.",
  "abundance": "Cel mai abundent element din univers (~75% din masa elementară). Pe Pământ se găsește în principal legat chimic (în apă și compuși organici).",
  "uses": [
    "Combustibil în rachete și procese de tăiere/sudură.",
    "Producerea amoniacului (NH₃) pentru îngrășăminte (procesul Haber-Bosch).",
    "Pile de combustie cu hidrogen pentru energie curată.",
    "Rafinarea petrolului (hidrocracare, hidrodesulfurare)."
  ],
  "notable_properties": {
    "electronegativity": 2.20,
    "ionization_energy": 1312.0,
    "atomic_radius": 53,
    "crystal_structure": "Hexagonal compact (hcp) la temperaturi foarte joase/înalte presiuni",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": "0,1805 W/(m·K) (gaz, 300 K)",
    "specific_heat_capacity": "14,304 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Este component al apei (H₂O) și al multitudinii de molecule organice (glucide, lipide, proteine, acizi nucleici).",
    "role_in_human_body": "Participă indirect la menținerea echilibrului acido-bazic și la numeroase reacții biochimice prin legături O–H, N–H etc.; hidrogenarea/dehidrogenarea stă la baza metabolismului energetic.",
    "deficiency_effects": "Nu există un „deficit” de hidrogen elementar; problemele apar prin deshidratare sau tulburări ale echilibrului hidro-electrolitic.",
    "excess_effects": "Excesul de H₂ în organism este rar; în condiții patologice (de ex., embolie gazoasă) poate produce afectări respiratorii și cardiovasculare."
  },
  "organic_compounds": {
    "overview": "În chimia organică, hidrogenul este prezent în aproape toți compușii: hidrocarburi și derivații lor. Tipic, legături C–H definesc scheletul organic.",
    "classes_with_examples": [
      "Hidrocarburi saturate (alcani): CH₄ (metan), C₂H₆ (etan).",
      "Hidrocarburi nesaturate: C₂H₄ (etenă), C₂H₂ (acetilenă); hidrogenarea dublelor/triplelor legături este o reacție cheie.",
      "Arene: C₆H₆ (benzen).",
      "Alcooli: C₂H₅OH (etanol).",
      "Acizi carboxilici: CH₃COOH (acid acetic).",
      "Aldehide/cetone: HCHO (metanal), CH₃COCH₃ (propanonă).",
      "Amini: CH₃NH₂ (metilamină)."
    ],
    "role_in_organic_reactions": "Hidrogenul molecular (H₂) este utilizat la hidrogenarea catalitică (de ex., alchenelor) și la reducerea compușilor organici (nitro → amino, carbonil → alcool)."
  },
  "preparation_reactions": [
    {
      "equation": "CH₄ + H₂O ⇌ CO + 3 H₂ (800–900 °C, Ni) – reformare cu vapori",
      "notes": "Cea mai răspândită metodă industrială; urmată de schimbul gazos cu apă pentru creșterea randamentului în H₂."
    },
    {
      "equation": "CO + H₂O ⇌ CO₂ + H₂ (schimb gazos cu apă, Fe/Cr sau Cu/Zn)",
      "notes": "Transformă CO în CO₂ și produce H₂ suplimentar."
    },
    {
      "equation": "2 H₂O(l) → 2 H₂(g) + O₂(g) (electroliză)",
      "notes": "Metodă „verde” când energia electrică este regenerabilă."
    },
    {
      "equation": "Zn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g)",
      "notes": "Obținere de laborator din acizi și metale reactive."
    },
    {
      "equation": "2 Na(s) + 2 H₂O(l) → 2 NaOH(aq) + H₂(g)",
      "notes": "Metale alcaline reacționează violent cu apa, eliberând H₂."
    }
  ],
  "chemical_properties": [
    "Foarte inflamabil: 2 H₂(g) + O₂(g) → 2 H₂O(g); amestecurile H₂/air sunt explozive (limite largi de inflamabilitate).",
    "Reacționează cu halogenii: H₂ + Cl₂ → 2 HCl (fotochimic/termic); cu F₂ reacția este violentă chiar la rece.",
    "Formează hidruri metalice: 2 Na + H₂ → 2 NaH; cu metale de tranziție poate forma hidruri interstițiale (stocare H₂).",
    "Agent reducător: CuO + H₂ → Cu + H₂O; reduce numeroși oxizi/halogenuri metalice la temperatură ridicată.",
    "Hidrogenare catalitică (organică): RCH=CH₂ + H₂ → RCH₂–CH₃ (catalizatori Ni, Pd, Pt).",
    "La temperaturi înalte disociază parțial în atomi H·; atomul de H este foarte reactiv (radicalar).",
    "Reactivitate acid/bazică: în acizi tari, protonul (H⁺) este specia activă; hidrurile metalice furnizează H⁻ (hidrid)."
  ]
},
{
  "symbol": "He",
  "name": "Helium",
  "nume_romana": "Heliu",
  "atomic_number": 2,
  "atomic_weight": 4.002602,
  "electron_configuration": "1s²",
  "group": 18,
  "period": 1,
  "block": "s",
  "category": "Gaz nobil",
  "color": "Incolor",
  "oxidation_states": [0],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["HeH⁺"],
  "melting_point": null,
  "boiling_point": 4.222,
  "density": 0.1786,
  "discovery": "Observat în spectrul solar de Pierre Janssen și Norman Lockyer (1868); izolat pe Pământ de William Ramsay (1895).",
  "appearance": "Gaz inert, incolor, inodor, insipid; extrem de ușor. La 1 atm nu se solidifică (solidifică doar la presiuni foarte înalte).",
  "discovered_in": "Inițial identificat în cromosfera solară; pe Pământ se găsește în gazele naturale și ca produs al dezintegrarii alfa a elementelor grele.",
  "abundance": "Al doilea cel mai abundent element din univers. Pe Pământ este relativ rar, acumulat în zăcăminte de gaze naturale.",
  "uses": [
    "Mediu criogenic (He lichid) pentru răcirea magneților supraconductori (MRI, cercetare).",
    "Atmosferă inertă în sudură și în procese electronice (semiconductori, fibre optice).",
    "Detecția scurgerilor (heliu ca gaz trasor).",
    "Umflarea baloanelor și dirijabilelor (neinflamabil).",
    "Gaz purtător în cromatografie (GC) și în mase spectrometrie.",
    "Miscele respiratorii pentru scufundări adânci (heliox, trimix) pentru a reduce narcoza cu azot."
  ],
  "notable_properties": {
    "electronegativity": "nedefinită",
    "ionization_energy": 2372.3,
    "atomic_radius": 31,
    "crystal_structure": "Hexagonal compact (hcp) la presiune înaltă (solid)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "≈0.151 W/(m·K) (gaz, 300 K)",
    "specific_heat_capacity": "20.786 J/(mol·K) (Cp, gaz)",
    "lambda_point": "≈2.17 K (He-4 devine superfluid sub această temperatură)"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic; poate fi prezent tranzitoriu în plămâni după inhalare.",
    "role_in_human_body": "Inert din punct de vedere chimic; nu participă la reacții metabolice.",
    "deficiency_effects": "Nu există concept de „deficit” de heliu.",
    "excess_effects": "Inhalarea în exces deplasează oxigenul și poate provoca hipoxie/asfixie; schimbă timbrul vocii temporar."
  },
  "organic_compounds": {
    "overview": "Heliul nu formează compuși organici stabili; este utilizat ca mediu inert în reacții organice sensibile la oxidare/umiditate.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Gaz purtător în cromatografie (GC); atmosferă inertă pentru sinteze (glovebox, Schlenk), prevenind reacțiile parazite."
  },
  "preparation_reactions": [
    {
      "equation": "Separare criogenică din gaze naturale (distilare fracționată la temperaturi joase)",
      "notes": "Cea mai importantă sursă industrială; gazele naturale bogate în He (0,1–7%)."
    },
    {
      "equation": "Produs al dezintegrarii alfa: ²³⁸U → ²³⁴Th + ⁴He↑ (și procese similare pentru ²³²Th, ²³⁵U)",
      "notes": "Heliul migrează și se acumulează în rezervoare geologice."
    }
  ],
  "chemical_properties": [
    "Gaz extrem de inert (configurație electronică completă 1s²); nu formează ușor compuși.",
    "Nu arde și nu susține arderea; neinflamabil.",
    "Solubilitate foarte mică în apă; difuzează rapid prin materiale poroase.",
    "Formează ioni sau excimeri numai în condiții extreme (HeH⁺, excimeri He* în plasmă).",
    "Punct de fierbere foarte scăzut; He-4 prezintă superfluiditate sub 2,17 K (lambda-point).",
    "La presiuni ridicate poate cristaliza (structură hcp)."
  ]
},
{
  "symbol": "Li",
  "name": "Lithium",
  "nume_romana": "Litiu",
  "atomic_number": 3,
  "atomic_weight": 6.94,
  "electron_configuration": "1s² 2s¹",
  "group": 1,
  "period": 2,
  "block": "s",
  "category": "Metal alcalin",
  "color": "Argintiu",
  "oxidation_states": [1],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["LiH"],
  "melting_point": 453.65,
  "boiling_point": 1560,
  "density": 0.534,
  "discovery": "Descoperit de Johan Arfwedson în 1817, numele derivând din gr. „lithos” (piatră).",
  "appearance": "Metal moale, de culoare argintie, ce se oxidează rapid în contact cu aerul și reacționează energic cu apa.",
  "discovered_in": "Minerale precum spodumenul și petalitul; nu se găsește în formă liberă în natură.",
  "abundance": "Relativ rar în scoarța terestră, dar important în tehnologiile moderne (baterii Li-ion).",
  "uses": [
    "Baterii litiu-ion pentru dispozitive electronice și automobile electrice.",
    "Medicament pentru tratarea tulburării bipolare (săruri de litiu).",
    "Aliaje ușoare pentru aviație și tehnologie aerospațială.",
    "Agent de purificare în metalurgie (eliminarea oxigenului și azotului).",
    "Producția de sticlă și ceramică rezistentă la șoc termic."
  ],
  "notable_properties": {
    "electronegativity": 0.98,
    "ionization_energy": 520.2,
    "atomic_radius": 152,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": "85 W/(m·K)",
    "specific_heat_capacity": "24.860 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în cantități foarte mici în organism.",
    "role_in_human_body": "În doze terapeutice reglează transmiterea neuronală și stabilizarea dispoziției.",
    "deficiency_effects": "Nu există un deficit clar definit în organism.",
    "excess_effects": "Poate deveni toxic la concentrații mari (tremor, confuzie, afectare renală)."
  },
  "organic_compounds": {
    "overview": "Compușii organolitiului sunt foarte importanți în sinteza organică datorită caracterului lor puternic bazic și nucleofil.",
    "classes_with_examples": [
      "Reactivi organolitici: RLi (ex.: n-BuLi – butil-litiu).",
      "Intermediari în reacții de metalare și litiere.",
      "Utilizați în sinteza compușilor aromatici și farmaceutici."
    ],
    "role_in_organic_reactions": "RLi se utilizează pentru deprotonare, litiere și ca reactiv nucleofil în reacții de substituție și adăugare."
  },
  "preparation_reactions": [
    {
      "equation": "2 LiCl(l) → 2 Li(s) + Cl₂(g) (electroliză a LiCl topit)",
      "notes": "Metoda industrială principală de obținere."
    },
    {
      "equation": "Li₂CO₃ + 2 HCl → 2 LiCl + CO₂ + H₂O",
      "notes": "Folosit pentru purificări chimice."
    }
  ],
  "chemical_properties": [
    "Reacționează cu apa: 2 Li + 2 H₂O → 2 LiOH + H₂ ↑ (mai blând decât Na și K).",
    "Reacționează cu oxigenul: 4 Li + O₂ → 2 Li₂O.",
    "Formează hidrură stabilă: 2 Li + H₂ → 2 LiH.",
    "Reacționează cu halogenii: 2 Li + Cl₂ → 2 LiCl.",
    "Foarte reactiv, trebuie păstrat în ulei mineral pentru a evita oxidarea."
  ]
},
{
  "symbol": "Be",
  "name": "Beryllium",
  "nume_romana": "Beriliu",
  "atomic_number": 4,
  "atomic_weight": 9.0121831,
  "electron_configuration": "1s² 2s²",
  "group": 2,
  "period": 2,
  "block": "s",
  "category": "Metal alcalino-pământos",
  "color": "Gri-argintiu",
  "oxidation_states": [2],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["BeH₂"],
  "melting_point": 1560,
  "boiling_point": 2742,
  "density": 1.85,
  "discovery": "Identificat în 1798 de Louis Nicolas Vauquelin în beril și smarald; izolat în formă metalică de Friedrich Wöhler și Antoine Bussy (1828).",
  "appearance": "Metal ușor, rigid, de culoare gri-argintie, cu luciu metalic; toxic în formă de pulbere.",
  "discovered_in": "Minerale precum beril (Be₃Al₂Si₆O₁₈) și smarald; nu se găsește liber în natură.",
  "abundance": "Relativ rar în scoarța terestră, dar important în aplicații tehnologice datorită rigidității și rezistenței sale.",
  "uses": [
    "Componente pentru avioane și tehnologii aerospațiale (raport rezistență/greutate foarte ridicat).",
    "Fereastră pentru tuburi cu raze X datorită transparenței sale ridicate pentru radiații.",
    "Componente în acceleratoare de particule și reactoare nucleare (secțiune mică de absorbție pentru neutroni).",
    "Aliaje cu cupru (BrCu) folosite pentru arcuri, contacte electrice și instrumente ne-scânteietoare.",
    "Oglinzi ușoare pentru telescoape și sateliți (ex: telescopul James Webb folosește beriliu placat cu aur)."
  ],
  "notable_properties": {
    "electronegativity": 1.57,
    "ionization_energy": 899.5,
    "atomic_radius": 112,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "200 W/(m·K)",
    "specific_heat_capacity": "16.443 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic și organismul nu îl utilizează.",
    "role_in_human_body": "Niciun rol fiziologic; nu este un element esențial.",
    "deficiency_effects": "Nu există deficit deoarece nu este necesar organismului.",
    "excess_effects": "Extrem de toxic; inhalarea prafului produce berilioză, o boală pulmonară gravă și cronică."
  },
  "organic_compounds": {
    "overview": "Compușii organici ai beriliului sunt rari și manipulați doar în laboratoare specializate din cauza toxicității ridicate.",
    "classes_with_examples": [
      "Organoberiliu: (C₆H₅)₂Be – compuși aromatici organometalici.",
      "BeH₂ – hidrura de beriliu formează structuri polimerice."
    ],
    "role_in_organic_reactions": "Utilizare limitată; folosiți doar ca reactivi în cercetarea fundamentală, nu în sinteze industriale."
  },
  "preparation_reactions": [
    {
      "equation": "BeF₂ + Mg → Be + MgF₂ (reducere termică)",
      "notes": "Metoda industrială principală."
    },
    {
      "equation": "BeO + C + Cl₂ → BeCl₂ + CO",
      "notes": "Formarea BeCl₂ ca intermediar tehnologic."
    }
  ],
  "chemical_properties": [
    "Reacționează lent cu acizii datorită stratului pasivant de BeO: Be + 2 HCl → BeCl₂ + H₂.",
    "Reacționează cu apă fierbinte doar ușor datorită oxidului protector.",
    "Formează oxid stabil: 2 Be + O₂ → 2 BeO.",
    "Formează hidrură: Be + H₂ → BeH₂ (la temperaturi ridicate).",
    "Sărurile de beriliu au caracter acid pronunțat (cationul Be²⁺ are putere de polarizare mare).",
    "Toxic sub formă de pulbere sau aerosoli — necesită manipulare cu ventilație controlată."
  ]
},
{
  "symbol": "B",
  "name": "Boron",
  "nume_romana": "Bor",
  "atomic_number": 5,
  "atomic_weight": 10.81,
  "electron_configuration": "1s² 2s² 2p¹",
  "group": 13,
  "period": 2,
  "block": "p",
  "category": "Metaloid",
  "color": "Negru-gri",
  "oxidation_states": [3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["BH₃", "B₂H₆"],
  "melting_point": 2349,
  "boiling_point": 4200,
  "density": 2.34,
  "discovery": "Izolat în 1808 de Joseph-Louis Gay-Lussac și Louis Jacques Thénard.",
  "appearance": "Solid amorf sau cristalin, negru, dur și fragil; nu este un conductor bun.",
  "discovered_in": "Se găsește în minerale precum borax (Na₂B₄O₇·10H₂O), kernit și colemanit.",
  "abundance": "Rar în natură ca element liber; se găsește în săruri minerale din zonele aride.",
  "uses": [
    "Fibre de bor în industria aerospațială (materiale ușoare și foarte rezistente).",
    "Acid boric și borax în medicină, produse de curățare și emailuri ceramice.",
    "Component în sticlă borosilicată rezistentă la temperatură (ex: Pyrex).",
    "B₂O₃ folosit în producția de panouri solare și izolatori termici.",
    "Carbură de bor (B₄C) utilizată în veste antiglonț și blindaje ceramice."
  ],
  "notable_properties": {
    "electronegativity": 2.04,
    "ionization_energy": 800.6,
    "atomic_radius": 85,
    "crystal_structure": "Rombică (alotropi complexi cu icosaedre B₁₂)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "27 W/(m·K)",
    "specific_heat_capacity": "11.087 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în cantități mici în oase și țesuturi.",
    "role_in_human_body": "Poate contribui la metabolismul mineral al oaselor și la funcțiile neuronale.",
    "deficiency_effects": "Poate contribui la funcționare deficitară a sistemului osos.",
    "excess_effects": "Cantitățile mari sunt toxice — greață, iritații, convulsii."
  },
  "organic_compounds": {
    "overview": "Borul formează o gamă largă de compuși organici importanți în sinteză.",
    "classes_with_examples": [
      "Borani: B₂H₆ (diboran).",
      "Esters borici: B(OR)₃.",
      "Reactivi Suzuki: RB(OH)₂ sau RB(OR)₂ (esențiali în reacția Suzuki-Miyaura)."
    ],
    "role_in_organic_reactions": "Reactivii boronici sunt folosiți în reacții de cuplare (Suzuki) pentru sinteza compușilor aromatici și farmaceutici."
  },
  "preparation_reactions": [
    {
      "equation": "B₂O₃ + 3 Mg → 2 B + 3 MgO",
      "notes": "Reducere cu magneziu — metodă frecventă de laborator."
    },
    {
      "equation": "Na₂B₄O₇ + 7 C → 2 Na + 4 B + 7 CO",
      "notes": "Reducere la temperatură înaltă."
    }
  ],
  "chemical_properties": [
    "Reacționează lent cu apa la temperaturi ridicate.",
    "Arde în oxigen formând trioxid de bor: 4 B + 3 O₂ → 2 B₂O₃.",
    "Cu halogeni: 2 B + 3 Cl₂ → 2 BCl₃.",
    "BCl₃ reacționează cu apa: BCl₃ + 3 H₂O → B(OH)₃ + 3 HCl.",
    "Boranii (ex. B₂H₆) sunt extrem de reactivi și inflamabili."
  ]
},
{
  "symbol": "C",
  "name": "Carbon",
  "nume_romana": "Carbon",
  "atomic_number": 6,
  "atomic_weight": 12.011,
  "electron_configuration": "1s² 2s² 2p²",
  "group": 14,
  "period": 2,
  "block": "p",
  "category": "Nemetal",
  "color": "Negru (grafit) / Transparent (diamant)",
  "oxidation_states": [-4, -3, -2, -1, 0, +1, +2, +3, +4],
  "higher_oxidation_states": "+4",
  "compounds_with_hydrogen": ["CH₄", "C₂H₆", "C₂H₄", "C₂H₂", "C₆H₆"],
  "melting_point": "Sublimează la ~3900 K",
  "boiling_point": 4300,
  "density": "Grafit: 2.267 g/cm³ | Diamant: 3.51 g/cm³",
  "discovery": "Cunoscut încă din antichitate în forme precum cărbunele și diamantul.",
  "appearance": "Poate apărea ca grafit (moale, conductor) sau diamant (transparent, extrem de dur). Există și forme moderne: grafen, nanotuburi, fulereni.",
  "discovered_in": "Se găsește în toate organismele vii, în combustibili fosili, în CO₂ și în meteoriți.",
  "abundance": "Unul dintre elementele fundamentale ale vieții; ~18% din masa organismului uman este carbon.",
  "uses": [
    "Materiale pentru electrozi și baterii (grafit).",
    "Bijuterii și tăieturi industriale (diamant).",
    "Componente în nanotuburi și grafen pentru electronica avansată.",
    "Oțel și aliaje prin carburare.",
    "Combustibili fosili (cărbune, petrol, gaz natural) ca sursă de energie."
  ],
  "notable_properties": {
    "electronegativity": 2.55,
    "ionization_energy": 1086.5,
    "atomic_radius": 70,
    "crystal_structure": "Grafit: Hexagonal stratificat | Diamant: Cubic centrat pe fețe",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "Diamantul este printre cei mai buni conductori termici cunoscuți.",
    "specific_heat_capacity": "8.517 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Aproximativ 18% din masa corpului este carbon.",
    "role_in_human_body": "Este baza structurii tuturor moleculelor organice (proteine, lipide, glucide, ADN).",
    "deficiency_effects": "Nu există deficit — carbonul este parte fundamentală a structurii organismului.",
    "excess_effects": "Excesul de CO₂ în sânge produce acidoză și insuficiență respiratorie."
  },
  "organic_compounds": {
    "overview": "Chimia organică este chimia compușilor carbonului.",
    "classes_with_examples": [
      "Hidrocarburi saturate: alcani (ex: CH₄, C₂H₆).",
      "Hidrocarburi nesaturate: alchene și alchine (ex: C₂H₄, C₂H₂).",
      "Arene: compuși aromatici (ex: C₆H₆).",
      "Alcooli: ex. C₂H₅OH.",
      "Aldehide și cetone: ex. CH₃CHO, CH₃COCH₃.",
      "Acizi carboxilici: ex. CH₃COOH.",
      "Amine: ex. CH₃NH₂.",
      "Polimeri: polietilenă, polipropilenă, polistiren, PVC."
    ],
    "role_in_organic_reactions": "Carbonul formează lanțuri și inele stabile datorită capacității sale de a realiza 4 legături covalente."
  },
  "preparation_reactions": [
    {
      "equation": "C(s) + O₂(g) → CO₂(g)",
      "notes": "Oxidare completă cu producere de energie."
    },
    {
      "equation": "2 C(s) + O₂(g) → 2 CO(g)",
      "notes": "Oxidare incompletă la temperatură înaltă (gaz de sinteză)."
    },
    {
      "equation": "CaCO₃(s) → CaO(s) + CO₂(g) (încălzire)",
      "notes": "Dezalcalinizarea calcarului — sursă industrială de CO₂."
    }
  ],
  "chemical_properties": [
    "Carbonul poate forma compuși cu aproape toate elementele.",
    "Arde în aer producând CO₂ (ardere completă) sau CO (ardere incompletă).",
    "Grafitul este conductor electric datorită electronilor delocalizați.",
    "Diamantul este izolator și este cel mai dur material natural cunoscut.",
    "Grafenul are rezistență mecanică uriașă și conductivitate ridicată.",
    "Carbonul absoarbe radiații în infraroșu — rol în efectul de seră."
  ]
},
{
  "symbol": "N",
  "name": "Nitrogen",
  "nume_romana": "Azot",
  "atomic_number": 7,
  "atomic_weight": 14.007,
  "electron_configuration": "1s² 2s² 2p³",
  "group": 15,
  "period": 2,
  "block": "p",
  "category": "Nemetal",
  "color": "Incolor",
  "oxidation_states": [-3, -2, -1, 0, +1, +2, +3, +4, +5],
  "higher_oxidation_states": "+5",
  "compounds_with_hydrogen": ["NH₃", "N₂H₄"],
  "melting_point": 63.15,
  "boiling_point": 77.36,
  "density": 1.2506,
  "discovery": "Identificat ca gaz distinct de Daniel Rutherford în 1772.",
  "appearance": "Gaz incolor, inodor, insipid; inert la temperatura camerei; diatomic (N₂).",
  "discovered_in": "Atmosferă (≈78% din aerul terestru).",
  "abundance": "Cel mai abundent gaz în atmosferă.",
  "uses": [
    "Azot lichid pentru criogenie și păstrarea probelor biologice.",
    "Atmosferă inertă în procese industriale (prevenirea oxidării).",
    "Producerea amoniacului (NH₃) prin procesul Haber-Bosch.",
    "Îngrășăminte pe bază de azot (uree, azotat de amoniu).",
    "Explozivi precum TNT, nitroglicerină și azida de sodiu."
  ],
  "notable_properties": {
    "electronegativity": 3.04,
    "ionization_energy": 1402.3,
    "atomic_radius": 65,
    "crystal_structure": "Hexagonal (solid la temperaturi foarte joase)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "0.02583 W/(m·K)",
    "specific_heat_capacity": "29.124 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Component al aminoacizilor, proteinelor și acizilor nucleici.",
    "role_in_human_body": "Esențial pentru sinteza proteinelor și a ADN-ului.",
    "deficiency_effects": "Deficitul în alimentație duce la scădere musculară și dereglări metabolice (prin proteine insuficiente).",
    "excess_effects": "Inhalarea în concentrații mari poate provoca asfixie (deplasând oxigenul)."
  },
  "organic_compounds": {
    "overview": "Azotul se găsește în majoritatea compușilor organici bioactivi.",
    "classes_with_examples": [
      "Amini: CH₃NH₂.",
      "Amide: CH₃CONH₂.",
      "Nitrocompuși: C₆H₅NO₂ (nitrobenzen).",
      "Azocompuși: R–N=N–R.",
      "Proteine, peptide, baze azotate din ADN (adenină, guanină, etc.)."
    ],
    "role_in_organic_reactions": "Azotul participă la reacții de protonare/deprotonare, formare legături peptidice și reacții de substituție nucleofilă."
  },
  "preparation_reactions": [
    {
      "equation": "Distilarea fracționată a aerului lichid",
      "notes": "Metoda industrială principală."
    },
    {
      "equation": "NH₄NO₂ → N₂ + 2 H₂O (încălzire)",
      "notes": "Metodă de laborator."
    }
  ],
  "chemical_properties": [
    "Molecula N₂ este foarte stabilă datorită legăturii triple N≡N.",
    "Reacționează greu cu alte substanțe la temperaturi normale.",
    "La temperaturi înalte: N₂ + O₂ → 2 NO.",
    "Formează amoniac: N₂ + 3 H₂ → 2 NH₃ (cataliză, 450°C, presiune ridicată).",
    "Compușii azotului pot varia de la foarte inerți (N₂) la foarte reactivi/explozivi (azide, nitrocompuși)."
  ]
},
{
  "symbol": "O",
  "name": "Oxygen",
  "nume_romana": "Oxigen",
  "atomic_number": 8,
  "atomic_weight": 15.999,
  "electron_configuration": "1s² 2s² 2p⁴",
  "group": 16,
  "period": 2,
  "block": "p",
  "category": "Nemetal",
  "color": "Incolor (gaz), albastru deschis (lichid)",
  "oxidation_states": [-2, -1, 0, +1, +2],
  "higher_oxidation_states": "+2",
  "compounds_with_hydrogen": ["H₂O", "H₂O₂"],
  "melting_point": 54.36,
  "boiling_point": 90.20,
  "density": 1.429,
  "discovery": "Descoperit independent de Carl Wilhelm Scheele (1773) și Joseph Priestley (1774).",
  "appearance": "Gaz incolor, inodor, insipid; lichidul și solidul sunt de culoare albastră pală.",
  "discovered_in": "Se găsește în atmosferă (~21%), apă, roci silicate și toate organismele vii.",
  "abundance": "Cel mai abundent element din scoarța terestră (~46% din masă, în principal ca oxizi și silicați).",
  "uses": [
    "Respirația organismelor aerobe și metabolism celular.",
    "Suflarea metalelor și procese de tăiere/sudură cu flacără oxiacetilenică.",
    "Producerea oțelului și tratarea metalelor.",
    "Medicinal, în terapii de oxigenare și anestezie.",
    "Componente în rachete (oxidant în combustibili)."
  ],
  "notable_properties": {
    "electronegativity": 3.44,
    "ionization_energy": 1313.9,
    "atomic_radius": 60,
    "crystal_structure": "Cubic (solid la temperaturi scăzute)",
    "magnetic_properties": "Paramagnetic (O₂ atrage ușor magneții)",
    "thermal_conductivity": "0.024 W/(m·K)",
    "specific_heat_capacity": "29.378 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Face parte din apă, proteine, lipide și acizi nucleici; ~65% din masa corpului uman este oxigen (în principal în apă).",
    "role_in_human_body": "Oxigenul este esențial pentru respirația celulară și producerea de ATP în mitocondrii.",
    "deficiency_effects": "Hipoxia duce la amețeală, pierderea cunoștinței și moarte celulară.",
    "excess_effects": "Hiperoxia produce stres oxidativ (radicali liberi), afectând țesuturile și plămânii."
  },
  "organic_compounds": {
    "overview": "Oxigenul este parte fundamentală a compușilor organici funcționali și a moleculelor biologice.",
    "classes_with_examples": [
      "Alcooli: R–OH (ex. C₂H₅OH).",
      "Aldehide și cetone: R–CHO / R–CO–R (ex. CH₃CHO, CH₃COCH₃).",
      "Acizi carboxilici: R–COOH (ex. CH₃COOH).",
      "Esteri: R–COO–R (ex. CH₃COOCH₃).",
      "Eteri: R–O–R (ex. CH₃–O–CH₃).",
      "Peroxizi: R–O–O–R (ex. H₂O₂)."
    ],
    "role_in_organic_reactions": "Este esențial în reacții de oxidare, respirație, combustie și sinteza funcțională a grupelor organice."
  },
  "preparation_reactions": [
    {
      "equation": "2 H₂O₂ → 2 H₂O + O₂ (catalizator: MnO₂)",
      "notes": "Metodă comună de laborator."
    },
    {
      "equation": "2 KClO₃ → 2 KCl + 3 O₂ (încălzire, catalizator: MnO₂)",
      "notes": "Descompunere termică."
    },
    {
      "equation": "Electroliza apei → H₂ + O₂",
      "notes": "Producție industrială la scară mare."
    }
  ],
  "chemical_properties": [
    "Susține arderea, dar nu arde singur.",
    "Reacționează cu majoritatea elementelor formând oxizi: 2 Mg + O₂ → 2 MgO.",
    "Formează apă prin reacție cu hidrogenul: 2 H₂ + O₂ → 2 H₂O.",
    "Cu carbonul formează CO₂ (oxidare completă) sau CO (oxidare incompletă).",
    "Poate forma peroxizi și superoxizi în condiții speciale.",
    "Este puternic electronegativ și formează legături covalente polare."
  ]
},
{
  "symbol": "F",
  "name": "Fluorine",
  "nume_romana": "Fluor",
  "atomic_number": 9,
  "atomic_weight": 18.998,
  "electron_configuration": "1s² 2s² 2p⁵",
  "group": 17,
  "period": 2,
  "block": "p",
  "category": "Halogen",
  "color": "Galben-verzui (gaz)",
  "oxidation_states": [-1],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["HF"],
  "melting_point": 53.53,
  "boiling_point": 85.03,
  "density": 1.696,
  "discovery": "Izolat în 1886 de Henri Moissan (a primit Premiul Nobel pentru Chimie, 1906).",
  "appearance": "Gaz galben-verzui, cu miros extrem de iritant; cel mai electronegativ element; extrem de reactiv.",
  "discovered_in": "Minerale precum fluorit (CaF₂) și criolit (Na₃AlF₆).",
  "abundance": "Destul de răspândit în scoarța terestră sub formă de fluoruri; nu se găsește liber în natură din cauza reactivității foarte mari.",
  "uses": [
    "Producerea fluorurii de uraniu (UF₆) pentru îmbogățirea uraniului (reactoare și arme nucleare).",
    "Fluorizarea apei pentru prevenirea cariilor (controversată în unele regiuni).",
    "Producerea teflonului (PTFE) pentru vase antiaderente și componente industriale.",
    "În lămpi cu descărcare în gaz și în industria chimică pentru sinteze foarte specifice.",
    "Refrigeranți fluorurați (ex: Freon), deși mulți sunt restricționați din cauza efectului asupra stratului de ozon."
  ],
  "notable_properties": {
    "electronegativity": 3.98,
    "ionization_energy": 1681.0,
    "atomic_radius": 50,
    "crystal_structure": "Cubic (solid la temperaturi scăzute)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "0.0277 W/(m·K)",
    "specific_heat_capacity": "31.304 J/(mol·K)",
    "reactivity_note": "Cel mai reactiv dintre toate elementele; atacă chiar și sticla și majoritatea metalelor."
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în smalțul dentar sub formă de fluoruri.",
    "role_in_human_body": "Contribuie la întărirea smalțului dentar, reducând degradarea acidă.",
    "deficiency_effects": "Poate duce la carii dentare mai rapide.",
    "excess_effects": "Doze mari duc la fluoroză (pete pe dinți), toxicitate osoasă și efecte asupra sistemului nervos."
  },
  "organic_compounds": {
    "overview": "Fluorul este utilizat pentru modificarea proprietăților moleculelor organice, crescând stabilitatea și rezistența termică.",
    "classes_with_examples": [
      "Hidrocarburi fluorurate: CF₄, C₂F₆.",
      "Polimeri fluorurați: PTFE (Teflon).",
      "Medicamente fluorurate (ex: fluoxetină – Prozac)."
    ],
    "role_in_organic_reactions": "Substituția cu fluor schimbă polaritatea și reactivitatea moleculelor, fiind folosită intens în farmaceutică."
  },
  "preparation_reactions": [
    {
      "equation": "2 HF(l) → H₂(g) + F₂(g) (electroliză, electrozi speciali de Ni)",
      "notes": "Metoda principală de obținere industrială."
    }
  ],
  "chemical_properties": [
    "Cel mai electronegativ și mai puternic oxidant elementar.",
    "Reacționează violent cu majoritatea metalelor și nemetalelor.",
    "Cu hidrogenul: H₂ + F₂ → 2 HF (reacție explozivă chiar la −200°C).",
    "Formează fluoruri stabile cu aproape orice element.",
    "Gazul F₂ atacă sticla, formând SiF₄ — de aceea este depozitat în recipiente speciale."
  ]
},
{
  "symbol": "Ne",
  "name": "Neon",
  "nume_romana": "Neon",
  "atomic_number": 10,
  "atomic_weight": 20.1797,
  "electron_configuration": "1s² 2s² 2p⁶",
  "group": 18,
  "period": 2,
  "block": "p",
  "category": "Gaz nobil",
  "color": "Incolor (gaz), roșu-portocaliu în descărcări electrice",
  "oxidation_states": [0],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": [],
  "melting_point": 24.56,
  "boiling_point": 27.07,
  "density": 0.9002,
  "discovery": "Descoperit în 1898 de William Ramsay și Morris Travers prin distilarea aerului lichid.",
  "appearance": "Gaz incolor, inodor și inert; strălucește roșu-portocaliu în tuburi cu descărcare electrică.",
  "discovered_in": "Atmosfera terestră (în cantități mici ~18 ppm), găsit în special în aer lichid rafinat.",
  "abundance": "Al cincilea cel mai abundent element în univers, dar rar pe Pământ.",
  "uses": [
    "Lămpi cu neon pentru reclame luminoase (culoare roșu-portocaliu).",
    "Lămpi cu descărcare de joasă presiune și indicatori luminoși.",
    "Lasere cu neon (ex: He-Ne lasers).",
    "Medii criogenice (neon lichid este un agent frigorific eficient).",
    "Tuburi de semnalizare în echipamente electronice."
  ],
  "notable_properties": {
    "electronegativity": "nedefinită",
    "ionization_energy": 2080.7,
    "atomic_radius": 38,
    "crystal_structure": "Cubic față-centrare (la solidificare sub presiune mare)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "0.0491 W/(m·K)",
    "specific_heat_capacity": "20.79 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic, fiind complet inert.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu există deficit.",
    "excess_effects": "Inhalarea în concentrație mare poate provoca hipoxie (deplasarea oxigenului)."
  },
  "organic_compounds": {
    "overview": "Neonul este complet inert din punct de vedere chimic.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă la reacții; este folosit doar ca mediu inert în condiții experimentale speciale."
  },
  "preparation_reactions": [
    {
      "equation": "Distilarea fracționată a aerului lichid",
      "notes": "Singura metodă practică, deoarece nu formează compuși stabili naturali."
    }
  ],
  "chemical_properties": [
    "Inert — nu formează compuși chimici în condiții normale.",
    "Nu reacționează cu oxigen, hidrogen sau halogeni.",
    "La presiuni și temperaturi extreme poate forma excimeri instabili (Ne*).",
    "Nu susține arderea și nu este inflamabil."
  ]
},
{
  "symbol": "Na",
  "name": "Sodium",
  "nume_romana": "Sodiu",
  "atomic_number": 11,
  "atomic_weight": 22.989769,
  "electron_configuration": "1s² 2s² 2p⁶ 3s¹",
  "group": 1,
  "period": 3,
  "block": "s",
  "category": "Metal alcalin",
  "color": "Argintiu",
  "oxidation_states": [1],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["NaH"],
  "melting_point": 370.87,
  "boiling_point": 1156,
  "density": 0.97,
  "discovery": "Izolat pentru prima dată de Humphry Davy în 1807 prin electroliza sodei caustice (NaOH).",
  "appearance": "Metal moale, argintiu, se taie ușor cu cuțitul; se oxidează rapid în aer, reacționează violent cu apa.",
  "discovered_in": "Săruri marine și minerale (halit – NaCl).",
  "abundance": "Foarte răspândit în natură sub formă de săruri; prezent în apă de mare, minerale și sol.",
  "uses": [
    "Producerea compușilor de sodiu (NaOH, Na₂CO₃, NaCl).",
    "Lampi cu vapori de sodiu pentru iluminat stradal (lumină galbenă intensă).",
    "Răcire în reactoare nucleare (sodiu lichid ca agent de transfer termic).",
    "În industrie alimentară: sarea de masă (NaCl) este esențială pentru organism.",
    "Fabricarea sticlei și detergenților (Na₂CO₃)."
  ],
  "notable_properties": {
    "electronegativity": 0.93,
    "ionization_energy": 495.8,
    "atomic_radius": 186,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": "142 W/(m·K)",
    "specific_heat_capacity": "28.23 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Ionul Na⁺ este principalul cation extracelular în organism.",
    "role_in_human_body": "Reglează echilibrul apei, presiunea osmotică și impulsurile nervoase.",
    "deficiency_effects": "Hiponatremia duce la crampe, confuzie, convulsii.",
    "excess_effects": "Excesul de NaCl contribuie la hipertensiune arterială."
  },
  "organic_compounds": {
    "overview": "Compușii de sodiu sunt des utilizați ca baze puternice sau agenți redox în sinteze.",
    "classes_with_examples": [
      "NaOH – bază puternică pentru reacții de saponificare.",
      "NaH – bază puternică pentru deprotonări.",
      "NaOEt (etoxid de sodiu) – catalizator în reacții de condensare."
    ],
    "role_in_organic_reactions": "Permite formarea de anioni carbonilici și intermediarilor necesari în sinteza compușilor organici."
  },
  "preparation_reactions": [
    {
      "equation": "2 NaCl(l) → 2 Na(l) + Cl₂(g) (electroliză, proces Downs)",
      "notes": "Metoda industrială principală."
    }
  ],
  "chemical_properties": [
    "Reacționează violent cu apa: 2 Na + 2 H₂O → 2 NaOH + H₂ ↑ (degajare de căldură și hidrogen).",
    "Se oxidează în aer: 4 Na + O₂ → 2 Na₂O.",
    "Cu halogenii: 2 Na + Cl₂ → 2 NaCl.",
    "Trebuie păstrat în ulei pentru a preveni contactul cu aerul și umiditatea.",
    "Flacără galbenă intensă (test de identificare)."
  ]
},
{
  "symbol": "Mg",
  "name": "Magnesium",
  "nume_romana": "Magneziu",
  "atomic_number": 12,
  "atomic_weight": 24.305,
  "electron_configuration": "1s² 2s² 2p⁶ 3s²",
  "group": 2,
  "period": 3,
  "block": "s",
  "category": "Metal alcalino-pământos",
  "color": "Argintiu",
  "oxidation_states": [2],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["MgH₂"],
  "melting_point": 923,
  "boiling_point": 1363,
  "density": 1.738,
  "discovery": "Identificat în 1755 de Joseph Black; izolat în 1808 de Humphry Davy.",
  "appearance": "Metal ușor, lucios, argintiu; arde cu o flacără albă intensă.",
  "discovered_in": "Minerale precum dolomita (CaMg(CO₃)₂) și magnezita (MgCO₃).",
  "abundance": "Unul dintre cele mai comune elemente în scoarța terestră și în apă de mare (ion Mg²⁺).",
  "uses": [
    "Componente pentru aviație și industria auto (aliaje foarte ușoare).",
    "Focuri de artificii și rachete (flacără albă intensă la ardere).",
    "În medicină – suplimente de magneziu pentru sistemul nervos și muscular.",
    "Electroliza magneziului metalic din săruri topite.",
    "Agent reducător în metalurgie (ex: obținerea titanului)."
  ],
  "notable_properties": {
    "electronegativity": 1.31,
    "ionization_energy": 737.7,
    "atomic_radius": 160,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "156 W/(m·K)",
    "specific_heat_capacity": "24.869 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Al doilea cel mai important cation intracelular după K⁺; prezent în oase, mușchi și sânge.",
    "role_in_human_body": "Cofactor pentru peste 300 de enzime, important pentru sinteza proteinelor și transmisia nervoasă.",
    "deficiency_effects": "Crampe musculare, anxietate, tremor, oboseală.",
    "excess_effects": "Dozele foarte mari pot provoca aritmie și depresie respiratorie."
  },
  "organic_compounds": {
    "overview": "Compușii organomagneziului sunt esențiali în sinteza organică.",
    "classes_with_examples": [
      "Reactivi Grignard: RMgX (ex: C₂H₅MgBr).",
      "Complexe Mg²⁺ cu clorofile (pigment verde în plante)."
    ],
    "role_in_organic_reactions": "Reactivii Grignard permit formarea de alcoolii prin atac nucleofil asupra carbonililor."
  },
  "preparation_reactions": [
    {
      "equation": "MgCl₂(l) → Mg(l) + Cl₂(g) (electroliză)",
      "notes": "Metoda industrială principală."
    },
    {
      "equation": "MgO + Si → Mg + SiO₂ (reducere la temperatură înaltă)",
      "notes": "Proces Pidgeon (producție în industrie)."
    }
  ],
  "chemical_properties": [
    "Arde în aer cu flacără albă intensă: 2 Mg + O₂ → 2 MgO.",
    "Reacționează lent cu apa rece, dar rapid cu apa fierbinte: Mg + 2 H₂O → Mg(OH)₂ + H₂.",
    "Cu acizi: Mg + 2 HCl → MgCl₂ + H₂ ↑.",
    "Formează hidroxid slab bazic: Mg(OH)₂.",
    "Se pasivează ușor în aer datorită stratului protector de oxid."
  ]
},
{
  "symbol": "Al",
  "name": "Aluminium",
  "nume_romana": "Aluminiu",
  "atomic_number": 13,
  "atomic_weight": 26.9815385,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p¹",
  "group": 13,
  "period": 3,
  "block": "p",
  "category": "Metal post-tranzitional (ușor)",
  "color": "Gri-argintiu lucios",
  "oxidation_states": [3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["AlH₃"],
  "melting_point": 933.47,
  "boiling_point": 2792,
  "density": 2.70,
  "discovery": "Izolat pentru prima dată în 1825 de Hans Christian Ørsted; rafinat tehnic de Friedrich Wöhler în 1827.",
  "appearance": "Metal ușor, maleabil, cu luciu argintiu; rezistent la coroziune datorită formării unei pelicule protectoare de Al₂O₃.",
  "discovered_in": "Minerale precum bauxita (Al₂O₃·xH₂O), criolit, feldspat și argile.",
  "abundance": "Cel mai abundent metal din scoarța terestră (~8% din masă). Nu se găsește în natură ca metal liber.",
  "uses": [
    "Construcții și arhitectură (structuri, ferestre, panouri, acoperișuri).",
    "Componente în industria aeronautică și auto (aliaje ușoare și rezistente).",
    "Ambalaje (folie de aluminiu, doze de băuturi).",
    "Conductori electrici (înlocuitor pentru cupru datorită masei mici).",
    "Fabricarea oxidului de aluminiu (pentru abrazive și ceramică refractară)."
  ],
  "notable_properties": {
    "electronegativity": 1.61,
    "ionization_energy": 577.5,
    "atomic_radius": 143,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "235 W/(m·K)",
    "specific_heat_capacity": "24.20 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu este esențial biologic; se găsește doar în urme.",
    "role_in_human_body": "Nu are rol fiziologic.",
    "deficiency_effects": "Nu există deficit biologic.",
    "excess_effects": "Expunerea cronică poate afecta sistemul nervos; legături investigate cu Alzheimer (controversat și neconcludent)."
  },
  "organic_compounds": {
    "overview": "Compușii organoaluminiului sunt importanți în cataliză și sinteză.",
    "classes_with_examples": [
      "Alchil-aluminiu: R₃Al (ex: triizobutilaluminiu).",
      "Hidride de aluminiu: AlH₃.",
      "Complexe catalitice Ziegler–Natta (pentru polimerizarea etenei și propenelor)."
    ],
    "role_in_organic_reactions": "Compușii organoaluminiului sunt catalizatori esențiali în fabricarea polietilenei și polipropilenei."
  },
  "preparation_reactions": [
    {
      "equation": "Al₂O₃ (topit în criolit) → Al(l) + O₂(g) (electroliză Hall–Héroult)",
      "notes": "Metoda industrială principală de obținere a aluminiului."
    },
    {
      "equation": "AlCl₃ + 3 Na → Al + 3 NaCl",
      "notes": "Metodă istorică (înaintea electrolizei)."
    }
  ],
  "chemical_properties": [
    "Rezistent la coroziune datorită stratului protector de Al₂O₃.",
    "Reacționează cu acizi: 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂ ↑.",
    "Reacționează cu baze: 2 Al + 2 NaOH + 6 H₂O → 2 Na[Al(OH)₄] + 3 H₂ ↑.",
    "Arde în aer formând oxid: 4 Al + 3 O₂ → 2 Al₂O₃.",
    "Pulberea de aluminiu este foarte reactivă și poate fi inflamabilă."
  ]
},
{
  "symbol": "Si",
  "name": "Silicon",
  "nume_romana": "Siliciu",
  "atomic_number": 14,
  "atomic_weight": 28.085,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p²",
  "group": 14,
  "period": 3,
  "block": "p",
  "category": "Metaloid",
  "color": "Gri-metalic în formă cristalină",
  "oxidation_states": [-4, +2, +4],
  "higher_oxidation_states": "+4",
  "compounds_with_hydrogen": ["SiH₄ (silan)", "polisilani"],
  "melting_point": 1687,
  "boiling_point": 3538,
  "density": 2.3296,
  "discovery": "Identificat în 1824 de Jöns Jakob Berzelius.",
  "appearance": "Solid dur, cristalin, cu aspect gri-metalic; fragil și semiconductiv.",
  "discovered_in": "Minerale silicate (feldspați, mica, cuarț), nisip (SiO₂).",
  "abundance": "Al doilea cel mai abundent element din scoarța terestră (~27%), în principal sub formă de dioxid de siliciu și silicați.",
  "uses": [
    "Industria semiconductorilor (microcipuri, tranzistoare, procesoare).",
    "Sticlă, ceramică și ciment (SiO₂ în structuri silicatice).",
    "Panouri solare fotovoltaice (siliciu monocristalin).",
    "Producția de siliconi (polimeri rezistenți la temperatură și apă).",
    "Materiale compozite pentru aviație și construcții."
  ],
  "notable_properties": {
    "electronegativity": 1.90,
    "ionization_energy": 786.5,
    "atomic_radius": 111,
    "crystal_structure": "Cubic față-centrată (structură diamant)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "149 W/(m·K)",
    "specific_heat_capacity": "19.789 J/(mol·K)",
    "electrical_behavior": "Semiconductor – conductivitatea crește cu temperatura."
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în oase, piele, păr, unghii și țesuturi conjunctive.",
    "role_in_human_body": "Contribuie la sinteza colagenului și elasticitatea țesuturilor.",
    "deficiency_effects": "Scăderea elasticității țesuturilor, păr fragil.",
    "excess_effects": "Praful de siliciu (SiO₂) inhalat produce silicoză – afecțiune pulmonară gravă."
  },
  "organic_compounds": {
    "overview": "Siliciul formează lanțuri și rețele similare carbonului, dar cu reactivitate diferită.",
    "classes_with_examples": [
      "Silani: SiH₄ (similar metanului, dar mult mai reactiv).",
      "Siliconi (polisiloxani): (R₂SiO)n – elastomeri rezistenți la temperatură.",
      "Sila-derivați aromatici și organosiilici pentru materiale avansate."
    ],
    "role_in_organic_reactions": "Compușii organosilici sunt folosiți pentru protejarea grupelor reactive și în sinteza catalitică."
  },
  "preparation_reactions": [
    {
      "equation": "SiO₂ + 2 C → Si + 2 CO (cuptoare electrice la temperaturi înalte)",
      "notes": "Metoda industrială principală — siliciu tehnic."
    },
    {
      "equation": "SiCl₄ + 2 H₂ → Si + 4 HCl",
      "notes": "Purificare prin procese chimice pentru siliciu de înaltă puritate."
    }
  ],
  "chemical_properties": [
    "Reacționează la temperaturi ridicate cu halogenii: Si + 2 Cl₂ → SiCl₄.",
    "Reacționează cu oxigenul: Si + O₂ → SiO₂ (strat protector foarte stabil).",
    "Cu baze concentrate: Si + 2 NaOH + H₂O → Na₂SiO₃ + 2 H₂ ↑.",
    "Se comportă ca semiconductor – conductivitate controlată prin dopare (ex: cu B sau P).",
    "Formează rețele covalente foarte stabile în silicați și cuarț."
  ]
},
{
  "symbol": "P",
  "name": "Phosphorus",
  "nume_romana": "Fosfor",
  "atomic_number": 15,
  "atomic_weight": 30.973761,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p³",
  "group": 15,
  "period": 3,
  "block": "p",
  "category": "Nemetal",
  "color": "Alb (fosfor alb), roșu închis (fosfor roșu), negru (fosfor negru)",
  "oxidation_states": [-3, +1, +3, +5],
  "higher_oxidation_states": "+5",
  "compounds_with_hydrogen": ["PH₃ (fosfină)"],
  "melting_point": "Fosforul alb: 317.3 K (topire în atmosferă inertă)",
  "boiling_point": "Fosforul alb: 553.7 K",
  "density": "Alb: 1.82 g/cm³ | Roșu: 2.20–2.40 g/cm³ | Negru: 2.69 g/cm³",
  "discovery": "Descoperit în 1669 de alchimistul Hennig Brand, care l-a obținut prin evaporarea urinei.",
  "appearance": "Există sub forme allotropice: fosfor alb (ceros, foarte reactiv, luminiscență în aer), fosfor roșu (stabil), fosfor negru (semiconductor).",
  "discovered_in": "În natură se găsește sub formă de fosfați (apatit: Ca₅(PO₄)₃F/Cl/OH).",
  "abundance": "Important pentru organismele vii; prezent în oase, ADN, ATP. Fosfații se găsesc în roci sedimentare.",
  "uses": [
    "Îngrășăminte fosfatice pentru agricultură.",
    "Chibrituri (fosforul roșu în suprafața de aprindere).",
    "Producția de oțel și aliaje speciale.",
    "Detergenți (fosfați – restricționați în unele regiuni din motive ecologice).",
    "ATP și ADN în biologie — element esențial pentru viață."
  ],
  "notable_properties": {
    "electronegativity": 2.19,
    "ionization_energy": 1011.8,
    "atomic_radius": 98,
    "crystal_structure": "Depinde de allotrop (negru: stratificat, similar grafitului)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "Fosfor negru are conductivitate semiconductoare",
    "specific_heat_capacity": "23.824 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Present în oase (sub formă de fosfați de calciu), ADN, ARN și ATP.",
    "role_in_human_body": "Esențial pentru metabolismul energetic (ATP) și structura membranelor celulare (fosfolipide).",
    "deficiency_effects": "Slăbirea oaselor, oboseală, dereglări metabolice.",
    "excess_effects": "Dezechilibre Ca/P → slăbirea sistemului osos și calcificări anormale."
  },
  "organic_compounds": {
    "overview": "Fosforul este vital în compuși organici biochimici și industriali.",
    "classes_with_examples": [
      "Fosfolipide — componente ale membranelor celulare.",
      "Nucleotide — ADN și ARN.",
      "ATP — molecula energetică fundamentală.",
      "Organofosfați — pesticide și agenți nervoși (ex: sarin, VX — foarte toxici)."
    ],
    "role_in_organic_reactions": "Intervine în reacții de transfer de energie și semnalizare celulară (ATP/ADP)."
  },
  "preparation_reactions": [
    {
      "equation": "Ca₅(PO₄)₃F + SiO₂ + C → P₄ + CO + CaSiO₃ (cuptoare electrice)",
      "notes": "Metoda industrială principală din fosfați minerali."
    },
    {
      "equation": "P₄ + 5 O₂ → P₄O₁₀",
      "notes": "Formarea oxidului de fosfor pentru sinteze chimice."
    }
  ],
  "chemical_properties": [
    "Fosforul alb este extrem de reactiv, autoaprindere în aer.",
    "Fosforul roșu este stabil și folosit în siguranță în aplicații.",
    "Arde formând P₄O₁₀: P₄ + 5 O₂ → P₄O₁₀.",
    "Reacționează cu halogenii: 2 P + 3 Cl₂ → 2 PCl₃ (și cu exces → PCl₅).",
    "Fosfina (PH₃) este un gaz foarte toxic și inflamabil."
  ]
},
{
  "symbol": "S",
  "name": "Sulfur",
  "nume_romana": "Sulf",
  "atomic_number": 16,
  "atomic_weight": 32.06,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁴",
  "group": 16,
  "period": 3,
  "block": "p",
  "category": "Nemetal",
  "color": "Galben (solid)",
  "oxidation_states": [-2, 0, +4, +6],
  "higher_oxidation_states": "+6",
  "compounds_with_hydrogen": ["H₂S"],
  "melting_point": 388.36,
  "boiling_point": 717.87,
  "density": 2.07,
  "discovery": "Cunoscut din antichitate; folosit în alchimie și ceremonii religioase.",
  "appearance": "Solid galben, fragil, cu miros caracteristic în compuși (H₂S are miros de „ou stricat”).",
  "discovered_in": "Vulcani, izvoare sulfuroase, minereuri sulfuroase (pirita FeS₂, cinabru HgS).",
  "abundance": "Răspândit în scoarța terestră; important în ciclul biochimic al vieții.",
  "uses": [
    "Producerea acidului sulfuric (H₂SO₄) – cel mai utilizat compus industrial.",
    "Vulcanizarea cauciucului (obținerea cauciucului elastic).",
    "Îngrășăminte și fungicide pentru agricultură.",
    "Chibrituri și artificii.",
    "Produse cosmetice și medicamente dermatologice (sulf coloidal)."
  ],
  "notable_properties": {
    "electronegativity": 2.58,
    "ionization_energy": 999.6,
    "atomic_radius": 88,
    "crystal_structure": "Monoclinic și rombic (alotropii principali)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "0.205 W/(m·K)",
    "specific_heat_capacity": "22.75 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Componență a aminoacizilor metionină și cisteină, proteinelor și enzimelor.",
    "role_in_human_body": "Important în structura proteinelor și în procese de detoxifiere.",
    "deficiency_effects": "Perturbarea sintezei proteinelor și reparării țesuturilor.",
    "excess_effects": "Inhalarea H₂S este foarte toxică și poate provoca paralizie respiratorie."
  },
  "organic_compounds": {
    "overview": "Sulful apare frecvent în molecule biologice și în chimia materialelor.",
    "classes_with_examples": [
      "Tiole (R–SH) – ex: etantiol.",
      "Sulfuri (R–S–R) – ex: dimetil-sulfura.",
      "Sulfone (R–SO₂–R) – în medicamente și materiale polimerice.",
      "Disulfuri (R–S–S–R) – legături în structura proteinelor (ex: părul)."
    ],
    "role_in_organic_reactions": "Thioli și sulfoxizii sunt implicați în reacții de oxidare și reducere biologică."
  },
  "preparation_reactions": [
    {
      "equation": "Desulfurarea petrolului: organosulfuri + H₂ → H₂S → S (prin Claus)",
      "notes": "Metoda industrială principală pentru sulf elementar."
    },
    {
      "equation": "FeS₂ + O₂ → Fe₂O₃ + SO₂",
      "notes": "Arderea piritei produce SO₂ pentru sinteza H₂SO₄."
    },
    {
      "equation": "SO₂ + H₂O + ½O₂ → H₂SO₄ (proces Contact)",
      "notes": "Transformarea în acid sulfuric industrial."
    }
  ],
  "chemical_properties": [
    "Arde în aer producând SO₂: S + O₂ → SO₂.",
    "SO₂ se poate oxida la SO₃: 2 SO₂ + O₂ → 2 SO₃ (catalizator V₂O₅).",
    "Cu hidrogenul formează H₂S: H₂ + S → H₂S.",
    "Cu metale formează sulfuri: Fe + S → FeS.",
    "Sulful prezintă allotropie (formează cicluri S₈ și structuri polimerice)."
  ]
},
{
  "symbol": "Cl",
  "name": "Chlorine",
  "nume_romana": "Clor",
  "atomic_number": 17,
  "atomic_weight": 35.45,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁵",
  "group": 17,
  "period": 3,
  "block": "p",
  "category": "Halogen",
  "color": "Galben-verzui (gaz)",
  "oxidation_states": [-1, +1, +3, +5, +7],
  "higher_oxidation_states": "+7",
  "compounds_with_hydrogen": ["HCl"],
  "melting_point": 171.6,
  "boiling_point": 239.1,
  "density": 3.214,
  "discovery": "Identificat de Carl Wilhelm Scheele în 1774; numele dat de Humphry Davy în 1810.",
  "appearance": "Gaz galben-verzui, sufocant, cu miros puternic și iritant; foarte reactiv și toxic.",
  "discovered_in": "Săruri marine (NaCl), apă de mare și depozite de halit.",
  "abundance": "Foarte răspândit sub formă de cloruri în oceane și pe sol; nu se găsește liber în natură.",
  "uses": [
    "Dezinfectarea apei potabile și a piscinelor (dezinfectant puternic).",
    "Producerea PVC (policlorură de vinil).",
    "Fabricarea înălbitorilor (hipoclorit de sodiu – NaClO).",
    "Industrie farmaceutică și chimică (intermediari cu clor).",
    "Fabricarea HCl, ClO₂, Cl₂O₇ și a altor oxiclori."
  ],
  "notable_properties": {
    "electronegativity": 3.16,
    "ionization_energy": 1251.2,
    "atomic_radius": 79,
    "crystal_structure": "Cubic (în stare solidă la temperaturi joase)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "0.0089 W/(m·K)",
    "specific_heat_capacity": "33.949 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Ionul Cl⁻ este principalul anion extracelular.",
    "role_in_human_body": "Menține echilibrul osmotic și acidobazic; component în HCl gastric pentru digestie.",
    "deficiency_effects": "Poate cauza alcaloză metabolică și tulburări digestive.",
    "excess_effects": "Expunerea la Cl₂ gaz irită puternic plămânii; inhalarea în cantități mari este mortală."
  },
  "organic_compounds": {
    "overview": "Clorul este frecvent folosit pentru modificarea structurii moleculelor organice.",
    "classes_with_examples": [
      "Halogenoalcani (R–Cl): CH₃Cl, CH₂Cl₂.",
      "PVC (policlorură de vinil): (CH₂–CHCl)n.",
      "Cloramine pentru dezinfecție.",
      "Medicamente clorurate (de ex. cloramfenicol)."
    ],
    "role_in_organic_reactions": "Reactiv în substituție nucleofilă și reacții de clorinare (adăugare la legături duble)."
  },
  "preparation_reactions": [
    {
      "equation": "2 NaCl(l) → 2 Na(l) + Cl₂(g) (electroliza sării topite, proces Downs)",
      "notes": "Clor industrial din sare."
    },
    {
      "equation": "MnO₂ + 4 HCl → MnCl₂ + 2 H₂O + Cl₂",
      "notes": "Metodă de laborator clasică."
    }
  ],
  "chemical_properties": [
    "Reacționează cu metale: 2 Na + Cl₂ → 2 NaCl.",
    "Reacționează cu hidrogenul: H₂ + Cl₂ → 2 HCl (în lumină, reacție fotochimică).",
    "Reacționează cu apa: Cl₂ + H₂O ⇌ HCl + HClO (formare de hipoclorit).",
    "Este un agent oxidant puternic și biocid.",
    "Unele oxiacizi ai clorului sunt foarte reactivi (HClO, HClO₂, HClO₃, HClO₄)."
  ]
},
{
  "symbol": "Ar",
  "name": "Argon",
  "nume_romana": "Argon",
  "atomic_number": 18,
  "atomic_weight": 39.948,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶",
  "group": 18,
  "period": 3,
  "block": "p",
  "category": "Gaz nobil",
  "color": "Incolor (gaz), violet în descărcări electrice",
  "oxidation_states": [0],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": [],
  "melting_point": 83.81,
  "boiling_point": 87.30,
  "density": 1.784,
  "discovery": "Descoperit în 1894 de Lord Rayleigh și William Ramsay prin izolarea din aer.",
  "appearance": "Gaz complet incolor, inodor, insipid, neinflamabil și foarte inert chimic.",
  "discovered_in": "Atmosfera terestră (≈0.93% din volum).",
  "abundance": "Al treilea cel mai abundent gaz din atmosferă după azot și oxigen.",
  "uses": [
    "Atmosferă inertă pentru sudură și metalurgie (prevenirea oxidării).",
    "Umplerea becurilor și a ferestrelor termoizolate.",
    "Gaz inert pentru experimente chimice sensibile la oxigen.",
    "În imprimante 3D cu laser și procese de tăiere cu plasmă.",
    "În laboratoare pentru cromatografie și spectroscopie."
  ],
  "notable_properties": {
    "electronegativity": "nedefinită (nu formează legături stabile)",
    "ionization_energy": 1520.6,
    "atomic_radius": 71,
    "crystal_structure": "Cubic față-centrare (solid la temperaturi joase)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "0.0177 W/(m·K)",
    "specific_heat_capacity": "20.786 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic; complet inert.",
    "role_in_human_body": "Nu participă la procese biochimice.",
    "deficiency_effects": "Nu există deficit.",
    "excess_effects": "Concentrații mari pot provoca hipoxie prin deplasarea oxigenului."
  },
  "organic_compounds": {
    "overview": "Argonul nu formează compuși organici stabili.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Folosit ca atmosferă inertă pentru a preveni oxidarea și reacțiile parazite."
  },
  "preparation_reactions": [
    {
      "equation": "Distilarea fracționată a aerului lichid",
      "notes": "Metoda industrială standard."
    }
  ],
  "chemical_properties": [
    "Extrem de inert — practic nu reacționează cu alte elemente.",
    "Nu formează compuși în condiții normale.",
    "La temperaturi și presiuni extreme poate forma excimeri (Ar₂*) folosiți în laseri excimer.",
    "Nu susține arderea și nu este inflamabil."
  ]
},
{
  "symbol": "K",
  "name": "Potassium",
  "nume_romana": "Potasiu",
  "atomic_number": 19,
  "atomic_weight": 39.0983,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹",
  "group": 1,
  "period": 4,
  "block": "s",
  "category": "Metal alcalin",
  "color": "Argintiu-lucios (dar se oxidează rapid în aer)",
  "oxidation_states": [1],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["KH"],
  "melting_point": 336.7,
  "boiling_point": 1032,
  "density": 0.86,
  "discovery": "Izolat de Humphry Davy în 1807 prin electroliza potasiului caustic (KOH).",
  "appearance": "Metal foarte moale, poate fi tăiat cu cuțitul; reacționează violent cu apa, eliberând hidrogen inflamabil.",
  "discovered_in": "Săruri precum silvinit, carnallit și în apa mării.",
  "abundance": "Potasiul este al 7-lea cel mai abundent element în scoarța terestră, esențial pentru organismele vii.",
  "uses": [
    "Îngrășăminte agricole (KCl, K₂SO₄) pentru creșterea plantelor.",
    "Reactivi în laboratoare (KOH, KMnO₄).",
    "Fabricarea sticlei speciale rezistente la temperatură.",
    "Componente în baterii și electroliți.",
    "Medicină: suplimente pentru reglarea nivelului de potasiu în organism."
  ],
  "notable_properties": {
    "electronegativity": 0.82,
    "ionization_energy": 418.8,
    "atomic_radius": 227,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": "102 W/(m·K)",
    "specific_heat_capacity": "29.60 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Ionul K⁺ este principalul cation *intracelular*.",
    "role_in_human_body": "Esential pentru impulsurile nervoase, contracția musculară și echilibrul electrolitic.",
    "deficiency_effects": "Hipokaliemia → crampe, aritmii, slăbiciune musculară.",
    "excess_effects": "Hiperkaliemia → aritmii potențial mortale."
  },
  "organic_compounds": {
    "overview": "Compușii de potasiu sunt folosiți ca baze și oxidanți în sinteza organică.",
    "classes_with_examples": [
      "KOH – bază puternică folosită în saponificare.",
      "KOtBu – t-Butilat de potasiu (bază foarte puternică, ne-nucleofilă).",
      "KMnO₄ – oxidant în reacții de oxidare selectivă."
    ],
    "role_in_organic_reactions": "KOtBu și KOH sunt esențiale în reacțiile de eliminare și în sintezele de alcene."
  },
  "preparation_reactions": [
    {
      "equation": "KCl(l) + Na(l) → K(l) + NaCl(l) (schimb metalic la temperatură înaltă)",
      "notes": "Metodă industrială istorică."
    },
    {
      "equation": "2 KCl(l) → 2 K(l) + Cl₂(g) (electroliză, asemănător procesului Downs)",
      "notes": "Metoda modernă industrială."
    }
  ],
  "chemical_properties": [
    "Reacționează violent cu apa: 2 K + 2 H₂O → 2 KOH + H₂ ↑ (hidrogen inflamabil).",
    "Flacăra potasiului este *violet* (test de flacără).",
    "Se oxidează rapid în aer: 4 K + O₂ → 2 K₂O.",
    "Formează superoxid în aer umed: K + O₂ → KO₂.",
    "Trebuie păstrat în ulei pentru a preveni contactul cu aerul și umiditatea."
  ]
},
{
  "symbol": "Ca",
  "name": "Calcium",
  "nume_romana": "Calciu",
  "atomic_number": 20,
  "atomic_weight": 40.078,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
  "group": 2,
  "period": 4,
  "block": "s",
  "category": "Metal alcalino-pământos",
  "color": "Alb-argintiu",
  "oxidation_states": [2],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["CaH₂"],
  "melting_point": 1115,
  "boiling_point": 1757,
  "density": 1.55,
  "discovery": "Izolat de Sir Humphry Davy în 1808 prin electroliza CaCl₂.",
  "appearance": "Metal reacțiv, moale (dar mai dur decât sodiu și potasiu), se înnegrește în aer datorită formării de oxid.",
  "discovered_in": "Calcar (CaCO₃), marmură, cretă, ghips (CaSO₄·2H₂O) și oase.",
  "abundance": "Al cincilea cel mai abundent element în scoarța terestră (~4.2%); esențial pentru organismele vii.",
  "uses": [
    "Materiale de construcții: calcar, ciment, ipsos.",
    "Producerea oțelului și a aliajelor ușoare.",
    "Deoxidant în metalurgie (eliminarea impurităților din metale).",
    "Suplimente alimentare pentru sănătatea oaselor.",
    "Fabricarea carbidelor (CaC₂ → CaC₂ + H₂O → C₂H₂)."
  ],
  "notable_properties": {
    "electronegativity": 1.00,
    "ionization_energy": 589.8,
    "atomic_radius": 197,
    "crystal_structure": "Cubic față-centrată (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "200 W/(m·K)",
    "specific_heat_capacity": "25.93 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Principalul component mineral al oaselor și dinților (hidroxiapatită: Ca₁₀(PO₄)₆(OH)₂).",
    "role_in_human_body": "Esențial pentru contracția musculară, coagularea sângelui și transmiterea nervoasă.",
    "deficiency_effects": "Rahitism/osteoporoză, slăbiciune musculară, tulburări de coagulare.",
    "excess_effects": "Hipercalcemia poate afecta rinichii, inima și sistemul nervos."
  },
  "organic_compounds": {
    "overview": "Calciul formează săruri, ioni și complexe cu rol biologic și industrial.",
    "classes_with_examples": [
      "Săruri de calciu: CaCO₃, CaCl₂, CaSO₄.",
      "Săpunuri de calciu (resultate din reacția acizilor grași cu Ca²⁺).",
      "Ionul Ca²⁺ ca mesager secundar în celule."
    ],
    "role_in_organic_reactions": "Ca(OH)₂ este bază slabă utilizată în mortare, tratarea solurilor și reacții de precipitare."
  },
  "preparation_reactions": [
    {
      "equation": "CaCl₂(l) → Ca(l) + Cl₂(g) (electroliza sării topite)",
      "notes": "Metoda industrială principală."
    },
    {
      "equation": "CaO + C → Ca + CO (la temperaturi foarte înalte)",
      "notes": "Metodă alternativă în metalurgie."
    }
  ],
  "chemical_properties": [
    "Reacționează cu apă: Ca + 2 H₂O → Ca(OH)₂ + H₂ ↑ (mai lent decât metalele alcaline).",
    "Arde cu flacără roșu-portocalie / cărămizie.",
    "Reacționează cu oxigenul formând CaO (var).",
    "Cu CO₂: CaO + CO₂ → CaCO₃ (baza reacției varului în construcții).",
    "Formează carbura: Ca + 2 C → CaC₂ → produce acetilenă cu apă."
  ]
},
{
  "symbol": "Sc",
  "name": "Scandium",
  "nume_romana": "Scandiu",
  "atomic_number": 21,
  "atomic_weight": 44.955908,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²",
  "group": 3,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Alb-argintiu",
  "oxidation_states": [3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["ScH₂"],
  "melting_point": 1814,
  "boiling_point": 3109,
  "density": 2.985,
  "discovery": "Descoperit de Lars Fredrik Nilson în 1879 în mineralul euxenit.",
  "appearance": "Metal ușor, cu luciu argintiu, similar aluminiului, dar mai dur și mai rar.",
  "discovered_in": "Minerale rare precum euxenit și gadolinită; nu există liber în natură.",
  "abundance": "Relativ rar în scoarța terestră; prezent în cantități mici în peste 800 de minerale.",
  "uses": [
    "Aliaje Sc-Al extrem de rezistente pentru aviație și rachete.",
    "Rachete și structuri aerospațiale datorită raportului mare rezistență/greutate.",
    "Biciclete și echipamente sportive premium (aliaje ultraușoare).",
    "Lămpi de tăiere și iluminare (halogenuri de scandiu în lămpi de studio/terenuri).",
    "Cercetare și aplicații nucleare."
  ],
  "notable_properties": {
    "electronegativity": 1.36,
    "ionization_energy": 633.1,
    "atomic_radius": 162,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": "15.8 W/(m·K)",
    "specific_heat_capacity": "25.52 J/(mol·K)"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic cunoscut.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu există deficit, deoarece nu este necesar organismului.",
    "excess_effects": "Sărurile de scandiu sunt iritante și pot afecta rinichii în doze mari."
  },
  "organic_compounds": {
    "overview": "Compușii organoscandiului sunt rari și utilizați mai ales în cataliză avansată.",
    "classes_with_examples": [
      "Complexe organometalice Sc–C (laboratoare de cercetare).",
      "Catalizatori pentru polimerizarea olefinelor."
    ],
    "role_in_organic_reactions": "Sc(III) poate acționa ca acid Lewis în sinteze selective."
  },
  "preparation_reactions": [
    {
      "equation": "Sc₂O₃ + 3 Ca → 2 Sc + 3 CaO",
      "notes": "Reducere cu calciu la temperaturi înalte."
    },
    {
      "equation": "Electroliza sărurilor de scandiu topite",
      "notes": "Metodă industrială suplimentară."
    }
  ],
  "chemical_properties": [
    "Reacționează cu acizii: 2 Sc + 6 HCl → 2 ScCl₃ + 3 H₂ ↑.",
    "Reacționează cu oxigenul: 4 Sc + 3 O₂ → 2 Sc₂O₃.",
    "Cu halogenii formează halogenuri: Sc + 3 Cl₂ → ScCl₃.",
    "La temperaturi înalte reacționează cu hidrogenul formând ScH₂.",
    "Formează compuși în care acționează aproape exclusiv ca Sc³⁺."
  ]
},
{
  "symbol": "Ti",
  "name": "Titanium",
  "nume_romana": "Titan",
  "atomic_number": 22,
  "atomic_weight": 47.867,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²",
  "group": 4,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu",
  "oxidation_states": [+2, +3, +4],
  "higher_oxidation_states": "+4",
  "compounds_with_hydrogen": ["TiH₂"],
  "melting_point": 1941,
  "boiling_point": 3560,
  "density": 4.506,
  "discovery": "Descoperit de William Gregor în 1791; identificat ca element de Martin Heinrich Klaproth în 1795.",
  "appearance": "Metal dur, dar ușor, cu luciu metalic; rezistent la coroziune și temperaturi înalte.",
  "discovered_in": "Minerale precum ilmenit (FeTiO₃) și rutil (TiO₂).",
  "abundance": "Al 9-lea cel mai abundent element în scoarța terestră (~0.6%), însă greu de purificat.",
  "uses": [
    "Industria aerospațială (fuselaje, motoare de avioane).",
    "Implanturi medicale (biocompatibil, nu este respins de organism).",
    "Producerea aliajelor Ti-Al pentru componente de mare rezistență.",
    "Pigmenți (TiO₂) în vopsele, creme UV și plastic.",
    "Industria militară (blindaje, proiectile, submarine)."
  ],
  "notable_properties": {
    "electronegativity": 1.54,
    "ionization_energy": 658.8,
    "atomic_radius": 147,
    "crystal_structure": "Hexagonal compact (hcp) la temperatura camerei; cubic centrat pe corp (bcc) la temperaturi înalte",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": "21.9 W/(m·K)",
    "specific_heat_capacity": "25.06 J/(mol·K)",
    "key_note": "Are unul dintre cele mai bune rapoarte rezistență/greutate dintre metale."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic cunoscut.",
    "role_in_human_body": "Biocompatibil — poate fi introdus în organism fără reacții imune.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Pulberile pot cauza iritații pulmonare dacă sunt inhalate."
  },
  "organic_compounds": {
    "overview": "Compușii organotitanici sunt importanți în cataliză.",
    "classes_with_examples": [
      "Alchil-titan: TiCl₄ folosit pentru reacții de polimerizare.",
      "Catalizatori Ziegler–Natta (TiCl₄ + AlEt₃) pentru producerea polietilenei și polipropilenei.",
      "Complexe de titan în sinteză enantioselectivă (compuși chirali)."
    ],
    "role_in_organic_reactions": "TiCl₄ este acid Lewis și favorizează formarea legăturilor C–C."
  },
  "preparation_reactions": [
    {
      "equation": "TiO₂ + 2 Cl₂ + C → TiCl₄ + CO₂",
      "notes": "Formarea tetraclorurii de titan (intermediar industrial)."
    },
    {
      "equation": "TiCl₄ + 4 Na → Ti + 4 NaCl",
      "notes": "Proces Kroll — metoda standard de producere a titanului metalic."
    }
  ],
  "chemical_properties": [
    "Rezistent la coroziune datorită stratului subțire de TiO₂ care se auto-formează.",
    "Reacționează cu halogenii: Ti + 2 Cl₂ → TiCl₄.",
    "Reacționează la temperaturi înalte cu oxigen: Ti + O₂ → TiO₂.",
    "Formează carburi și nitruri dure: Ti + N₂ → TiN.",
    "Titanul se pasivează în aer, făcându-l foarte durabil."
  ]
},
{
  "symbol": "V",
  "name": "Vanadium",
  "nume_romana": "Vanadiu",
  "atomic_number": 23,
  "atomic_weight": 50.9415,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²",
  "group": 5,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu",
  "oxidation_states": [-1, 0, +2, +3, +4, +5],
  "higher_oxidation_states": "+5",
  "compounds_with_hydrogen": ["VH₂"],
  "melting_point": 2183,
  "boiling_point": 3680,
  "density": 6.0,
  "discovery": "Descoperit în 1801 de Andrés Manuel del Río; confirmat în 1830 de Nils Sefström.",
  "appearance": "Metal dur, lucios, rezistent la coroziune și abrasivitate.",
  "discovered_in": "Mineralul patronit (VS₄) și în minereuri de uraniu.",
  "abundance": "Se găsește în cantități mici în peste 60 de minerale; poate fi extras din zguri metalurgice.",
  "uses": [
    "Aliaje de oțel foarte rezistente (scule, arcuri, arme, aeronave).",
    "Aliaje Ti-V în industria aerospațială.",
    "Catalizator pentru producerea acidului sulfuric (V₂O₅).",
    "Electroliți în baterii redox cu vanadiu (stocare energie regenerabilă).",
    "Pigmenți și materiale ceramice (oxizi colorați)."
  ],
  "notable_properties": {
    "electronegativity": 1.63,
    "ionization_energy": 650.9,
    "atomic_radius": 134,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": "30.7 W/(m·K)",
    "specific_heat_capacity": "24.89 J/(mol·K)",
    "special_note": "Prezintă multe stări de oxidare → oxizi de vanadiu au culori diferite (foarte folosiți în chimie)."
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în urme în organism.",
    "role_in_human_body": "Posibil rol în metabolismul glucozei (nu este esențial confirmat).",
    "deficiency_effects": "Nu există efecte semnificative cunoscute.",
    "excess_effects": "Compușii de vanadiu pot fi toxici → iritații pulmonare, efecte asupra sistemului nervos."
  },
  "organic_compounds": {
    "overview": "Compușii organovanadici sunt catalizatori importanți în reacții de oxidare.",
    "classes_with_examples": [
      "Vanadoceni (Cp₂V) — compuși organometalici de cercetare.",
      "Complexe V(V) utilizate în epoxidarea olefinelor.",
      "V₂O₅ — catalizator major pentru oxidări industriale."
    ],
    "role_in_organic_reactions": "V₂O₅ este catalizator în producerea H₂SO₄ (proces Contact) și în epoxidări selective."
  },
  "preparation_reactions": [
    {
      "equation": "V₂O₅ + 5 Ca → 2 V + 5 CaO",
      "notes": "Reducere cu calciu."
    },
    {
      "equation": "VCl₄ + H₂ → V + 4 HCl",
      "notes": "Reducere cu hidrogen la temperaturi înalte."
    }
  ],
  "chemical_properties": [
    "Reacționează cu oxigenul: 4 V + 3 O₂ → 2 V₂O₃.",
    "Formează oxizi colorați în funcție de starea de oxidare:",
    "V(II) — violet, V(III) — verde, V(IV) — albastru, V(V) — galben.",
    "Reacționează cu halogeni: 2 V + 5 Cl₂ → 2 VCl₅.",
    "Formează carburi foarte dure și stabile."
  ]
},
{
  "symbol": "Cr",
  "name": "Chromium",
  "nume_romana": "Crom",
  "atomic_number": 24,
  "atomic_weight": 51.9961,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹",
  "group": 6,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Argintiu-strălucitor",
  "oxidation_states": [2, 3, 6],
  "higher_oxidation_states": "+6",
  "compounds_with_hydrogen": [],
  "melting_point": 2180,
  "boiling_point": 2944,
  "density": 7.19,
  "discovery": "Descoperit în 1797 de Louis Nicolas Vauquelin.",
  "appearance": "Metal dur, lucios, foarte rezistent la coroziune datorită formării unui strat subțire de oxid protector.",
  "discovered_in": "Mineralul crocoită (PbCrO₄).",
  "abundance": "Relativ abundent în scoarța terestră; cel mai des găsit ca FeCr₂O₄ (cromit).",
  "uses": [
    "Oțel inoxidabil (Cr ~ 12–20% în compoziție).",
    "Placare cu crom (strat anticoroziv și decorativ).",
    "Pigmenți (verde crom, galben crom).",
    "Catalizatori în reacții chimice industriale.",
    "Componente pentru motoare, turbine și scule de înaltă rezistență."
  ],
  "notable_properties": {
    "electronegativity": 1.66,
    "ionization_energy": 652.9,
    "atomic_radius": 128,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Antiferomagnetic",
    "thermal_conductivity": "93.9 W/(m·K)",
    "specific_heat_capacity": "23.35 J/(mol·K)",
    "special_note": "Stratul de Cr₂O₃ format la suprafață conferă rezistența caracteristică la coroziune."
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în cantități foarte mici.",
    "role_in_human_body": "Rol posibil în reglarea metabolismului glucozei (legat de insulina), dar nesigur.",
    "deficiency_effects": "Poate *agrava* reglarea glicemiei (în cazuri rare).",
    "excess_effects": "Compușii Cr(VI) sunt *cancerigeni* și foarte toxici. Cr(III) este mult mai puțin toxic."
  },
  "organic_compounds": {
    "overview": "Compușii organocromului sunt utilizați în sinteză și cataliză.",
    "classes_with_examples": [
      "Ciclohexadien-crom (arene-Cr complex).",
      "Complexe Cr(CO)₆ — utilizate în cataliză.",
      "Reactivi de oxidare cu Cr(VI): dicromat (K₂Cr₂O₇), cromat (K₂CrO₄)."
    ],
    "role_in_organic_reactions": "Cr(VI) este folosit pentru *oxidarea* alcoolilor la aldehide/ketone (Jones, PCC, PDC)."
  },
  "preparation_reactions": [
    {
      "equation": "FeCr₂O₄ + 4 C → Fe + 2 Cr + 4 CO",
      "notes": "Reducere carbotermică a cromitului — metoda industrială."
    },
    {
      "equation": "Cr₂O₃ + 2 Al → 2 Cr + Al₂O₃",
      "notes": "Reacția aluminotermică (proces Goldschmidt)."
    }
  ],
  "chemical_properties": [
    "Reacționează cu halogeni: 2 Cr + 3 Cl₂ → 2 CrCl₃.",
    "Cromul formează oxizi colorați:",
    "Cr₂O₃ (oxid de crom (III)) — verde, stabil.",
    "CrO₃ (oxid de crom (VI)) — roșu-închis, oxidant puternic.",
    "Cu oxigenul: 4 Cr + 3 O₂ → 2 Cr₂O₃.",
    "Cr(VI) este un oxidant agresiv și foarte toxic.",
    "Cr(III) este mai stabil și mai puțin toxic."
  ]
},
{
  "symbol": "Mn",
  "name": "Manganese",
  "nume_romana": "Mangan",
  "atomic_number": 25,
  "atomic_weight": 54.938,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²",
  "group": 7,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu",
  "oxidation_states": [-3, -2, -1, 0, +1, +2, +3, +4, +6, +7],
  "higher_oxidation_states": "+7",
  "compounds_with_hydrogen": [],
  "melting_point": 1519,
  "boiling_point": 2334,
  "density": 7.21,
  "discovery": "Izolat în 1774 de Johan Gottlieb Gahn.",
  "appearance": "Metal fragil, de culoare gri-argintie; formează multe oxizi și săruri intens colorate.",
  "discovered_in": "Mineralul piroluzit (MnO₂), care a fost folosit istoric pentru decolorarea sticlei.",
  "abundance": "Destul de răspândit în scoarța terestră (~0.1%); se găsește în minereuri precum psilomelan și piroluzit.",
  "uses": [
    "Producerea oțelurilor și aliajelor rezistente (de ex. oțel Hadfield — rezistent la șocuri).",
    "Permanganatul de potasiu (KMnO₄) — agent oxidant în chimie și medicină.",
    "Celule electrice (baterii *Leclanché* și alcaline — MnO₂ în catod).",
    "Pigmenți pentru ceramică și sticlă.",
    "Îndepărtarea fierului și hidrogenului sulfurat din apă."
  ],
  "notable_properties": {
    "electronegativity": 1.55,
    "ionization_energy": 717.3,
    "atomic_radius": 127,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": "7.81 W/(m·K)",
    "specific_heat_capacity": "26.32 J/(mol·K)",
    "special_note": "Manganul formează *oxidii cei mai colorați din toată chimia*."
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în enzime, oase și ficat.",
    "role_in_human_body": "Cofactor enzimatic în metabolismul carbohidraților și lipidelor.",
    "deficiency_effects": "Slăbirea oaselor, tulburări metabolice.",
    "excess_effects": "Inhalarea prafului de Mn → *manganism* (afectare neurologică asemănătoare Parkinsonului)."
  },
  "organic_compounds": {
    "overview": "Compușii organomanganului sunt utilizați în sinteză avansată.",
    "classes_with_examples": [
      "Complexe mangan-carbonil: Mn₂(CO)₁₀.",
      "Catalizatori Mn(III) pentru reacții de oxidare selectivă."
    ],
    "role_in_organic_reactions": "KMnO₄ este un oxidant universal → transformă alchenele în dioli, alcoolii în acizi, etc."
  },
  "preparation_reactions": [
    {
      "equation": "MnO₂ + 4 HCl → MnCl₂ + 2 H₂O + Cl₂",
      "notes": "Reacție clasică de laborator (și sursă istorică de clor)."
    },
    {
      "equation": "MnO₂ + C → Mn + CO₂ (reducere la temperaturi foarte înalte)",
      "notes": "Metoda industrială."
    }
  ],
  "chemical_properties": [
    "Formează multiple oxizi colorați:",
    "MnO — verde, Mn₂O₃ — maro, MnO₂ — negru, Mn₂O₇ — verde-închis, KMnO₄ în soluție → violet intens.",
    "Permanganatul reacționează ca oxidant puternic:",
    "2 KMnO₄ + 5 H₂O₂ + 3 H₂SO₄ → K₂SO₄ + 2 MnSO₄ + 5 O₂ + 8 H₂O.",
    "Reacționează cu acizi diluați eliberând H₂.",
    "În soluții apoase, Mn(II) → roz pal.",
    "Mn(IV) și Mn(VII) sunt speciile cel mai des folosite în reacții redox."
  ]
},
{
  "symbol": "Fe",
  "name": "Iron",
  "nume_romana": "Fier",
  "atomic_number": 26,
  "atomic_weight": 55.845,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²",
  "group": 8,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-metalic",
  "oxidation_states": [0, +2, +3, +6],
  "higher_oxidation_states": "+6",
  "compounds_with_hydrogen": ["FeH", "FeH₂"],
  "melting_point": 1811,
  "boiling_point": 3134,
  "density": 7.874,
  "discovery": "Cunoscut din preistorie; folosit de civilizațiile antice (Epoca Fierului).",
  "appearance": "Metal dur, tenace, magnetic; se oxidează ușor formând rugină (Fe₂O₃∙nH₂O).",
  "discovered_in": "Minereuri precum hematit (Fe₂O₃), magnetit (Fe₃O₄), limonit, siderit.",
  "abundance": "Al patrulea cel mai abundent element în scoarța terestră (~5%); principal component al miezului Pământului.",
  "uses": [
    "Oțeluri și aliaje pentru construcții, poduri, clădiri, vehicule.",
    "Motoare, scule, unelte, structuri mecanice.",
    "Transformatoare și electromagneți (fier feromagnetic).",
    "Suplimente de fier pentru anemia feriprivă.",
    "Componente tehnologice precum armături, roți, șuruburi etc."
  ],
  "notable_properties": {
    "electronegativity": 1.83,
    "ionization_energy": 762.5,
    "atomic_radius": 126,
    "crystal_structure": "Cubic centrat pe corp (α-Fe), cubic față-centrare (γ-Fe) în funcție de temperatură",
    "magnetic_properties": "Feromagnetic (α-Fe)",
    "thermal_conductivity": "80.4 W/(m·K)",
    "specific_heat_capacity": "25.10 J/(mol·K)",
    "special_note": "Feromagnetismul fierului stă la baza motoarelor electrice și memoriilor magnetice."
  },
  "biology_facts": {
    "presence_in_human_body": "Component al hemoglobinei, mioglobinei și enzimelor redox.",
    "role_in_human_body": "Transportul oxigenului în sânge și funcționarea mitocondriilor.",
    "deficiency_effects": "Anemie feriprivă → oboseală, paloare, dificultăți respiratorii.",
    "excess_effects": "Hemocromatoză → depuneri toxice în ficat, inimă și pancreas."
  },
  "organic_compounds": {
    "overview": "Fierul formează compuși organometalici importanți.",
    "classes_with_examples": [
      "Feroce (Fe(C₅H₅)₂) — organometalic stabil și iconic.",
      "Complexe hemice: hemoglobină și citocromi (Fe în centrii porfirinici).",
      "Catalizatori Fe pentru reacții de cuplare și hidrogenare."
    ],
    "role_in_organic_reactions": "Catalizator în reacții redox, cofactor în enzime respiratorii."
  },
  "preparation_reactions": [
    {
      "equation": "Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂",
      "notes": "Reducere în furnal (industrie siderurgică)."
    },
    {
      "equation": "Fe₂O₃ + 2 Al → 2 Fe + Al₂O₃",
      "notes": "Reacție aluminotermică (reacția Goldschmidt)."
    }
  ],
  "chemical_properties": [
    "Ruginirea: 4 Fe + 3 O₂ + 6 H₂O → 4 Fe(OH)₃ → rugină.",
    "Cu acizi diluați: Fe + 2 HCl → FeCl₂ + H₂ ↑.",
    "Cu oxigen: 2 Fe + O₂ → 2 FeO; apoi FeO → Fe₂O₃ și Fe₃O₄.",
    "Oxidare Fe(II) → Fe(III) în aer umed.",
    "Feromagnetismul dispare peste temperatura Curie (~770°C)."
  ]
},
{
  "symbol": "Co",
  "name": "Cobalt",
  "nume_romana": "Cobalt",
  "atomic_number": 27,
  "atomic_weight": 58.933,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²",
  "group": 9,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-albăstrui lucios",
  "oxidation_states": [+2, +3],
  "higher_oxidation_states": "+3",
  "compounds_with_hydrogen": ["CoH₂"],
  "melting_point": 1768,
  "boiling_point": 3200,
  "density": 8.90,
  "discovery": "Recunoscut ca element de către Georg Brandt în 1735.",
  "appearance": "Metal dur, magnetic, rezistent la coroziune; are nuanță ușor albăstruie.",
  "discovered_in": "Minerale precum cobaltită (CoAsS) și eritrit (Co₃(AsO₄)₂).",
  "abundance": "Răspândit în cantități moderate; extras deseori împreună cu nichelul și cuprul.",
  "uses": [
    "Magneți permanenți puternici (aliaje Co–Sm, Co–Nd).",
    "Acumulatori litiu-ion și baterii pentru automobile electrice.",
    "Superaliaje rezistente la temperaturi pentru turbine și motoare cu reacție.",
    "Săruri de cobalt pentru pigmentarea sticlei și ceramicii (albastru cobalt).",
    "Vitamina B₁₂ (cobalamină) — are un atom de Co în centru."
  ],
  "notable_properties": {
    "electronegativity": 1.88,
    "ionization_energy": 760.4,
    "atomic_radius": 125,
    "crystal_structure": "Hexagonal compact (hcp) → cubic (fcc) la temperaturi înalte",
    "magnetic_properties": "Feromagnetic",
    "thermal_conductivity": "69.6 W/(m·K)",
    "specific_heat_capacity": "24.81 J/(mol·K)",
    "key_note": "Alături de Fe și Ni, cobaltul este unul dintre cele *trei metale feromagnetice naturale*."
  },
  "biology_facts": {
    "presence_in_human_body": "Este component central al vitaminei B₁₂.",
    "role_in_human_body": "Ajută la formarea globulelor roșii și la funcționarea sistemului nervos.",
    "deficiency_effects": "Deficit de B₁₂ → anemie, afectare nervoasă.",
    "excess_effects": "Doze mari pot afecta tiroida și pot fi toxice pentru inimă."
  },
  "organic_compounds": {
    "overview": "Complexele organocobaltului sunt utilizate în reacții avansate și biologie.",
    "classes_with_examples": [
      "Cobalamine — vitamina B₁₂.",
      "Carbena-Co și complexe pentru reacții radicalice.",
      "Catalizatori Co(II) pentru oxidări selective."
    ],
    "role_in_organic_reactions": "Complexele de cobalt pot controla reacții radicalice și pot cataliza reacții simetrice de cuplare."
  },
  "preparation_reactions": [
    {
      "equation": "Co₃O₄ + 4 H₂ → 3 Co + 4 H₂O",
      "notes": "Reducere cu hidrogen la temperaturi înalte."
    },
    {
      "equation": "CoCl₂ + Mg → Co + MgCl₂",
      "notes": "Metodă de laborator prin reducere metalică."
    }
  ],
  "chemical_properties": [
    "Se oxidează lent în aer, formând CoO și Co₃O₄.",
    "Reacționează cu acizi: Co + 2 HCl → CoCl₂ + H₂ ↑.",
    "Cu halogeni: Co + Cl₂ → CoCl₂.",
    "Co(III) formează complecși stabili, colorați (de exemplu: [Co(NH₃)₆]Cl₃ — galben).",
    "Sărurile de cobalt dau soluții *roz* în apă, care devin *albastre* când sunt deshidratate."
  ]
},
{
  "symbol": "Ni",
  "name": "Nickel",
  "nume_romana": "Nichel",
  "atomic_number": 28,
  "atomic_weight": 58.6934,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²",
  "group": 10,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Alb-argintiu cu tentă slabă gălbuie",
  "oxidation_states": [0, +2, +3],
  "higher_oxidation_states": "+3",
  "compounds_with_hydrogen": ["NiH", "NiH₂"],
  "melting_point": 1728,
  "boiling_point": 3186,
  "density": 8.908,
  "discovery": "Identificat de Axel Fredrik Cronstedt în 1751.",
  "appearance": "Metal dur, maleabil, rezistent la coroziune și oxidare; unul dintre cele trei metale feromagnetice.",
  "discovered_in": "Minerale precum pentlandită ((Fe,Ni)₉S₈) și garnierită (silicați de Ni).",
  "abundance": "Relativ comun, atât în scoarță, cât și în nucleul Pământului; prezent în meteoriți metalici.",
  "uses": [
    "Component principal în oțel inoxidabil (inox).",
    "Baterii Ni-Cd și baterii NMC / NCA pentru mașini electrice.",
    "Monede și contacte electrice.",
    "Catalizator în reacția de hidrogenare a uleiurilor.",
    "Acoperiri anticorozive (nichelare electrolitică)."
  ],
  "notable_properties": {
    "electronegativity": 1.91,
    "ionization_energy": 737.1,
    "atomic_radius": 124,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Feromagnetic",
    "thermal_conductivity": "90.9 W/(m·K)",
    "specific_heat_capacity": "26.07 J/(mol·K)",
    "special_note": "Rezistență ridicată la temperaturi mari și coroziune — excelent pentru aliaje industriale."
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în urme în unele enzime.",
    "role_in_human_body": "Rol posibil în cataliza unor procese enzimatice, dar nu este element esențial.",
    "deficiency_effects": "Nu sunt documentate deficite naturale.",
    "excess_effects": "Sărurile de nichel pot provoca dermatită alergică și sunt potențial cancerigene în doze mari."
  },
  "organic_compounds": {
    "overview": "Compușii organonichel sunt importanți în cataliză modernă.",
    "classes_with_examples": [
      "Tetracarbonil de nichel: Ni(CO)₄ — volatil, foarte toxic.",
      "Catalizatori Ni(0)/Ni(II) pentru reacții de cuplare (Kumada, Suzuki, Negishi).",
      "Complexe cu fosfine pentru cataliza hidrogenării olefinelor."
    ],
    "role_in_organic_reactions": "Nichelul este catalizator în hidrogenare, alchilare și reacții de cuplare C–C în sinteză organică."
  },
  "preparation_reactions": [
    {
      "equation": "NiO + H₂ → Ni + H₂O",
      "notes": "Reducere cu hidrogen."
    },
    {
      "equation": "Ni(CO)₄ → Ni + 4 CO (încălzire)",
      "notes": "Proces Mond — purificare prin carbonilare."
    }
  ],
  "chemical_properties": [
    "Reacționează cu acizi diluați eliberând hidrogen.",
    "Formează complexe stabile cu liganzi (NH₃, fosfine etc.).",
    "Rezistent la coroziune datorită formării unui strat pasiv subțire.",
    "Se dizolvă ușor în HNO₃ concentrat (reacție oxidativă).",
    "Feromagnetic precum Fe și Co, dar mai slab."
  ]
},
{
  "symbol": "Cu",
  "name": "Copper",
  "nume_romana": "Cupru",
  "atomic_number": 29,
  "atomic_weight": 63.546,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹",
  "group": 11,
  "period": 4,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Roșu-metalic caracteristic",
  "oxidation_states": [0, +1, +2],
  "higher_oxidation_states": "+2",
  "compounds_with_hydrogen": [],
  "melting_point": 1357.77,
  "boiling_point": 2835,
  "density": 8.96,
  "discovery": "Cunoscut din Antichitate; folosit încă din Epoca Cuprului (~5000 î.Hr.).",
  "appearance": "Metal moale, maleabil, conductor excelent de electricitate și căldură, cu culoare roșie distinctă.",
  "discovered_in": "Minerale precum calcopirită (CuFeS₂), cuprit (Cu₂O), malachit (Cu₂CO₃(OH)₂).",
  "abundance": "Răspândit moderat în scoarța terestră (~0.0068%), extras pe scară largă industrial.",
  "uses": [
    "Fire și cabluri electrice (excelent conductor electric).",
    "Instalații termice și radiatoare (bun conductor termic).",
    "Monede, bijuterii și obiecte decorative.",
    "Aliaje importante: bronz (Cu+Sn), alamă (Cu+Zn).",
    "Enzime biologice (citocromi, proteine cu Cu pentru transportul oxigenului la moluște)."
  ],
  "notable_properties": {
    "electronegativity": 1.90,
    "ionization_energy": 745.5,
    "atomic_radius": 128,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Diamagnetic slab",
    "thermal_conductivity": "401 W/(m·K)",
    "specific_heat_capacity": "24.44 J/(mol·K)",
    "special_note": "Al doilea cel mai bun conductor electric după argint."
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în enzime, ficat și sânge.",
    "role_in_human_body": "Esențial pentru formarea hemoglobinei, metabolism și funcția sistemului nervos.",
    "deficiency_effects": "Anemie, tulburări nervoase, imunitate scăzută.",
    "excess_effects": "Niveluri foarte mari pot provoca toxicitate hepatică (de ex., boala Wilson)."
  },
  "organic_compounds": {
    "overview": "Cuprul formează complexe utilizate în cataliză și biochimie.",
    "classes_with_examples": [
      "Cupru(I) halogenuri: CuCl, CuBr.",
      "Cupru(II) sulfat: CuSO₄·5H₂O (albastru intens).",
      "Cupru(I) catalizatori în reacții click (CuAAC)."
    ],
    "role_in_organic_reactions": "Catalizează reacții de cuplare C–N, C–C și reacții click (Huisgen 1,3-dipolar cycloaddition)."
  },
  "preparation_reactions": [
    {
      "equation": "CuO + H₂ → Cu + H₂O",
      "notes": "Reducere blândă în laborator."
    },
    {
      "equation": "Cu₂S + O₂ → 2 Cu + SO₂",
      "notes": "Partea finală a procesării minereurilor sulfuroase."
    }
  ],
  "chemical_properties": [
    "În aer umed formează patină verde (Cu₂(OH)₂CO₃).",
    "Cu acizi: Cu + 2 HCl → nu reacționează (HCl nu oxidează Cu).",
    "Cu acid azotic: 3 Cu + 8 HNO₃ → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O.",
    "Cu hidroxizi: Cu²⁺ + 2 OH⁻ → Cu(OH)₂ (precipitat albastru).",
    "Sărurile de cupru(II) dau soluții *albastre* caracteristice."
  ]
},
{
  "symbol": "Zn",
  "name": "Zinc",
  "nume_romana": "Zinc",
  "atomic_number": 30,
  "atomic_weight": 65.38,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²",
  "group": 12,
  "period": 4,
  "block": "d",
  "category": "Metal post-tranzițional",
  "color": "Gri-albăstrui",
  "oxidation_states": [+2],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["ZnH₂ (instabil)"],
  "melting_point": 692.68,
  "boiling_point": 1180,
  "density": 7.14,
  "discovery": "Identificat în Europa în secolul al XVI-lea; izolat de Andreas Sigismund Marggraf în 1746.",
  "appearance": "Metal fragil la temperatura camerei, dar maleabil la ~100–150°C; rezistent la coroziune prin pasivare.",
  "discovered_in": "Sphalerit (ZnS), smithsonit (ZnCO₃), hemimorfit (Zn₄Si₂O₇(OH)₂·H₂O).",
  "abundance": "Relativ abundent (~0.007% din scoarța terestră); unul dintre cele mai exploatate metale.",
  "uses": [
    "Galvanizare (acoperire cu Zn pentru protecția împotriva coroziunii — ex. țevi, șuruburi).",
    "Aliaj cu cupru → alamă (Cu+Zn).",
    "Baterii Zn–C și Zn–MnO₂.",
    "Oxidul de zinc (ZnO) în creme solare UV și cosmetice.",
    "Suplimente alimentare — zincul este esențial pentru sistemul imunitar."
  ],
  "notable_properties": {
    "electronegativity": 1.65,
    "ionization_energy": 906.4,
    "atomic_radius": 134,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "116 W/(m·K)",
    "specific_heat_capacity": "25.47 J/(mol·K)",
    "special_note": "Zincul se acoperă singur cu un strat subțire de ZnO → protecție naturală anticorozivă."
  },
  "biology_facts": {
    "presence_in_human_body": "Se găsește în piele, oase, mușchi, pancreas.",
    "role_in_human_body": "Cofactor pentru peste 300 de enzime; esențial pentru imunitate și vindecarea rănilor.",
    "deficiency_effects": "Imunitate scăzută, vindecare lentă, tulburări de gust/miros, căderea părului.",
    "excess_effects": "Dozele excesive pot afecta absorția cuprului → anemie și tulburări neurologice."
  },
  "organic_compounds": {
    "overview": "Compușii organozincici sunt folosiți în sinteză selectivă.",
    "classes_with_examples": [
      "Reactivi organozincici (R–Zn–X) — reactivi Reformatsky.",
      "Cuplare Negishi (catalizată de Ni/Pd) — importante în sinteza farmaceutică.",
      "Dietilzinc (Zn(C₂H₅)₂) — agent reducător puternic."
    ],
    "role_in_organic_reactions": "Zincul facilitează formarea legăturilor C–C în condiții blânde (selectiv și controlat)."
  },
  "preparation_reactions": [
    {
      "equation": "ZnS + O₂ → ZnO + SO₂",
      "notes": "Calcinare a minereului."
    },
    {
      "equation": "ZnO + C → Zn + CO",
      "notes": "Reducere în furnal."
    }
  ],
  "chemical_properties": [
    "Reacționează cu acizi diluați: Zn + 2 HCl → ZnCl₂ + H₂ ↑.",
    "Reacționează lent cu apa fierbinte: Zn + H₂O → ZnO + H₂.",
    "Cu oxigen: 2 Zn + O₂ → 2 ZnO (film protector alb).",
    "Cu alcalii formează zincat: Zn + 2 NaOH + 2 H₂O → Na₂[Zn(OH)₄] + H₂ ↑.",
    "Zn²⁺ dă soluții incolore; multe săruri sunt albe."
  ]
},
{
  "symbol": "Ga",
  "name": "Gallium",
  "nume_romana": "Galiu",
  "atomic_number": 31,
  "atomic_weight": 69.723,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹",
  "group": 13,
  "period": 4,
  "block": "p",
  "category": "Metal post-tranzițional",
  "color": "Argintiu-alb",
  "oxidation_states": [+1, +3],
  "higher_oxidation_states": "+3",
  "compounds_with_hydrogen": [],
  "melting_point": 29.76,
  "boiling_point": 2400,
  "density": 5.91,
  "discovery": "Descoperit de Paul-Émile Lecoq de Boisbaudran în 1875 prin spectroscopie.",
  "appearance": "Metal moale, lucios, curge la temperaturi ușor peste cea a corpului; nu este toxic.",
  "discovered_in": "Minerale precum bauxită și sfalerit (ZnS).",
  "abundance": "Răspândit în cantități mici în minereuri de aluminiu, zinc și cupru (~19 ppm în scoarță).",
  "uses": [
    "Semiconductori (GaAs, GaN) pentru lasere, LED-uri și microcipuri.",
    "Termometre de precizie în locul celor cu mercur.",
    "Oglinzi și acoperiri reflectorizante (nu oxidează ușor).",
    "Alliaj cu metale pentru puncte de topire controlate.",
    "Dispozitive optoelectronice (telecom, LIDAR, radare)."
  ],
  "notable_properties": {
    "electronegativity": 1.81,
    "ionization_energy": 578.8,
    "atomic_radius": 135,
    "crystal_structure": "Ortrombică",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "29 W/(m·K)",
    "specific_heat_capacity": "25.86 J/(mol·K)",
    "special_note": "Se topește în mână (29.8°C), dar are *punct de fierbere foarte mare* → gamă lichidă enormă."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Poate imita fierul în unele procese celulare (util în medicină).",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile de galiu pot afecta rinichii în concentrații mari."
  },
  "organic_compounds": {
    "overview": "Compușii organogaliu sunt utilizați în sinteză și electronică.",
    "classes_with_examples": [
      "Trihalogenuri de galiu (GaCl₃) — acizi Lewis.",
      "Galiu arene — catalizatori în reacții de acilare și alchilare.",
      "GaAs și GaN — semiconductori avansați."
    ],
    "role_in_organic_reactions": "GaCl₃ este acid Lewis folosit în reacții de Friedel–Crafts și polimerizare."
  },
  "preparation_reactions": [
    {
      "equation": "Ga₂O₃ + 3 H₂ → 2 Ga + 3 H₂O",
      "notes": "Reducere cu hidrogen."
    },
    {
      "equation": "Electroliza sărurilor de galiu topite",
      "notes": "Metodă industrială."
    }
  ],
  "chemical_properties": [
    "Se oxidează ușor în aer formând Ga₂O₃.",
    "Reacționează cu halogeni: 2 Ga + 3 Cl₂ → 2 GaCl₃.",
    "Se dizolvă în acizi: 2 Ga + 6 HCl → 2 GaCl₃ + 3 H₂ ↑.",
    "Reacționează cu NaOH: 2 Ga + 2 NaOH + 6 H₂O → 2 Na[Ga(OH)₄] + 3 H₂ ↑.",
    "Nu atacă sticla → poate fi păstrat în pipete/lame fără reacții."
  ]
},
{
  "symbol": "Ge",
  "name": "Germanium",
  "nume_romana": "Germaniu",
  "atomic_number": 32,
  "atomic_weight": 72.630,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²",
  "group": 14,
  "period": 4,
  "block": "p",
  "category": "Metaloid",
  "color": "Gri-argintiu",
  "oxidation_states": [0, +2, +4],
  "higher_oxidation_states": "+4",
  "compounds_with_hydrogen": ["GeH₄ (germaniu-hidru)"],
  "melting_point": 1211.40,
  "boiling_point": 3106,
  "density": 5.323,
  "discovery": "Descoperit de Clemens Winkler în 1886, confirmând predicțiile lui Mendeleev privind „eka-siliciul”.",
  "appearance": "Metaloid lucios, fragil, similar la aspect cu siliciul, dar mai dens.",
  "discovered_in": "Mineralul argirodit (Ag₈GeS₆) este primul în care a fost identificat.",
  "abundance": "Rar (~1.5 ppm în scoarță), produs secundar în rafinarea zincului și cărbunelui.",
  "uses": [
    "Semiconductori pentru tranzistoare și diode (istoric primele tranzistoare erau pe Ge).",
    "Fibra optică și lentile infraroșii (Ge are transparență în IR).",
    "Detectori de radiații gama și raze X (Ge purificat).",
    "Aditiv în aliaje pentru duritate și rezistență.",
    "Cataliză în sinteze organice (compuși organogermaniu)."
  ],
  "notable_properties": {
    "electronegativity": 2.01,
    "ionization_energy": 762.0,
    "atomic_radius": 122,
    "crystal_structure": "Cubic față-centrare (structură diamant)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "60.2 W/(m·K)",
    "specific_heat_capacity": "23.22 J/(mol·K)",
    "special_note": "Are bandă interzisă (~0.66 eV), ceea ce îl face semiconductor intrinsec."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu este esențial biologic.",
    "role_in_human_body": "Unele suplimente alternative afirmă beneficii, dar nu există suport clinic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Compușii organogermaniu pot provoca nefrotoxicitate în doze mari."
  },
  "organic_compounds": {
    "overview": "Compușii organogermaniu sunt utilizați ca intermediari și catalizatori.",
    "classes_with_examples": [
      "Germaniu-hidru: GeH₄ (inflamabil, instabil).",
      "Alchil și aril-germaniați (R₃GeX) în sinteză.",
      "Complexe Ge folosite în reacții de cuplare și hidrogenare."
    ],
    "role_in_organic_reactions": "Ge poate funcționa ca acid Lewis slab, facilitând unele reacții de formare a legăturilor C–C."
  },
  "preparation_reactions": [
    {
      "equation": "GeO₂ + H₂ → Ge + 2 H₂O",
      "notes": "Reducere cu hidrogen (metoda de purificare)."
    },
    {
      "equation": "Electroliză sau reducere carbotermică a oxizilor",
      "notes": "Metodă industrială generală."
    }
  ],
  "chemical_properties": [
    "Rezistă la acizi obișnuiți, dar se dizolvă în HNO₃ concentrat.",
    "Reacționează cu NaOH: Ge + 2 NaOH + H₂O → Na₂[GeO₃] + 2 H₂ ↑.",
    "Formează dioxid stabil: Ge + O₂ → GeO₂.",
    "Hidrura GeH₄ este periculoasă, instabilă și explozivă."
  ]
},
{
  "symbol": "As",
  "name": "Arsenic",
  "nume_romana": "Arsen",
  "atomic_number": 33,
  "atomic_weight": 74.9216,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³",
  "group": 15,
  "period": 4,
  "block": "p",
  "category": "Metaloid",
  "color": "Gri-argintiu (arsen metalic), galben (arsen amorf)",
  "oxidation_states": [-3, 0, +3, +5],
  "higher_oxidation_states": "+5",
  "compounds_with_hydrogen": ["AsH₃ (arsină — foarte toxică)"],
  "melting_point": null,
  "boiling_point": 613,
  "density": 5.73,
  "discovery": "Cunoscut din Antichitate; descris de Albertus Magnus (~1250).",
  "appearance": "Metaloid fragil, lucios; uneori găsit în formă galbenă, non-metalică.",
  "discovered_in": "Minerale precum arsenopirit (FeAsS) și realgar (As₄S₄).",
  "abundance": "Răspândit în cantități mici în scoarță (~1.5 ppm), des întâlnit în minereuri sulfuroase.",
  "uses": [
    "Arseniura de galiu (GaAs) pentru microcipuri de înaltă frecvență și LED-uri.",
    "Sticlă și ceramică specială (coloranți și clarificatori).",
    "Anumite pesticide și conservanți pentru lemn (restrictive din cauza toxicității).",
    "În trecut → pigment verde de arsen ‘Scheele’ (toxic, aproape dispărut).",
    "Detectoare infraroșu și dispozitive cu laser."
  ],
  "notable_properties": {
    "electronegativity": 2.18,
    "ionization_energy": 947.0,
    "atomic_radius": 114,
    "crystal_structure": "Romboedric (arsen gri)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "50 W/(m·K)",
    "specific_heat_capacity": "24.64 J/(mol·K)",
    "special_note": "Compușii de arsen sunt notorii pentru *toxicitate severă*."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu este necesar; organismul nu are mecanisme de utilizare sau detoxifiere eficiente.",
    "deficiency_effects": "Nu există deficit (nu este element esențial).",
    "excess_effects": "Toxic sever: inhibă enzimele, provoacă necroză tisulară, cancer (As este *carcinogen clasa 1*)."
  },
  "organic_compounds": {
    "overview": "Compușii organoarseniali au fost folosiți în medicină și pesticide, dar majoritatea sunt interziși azi.",
    "classes_with_examples": [
      "Arsină (AsH₃) — gaz letal, folosit uneori în doparea semiconductorilor.",
      "Lewisite (ClCH=CH–AsCl₂) — agent chimic de război (blisterant).",
      "Roxarsona — aditiv veterinar (restricționat în prezent)."
    ],
    "role_in_organic_reactions": "GaAs și InAs sunt semiconductori esențiali în industrie (nu în sinteză organică)."
  },
  "preparation_reactions": [
    {
      "equation": "FeAsS + O₂ → FeO + SO₂ + As₂O₃",
      "notes": "Calcinarea arsenopiritului produce trioxid de arsen (materie primă industrială)."
    },
    {
      "equation": "2 As₂O₃ + 3 C → 4 As + 3 CO₂",
      "notes": "Reducere carbotermică pentru obținerea arsenului metalic."
    }
  ],
  "chemical_properties": [
    "Arsenul se sublimează (trece direct în vapori fără topire clară).",
    "Reacționează cu oxigen: 4 As + 3 O₂ → 2 As₂O₃ (oxid volatil, foarte toxic).",
    "Formează hidride toxice: As + H₂ → AsH₃ (cu cataliză).",
    "Arsenul + metale → arseniuri (ex. GaAs, InAs — semiconductori).",
    "Sărurile +3 sunt mai toxice decât cele +5."
  ]
},
{
  "symbol": "As",
  "name": "Arsenic",
  "nume_romana": "Arsen",
  "atomic_number": 33,
  "atomic_weight": 74.9216,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³",
  "group": 15,
  "period": 4,
  "block": "p",
  "category": "Metaloid",
  "color": "Gri-argintiu (arsen metalic), galben (arsen amorf)",
  "oxidation_states": [-3, 0, +3, +5],
  "higher_oxidation_states": "+5",
  "compounds_with_hydrogen": ["AsH₃ (arsină — foarte toxică)"],
  "melting_point": null,
  "boiling_point": 613,
  "density": 5.73,
  "discovery": "Cunoscut din Antichitate; descris de Albertus Magnus (~1250).",
  "appearance": "Metaloid fragil, lucios; uneori găsit în formă galbenă, non-metalică.",
  "discovered_in": "Minerale precum arsenopirit (FeAsS) și realgar (As₄S₄).",
  "abundance": "Răspândit în cantități mici în scoarță (~1.5 ppm), des întâlnit în minereuri sulfuroase.",
  "uses": [
    "Arseniura de galiu (GaAs) pentru microcipuri de înaltă frecvență și LED-uri.",
    "Sticlă și ceramică specială (coloranți și clarificatori).",
    "Anumite pesticide și conservanți pentru lemn (restrictive din cauza toxicității).",
    "În trecut → pigment verde de arsen ‘Scheele’ (toxic, aproape dispărut).",
    "Detectoare infraroșu și dispozitive cu laser."
  ],
  "notable_properties": {
    "electronegativity": 2.18,
    "ionization_energy": 947.0,
    "atomic_radius": 114,
    "crystal_structure": "Romboedric (arsen gri)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "50 W/(m·K)",
    "specific_heat_capacity": "24.64 J/(mol·K)",
    "special_note": "Compușii de arsen sunt notorii pentru *toxicitate severă*."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu este necesar; organismul nu are mecanisme de utilizare sau detoxifiere eficiente.",
    "deficiency_effects": "Nu există deficit (nu este element esențial).",
    "excess_effects": "Toxic sever: inhibă enzimele, provoacă necroză tisulară, cancer (As este *carcinogen clasa 1*)."
  },
  "organic_compounds": {
    "overview": "Compușii organoarseniali au fost folosiți în medicină și pesticide, dar majoritatea sunt interziși azi.",
    "classes_with_examples": [
      "Arsină (AsH₃) — gaz letal, folosit uneori în doparea semiconductorilor.",
      "Lewisite (ClCH=CH–AsCl₂) — agent chimic de război (blisterant).",
      "Roxarsona — aditiv veterinar (restricționat în prezent)."
    ],
    "role_in_organic_reactions": "GaAs și InAs sunt semiconductori esențiali în industrie (nu în sinteză organică)."
  },
  "preparation_reactions": [
    {
      "equation": "FeAsS + O₂ → FeO + SO₂ + As₂O₃",
      "notes": "Calcinarea arsenopiritului produce trioxid de arsen (materie primă industrială)."
    },
    {
      "equation": "2 As₂O₃ + 3 C → 4 As + 3 CO₂",
      "notes": "Reducere carbotermică pentru obținerea arsenului metalic."
    }
  ],
  "chemical_properties": [
    "Arsenul se sublimează (trece direct în vapori fără topire clară).",
    "Reacționează cu oxigen: 4 As + 3 O₂ → 2 As₂O₃ (oxid volatil, foarte toxic).",
    "Formează hidride toxice: As + H₂ → AsH₃ (cu cataliză).",
    "Arsenul + metale → arseniuri (ex. GaAs, InAs — semiconductori).",
    "Sărurile +3 sunt mai toxice decât cele +5."
  ]
},
{
  "symbol": "Se",
  "name": "Selenium",
  "nume_romana": "Seleniu",
  "atomic_number": 34,
  "atomic_weight": 78.971,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴",
  "group": 16,
  "period": 4,
  "block": "p",
  "category": "Nemeral (metaloid în unele forme)",
  "color": "Roșu (amorf), gri-metalic (cristalin), negru (vitros)",
  "oxidation_states": [-2, 0, +2, +4, +6],
  "higher_oxidation_states": "+6",
  "compounds_with_hydrogen": ["H₂Se (selenură de hidrogen) — foarte toxică"],
  "melting_point": 221,
  "boiling_point": 685,
  "density": 4.81,
  "discovery": "Descoperit de Jöns Jacob Berzelius în 1817.",
  "appearance": "Poate apărea ca pulbere roșie, solid negru lucios sau metalic gri semiconductiv.",
  "discovered_in": "Reziduuri de la producția de acid sulfuric (pirite bogate în Se).",
  "abundance": "Rar (~0.05 ppm în scoarță), obținut ca produs secundar din rafinarea cuprului.",
  "uses": [
    "Fotocelule și panouri solare (Se este semiconductor sensibil la lumină).",
    "Vitre și emailuri colorate (roșu/portocaliu).",
    "Aditiv în sticlă pentru neutralizarea nuanței verzi.",
    "Suplimente nutritive pentru glanda tiroidă (în cantități mici).",
    "Produse cosmetice împotriva mătreții (selenură de zinc)."
  ],
  "notable_properties": {
    "electronegativity": 2.55,
    "ionization_energy": 941.0,
    "atomic_radius": 116,
    "crystal_structure": "Trigonal (forma gri semiconductivă)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "2.55 W/(m·K)",
    "specific_heat_capacity": "25.36 J/(mol·K)",
    "special_note": "Conductivitatea electrică crește *puternic* sub lumină → principiu pentru fotodetecție."
  },
  "biology_facts": {
    "presence_in_human_body": "Parte a enzimelor antioxidante (glutation-peroxidaza) și hormonilor tiroidieni.",
    "role_in_human_body": "Protejează celulele de stres oxidativ și reglează funcția tiroidiană (convertirea T4 → T3).",
    "deficiency_effects": "Hipotiroidism, oboseală, imunitate scăzută; în caz extrem → boala Keshan (cardiacă).",
    "excess_effects": "Selenoza — căderea părului, miros de usturoi în respirație, leziuni unghiale (toxicitate cronică)."
  },
  "organic_compounds": {
    "overview": "Compușii organoseleniu apar în enzime și sinteză organică.",
    "classes_with_examples": [
      "Selenocisteină — aminoacid esențial în enzime antioxidante.",
      "Selenuri organice (R–Se–R′) — catalizatori pentru reacții redox.",
      "Selenuri aromatice folosite în reacții de substituție controlată."
    ],
    "role_in_organic_reactions": "Compușii organoseleniu pot transfera selectiv grupări sau pot cataliza oxidări blânde."
  },
  "preparation_reactions": [
    {
      "equation": "Cu₂Se + O₂ → CuO + Se",
      "notes": "Obținere din reziduuri metalurgice."
    },
    {
      "equation": "SeO₂ + SO₂ → Se + SO₃",
      "notes": "Reducerea dioxidului de seleniu."
    }
  ],
  "chemical_properties": [
    "Reacționează cu oxigenul: Se + O₂ → SeO₂ (oxid volatil, în miros de hrean).",
    "Hidrura H₂Se este foarte toxică și instabilă.",
    "Formează selenuri metalice, unele semiconductoare (ex. Cu₂Se, PbSe).",
    "În soluție Se(IV) și Se(VI) formează selenite și selenate."
  ]
},
{
  "symbol": "Br",
  "name": "Bromine",
  "nume_romana": "Brom",
  "atomic_number": 35,
  "atomic_weight": 79.904,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵",
  "group": 17,
  "period": 4,
  "block": "p",
  "category": "Halogen",
  "color": "Roșu-brun închis (lichid)",
  "oxidation_states": [-1, +1, +3, +5],
  "higher_oxidation_states": "+5",
  "compounds_with_hydrogen": ["HBr (acid bromhidric)"],
  "melting_point": -7.2,
  "boiling_point": 58.8,
  "density": 3.12,
  "discovery": "Descoperit în 1826 de Antoine-Jérôme Balard.",
  "appearance": "Lichid roșu-brun, volatil, cu vapori portocaliu-roșiatici, miros iritant și sufocant.",
  "discovered_in": "Apă de mare și saramuri, prin oxidarea ionilor bromură.",
  "abundance": "Relativ rar în scoarță; se obține industrial din sare și apa marină.",
  "uses": [
    "Compuși pentru fotografie și developare (bromuri de argint).",
    "Agenți ignifugi (în materiale plastice și textile).",
    "Medicamente și sedative (istoric, bromurile se foloseau în calmante).",
    "Adăugat în unele lichide de frână și uleiuri industriale.",
    "Produse pentru tratarea apei (bromuri și hipobromit)."
  ],
  "notable_properties": {
    "electronegativity": 2.96,
    "ionization_energy": 1139.9,
    "atomic_radius": 120,
    "crystal_structure": "Ortorombică (în stare solidă)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "0.12 W/(m·K)",
    "specific_heat_capacity": "75.69 J/(mol·K)",
    "special_note": "Singurul nemetal care este **lichid** la temperatura camerei."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu este esențial biologic.",
    "role_in_human_body": "Nu are rol metabolic stabil.",
    "deficiency_effects": "Nu există deficit fiziologic.",
    "excess_effects": "Vapori și soluțiile → iritație severă a căilor respiratorii, ochilor și pielii; poate afecta sistemul nervos."
  },
  "organic_compounds": {
    "overview": "Bromul este folosit în reacții de *bromurare* și sinteză organică.",
    "classes_with_examples": [
      "Alchil bromuri (R–Br): intermediare pentru sinteza altor compuși organici.",
      "Acid bromhidric (HBr): agent pentru substituția alcoolilor.",
      "Bromură de benzen (C₆H₅Br): precursor în sinteze aromatice."
    ],
    "role_in_organic_reactions": "Bromul adaugă *selectiv* la duble legături (testul de insaturare)."
  },
  "preparation_reactions": [
    {
      "equation": "2 Br⁻ + Cl₂ → 2 Br₂ + 2 Cl⁻",
      "notes": "Metodă industrială: oxidarea ionilor bromură cu clor."
    },
    {
      "equation": "Br₂ + SO₂ + 2 H₂O → 2 HBr + H₂SO₄",
      "notes": "Obținerea bromurii de hidrogen."
    }
  ],
  "chemical_properties": [
    "Reacționează cu metale: 2 Fe + 3 Br₂ → 2 FeBr₃.",
    "Adaugă la alchene: C₂H₄ + Br₂ → C₂H₄Br₂ (decolorarea bromului, *testul pentru legături duble*).",
    "Cu hidrogen: H₂ + Br₂ ⇌ 2 HBr (echilibru lent, catalizabil).",
    "În mediu bazic formează bromuri și hipobromit (BrO⁻)."
  ]
},
{
  "symbol": "Kr",
  "name": "Krypton",
  "nume_romana": "Kripton",
  "atomic_number": 36,
  "atomic_weight": 83.798,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶",
  "group": 18,
  "period": 4,
  "block": "p",
  "category": "Gaz nobil (inerte)",
  "color": "Incolor",
  "oxidation_states": [0],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": [],
  "melting_point": -157.37,
  "boiling_point": -153.22,
  "density": 3.749 ,
  "discovery": "Descoperit în 1898 de William Ramsay și Morris Travers prin distilarea aerului lichefiat.",
  "appearance": "Gaz incolor, inodor și inert chimic în condiții normale.",
  "discovered_in": "Aerul atmosferic (~1 ppm).",
  "abundance": "Foarte rar în atmosferă; se obține prin separarea aerului lichefiat.",
  "uses": [
    "Tuburi cu descărcare în gaz (lumină alb-violacee caracteristică).",
    "Lasere cu Kr și excimeri (KrF) pentru chirurgie oculară și litografie.",
    "Lămpi cu intensitate mare (proiectoare, faruri auto premium).",
    "Izolație termică în ferestre cu geam dublu (Kr în spațiul dintre panouri).",
    "Standard metrologic pentru definirea metrului (istoric, linia spectrului Kr)."
  ],
  "notable_properties": {
    "electronegativity": "practic nu se aplică (gaz inert)",
    "ionization_energy": 1350.8,
    "atomic_radius": 202,
    "crystal_structure": "Cubic față-centrare (solid la temperaturi foarte joase)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "0.00943 W/(m·K)",
    "specific_heat_capacity": "20.785 J/(mol·K)",
    "special_note": "Liniile spectrale de Kr au fost folosite pentru *definirea lungimii metrului* (până în 1983)."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Inert — nu reacționează metabolic, nu se acumulează.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "În concentrații mari poate provoca hipoxie prin „diluarea” oxigenului, dar nu este toxic în sine."
  },
  "organic_compounds": {
    "overview": "Nu formează compuși organici stabili.",
    "classes_with_examples": [
      "În condiții extreme pot fi formați compuși exotici precum KrF₂ (fluorură de kripton)."
    ],
    "role_in_organic_reactions": "Niciun rol — gaz nobil inert."
  },
  "preparation_reactions": [
    {
      "equation": "Separarea aerului lichefiat prin distilație fracționată",
      "notes": "Singura metodă industrială reală."
    }
  ],
  "chemical_properties": [
    "Extrem de inert în condiții standard.",
    "Poate forma fluoruri instabile la presiuni mari: Kr + F₂ → KrF₂.",
    "Nu arde, nu susține arderea.",
    "Nu reacționează cu majoritatea substanțelor chimice."
  ]
},
{
  "symbol": "Rb",
  "name": "Rubidium",
  "nume_romana": "Rubidiu",
  "atomic_number": 37,
  "atomic_weight": 85.4678,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s¹",
  "group": 1,
  "period": 5,
  "block": "s",
  "category": "Metal alcalin",
  "color": "Argintiu-deschis",
  "oxidation_states": [+1],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["RbH"],
  "melting_point": 39.31,
  "boiling_point": 688,
  "density": 1.53,
  "discovery": "Descoperit în 1861 de Robert Bunsen și Gustav Kirchhoff prin analiză spectrală.",
  "appearance": "Metal moale, foarte reactiv; se păstrează în ulei sau atmosferă inertă.",
  "discovered_in": "Ape minerale și minereuri precum lepidolitul.",
  "abundance": "Relativ răspândit (similar Li și Sr), dar dispersat în minerale → nu se găsește liber.",
  "uses": [
    "Ceasuri atomice de înaltă precizie (standard de timp bazat pe Rb-87).",
    "Cercetare în fizică cuantică: condensare Bose–Einstein cu atomi de Rb.",
    "Fotocelule și tuburi electronice (Rb are funcție de emisie fotoelectrică joasă).",
    "Medicină nucleară — izotopul Rb-82 în imagistică cardiacă.",
    "Aliat cu potasiu pentru răcirea laser a atomilor."
  ],
  "notable_properties": {
    "electronegativity": 0.82,
    "ionization_energy": 403,
    "atomic_radius": 248,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 58,
    "specific_heat_capacity": 31.06,
    "special_note": "Foarte reactiv — reacționează exploziv cu apa, generând flăcări violet-violacee."
  },
  "biology_facts": {
    "presence_in_human_body": "Apare în urme, dar nu are funcție metabolică.",
    "role_in_human_body": "Poate substitui parțial potasiul, dar nu este benefic.",
    "deficiency_effects": "Nu există rol biologic → nu există deficit.",
    "excess_effects": "Concentrații mari pot afecta funcția nervos-musculară (înlocuiește K⁺ în celule)."
  },
  "organic_compounds": {
    "overview": "Rubidiul formează baze foarte puternice și săruri ionice.",
    "classes_with_examples": [
      "RbOH — bază extrem de puternică.",
      "Rb₂CO₃ — sare solubilă.",
      "RbH — hidrid reactiv, agent reducător."
    ],
    "role_in_organic_reactions": "Util în sinteze organometalice și reacții de deprotonare extremă."
  },
  "preparation_reactions": [
    {
      "equation": "RbCl + Ca → Rb + CaCl₂",
      "notes": "Reducere metalică."
    },
    {
      "equation": "Electroliza sărurilor de rubidiu topite",
      "notes": "Metodă industrială standard."
    }
  ],
  "chemical_properties": [
    "Cu apa: 2 Rb + 2 H₂O → 2 RbOH + H₂ ↑ (reacție violentă, poate produce flăcări).",
    "Cu oxigenul: 4 Rb + O₂ → 2 Rb₂O (oxid).",
    "Cu halogeni: 2 Rb + Cl₂ → 2 RbCl (săruri albe, foarte solubile).",
    "Reacționează spontan în aer → trebuie păstrat în ulei sau argon."
  ]
},
{
  "symbol": "Sr",
  "name": "Strontium",
  "nume_romana": "Stronțiu",
  "atomic_number": 38,
  "atomic_weight": 87.62,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 5s²",
  "group": 2,
  "period": 5,
  "block": "s",
  "category": "Metal alcalino-pământos",
  "color": "Argintiu-gri",
  "oxidation_states": [+2],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["SrH₂"],
  "melting_point": 777,
  "boiling_point": 1377,
  "density": 2.64,
  "discovery": "Identificat ca element în 1790 de Adair Crawford; izolat de Sir Humphry Davy în 1808.",
  "appearance": "Metal moale, reactiv, se oxidează rapid în aer; trebuie păstrat în ulei sau atmosferă inertă.",
  "discovered_in": "Mineralul strontianit (SrCO₃), denumit după localitatea Strontian (Scoția).",
  "abundance": "Moderată (~370 ppm în scoarță), comun în minerale precum celestina (SrSO₄).",
  "uses": [
    "Artificii roșii — compușii de stronțiu dau flacără roșu intens.",
    "Sticlă specială pentru ecrane TV și tuburi catodice (istoric).",
    "Tratarea osteoporozei (stronțiu ranelat — limite de utilizare din cauza riscurilor cardiace).",
    "Ceramică piezoelectrică (împreună cu titan — SrTiO₃).",
    "Cercetări în ceasuri atomice ultraprecise (isotop Sr-87)."
  ],
  "notable_properties": {
    "electronegativity": 0.95,
    "ionization_energy": 549.5,
    "atomic_radius": 215,
    "crystal_structure": "Cubic centrat pe față (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 35,
    "specific_heat_capacity": 26.4,
    "special_note": "Emite flacără roșie aprinsă — util în pirotehnie 🎆"
  },
  "biology_facts": {
    "presence_in_human_body": "Poate înlocui calciul în oase în proporție mică.",
    "role_in_human_body": "Nu este esențial; în medicină, anumite săruri au efect asupra densității osoase.",
    "deficiency_effects": "Nu se aplică (nu este necesar fiziologic).",
    "excess_effects": "Sr-90 (radioactiv) se acumulează în oase → cancer osos și leucemie (important în toxicologie nucleară)."
  },
  "organic_compounds": {
    "overview": "Stronțiul formează săruri ionice și hidride reactive.",
    "classes_with_examples": [
      "SrCO₃ — folosit în sticlă și pirotehnie.",
      "Sr(NO₃)₂ — colorant roșu pentru artificii.",
      "SrR₂ — compuși organostrontiu, agenți de deprotonare puternici (rare în practică)."
    ],
    "role_in_organic_reactions": "Hidridul de stronțiu (SrH₂) este agent reducător puternic."
  },
  "preparation_reactions": [
    {
      "equation": "SrO + Al → Sr + Al₂O₃",
      "notes": "Reducere aluminotermică."
    },
    {
      "equation": "Electroliza sărurilor de stronțiu topite",
      "notes": "Metodă industrială."
    }
  ],
  "chemical_properties": [
    "Reacționează cu apa: Sr + 2 H₂O → Sr(OH)₂ + H₂ ↑ (energic).",
    "Cu oxigenul: 2 Sr + O₂ → 2 SrO.",
    "Cu halogeni: Sr + Br₂ → SrBr₂ (flacără roșie intensă).",
    "Trebuie depozitat în ulei, deoarece se oxidează și se aprinde spontan în aer umed."
  ]
},
{
  "symbol": "Y",
  "name": "Yttrium",
  "nume_romana": "Ytriu",
  "atomic_number": 39,
  "atomic_weight": 88.905,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹ 5s²",
  "group": 3,
  "period": 5,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Argintiu-metalic",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["YH₂", "YH₃"],
  "melting_point": 1526,
  "boiling_point": 3337,
  "density": 4.47,
  "discovery": "Descoperit în 1794 de Johan Gadolin în mineralul găsit la Ytterby (Suedia).",
  "appearance": "Metal moale-argintiu, ușor maleabil, se oxidează lent în aer.",
  "discovered_in": "Mineralul gadolinit și alte minerale rare din pământurile rare.",
  "abundance": "Relativ răspândit (~33 ppm în scoarța terestră), dar dispersat — necesită tehnici speciale de extracție.",
  "uses": [
    "Fosfori pentru LED-uri albe și ecrane TV (Y₂O₃:Eu → roșu intens).",
    "Ceramică și materiale refractare la temperaturi înalte.",
    "Supraconductori pe bază de YBa₂Cu₃O₇ (YBCO) — supraconductivitate la temperaturi înalte.",
    "Lasere (YAG:Nd — cristal Y₃Al₅O₁₂ dopat cu neodim).",
    "Materiale osoase artificiale (biocompatibil)."
  ],
  "notable_properties": {
    "electronegativity": 1.22,
    "ionization_energy": 600,
    "atomic_radius": 212,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 17,
    "specific_heat_capacity": 26.53,
    "special_note": "Ytriu este esențial în fosforii roșii pentru LED-urile moderne 💡"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu este necesar în organism.",
    "deficiency_effects": "Nu există deficit (nu e element esențial).",
    "excess_effects": "Sărurile de ytriu pot cauza iritații pulmonare dacă sunt inhalate sub formă de pulbere."
  },
  "organic_compounds": {
    "overview": "Ytriul formează complecși organometalici folosiți în cataliză.",
    "classes_with_examples": [
      "YCl₃ — utilizat ca catalizator Lewis.",
      "Complexe organo-Y pentru reacții de polimerizare controlată."
    ],
    "role_in_organic_reactions": "Acționează ca acid Lewis în reacții de cuplare și polimerizare."
  },
  "preparation_reactions": [
    {
      "equation": "Y₂O₃ + 2 Al → 2 Y + Al₂O₃",
      "notes": "Reducere aluminotermică."
    },
    {
      "equation": "Electroliza sărurilor topite de YCl₃",
      "notes": "Metoda industrială principală."
    }
  ],
  "chemical_properties": [
    "Reacționează lent cu aerul formând Y₂O₃ la suprafață.",
    "Cu apa fierbinte: 2 Y + 6 H₂O → 2 Y(OH)₃ + 3 H₂ ↑.",
    "Cu halogeni: 2 Y + 3 Cl₂ → 2 YCl₃.",
    "Hidridele de ytriu (YH₂ / YH₃) sunt conductoare de hidrogen (stocare H₂)."
  ]
},
{
  "symbol": "Zr",
  "name": "Zirconium",
  "nume_romana": "Zirconiu",
  "atomic_number": 40,
  "atomic_weight": 91.224,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d² 5s²",
  "group": 4,
  "period": 5,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu",
  "oxidation_states": [+4],
  "higher_oxidation_states": "+4",
  "compounds_with_hydrogen": ["ZrH₂"],
  "melting_point": 1855,
  "boiling_point": 4409,
  "density": 6.52,
  "discovery": "Identificat în 1789 de Martin Heinrich Klaproth; izolat de Berzelius în 1824.",
  "appearance": "Metal dur, rezistent, lucios; foarte rezistent la coroziune și acizi.",
  "discovered_in": "Mineralul zircon (ZrSiO₄) — numele vine din cuvântul persan „zargun” = auriu-strălucitor.",
  "abundance": "Relativ răspândit (~165 ppm); obținut în special din zircon și baddeleyit.",
  "uses": [
    "Tuburi și învelișuri pentru combustibil nuclear (aproape nu absoarbe neutroni).",
    "Ceramică și materiale refractare (ZrO₂ → foarte rezistent termic).",
    "Implanturi dentare și proteze (biocompatibil).",
    "Straturi protectoare anticorozive.",
    "Catalizatori și suporturi catalitice."
  ],
  "notable_properties": {
    "electronegativity": 1.33,
    "ionization_energy": 640.1,
    "atomic_radius": 206,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 22.7,
    "specific_heat_capacity": 25.36,
    "special_note": "Rezistență foarte mare la coroziune + absorbție foarte mică a neutronilor → perfect pentru energie nucleară ⚛️"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Biocompatibil — folosit în implanturi fără reacții imune.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Pulberile inhalate pot afecta plămânii."
  },
  "organic_compounds": {
    "overview": "Compușii organozirconiu sunt importanți în sinteza fină.",
    "classes_with_examples": [
      "Cp₂ZrCl₂ (Catalizator Ziegler–Natta) — polimerizare etilenă/propilenă.",
      "Complexe de zirconocen pentru controlul stereochimiei polimerilor.",
      "ZrH₂ — hidrid utilizat pentru hidrogenări."
    ],
    "role_in_organic_reactions": "Zirconocenii controlează *tacticitatea* polimerilor (plasticuri precise)."
  },
  "preparation_reactions": [
    {
      "equation": "ZrCl₄ + 2 Mg → Zr + 2 MgCl₂",
      "notes": "Proces Kroll — metoda principală industrială."
    }
  ],
  "chemical_properties": [
    "Formează imediat un strat subțire de ZrO₂ → protecție anticorozivă.",
    "Reacționează cu halogeni: Zr + 2 Cl₂ → ZrCl₄.",
    "Cu oxigen: Zr + O₂ → ZrO₂ (ceramică extrem de dură).",
    "Hidrura ZrH₂ poate absorbi și elibera H₂ → stocare de hidrogen."
  ]
},
{
  "symbol": "Nb",
  "name": "Niobium",
  "nume_romana": "Niobiu",
  "atomic_number": 41,
  "atomic_weight": 92.906,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁴ 5s¹",
  "group": 5,
  "period": 5,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu",
  "oxidation_states": [+2, +3, +5],
  "higher_oxidation_states": "+5",
  "compounds_with_hydrogen": ["NbH", "NbH₂"],
  "melting_point": 2477,
  "boiling_point": 4744,
  "density": 8.57,
  "discovery": "Descoperit de Charles Hatchett în 1801; clarificat ca element separat de tantal abia în 1846.",
  "appearance": "Metal strălucitor, maleabil, foarte rezistent la coroziune și temperaturi ridicate.",
  "discovered_in": "Mineralul columbit (Fe, Mn)(Nb, Ta)₂O₆.",
  "abundance": "Relativ rar (~20 ppm în scoarță), extras din columbit-tantalit.",
  "uses": [
    "Superaliaje pentru turbine de avioane și motoare cu reacție.",
    "Supraconductori NbTi și Nb₃Sn folosiți în magneți MRI și acceleratoare de particule.",
    "Oțeluri microaliate (cantități mici cresc masiv rezistența mecanică).",
    "Implanturi medicale (biocompatibil, anticoroziv).",
    "Electronica de înaltă temperatură."
  ],
  "notable_properties": {
    "electronegativity": 1.6,
    "ionization_energy": 652.1,
    "atomic_radius": 198,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 53,
    "specific_heat_capacity": 24.6,
    "special_note": "Devine **supraconductor** la temperaturi joase → utilizat în magneți superputernici."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Biocompatibil → folosit în implanturi fără reacții inflamatorii.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Pulberile inhalate pot cauza iritații pulmonare."
  },
  "organic_compounds": {
    "overview": "Compușii organoniobiu sunt importanți în sinteze specializate.",
    "classes_with_examples": [
      "NbCl₅ — acid Lewis utilizat în sinteza organică.",
      "Complexe Nb-arene și Nb-carbonil — catalizatori în reacții redox."
    ],
    "role_in_organic_reactions": "NbCl₅ catalizează reacții de acilare și ciclizare selectivă."
  },
  "preparation_reactions": [
    {
      "equation": "Nb₂O₅ + 5 Ca → 2 Nb + 5 CaO",
      "notes": "Reducere metalică (similar cu titanul)."
    },
    {
      "equation": "NbCl₅ + 5 H₂ → Nb + 10 HCl",
      "notes": "Reducere cu hidrogen la temperaturi ridicate."
    }
  ],
  "chemical_properties": [
    "Foarte rezistent la coroziune datorită stratului subțire de Nb₂O₅.",
    "Reacționează cu halogeni formând halogenuri stabile (NbCl₅ etc.).",
    "Hidridele NbHₓ absorb și eliberează hidrogen reversibil → stocare H₂.",
    "În soluții acide nu se dizolvă ușor din cauza pasivării."
  ]
},
{
  "symbol": "Mo",
  "name": "Molybdenum",
  "nume_romana": "Molibden",
  "atomic_number": 42,
  "atomic_weight": 95.95,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s¹",
  "group": 6,
  "period": 5,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu",
  "oxidation_states": [+2, +3, +4, +5, +6],
  "higher_oxidation_states": "+6",
  "compounds_with_hydrogen": ["MoHₓ (hidride metastabile)"],
  "melting_point": 2623,
  "boiling_point": 4639,
  "density": 10.28,
  "discovery": "Identificat ca element în 1778 de Carl Wilhelm Scheele; izolat de Peter Hjelm în 1781.",
  "appearance": "Metal dur, rezistent, bun conductor, stabil la temperaturi ridicate.",
  "discovered_in": "Mineralul molibdenit (MoS₂) — adesea confundat istoric cu grafitul.",
  "abundance": "Moderată (~1.2 ppm în scoarță), extras din molibdenit ca produs secundar al minelor de cupru.",
  "uses": [
    "Oțeluri rapide și oțeluri inoxidabile (crește masiv rezistența la temperaturi și coroziune).",
    "Cataliză pentru hidrodesulfurarea petrolului (MoS₂ pe suport).",
    "Electrozi și piese pentru temperaturi înalte.",
    "Lubrifiant solid MoS₂ (reduce frecarea → aplicații tehnice).",
    "Enzime biologice cu rol în metabolismul azotului și sulfului."
  ],
  "notable_properties": {
    "electronegativity": 2.16,
    "ionization_energy": 684.3,
    "atomic_radius": 190,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 138,
    "specific_heat_capacity": 24.06,
    "special_note": "Are unul dintre cele mai înalte puncte de topire → excelent pentru materiale expuse la temperaturi extreme."
  },
  "biology_facts": {
    "presence_in_human_body": "Oligoelement esențial → cofactor al enzimelor molibdoenzime.",
    "role_in_human_body": "Metabolismul aminoacizilor cu sulf, detoxifierea în ficat, ciclul azotului.",
    "deficiency_effects": "Foarte rar → poate provoca tulburări neurologice și metabolice.",
    "excess_effects": "Excesul poate provoca simptome asemănătoare gutei (interferență cu metabolismul cuprului)."
  },
  "organic_compounds": {
    "overview": "Compușii organomolibden au utilizări în cataliză selectivă.",
    "classes_with_examples": [
      "Mo(CO)₆ — precursor în sinteză organometalică.",
      "Complexe MoS₂ — catalizatori de desulfurare în rafinare.",
      "Catalizatori Schrock pentru metateza olefinelor (premiu Nobel pentru chimie 2005)."
    ],
    "role_in_organic_reactions": "Cataliză în metateza olefinelor (creare/ruperi selective ale dublelor legături C=C)."
  },
  "preparation_reactions": [
    {
      "equation": "MoS₂ + O₂ → MoO₃ + SO₂",
      "notes": "Calcinarea molibdenitului."
    },
    {
      "equation": "MoO₃ + 3 H₂ → Mo + 3 H₂O",
      "notes": "Reducere cu hidrogen (metoda principală industrială)."
    }
  ],
  "chemical_properties": [
    "Reacționează cu oxigen la temperaturi mari → MoO₃ volatil.",
    "MoS₂ este foarte stabil termic și chimic (lubrifiant supraviețuiește chiar în vid).",
    "Formează complecși Mo(VI) solubili în mediu alcalin → molibdați (MoO₄²⁻).",
    "Molibdații pot forma *heteropolianioni* colorați în chimia analitică."
  ]
},
{
  "symbol": "Tc",
  "name": "Technetium",
  "nume_romana": "Technetiu",
  "atomic_number": 43,
  "atomic_weight": 98,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁵ 5s²",
  "group": 7,
  "period": 5,
  "block": "d",
  "category": "Metal de tranziție (radioactiv)",
  "color": "Gri-argintiu",
  "oxidation_states": [+4, +5, +6, +7],
  "higher_oxidation_states": "+7",
  "compounds_with_hydrogen": ["TcHₓ (hidride instabile)"],
  "melting_point": 2157,
  "boiling_point": 4265,
  "density": 11.49,
  "discovery": "Sintetizat în 1937 de Emilio Segrè și Carlo Perrier din fragmente rezultate în bombardamente nucleare.",
  "appearance": "Metal lucios, rezistent la coroziune; radioactive în toate formele sale.",
  "discovered_in": "Rezultat inițial al bombardării molibdenului cu neutroni.",
  "abundance": "Nu există natural în cantități semnificative; se produce în reactoare nucleare.",
  "uses": [
    "Imagistică medicală: izotopul **Tc-99m** pentru scanare SPECT (diagnostic tumori, organe).",
    "Marcatori radioactivi în medicină nucleară.",
    "Cercetare în coroziunea oțelului (straturi subțiri de Tc reduc coroziunea).",
    "Studiul proceselor biochimice datorită radioactivității controlate."
  ],
  "notable_properties": {
    "electronegativity": 1.9,
    "ionization_energy": 702,
    "atomic_radius": 183,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 50,
    "specific_heat_capacity": 24.27,
    "special_note": "Primul element *artificial* — numele vine din grecescul „technetos” = „fabricat”."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu se găsește natural.",
    "role_in_human_body": "Nu există rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate → poate produce leziuni tisulare, arsuri interne, risc cancerigen."
  },
  "organic_compounds": {
    "overview": "Compușii organotechnetiu sunt utilizați în medicină nucleară.",
    "classes_with_examples": [
      "Complexe Tc-99m legate de biomolecule → marcatori pentru imagistică.",
      "Complexe Tc(VII) — de obicei sub formă de pertechnetat (TcO₄⁻)."
    ],
    "role_in_organic_reactions": "Folosit pentru a urmări distribuția compușilor în organism (tracer)."
  },
  "preparation_reactions": [
    {
      "equation": "⁹⁸Mo + n → ⁹⁹Mo → ⁹⁹mTc + β⁻",
      "notes": "Lanțul standard în generatoarele medicale Mo/Tc."
    },
    {
      "equation": "²³⁵U fisiune → Tc (printre produsele de fisiune)",
      "notes": "Produs secundar în reactoarele nucleare."
    }
  ],
  "chemical_properties": [
    "Formează **pertechnetat** TcO₄⁻ (analog cu permanganatul, dar mai puțin oxidant).",
    "Stabil în stare de oxidare +7 în soluții apoase.",
    "Se depune pe suprafețe metalice → formează pelicule anticorozive.",
    "Cei mai importanți compuși sunt complecși coordonați (folosiți în medicină)."
  ]
},
{
  "symbol": "Ru",
  "name": "Ruthenium",
  "nume_romana": "Ruteniu",
  "atomic_number": 44,
  "atomic_weight": 101.07,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁷ 5s¹",
  "group": 8,
  "period": 5,
  "block": "d",
  "category": "Metal de tranziție (platinid)",
  "color": "Alb-argintiu",
  "oxidation_states": [+2, +3, +4, +6, +8],
  "higher_oxidation_states": "+8 (unul dintre puținele elemente ce pot atinge acest nivel)",
  "compounds_with_hydrogen": ["RuH₂", "RuH₃ (hidride de ruteniu, catalizatori)"],
  "melting_point": 2334,
  "boiling_point": 4150,
  "density": 12.37,
  "discovery": "Descoperit în 1844 de chimistul rus Karl Ernst Claus.",
  "appearance": "Metal dens, dur și foarte rezistent la coroziune.",
  "discovered_in": "Asociat cu platină în minereuri sud-americane și rusești.",
  "abundance": "Foarte rar (~1 ppb în scoarță) — se obține ca produs secundar din rafinarea platinei și nichelului.",
  "uses": [
    "Contacte electrice durabile (rezistență ridicată la uzură și coroziune).",
    "Cataliză în reacții de hidrogenare și izomerizare.",
    "Aliere cu platină pentru instrumente rezistente.",
    "Straturi dure antiuzură și acoperiri pentru bijuterii și ceasuri.",
    "Complexul Grubbs (ruteniu) → cataliză în metateza olefinelor (Nobel 2005)."
  ],
  "notable_properties": {
    "electronegativity": 2.2,
    "ionization_energy": 710.2,
    "atomic_radius": 178,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 117,
    "specific_heat_capacity": 24.06,
    "special_note": "Compușii de ruteniu sunt catalizatori-cheie în metateza olefinelor → reacție cu valoare majoră în sinteza organică modernă."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "În general, nu interacționează direct cu metabolismul.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Anumiți compuși pot fi toxici și pot afecta ADN-ul — investigați ca potențiali agenți anticancer experimentali."
  },
  "organic_compounds": {
    "overview": "Ruteniuul formează complecși organometalici foarte stabili — folosiți în cataliză.",
    "classes_with_examples": [
      "Catalizatorul **Grubbs** (complex de ruteniu) → metateza olefinelor.",
      "Complexe arene-ruteniu utilizate în sinteze controlate."
    ],
    "role_in_organic_reactions": "Cataliză în metateza olefinelor (rearanjarea dublelor legături C=C) — reacție fundamentală în sinteza organică avansată."
  },
  "preparation_reactions": [
    {
      "equation": "Se obține prin rafinarea metalelor din grupa platinei",
      "notes": "Produs secundar valorificat industrial."
    }
  ],
  "chemical_properties": [
    "Stabil în aer, dar reacționează cu halogeni la temperaturi înalte.",
    "Formează oxizi înalți precum RuO₄ (foarte oxidant, volatil și toxic).",
    "Hidridele de ruteniu sunt catalizatori foarte activi în hidrogenare.",
    "A se manipula cu grijă — anumiți compuși sunt toxici."
  ]
},
{
  "symbol": "Rh",
  "name": "Rhodium",
  "nume_romana": "Rodiu",
  "atomic_number": 45,
  "atomic_weight": 102.905,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d⁸ 5s¹",
  "group": 9,
  "period": 5,
  "block": "d",
  "category": "Metal de tranziție (grupa platinei)",
  "color": "Alb-argintiu strălucitor",
  "oxidation_states": [+1, +2, +3, +4],
  "higher_oxidation_states": "+6 (rar)",
  "compounds_with_hydrogen": ["RhH(CO)(PPh₃)₃", "RhH₅ (complexe hidride)"],
  "melting_point": 1964,
  "boiling_point": 3695,
  "density": 12.41,
  "discovery": "Descoperit în 1803 de William Hyde Wollaston în minereuri de platină.",
  "appearance": "Metal foarte lucios, extrem de rezistent la coroziune și oxidare, cu duritate ridicată.",
  "discovered_in": "Asociat natural cu platină și paladiu în minereuri sud-americane și africane.",
  "abundance": "Extrem de rar (~1 ppb în scoarță) → unul dintre cele mai scumpe metale comerciale.",
  "uses": [
    "Catalizatoare auto → transformă substanțele toxice (CO, NOₓ) în gaze netoxice.",
    "Acoperiri decorative rezistente la uzură (bijuterii, ceasuri).",
    "Oglinzi pentru lasere și sisteme optice de mare precizie.",
    "Electrozi și contacte electrice rezistente la oxidare.",
    "Alliamente cu platină pentru termocupluri la temperaturi înalte."
  ],
  "notable_properties": {
    "electronegativity": 2.28,
    "ionization_energy": 719.7,
    "atomic_radius": 173,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 150,
    "specific_heat_capacity": 24.98,
    "special_note": "Rodiuul este metalul cu cel mai mare preț stabil de piață în ultimii ani (folosit masiv în catalizatoare auto)."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Compușii solubili pot fi toxici → iritații și stres oxidativ."
  },
  "organic_compounds": {
    "overview": "Rodiul are catalizatori organometalici extrem de selectivi.",
    "classes_with_examples": [
      "Catalizatorul Wilkinson — RhCl(PPh₃)₃ → hidrogenări selective.",
      "Complexe Rh(I) în reacții de hidroformilare (sintea aldehidelor alifatice)."
    ],
    "role_in_organic_reactions": "Hidrogenare, metateză, izomerizare — folosit în sinteza fină și industria farmaceutică."
  },
  "preparation_reactions": [
    {
      "equation": "Se obține din minereuri de platină prin procese hidrometalurgice și schimb ionic",
      "notes": "Separare dificilă → contribuie la prețul foarte ridicat."
    }
  ],
  "chemical_properties": [
    "Extrem de rezistent la coroziune și acizi (nu este atacat de acid clorhidric sau sulfuric).",
    "Este dizolvat doar de **aqua regia** (HCl + HNO₃).",
    "Formează complexele Rh(III) extrem de stabile.",
    "Catalizator de top în hidrogenare și convertirea poluanților auto."
  ]
},
{
  "symbol": "Pd",
  "name": "Palladium",
  "nume_romana": "Paladiu",
  "atomic_number": 46,
  "atomic_weight": 106.42,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰",
  "group": 10,
  "period": 5,
  "block": "d",
  "category": "Metal de tranziție (grupa platinei)",
  "color": "Alb-argintiu",
  "oxidation_states": [+2, +4],
  "higher_oxidation_states": "+4",
  "compounds_with_hydrogen": ["PdHₓ (hidrid de paladiu, reversibil)"],
  "melting_point": 1554.9,
  "boiling_point": 2963,
  "density": 12.02,
  "discovery": "Descoperit de William Hyde Wollaston în 1803.",
  "appearance": "Metal moale, maleabil și extrem de rezistent la coroziune.",
  "discovered_in": "În minereuri de platină din America de Sud și Rusia.",
  "abundance": "Foarte rar (~0.015 ppm în scoarță). Se obține și ca produs secundar din rafinarea nichelului.",
  "uses": [
    "Catalizatoare auto pentru reducerea emisiilor toxice (alături de Pt și Rh).",
    "Catalizatori în reacții organice (ex: reacția Suzuki, Heck, Sonogashira).",
    "Absorbție și stocare a hidrogenului (folosit în cercetări pentru baterii H₂).",
    "Bijuterii (aur alb de paladiu).",
    "Contacte electrice rezistente la oxidare."
  ],
  "notable_properties": {
    "electronegativity": 2.20,
    "ionization_energy": 804.4,
    "atomic_radius": 169,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 71,
    "specific_heat_capacity": 25.98,
    "special_note": "Paladiul poate **absorbi până la 900 de ori volumul său în hidrogen**, formând PdHₓ — unic printre metale 🫧"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există rol biologic.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile solubile pot provoca alergii cutanate și efecte toxice."
  },
  "organic_compounds": {
    "overview": "Paladiul este indispensabil în cataliză organometalică.",
    "classes_with_examples": [
      "Catalizatori pentru reacțiile **Suzuki**, **Heck**, **Sonogashira** (cuplări C–C).",
      "Complexe Pd(II) pentru reacții redox controlate.",
      "Pd pe carbon (Pd/C) → catalizator pentru hidrogenare."
    ],
    "role_in_organic_reactions": "Permite formarea precisă a legăturilor C–C → fundamental în sinteza medicamentelor și materialelor."
  },
  "preparation_reactions": [
    {
      "equation": "Obținut prin rafinarea nichelului și platinului",
      "notes": "Se separă prin precipitare selectivă și extracție lichid-lichid."
    }
  ],
  "chemical_properties": [
    "Nu se oxidează în aer — rezistență excelentă la coroziune.",
    "Absoarbe reversibil hidrogenul → formare PdHₓ.",
    "Reacționează cu halogeni la temperaturi ridicate formând PdX₂.",
    "Este unul dintre cei mai importanți catalizatori din chimia organică."
  ]
},
{
  "symbol": "Ag",
  "name": "Silver",
  "nume_romana": "Argint",
  "atomic_number": 47,
  "atomic_weight": 107.8682,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹",
  "group": 11,
  "period": 5,
  "block": "d",
  "category": "Metal nobil",
  "color": "Alb-argintiu lucios",
  "oxidation_states": [0, +1, +2],
  "higher_oxidation_states": "+2 (rar, instabil)",
  "compounds_with_hydrogen": [],
  "melting_point": 961.78,
  "boiling_point": 2162,
  "density": 10.49,
  "discovery": "Cunoscut din antichitate; utilizat de civilizații vechi egiptene, grecești și romane.",
  "appearance": "Metal strălucitor, maleabil și ductil, se lustruiește foarte bine.",
  "discovered_in": "Găsit în formă nativă sau în minereuri precum argentita (Ag₂S) și clorargirit (AgCl).",
  "abundance": "Relativ rar în scoarță (~0.07 ppm) dar concentrat în zăcăminte hidrotermale.",
  "uses": [
    "Bijuterii și obiecte decorative (aspect estetic și luciu ridicat).",
    "Contacte electrice și componente electronice (conductivitate maximă).",
    "Monede și lingouri (valoare economică stabilă).",
    "Fotografie tradițională (halogenuri de argint fotosensibile).",
    "Antibacterian în medicină (ioni Ag⁺ inhibă dezvoltarea bacteriilor)."
  ],
  "notable_properties": {
    "electronegativity": 1.93,
    "ionization_energy": 731.0,
    "atomic_radius": 165,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 429,
    "specific_heat_capacity": 25.35,
    "special_note": "Argintul are **cea mai mare conductivitate electrică și termică** dintre toate metalele cunoscute ⚡"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu este esențial, dar urme mici pot fi găsite accidental.",
    "role_in_human_body": "Nu are rol metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Expunere cronică la săruri de argint → argirie (colorarea gri-albăstruie permanentă a pielii)."
  },
  "organic_compounds": {
    "overview": "Argintul formează săruri și complecși utilizați în sinteza organică.",
    "classes_with_examples": [
      "AgNO₃ — reactiv în chimia analitică și organică.",
      "Ag₂O — agent oxidant blând.",
      "Complexe Ag⁺ cu liganzi (folosiți în cataliză și sinteze selectivitate ridicată)."
    ],
    "role_in_organic_reactions": "AgNO₃ poate activa halogenuri pentru substituții nucleofile și reacții de cuplare."
  },
  "preparation_reactions": [
    {
      "equation": "2 Ag₂S + 3 O₂ → 2 Ag₂O + 2 SO₂",
      "notes": "Calcinare minereuri sulfurice."
    },
    {
      "equation": "Ag₂O + H₂ → 2 Ag + H₂O",
      "notes": "Reducere cu hidrogen."
    }
  ],
  "chemical_properties": [
    "Se oxidează foarte greu în aer (metal nobil).",
    "Halogenurile de argint (AgCl, AgBr, AgI) sunt **fotosensibile** — se înnegresc la lumină.",
    "Cu sulful formează Ag₂S → cauzează înnegrirea argintului expus la aer bogat în H₂S.",
    "Ioni Ag⁺ au proprietăți antibacteriene puternice."
  ]
},
{
  "symbol": "Cd",
  "name": "Cadmium",
  "nume_romana": "Cadmiu",
  "atomic_number": 48,
  "atomic_weight": 112.414,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s²",
  "group": 12,
  "period": 5,
  "block": "d",
  "category": "Metal greu toxic",
  "color": "Argintiu-metalic",
  "oxidation_states": [+2],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["CdH₂ (hidrid instabil)"],
  "melting_point": 321.07,
  "boiling_point": 767,
  "density": 8.65,
  "discovery": "Descoperit în 1817 de Friedrich Stromeyer în timpul analizei impurităților din ZnO.",
  "appearance": "Metal moale, ușor de tăiat, lucios, dar se oxidează în aer fierbinte.",
  "discovered_in": "Asociat în mod natural cu zincul în minereuri precum sfaleritul (ZnS).",
  "abundance": "Foarte rar (~0.1 ppm), se obține aproape exclusiv ca produs secundar la rafinarea zincului.",
  "uses": [
    "Baterii Ni-Cd (acum restricționate din cauza toxicității).",
    "Pigmenți galbeni și roșii (CdS, CdSe) în ceramică și vopsele.",
    "Galvanizare pentru protecția oțelului împotriva coroziunii.",
    "Detectoare și celule fotovoltaice bazate pe CdTe.",
    "Bare de control în reactoare nucleare (absorbant de neutroni)."
  ],
  "notable_properties": {
    "electronegativity": 1.69,
    "ionization_energy": 867.8,
    "atomic_radius": 161,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 96.6,
    "specific_heat_capacity": 26.02,
    "special_note": "Toxic — se acumulează în rinichi și provoacă **boli osoase și insuficiență renală** la expunere cronică."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Toxic — interferează cu enzime și metabolismul ionilor Ca și Zn.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Expunerea cronică → **boala Itai-Itai** (durere osoasă severă, fragilitate, insuficiență renală)."
  },
  "organic_compounds": {
    "overview": "Cadmiul formează compuși cu sulf și seleniu utilizați ca pigmenți.",
    "classes_with_examples": [
      "CdS (galben intens) — pigment ceramic.",
      "CdSe (roșu) — pigment și material semiconductor.",
      "CdTe — semiconductor pentru panouri solare cu eficiență ridicată."
    ],
    "role_in_organic_reactions": "Compușii organocadmiu au fost folosiți istoric în reacții nucleofile, dar sunt evitați din cauza toxicității."
  },
  "preparation_reactions": [
    {
      "equation": "ZnS + O₂ → ZnO + SO₂ (calcinare)",
      "notes": "Cadmiul rămâne în reziduuri oxidice."
    },
    {
      "equation": "CdO + C → Cd + CO",
      "notes": "Reducere la metal."
    }
  ],
  "chemical_properties": [
    "Cadmiul se oxidează la aer fierbinte: 2 Cd + O₂ → 2 CdO.",
    "Cu halogeni: Cd + Cl₂ → CdCl₂ (sare solubilă și toxică).",
    "În soluții acide formează ioni Cd²⁺ foarte solubili și toxici.",
    "Absorbant eficient de neutroni → utilizat în controlul reactoarelor nucleare."
  ]
},
{
  "symbol": "In",
  "name": "Indium",
  "nume_romana": "Indiu",
  "atomic_number": 49,
  "atomic_weight": 114.818,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p¹",
  "group": 13,
  "period": 5,
  "block": "p",
  "category": "Metal post-tranziție",
  "color": "Argintiu-albăstrui",
  "oxidation_states": [+1, +3],
  "higher_oxidation_states": "+3 (cel mai stabil)",
  "compounds_with_hydrogen": ["InH₃ (instabil)"],
  "melting_point": 156.6,
  "boiling_point": 2072,
  "density": 7.31,
  "discovery": "Descoperit în 1863 de Ferdinand Reich și Hieronymus Richter prin analiză spectrală.",
  "appearance": "Metal foarte moale și maleabil — poate fi tăiat cu unghia; emite un *scârțâit* metalic când este îndoit.",
  "discovered_in": "Minerale de zinc și plumb (principal: sfalerit ZnS).",
  "abundance": "Rar (~0.1 ppm în scoarță). Se obține ca produs secundar la rafinarea zincului.",
  "uses": [
    "Indiu-staniu oxid (ITO) pentru **ecrane tactile**, LCD, LED și panouri solare.",
    "Lipire la temperaturi joase (aliaje de lipit speciale pentru electronică).",
    "Oglinzi de înaltă reflectivitate (nu se oxidează ușor).",
    "Transductori piezoelectrici și senzori.",
    "Stabilizator în aliaje pentru criogenie."
  ],
  "notable_properties": {
    "electronegativity": 1.78,
    "ionization_energy": 558,
    "atomic_radius": 167,
    "crystal_structure": "Tetragonal",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 82,
    "specific_heat_capacity": 26.74,
    "special_note": "Aliajele de indiu pot rămâne **maleabile chiar la temperaturi foarte scăzute** — folosite în instrumentație criogenică."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Compușii solubili de indiu pot provoca inflamații pulmonare și toxicitate hepatică."
  },
  "organic_compounds": {
    "overview": "Indiul formează complexe organometalice ce pot participa la reacții de cuplare.",
    "classes_with_examples": [
      "InCl₃ — acid Lewis utilizat în sinteză organică.",
      "Complexe indiu-alkil pentru reacții selective de formare a legăturilor C–C."
    ],
    "role_in_organic_reactions": "InCl₃ catalizează reacții de **adăugare și cuplare**, fiind mai blând decât alți catalizatori metalici."
  },
  "preparation_reactions": [
    {
      "equation": "ZnS (conținând In) → In₂O₃ (prin calcinare)",
      "notes": "Indiul este concentrat în produșii de oxidare."
    },
    {
      "equation": "In₂O₃ + 3 H₂ → 2 In + 3 H₂O",
      "notes": "Reducere cu hidrogen → obținerea metalului."
    }
  ],
  "chemical_properties": [
    "Se oxidează lent în aer → formează In₂O₃.",
    "Reacționează cu acizi: 2 In + 6 HCl → 2 InCl₃ + 3 H₂ ↑.",
    "Formează săruri In(III) stabile în soluție.",
    "In₂O₃ este esențial pentru **ecrane tactile capacitive** (ITO)."
  ]
},
{
  "symbol": "Sn",
  "name": "Tin",
  "nume_romana": "Staniu",
  "atomic_number": 50,
  "atomic_weight": 118.71,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p²",
  "group": 14,
  "period": 5,
  "block": "p",
  "category": "Metal post-tranziție",
  "color": "Alb-argintiu",
  "oxidation_states": [+2, +4],
  "higher_oxidation_states": "+4 (cel mai stabil)",
  "compounds_with_hydrogen": ["SnH₄ (stanan, foarte instabil)"],
  "melting_point": 231.93,
  "boiling_point": 2602,
  "density": 7.31,
  "discovery": "Folosit din mileniul IV î.Hr. — unul dintre primele metale din epoca bronzului.",
  "appearance": "Metal moale, maleabil, nu se oxidează ușor la aer (se păstrează lucios mult timp).",
  "discovered_in": "Minereuri precum cassiteritul (SnO₂).",
  "abundance": "Relativ rar (~2.2 ppm) dar concentrat în zăcăminte hidrotermale.",
  "uses": [
    "Lipitură în electronică (aliaj Sn-Pb sau Sn-Ag-Cu în versiuni fără plumb).",
    "Protejarea fierului împotriva ruginii (tablă de staniu pentru conserve).",
    "Aliaje istorice: bronz (Cu + Sn), metal de clopote.",
    "Sticlă float — sticla este turnată peste un strat de staniu topit pentru planeitate perfectă.",
    "Pasta de staniu pentru imprimare pe PCB-uri."
  ],
  "notable_properties": {
    "electronegativity": 1.96,
    "ionization_energy": 708.6,
    "atomic_radius": 162,
    "crystal_structure": "Tetragonal (staniu alb, β-Sn)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 66.8,
    "specific_heat_capacity": 27.11,
    "special_note": "La temperaturi joase (< 13°C) staniul **se transformă** într-o formă cenușie, pulverulentă → *„boala staniului”*."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile organostaniu (ex. tributilstaniu) sunt **toxice** pentru sistemul nervos și endocrin."
  },
  "organic_compounds": {
    "overview": "Compușii organostaniu au aplicații în cataliză, dar sunt toxici.",
    "classes_with_examples": [
      "SnCl₄ → catalizator în reacții de acilare.",
      "Tributilstaniu (Bu₃SnX) → folosit istoric ca biocid în vopsele maritime (interzis azi)."
    ],
    "role_in_organic_reactions": "SnCl₄ acționează ca acid Lewis în reacții de substituție și ciclizare."
  },
  "preparation_reactions": [
    {
      "equation": "SnO₂ + C → Sn + CO₂",
      "notes": "Reducere cu carbon din cassiterit (metoda principală)."
    }
  ],
  "chemical_properties": [
    "Sn + 2 HCl → SnCl₂ + H₂ ↑ (ionic +2).",
    "SnCl₂ poate fi oxidat la SnCl₄ (stare de oxidare +4).",
    "Stratul subțire de oxid îl protejează împotriva coroziunii (pasivare).",
    "Staniu = metal *relativ inert* la aer, dar se corodează în medii acide/bazice puternice."
  ]
},
{
  "symbol": "Sb",
  "name": "Antimony",
  "nume_romana": "Antimon",
  "atomic_number": 51,
  "atomic_weight": 121.760,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p³",
  "group": 15,
  "period": 5,
  "block": "p",
  "category": "Semimetal (metaloid)",
  "color": "Gri-argintiu, cu luciu metalic",
  "oxidation_states": [+3, +5],
  "higher_oxidation_states": "+5",
  "compounds_with_hydrogen": ["SbH₃ (stibină, foarte toxică)"],
  "melting_point": 630.63,
  "boiling_point": 1587,
  "density": 6.697,
  "discovery": "Cunoscut din antichitate; utilizat de egipteni în cosmetice (kohl).",
  "appearance": "Fragil, se rupe conchoidal, nu poate fi îndoit; aspect metalic, strălucitor.",
  "discovered_in": "Mineralul stibnit (Sb₂S₃), principalul minereu de antimon.",
  "abundance": "Rar (~0.2 ppm în scoarță), dar concentrat în zăcăminte hidrotermale.",
  "uses": [
    "Flame retardants (antimoniu trioxid Sb₂O₃ → face materialele greu inflamabile).",
    "Aliaje pentru durificarea plumbului (baterii auto, bile de rulment, muniție).",
    "Semiconductor în tehnologia IR și dispozitive termo-electrice.",
    "Pigmenți în sticlă și ceramică.",
    "Produse farmaceutice istorice (însă toxice — utilizare limitată astăzi)."
  ],
  "notable_properties": {
    "electronegativity": 2.05,
    "ionization_energy": 834,
    "atomic_radius": 159,
    "crystal_structure": "Romboedric",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 24.4,
    "specific_heat_capacity": 25.23,
    "special_note": "Antimoniul este **semimetal**: conduce electric mai slab decât metalele, dar mai bine decât nemetalelor."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "SbH₃ (stibina) este extrem de toxică → afectează sângele și ficatul."
  },
  "organic_compounds": {
    "overview": "Compușii organoantimoniu pot fi folosiți ca catalizatori sau agenți ignifugi.",
    "classes_with_examples": [
      "Sb₂O₃ — catalizator și retardant de flacără.",
      "SbCl₃ — folosit în reacții de clorinare și sinteză anorganică."
    ],
    "role_in_organic_reactions": "Acționează ca acid Lewis în reacții de adăugare și substituție."
  },
  "preparation_reactions": [
    {
      "equation": "Sb₂S₃ + 3 Fe → 2 Sb + 3 FeS",
      "notes": "Reducere cu fier (metoda clasică)."
    },
    {
      "equation": "Sb₂O₃ + 3 C → 2 Sb + 3 CO",
      "notes": "Reducere cu carbon (metoda industrială)."
    }
  ],
  "chemical_properties": [
    "Cu oxigen: Sb + O₂ → Sb₂O₃ (oxid alb, folosit ca retardant).",
    "Cu halogeni: Sb + 3 Cl₂ → SbCl₃ (clorură solubilă).",
    "SbH₃ (stibina) este instabilă, toxică și inflamabilă.",
    "Antimoniul se comportă atât ca metal (formează săruri), cât și ca nemetal (formează oxianioni)."
  ]
},
{
  "symbol": "Te",
  "name": "Tellurium",
  "nume_romana": "Telur",
  "atomic_number": 52,
  "atomic_weight": 127.60,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁴",
  "group": 16,
  "period": 5,
  "block": "p",
  "category": "Semimetal (metaloid)",
  "color": "Gri-argintiu, lucios",
  "oxidation_states": [-2, +2, +4, +6],
  "higher_oxidation_states": "+6",
  "compounds_with_hydrogen": ["H₂Te (telan, foarte toxic)"],
  "melting_point": 449.5,
  "boiling_point": 988,
  "density": 6.24,
  "discovery": "Identificat în 1782 de Franz-Joseph Müller von Reichenstein; confirmat în 1798 de Martin Klaproth.",
  "appearance": "Fragil, se rupe sub formă de fulgi lucioși; semimetal cu proprietăți de semiconductor.",
  "discovered_in": "Minereuri aurifere și argintifere, adesea împreună cu seleniu.",
  "abundance": "Foarte rar (~0.005 ppm în scoarță), extras ca produs secundar din rafinarea cuprului.",
  "uses": [
    "Semiconductori în celule solare: CdTe → unul dintre cele mai eficiente materiale fotovoltaice.",
    "Stabilizator în aliaje de plumb pentru baterii auto.",
    "Aliaje cu oțel → îmbunătățesc prelucrabilitatea și rezistența.",
    "Sticlă și ceramică colorată.",
    "Senzori piezoelectrici și termoelectrice (Bi₂Te₃)."
  ],
  "notable_properties": {
    "electronegativity": 2.1,
    "ionization_energy": 869.3,
    "atomic_radius": 140,
    "crystal_structure": "Trigonal",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 2.35,
    "specific_heat_capacity": 25.73,
    "special_note": "Compușii de telur au **miros extrem de neplăcut**, asemănător cu usturoiul — mirosul se poate menține în respirație **luni de zile** 😅"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Expunerea → *bromhidroză tellurică* (miros puternic de usturoi în transpirație și respirație)."
  },
  "organic_compounds": {
    "overview": "Telurul poate înlocui sulful în compuși organici, modificând proprietățile electronice.",
    "classes_with_examples": [
      "R–Te–R (ditelururi) → agenți redox organici.",
      "Ar–Te–Ar (organotelurom) → folosiți în sinteze fotochimice."
    ],
    "role_in_organic_reactions": "Cataliză redox în sinteza compușilor aromatici și heterociclici."
  },
  "preparation_reactions": [
    {
      "equation": "Cu anodic sludge → separare chimică → TeO₂ → Te (reducere)",
      "notes": "Produs secundar din rafinarea cuprului."
    },
    {
      "equation": "TeO₂ + SO₂ + H₂O → Te ↓ + H₂SO₄",
      "notes": "Reducere cu dioxid de sulf."
    }
  ],
  "chemical_properties": [
    "Cu hidrogenul: H₂ + Te → H₂Te (gaz foarte toxic, instabil).",
    "Cu halogeni: Te + 2 Cl₂ → TeCl₄.",
    "Cu metale: formează telururi (ex: Bi₂Te₃ → material termo-electric).",
    "Comportament asemănător cu seleniu și sulf, dar mai metalic."
  ]
},
{
  "symbol": "I",
  "name": "Iodine",
  "nume_romana": "Iod",
  "atomic_number": 53,
  "atomic_weight": 126.904,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁵",
  "group": 17,
  "period": 5,
  "block": "p",
  "category": "Halogen",
  "color": "Violet închis (solid), produce vapori violeți",
  "oxidation_states": [-1, +1, +3, +5, +7],
  "higher_oxidation_states": "+7",
  "compounds_with_hydrogen": ["HI (acid iodhidric)"],
  "melting_point": 113.7,
  "boiling_point": 184.3,
  "density": 4.93,
  "discovery": "Descoperit în 1811 de Bernard Courtois prin tratarea cenușii de alge marine cu acid.",
  "appearance": "Solid cristalin violet-închis, cu strălucire metalică; când este încălzit sublimează formând vapori violeți.",
  "discovered_in": "Alge marine și ape marine bogate în ioduri.",
  "abundance": "Relativ rar (~0.45 ppm); mare parte provine din apa oceanică și depozite de salpetru (Chile).",
  "uses": [
    "Antiseptic (iodură, tinctură de iod).",
    "Sare iodată → prevenirea gușei și deficitului de hormoni tiroidieni.",
    "Medicină (contrast în imagistică radiologică).",
    "Fotografie analogică (halogenuri de argint).",
    "Celule solare organice și dispozitive OLED."
  ],
  "notable_properties": {
    "electronegativity": 2.66,
    "ionization_energy": 1008.4,
    "atomic_radius": 140,
    "crystal_structure": "Ortorombică",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 0.449,
    "specific_heat_capacity": 54.44,
    "special_note": "Iodul sublimează ușor, trecând direct din solid în vapori violeți intens 🟣"
  },
  "biology_facts": {
    "presence_in_human_body": "Esențial pentru glanda tiroidă.",
    "role_in_human_body": "Formarea hormonilor tiroidieni (T₃, T₄) care reglează metabolismul.",
    "deficiency_effects": "Deficit → gușă, metabolism lent, retard de dezvoltare la copii.",
    "excess_effects": "Exces → hipertiroidism, iritații și tulburări ale metabolismului."
  },
  "organic_compounds": {
    "overview": "Iodul este utilizat în reacții de iodurare și substituție aromatică.",
    "classes_with_examples": [
      "Iodobenzen (C₆H₅I) — precursor în reacțiile de cuplare carbon-carbon.",
      "Iodoalcani R–I — lasă grupări bune plecătoare în SN1/SN2.",
      "Triiodotironina (T₃) și tiroxina (T₄) — hormoni naturali esențiali."
    ],
    "role_in_organic_reactions": "Iodul activează compușii pentru reacții de cuplare (ex: reacția Sonogashira, Suzuki, Heck)."
  },
  "preparation_reactions": [
    {
      "equation": "2 I⁻ + Cl₂ → I₂ + 2 Cl⁻",
      "notes": "Oxidarea iodurilor din apă de mare."
    },
    {
      "equation": "NaIO₃ + 3 SO₂ + H₂O → I₂ + NaHSO₄",
      "notes": "Reducere din depozite de săruri iodate din Chile."
    }
  ],
  "chemical_properties": [
    "Reacționează cu hidrogenul: H₂ + I₂ ⇌ 2 HI (echilibru ușor de obținut la temperaturi moderate).",
    "I₂ se dizolvă în iodură formând ion triiodură I₃⁻ (soluție brună).",
    "În soluții alcaline → formează ioduri și ioduri superioare.",
    "Iodul este un oxidant mai slab decât Cl₂ și Br₂, dar mai ușor de manipulat."
  ]
},
{
  "symbol": "Xe",
  "name": "Xenon",
  "nume_romana": "Xenon",
  "atomic_number": 54,
  "atomic_weight": 131.293,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶",
  "group": 18,
  "period": 5,
  "block": "p",
  "category": "Gaz nobil (inerte)",
  "color": "Incolor",
  "oxidation_states": [0, +2, +4, +6, +8],
  "higher_oxidation_states": "+8",
  "compounds_with_hydrogen": ["XeH₂ (foarte rar și instabil)"],
  "melting_point": -111.8,
  "boiling_point": -108.1,
  "density": 5.894,
  "discovery": "Descoperit în 1898 de William Ramsay și Morris Travers în aerul lichefiat.",
  "appearance": "Gaz incolor, greu, inert în condiții normale.",
  "discovered_in": "A fost extras din aer prin distilare fracționată a aerului lichefiat.",
  "abundance": "Extrem de rar în atmosferă (~0.0000087%).",
  "uses": [
    "Lămpi flash (de ex. în fotografia profesională).",
    "Lămpi HID și iluminat auto premium.",
    "Lasere Xe și XeCl pentru medicină și tăiere de materiale.",
    "Anestezic general (xenon inhalator — efect rapid și netoxic).",
    "Detectoare de particule și camere de ionizare în fizica nucleară."
  ],
  "notable_properties": {
    "electronegativity": 2.6,
    "ionization_energy": 1170.4,
    "atomic_radius": 108,
    "crystal_structure": "Cubic față-centrare (solid, sub 161 K)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 0.00565,
    "specific_heat_capacity": 20.79,
    "special_note": "Deși este un **gaz nobil**, xenonul poate forma compuși stabili → ex.: XeF₂, XeF₄, XeF₆."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Este inactiv chimic în organism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Ca gaz inert, poate provoca anestezie profundă la concentrații mari."
  },
  "organic_compounds": {
    "overview": "Xenonul nu formează compuși organici în mod natural, dar poate forma săruri și complexe în stare înalt oxidată.",
    "classes_with_examples": [
      "XeF₂, XeF₄, XeF₆ — fluoruri de xenon.",
      "XeO₃ și XeO₄ — oxizi foarte puternic oxidanți."
    ],
    "role_in_organic_reactions": "Fluorurile de xenon sunt agenți oxidanți selectivi în sinteză."
  },
  "preparation_reactions": [
    {
      "equation": "Distilarea fracționată a aerului lichefiat",
      "notes": "Singura metodă industrială reală."
    }
  ],
  "chemical_properties": [
    "La temperaturi și presiuni normale este inert.",
    "Reacționează cu fluorul: Xe + F₂ → XeF₂ (condiții controlate).",
    "Oxizii XeO₃ și XeO₄ sunt instabili și explozivi.",
    "Compușii de xenon sunt cei mai stabili în stări de oxidare +2, +4 și +6."
  ]
},
{
  "symbol": "Cs",
  "name": "Cesium",
  "nume_romana": "Cesiu",
  "atomic_number": 55,
  "atomic_weight": 132.905,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s¹",
  "group": 1,
  "period": 6,
  "block": "s",
  "category": "Metal alcalin",
  "color": "Auriu-argintiu (seamănă cu aurul lichid)",
  "oxidation_states": [+1],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["CsH (hidrid alcalin)"],
  "melting_point": 28.5,
  "boiling_point": 671,
  "density": 1.93,
  "discovery": "Descoperit în 1860 de Robert Bunsen și Gustav Kirchhoff prin analiză spectrală (linii albastre caracteristice).",
  "appearance": "Metal moale, strălucitor, **se topește aproape la temperatura camerei**.",
  "discovered_in": "Ape minerale și zăcăminte de polucit (mineralul CsAlSi₂O₆).",
  "abundance": "Rar (~3 ppm în scoarță), se obține din mineralul **polucit**.",
  "uses": [
    "Ceasuri atomice (**standardul oficial internațional pentru secundă**).",
    "Sisteme GPS și telecomunicații (măsurarea timpului ultra-precis).",
    "Tranzistoare și tuburi fotoelectronice.",
    "Cercetare în fizică atomică și cuantică.",
    "Motoare ionice pentru sateliți de mici dimensiuni."
  ],
  "notable_properties": {
    "electronegativity": 0.79,
    "ionization_energy": 375.7,
    "atomic_radius": 260,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 36,
    "specific_heat_capacity": 32.21,
    "special_note": "Cesiu este **atât de reactiv** încât explodează în contact cu apa și chiar cu **gheața la -100°C** 💥"
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Izotopul radioactiv Cs-137 → foarte periculos, se acumulează în țesuturi moi și poate provoca cancer."
  },
  "organic_compounds": {
    "overview": "Cesiu formează săruri foarte solubile și catalizatori de cuplare organică.",
    "classes_with_examples": [
      "Cs₂CO₃ — bază puternică folosită în sinteza organică.",
      "CsF — fluorură solubilă, folosită în reacții de substituție.",
      "CsH — agent puternic de deprotonare."
    ],
    "role_in_organic_reactions": "Cs₂CO₃ este o bază blândă dar foarte eficientă în reacții de cuplare C–C (ex: Suzuki, Buchwald-Hartwig)."
  },
  "preparation_reactions": [
    {
      "equation": "2 CsCl + Ca → 2 Cs + CaCl₂",
      "notes": "Reducere metalică (metoda industrială)."
    }
  ],
  "chemical_properties": [
    "2 Cs + 2 H₂O → 2 CsOH + H₂ ↑ (**exploziv**).",
    "4 Cs + O₂ → 2 Cs₂O (reacționează spontan cu aerul).",
    "Cs + H₂ → CsH (hidrid ionic).",
    "Trebuie păstrat în ulei mineral sau atmosferă inertă (argon)."
  ]
},
{
  "symbol": "Ba",
  "name": "Barium",
  "nume_romana": "Bariu",
  "atomic_number": 56,
  "atomic_weight": 137.327,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 6s²",
  "group": 2,
  "period": 6,
  "block": "s",
  "category": "Metal alcalino-pământos",
  "color": "Argintiu-albicios",
  "oxidation_states": [+2],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["BaH₂"],
  "melting_point": 727,
  "boiling_point": 1897,
  "density": 3.62,
  "discovery": "Izolat ca element în 1808 de Sir Humphry Davy prin electroliza sărurilor.",
  "appearance": "Metal moale, dar mai dens decât calciul; se oxidează rapid la aer și reacționează violent cu apa.",
  "discovered_in": "Mineralul baritină (BaSO₄) și witherit (BaCO₃).",
  "abundance": "Relativ răspândit (~425 ppm), dar nu apare liber în natură (din cauza reactivității).",
  "uses": [
    "Artificii verde-intens (sărurile de bariu colorează flacăra verde).",
    "Radiologie: **suspensie de BaSO₄** pentru vizualizarea sistemului digestiv (radiografii).",
    "Dezoxidant în metalurgie (leagă oxigenul și azotul).",
    "Fabricarea sticlei speciale și ceramicii tehnice.",
    "Superconductori cu temperatură înaltă (Ba₂YCu₃O₇)."
  ],
  "notable_properties": {
    "electronegativity": 0.89,
    "ionization_energy": 502.9,
    "atomic_radius": 268,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 18.4,
    "specific_heat_capacity": 28.07,
    "special_note": "Sărurile solubile de bariu sunt **toxice**. BaSO₄ este **insolubil** → sigur medical."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu este esențial; organismul nu are nevoie de bariu.",
    "role_in_human_body": "Nu are rol metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile solubile (BaCl₂, Ba(NO₃)₂) sunt **extrem de toxice** → paralizie și stop cardiac."
  },
  "organic_compounds": {
    "overview": "Bariul formează săruri insolubile și hidroxizi puternici.",
    "classes_with_examples": [
      "BaSO₄ — **agent de contrast radiologic**, complet insolubil → sigur.",
      "BaO — oxid de bariu, folosit în sticlă și ceramică.",
      "BaH₂ — hidrid puternic reducător."
    ],
    "role_in_organic_reactions": "BaO și Ba(OH)₂ sunt baze pentru sinteza unor compuși organici în condiții anhidre."
  },
  "preparation_reactions": [
    {
      "equation": "BaO + Al → Ba + Al₂O₃",
      "notes": "Reducere aluminotermică."
    },
    {
      "equation": "Electroliza sărurilor de bariu topite",
      "notes": "Metodă industrială comună."
    }
  ],
  "chemical_properties": [
    "2 Ba + O₂ → 2 BaO (oxid alb).",
    "Ba + 2 H₂O → Ba(OH)₂ + H₂ ↑ (reacție violentă).",
    "Ba + Cl₂ → BaCl₂ (sare foarte solubilă și **toxică**).",
    "Toate reacțiile sunt foarte rapide datorită configurației 6s² ușor ionizabile."
  ]
},
{
  "symbol": "La",
  "name": "Lanthanum",
  "nume_romana": "Lantan",
  "atomic_number": 57,
  "atomic_weight": 138.905,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d¹ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "d/f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-alb metalic",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["LaH₂", "LaH₃ (hidride)"],
  "melting_point": 920,
  "boiling_point": 3464,
  "density": 6.15,
  "discovery": "Descoperit în 1839 de Carl Gustav Mosander în compusul cerite.",
  "appearance": "Metal moale și maleabil; reacționează rapid cu aerul formând un strat de oxid.",
  "discovered_in": "Minerale rare de pământuri rare precum monazit și bastnäsit.",
  "abundance": "Destul de răspândit (~39 ppm în scoarță), dar dispersat în minereuri complexe.",
  "uses": [
    "Lentile optice de înaltă calitate (sticlă cu indice mare de refracție).",
    "Electrozi pentru lămpile cu arc carbonic (iluminat cinematografic istoric).",
    "Catalizatori pentru rafinarea petrolului.",
    "Baterii **NiMH** (LaNi₅ → sistem de stocare a H₂ în automobile hibride).",
    "Materiale magnetice și superconductori experimentali."
  ],
  "notable_properties": {
    "electronegativity": 1.1,
    "ionization_energy": 538,
    "atomic_radius": 187,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 13.4,
    "specific_heat_capacity": 27.11,
    "special_note": "Face parte din seria **lantanidelor**, cunoscute pentru proprietățile magnetice și catalitice."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu este necesar metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile de lantan pot irita sistemul respirator și tractul digestiv."
  },
  "organic_compounds": {
    "overview": "Lantanul formează complecși organometalici folosiți în cataliză și sinteză avansată.",
    "classes_with_examples": [
      "La(OEt)₃ — catalizator Lewis.",
      "LaCl₃ — catalizator pentru reacții de carbonilare."
    ],
    "role_in_organic_reactions": "Cataliză blândă, selectivă → utilă în sinteza farmaceutică."
  },
  "preparation_reactions": [
    {
      "equation": "La₂O₃ + 2 Al → 2 La + Al₂O₃",
      "notes": "Reducere aluminotermică."
    },
    {
      "equation": "Electroliza sărurilor topite de LaCl₃",
      "notes": "Metoda industrială modernă."
    }
  ],
  "chemical_properties": [
    "Se oxidează rapid în aer: 4 La + 3 O₂ → 2 La₂O₃.",
    "Reacționează cu apa caldă → La(OH)₃ + H₂ ↑.",
    "Cu halogeni formează LaCl₃, LaBr₃ etc. (săruri ionice foarte stabile).",
    "Hidridele LaH₂ / LaH₃ absorb și eliberează hidrogen → folosite în **baterii NiMH**."
  ]
},
{
  "symbol": "Ce",
  "name": "Cerium",
  "nume_romana": "Ceriu",
  "atomic_number": 58,
  "atomic_weight": 140.116,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-deschis",
  "oxidation_states": [+3, +4],
  "higher_oxidation_states": "+4 (stabil în CeO₂)",
  "compounds_with_hydrogen": ["CeH₂", "CeH₃"],
  "melting_point": 795,
  "boiling_point": 3443,
  "density": 6.77,
  "discovery": "Descoperit în 1803 de Jöns Jakob Berzelius și Wilhelm Hisinger.",
  "appearance": "Metal moale, poate fi tăiat cu cuțitul; se oxidează rapid în aer.",
  "discovered_in": "Mineralul cerite, monazit și bastnäsit (pământuri rare).",
  "abundance": "Ceriul este cel mai abundent lantanid (~66 ppm) — mai comun decât cuprul.",
  "uses": [
    "Catalizatoare auto (CeO₂ → ajută la oxidarea CO și hidrocarburilor).",
    "Sticlă auto-curățatoare și rezistentă la radiații UV.",
    "Polizarea sticlei (CeO₂ este abraziv fin).",
    "Flint pentru brichete (aliaj **ceriu + fier** → *feroceriu*, scânteiază ușor).",
    "Combustibil în baterii metal-hidrură experimentale."
  ],
  "notable_properties": {
    "electronegativity": 1.12,
    "ionization_energy": 534,
    "atomic_radius": 182,
    "crystal_structure": "Cubic față-centrare (fcc) la temperaturi normale",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 11.4,
    "specific_heat_capacity": 26.94,
    "special_note": "Ceriul poate exista **în două stări** Ce³⁺ și Ce⁴⁺, ceea ce îl face ideal pentru **cataliză redox**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă în metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Inhalarea prafului de ceriu poate provoca inflamații pulmonare."
  },
  "organic_compounds": {
    "overview": "Ceriul este folosit în chimia organică mai ales ca agent oxidant.",
    "classes_with_examples": [
      "CeCl₃ — catalizator în reacții de adiție organometalică.",
      "Ce(OAc)₄ — **oxidant selectiv** pentru conversia alcoolilor în cetone."
    ],
    "role_in_organic_reactions": "CeCl₃ este folosit în reacții *Luche* → reduce selectiv anumite grupe funcționale."
  },
  "preparation_reactions": [
    {
      "equation": "CeO₂ + 2 Ca → Ce + 2 CaO",
      "notes": "Reducere cu calciu metalic (metoda laborator)."
    },
    {
      "equation": "Electroliza sărurilor de CeCl₃ topite",
      "notes": "Producție industrială."
    }
  ],
  "chemical_properties": [
    "Se oxidează rapid: 2 Ce + O₂ → 2 CeO₂ (oxid stabil).",
    "Reacționează cu apa la cald: 2 Ce + 6 H₂O → 2 Ce(OH)₃ + 3 H₂ ↑.",
    "Cu halogeni → săruri CeCl₃, CeBr₃ etc.",
    "Rol de **agent redox**: Ce⁴⁺ ⇌ Ce³⁺ + e⁻ (reacție centrală în cataliză)."
  ]
},
{
  "symbol": "Pr",
  "name": "Praseodymium",
  "nume_romana": "Praseodim",
  "atomic_number": 59,
  "atomic_weight": 140.908,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f³ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Alb-argintiu, capătă tentă verde când se oxidează",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["PrH₂", "PrH₃"],
  "melting_point": 931,
  "boiling_point": 3512,
  "density": 6.77,
  "discovery": "Izolat în 1885 de Carl Auer von Welsbach prin separarea didimului.",
  "appearance": "Metal moale, maleabil, se oxidează lent, formând un strat verde caracteristic.",
  "discovered_in": "Minerale de pământuri rare — monazit și bastnäsit.",
  "abundance": "Destul de comun pentru o lantanidă (~9 ppm în scoarță).",
  "uses": [
    "Magneți permanenți **Nd-Pr** (folosiți în motoare electrice, căști și hard disk-uri).",
    "Colorarea sticlei și ceramicii (nuanță galben-verde intens).",
    "Lămpi de scenă și reflectoare (spectru luminos stabil).",
    "Ochelari pentru sudură → filtrează lumina UV/IR intensă.",
    "Materiale pentru celule termice și catalizatori."
  ],
  "notable_properties": {
    "electronegativity": 1.13,
    "ionization_energy": 527,
    "atomic_radius": 182,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic (poate deveni feromagnetic la temperaturi foarte mici)",
    "thermal_conductivity": 12.5,
    "specific_heat_capacity": 27.2,
    "special_note": "Oxidul său, **Pr₂O₃**, conferă culori verzi intense sticlei → folosit în **ochelari de protecție optică**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Praful și sărurile de praseodim pot irita plămânii și ochii."
  },
  "organic_compounds": {
    "overview": "Folosit în cataliză și în reducerea selectivă a compușilor carbonilici.",
    "classes_with_examples": [
      "PrCl₃ — catalizator Lewis.",
      "Pr(acac)₃ — complex organometalic utilizat în sinteze fine."
    ],
    "role_in_organic_reactions": "Catalizează reacții de condensare și adăugare nucleofilă."
  },
  "preparation_reactions": [
    {
      "equation": "Pr₂O₃ + 2 Al → 2 Pr + Al₂O₃",
      "notes": "Reducere aluminotermică."
    },
    {
      "equation": "Electroliza PrCl₃ topit",
      "notes": "Metodă industrială standard."
    }
  ],
  "chemical_properties": [
    "2 Pr + 3 O₂ → 2 PrO₂ (oxid verde caracteristic).",
    "Pr + 6 H₂O → 2 Pr(OH)₃ + 3 H₂ ↑ (reacționează lent cu apa).",
    "Formează săruri stabile cu halogeni: PrCl₃, PrBr₃ etc.",
    "Hidridele absorb hidrogen → utile în baterii metal-hidrură."
  ]
},
{
  "symbol": "Nd",
  "name": "Neodymium",
  "nume_romana": "Neodim",
  "atomic_number": 60,
  "atomic_weight": 144.242,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁴ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-deschis (se oxidează rapid la aer)",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["NdH₂", "NdH₃"],
  "melting_point": 1024,
  "boiling_point": 3074,
  "density": 7.01,
  "discovery": "Izolat în 1885 de Carl Auer von Welsbach prin separarea didimului în Pr și Nd.",
  "appearance": "Metal moale, maleabil, reacționează la aer formând o peliculă galben-maronie.",
  "discovered_in": "Minereuri de pământuri rare: monazit și bastnäsit.",
  "abundance": "Destul de abundent (~38 ppm), comparabil cu nichelul sau cuprul.",
  "uses": [
    "Magneți **NdFeB** — cei mai puternici magneți utilizați comercial.",
    "Motoare electrice (inclusiv la **mașini hibride / electrice**).",
    "Căști audio, difuzoare, hard-disk-uri.",
    "Lasere Nd:YAG folosite în medicină, militărie și industrie.",
    "Pigmenți violeți/albastru în sticlă și ceramică."
  ],
  "notable_properties": {
    "electronegativity": 1.14,
    "ionization_energy": 533,
    "atomic_radius": 182,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic → devine **supermagnetic** în compuși Nd₂Fe₁₄B",
    "thermal_conductivity": 16.5,
    "specific_heat_capacity": 27.45,
    "special_note": "Magneții NdFeB își pierd magnetizarea la temperaturi înalte → necesită aliaje cu dispru și terbiu pentru stabilizare."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la reacții metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Praful de neodim poate provoca iritații pulmonare și inflamații."
  },
  "organic_compounds": {
    "overview": "Neodimul este folosit în cataliza polimerizării cauciucului sintetic.",
    "classes_with_examples": [
      "Catalizatori Nd pentru polibutadienă.",
      "Complexe Nd(acac)₃ folosite în sinteze stereoselective."
    ],
    "role_in_organic_reactions": "Catalizează polimerizarea cauciucului → anvelope elastice și rezistente."
  },
  "preparation_reactions": [
    {
      "equation": "Nd₂O₃ + 2 Al → 2 Nd + Al₂O₃",
      "notes": "Reducere aluminotermică."
    },
    {
      "equation": "Electroliza NdCl₃ topit",
      "notes": "Metoda industrială principală."
    }
  ],
  "chemical_properties": [
    "Se oxidează: 4 Nd + 3 O₂ → 2 Nd₂O₃.",
    "Reacționează cu apa la cald: 2 Nd + 6 H₂O → 2 Nd(OH)₃ + 3 H₂ ↑.",
    "Cu halogeni → NdCl₃, NdF₃ etc.",
    "Hidridele NdH₂/NdH₃ sunt solide capabile să **stocheze H₂**."
  ]
},
{
  "symbol": "Pm",
  "name": "Promethium",
  "nume_romana": "Prometiu",
  "atomic_number": 61,
  "atomic_weight": 145,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁵ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Lantanid radioactiv",
  "color": "Argintiu-metalic (dar rareori se vede ca metal pur)",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["PmH₂", "PmH₃"],
  "melting_point": 1100,
  "boiling_point": 3000,
  "density": 7.22,
  "discovery": "Identificat în 1945 de Jacob A. Marinsky, Lawrence Glendenin și Charles Coryell în reziduuri de fisiune nucleară.",
  "appearance": "Metal rar, radioactiv, se oxidează rapid; nu apare liber în natură.",
  "discovered_in": "Reacții de fisiune în reactoare nucleare (nu se găsește natural în cantități detectabile).",
  "abundance": "Extrem de rar; produs artificial prin iradierea neodimului sau uraniului.",
  "uses": [
    "Baterii nucleare miniaturale (Pm-147 → generează curent prin dezintegrare).",
    "Surse luminescente pentru instrumente ce trebuie să fie vizibile în întuneric.",
    "Lasere speciale în cercetări optice.",
    "Indicator de grosime industrial prin radiație X moale."
  ],
  "notable_properties": {
    "electronegativity": 1.13,
    "ionization_energy": 540,
    "atomic_radius": 183,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 15,
    "specific_heat_capacity": 27.2,
    "special_note": "Toți izotopii sunt **radioactivi**; izotopul tehnic important este **Pm-147** (t₁/₂ ≈ 2.62 ani)."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare natural în organism.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Foarte toxic radiologic — se acumulează în oase, iradiind măduva."
  },
  "organic_compounds": {
    "overview": "Nu formează compuși organici naturali; compușii sunt sintetici.",
    "classes_with_examples": [
      "PmCl₃ — sare solubilă, radioactivă.",
      "Pm₂O₃ — oxid utilizat în cercetare."
    ],
    "role_in_organic_reactions": "Nu are rol major în sinteza organică din cauza radioactivității."
  },
  "preparation_reactions": [
    {
      "equation": "²⁴²Pu → (fisiune nucleară) → Pm-147 + produși secundari",
      "notes": "Cea mai importantă sursă comercială."
    },
    {
      "equation": "Nd-146 + n → Nd-147 → (β⁻) → Pm-147",
      "notes": "Obținere prin iradiere în reactor."
    }
  ],
  "chemical_properties": [
    "Se oxidează rapid în aer → formează Pm₂O₃.",
    "Reacționează cu halogeni → PmCl₃, PmF₃ etc.",
    "Formează hidroxid: Pm³⁺ + 3 OH⁻ → Pm(OH)₃ ↓.",
    "Similar chimic cu neodimul și samarul, dar mult mai instabil."
  ]
},
{
  "symbol": "Sm",
  "name": "Samarium",
  "nume_romana": "Samar",
  "atomic_number": 62,
  "atomic_weight": 150.36,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁶ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-întunecat",
  "oxidation_states": [+2, +3],
  "higher_oxidation_states": "+3 (cel mai stabil)",
  "compounds_with_hydrogen": ["SmH₂", "SmH₃ (stochează hidrogen reversibil)"],
  "melting_point": 1072,
  "boiling_point": 1900,
  "density": 7.52,
  "discovery": "Identificat în 1879 de Paul Émile Lecoq de Boisbaudran din mineralul samarskit.",
  "appearance": "Metal ușor fragil, se oxidează lent la aer formând peliculă gălbuie.",
  "discovered_in": "Mineralul samarskit și monazit (pământuri rare).",
  "abundance": "Răspândit moderat (~6 ppm), cu extracție în principal din China.",
  "uses": [
    "Magneți **SmCo** — rezistenți la temperaturi înalte (folosiți în motoare, turbine, aviație).",
    "Lasere **Sm:YAG** pentru aplicații medicale și militare.",
    "Controlor de reactivitate în **reactoare nucleare** (Sm-149 absoarbe neutronii).",
    "Sticlă specială cu absorbție UV.",
    "Catalizatori în polimerizare."
  ],
  "notable_properties": {
    "electronegativity": 1.17,
    "ionization_energy": 544.5,
    "atomic_radius": 180,
    "crystal_structure": "Romboedric (α-Sm)",
    "magnetic_properties": "Feromagnetic la temperaturi scăzute, paramagnetic la temperaturi normale",
    "thermal_conductivity": 13,
    "specific_heat_capacity": 29.54,
    "special_note": "Izotopul **Sm-149** este un **absorber foarte puternic de neutroni**, esențial în controlul reactoarelor."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Praful de samariu poate irita plămânii; compușii pot afecta ficatul."
  },
  "organic_compounds": {
    "overview": "Samariul este foarte util ca agent reducător în sinteză organică.",
    "classes_with_examples": [
      "SmI₂ (diiodură de samariu) — **reducător selectiv** foarte folosit.",
      "SmCl₃ — catalizator Lewis."
    ],
    "role_in_organic_reactions": "SmI₂ este folosit pentru **reducerea** și **cuplarea** radiculară în reacții moderne de sinteză farmaceutică."
  },
  "preparation_reactions": [
    {
      "equation": "Sm₂O₃ + 3 Ca → 2 Sm + 3 CaO",
      "notes": "Reducere aluminotermică sau calciotermică."
    },
    {
      "equation": "Electroliza SmCl₃ topit",
      "notes": "Metodă industrială alternativă."
    }
  ],
  "chemical_properties": [
    "4 Sm + 3 O₂ → 2 Sm₂O₃.",
    "2 Sm + 6 H₂O → 2 Sm(OH)₃ + 3 H₂ ↑ (reacție lentă).",
    "Formează săruri ionice stabile: SmCl₃, Sm(NO₃)₃ etc.",
    "SmI₂ = unul dintre cei mai importanți reactivi de **reducere** în chimie organică."
  ]
},
{
  "symbol": "Eu",
  "name": "Europium",
  "nume_romana": "Europiu",
  "atomic_number": 63,
  "atomic_weight": 151.964,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁷ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-deschis, se oxidează rapid la aer",
  "oxidation_states": [+2, +3],
  "higher_oxidation_states": "+3 (cel mai frecvent)",
  "compounds_with_hydrogen": ["EuH₂", "EuH₃"],
  "melting_point": 822,
  "boiling_point": 1597,
  "density": 5.24,
  "discovery": "Izolat în 1901 de Eugène-Anatole Demarçay.",
  "appearance": "Metal moale, foarte reactiv, se aprinde ușor în aer fin divizat.",
  "discovered_in": "Minerale precum monazit și bastnäsit, împreună cu alte lantanide.",
  "abundance": "Relativ rar (~1.8 ppm în scoarță), costisitor pentru purificare.",
  "uses": [
    "Fosfori roșii în **ecrane TV, LED-uri și monitoare** (Eu³⁺ produce lumină roșie intensă).",
    "Semnalizare anti-fals pe **bancnote, pașapoarte și carduri** (fluorescență UV).",
    "Detectoare de neutroni în reactoare nucleare (izotopul Eu-151).",
    "Sticlă fluorescentă pentru iluminat specializat.",
    "Markeri luminescenți pentru analiză chimică."
  ],
  "notable_properties": {
    "electronegativity": 1.2,
    "ionization_energy": 547,
    "atomic_radius": 199,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic (devine feromagnetic la temperaturi foarte mici)",
    "thermal_conductivity": 13.9,
    "specific_heat_capacity": 27.66,
    "special_note": "Compușii cu Eu³⁺ **emit lumină roșie intensă** — esențiali pentru afișaje moderne și securizare."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există rol biologic.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile solubile pot afecta rinichii și ficatul în doze mari."
  },
  "organic_compounds": {
    "overview": "Folosirea europiului în chimia organică este în principal analitică.",
    "classes_with_examples": [
      "Eu(fod)₃ — compus utilizat în RMN pentru schimbarea deplasărilor chimice.",
      "EuCl₃ — precursor în sinteză de fosfori luminescenți."
    ],
    "role_in_organic_reactions": "Compușii Eu sunt utilizați pentru **spectroscopie** și **markeri luminescenți**, nu pentru cataliză."
  },
  "preparation_reactions": [
    {
      "equation": "Eu₂O₃ + 3 Ca → 2 Eu + 3 CaO",
      "notes": "Reducere metalică."
    },
    {
      "equation": "Electroliza EuCl₃ topit",
      "notes": "Metodă industrială alternativă."
    }
  ],
  "chemical_properties": [
    "Se oxidează rapid în aer: 4 Eu + 3 O₂ → 2 Eu₂O₃.",
    "Reacționează cu apa: 2 Eu + 6 H₂O → 2 Eu(OH)₃ + 3 H₂ ↑.",
    "Formează săruri: EuCl₃, EuBr₃ etc., frecvent colorate.",
    "Eu²⁺ și Eu³⁺ sunt responsabili pentru **emisia roșie** în afișaje."
  ]
},
{
  "symbol": "Gd",
  "name": "Gadolinium",
  "nume_romana": "Gadoliniu",
  "atomic_number": 64,
  "atomic_weight": 157.25,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁷ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-strălucitor",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["GdH₂", "GdH₃"],
  "melting_point": 1313,
  "boiling_point": 3273,
  "density": 7.90,
  "discovery": "Descoperit în 1880 de Jean Charles Galissard de Marignac.",
  "appearance": "Metal lustruit, maleabil, se oxidează lent în aer.",
  "discovered_in": "Mineralul gadolinit și monazit.",
  "abundance": "Relativ abundent pentru o lantanidă (~6.2 ppm în scoarță).",
  "uses": [
    "Agenți de contrast **Gd-DTPA** în **imagistica RMN** (pentru claritate ridicată).",
    "Bare de **control al neutronilor** în reactoare nucleare (Gd are secțiune mare de captare).",
    "Magneți și aliaje magnetice speciale.",
    "Fosfori pentru afișaje fluorescente.",
    "Materiale magnetocalorice pentru **frigidere pe bază de câmp magnetic**."
  ],
  "notable_properties": {
    "electronegativity": 1.20,
    "ionization_energy": 593,
    "atomic_radius": 180,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Puternic **feromagnetic** (devine paramagnetic peste 20°C)",
    "thermal_conductivity": 10.6,
    "specific_heat_capacity": 37.03,
    "special_note": "Gadoliniul are una dintre cele mai **mare secțiuni de captare a neutronilor** → ideal pentru controlul reactoarelor nucleare."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la reacții metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile libere de gadoliniu sunt **toxice**, dar forma chelatată din RMN este sigură când este eliminată corect."
  },
  "organic_compounds": {
    "overview": "Gadoliniul este utilizat aproape exclusiv sub formă **chelatată** pentru siguranță.",
    "classes_with_examples": [
      "Gd-DTPA — agent de contrast RMN.",
      "Gd-DO3A — chelat stabil folosit în imagistică avansată."
    ],
    "role_in_organic_reactions": "Chelarea Gd³⁺ permite vizualizarea fluxurilor sanguine și țesuturilor în medicină."
  },
  "preparation_reactions": [
    {
      "equation": "Gd₂O₃ + 2 Ca → 2 Gd + 2 CaO",
      "notes": "Reducere cu calciu metalic."
    },
    {
      "equation": "Electroliza GdCl₃ topit",
      "notes": "Producție industrială."
    }
  ],
  "chemical_properties": [
    "4 Gd + 3 O₂ → 2 Gd₂O₃ (oxid stabil, alb).",
    "Gd + 6 H₂O → 2 Gd(OH)₃ + 3 H₂ ↑ (reacționează lent).",
    "Formează săruri stabile GdCl₃, GdBr₃, Gd(NO₃)₃.",
    "Captarea neutronilor → Gd este folosit pentru oprirea reacțiilor nucleare."
  ]
},
{
  "symbol": "Tb",
  "name": "Terbium",
  "nume_romana": "Terbiu",
  "atomic_number": 65,
  "atomic_weight": 158.925,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f⁹ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu strălucitor",
  "oxidation_states": [+3, +4],
  "higher_oxidation_states": "+4 (în compuși oxigenici)",
  "compounds_with_hydrogen": ["TbH₂", "TbH₃"],
  "melting_point": 1356,
  "boiling_point": 3230,
  "density": 8.23,
  "discovery": "Descoperit în 1843 de Carl Gustaf Mosander în mineralul gadolinit.",
  "appearance": "Metal maleabil, relativ moale, se oxidează lent în aer.",
  "discovered_in": "Minerale: monazit, bastnäsit, gadolinit (pământuri rare).",
  "abundance": "Mediu-rar (~1 ppm în scoarță).",
  "uses": [
    "Fosfori **verde intens** în ecrane **TV, LED și LCD** (Tb³⁺ → lumină verde).",
    "Magneți **Tb-Dy-Fe** pentru dispozitive magnetostrictive (transformă electric în mișcare).",
    "Sticlă laser și fibre optice dopate cu Tb.",
    "Materiale magnetocalorice (posibil în frigidere cu câmp magnetic).",
    "Stabilizarea magneților NdFeB la temperaturi înalte."
  ],
  "notable_properties": {
    "electronegativity": 1.1,
    "ionization_energy": 566,
    "atomic_radius": 177,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Puternic **feromagnetic** sub 230 K; paramagnetic la temperatura camerei",
    "thermal_conductivity": 11.1,
    "specific_heat_capacity": 28.91,
    "special_note": "Oxidul Tb₄O₇ este un **oxid mixt** (Tb³⁺/Tb⁴⁺) utilizat în fosforii verzi pentru afișaje."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există rol biologic.",
    "role_in_human_body": "Nu participă metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile de terbiu pot irita plămânii și mucoasele."
  },
  "organic_compounds": {
    "overview": "Ceilalți compuși de Tb sunt folosiți în optoelectronică.",
    "classes_with_examples": [
      "Tb(acac)₃ — complex luminescent în solvent.",
      "Tb₄O₇ — oxid mixt utilizat în fosforii verzi."
    ],
    "role_in_organic_reactions": "Terbiul nu este folosit ca agent catalitic major în chimie organică; rol principal → **emisie luminescentă**."
  },
  "preparation_reactions": [
    {
      "equation": "Tb₂O₃ + 3 Ca → 2 Tb + 3 CaO",
      "notes": "Reducere metalică."
    },
    {
      "equation": "Electroliza TbCl₃ topit",
      "notes": "Metoda industrială."
    }
  ],
  "chemical_properties": [
    "4 Tb + 3 O₂ → 2 Tb₂O₃.",
    "Tb + 6 H₂O → 2 Tb(OH)₃ + 3 H₂ ↑ (reacționează încet în apă rece).",
    "Formează săruri TbCl₃, TbBr₃, TbF₃.",
    "Tb³⁺ → emisie **verde** în fosfori luminescenți."
  ]
},
{
  "symbol": "Dy",
  "name": "Dysprosium",
  "nume_romana": "Dispriu",
  "atomic_number": 66,
  "atomic_weight": 162.500,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁰ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-lucios",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["DyH₂", "DyH₃"],
  "melting_point": 1407,
  "boiling_point": 2562,
  "density": 8.54,
  "discovery": "Descoperit în 1886 de Paul Émile Lecoq de Boisbaudran.",
  "appearance": "Metal moale și maleabil, se oxidează lent în aer.",
  "discovered_in": "Mineralul xenotim, monazit și bastnäsit.",
  "abundance": "Mediu rar (~6.2 ppm în scoarță).",
  "uses": [
    "Magneți **NdFeB + Dy** pentru **motoare electrice** și turbine eoliene (rezistență la temperaturi înalte).",
    "Bare de control în reactoare nucleare (Dy absoarbe eficient neutronii).",
    "Lasere Dy folosite în medicină și telecomunicații.",
    "Materiale magnetocalorice (posibil în frigidere pe bază de câmp magnetic).",
    "Fosfori pentru iluminare și afișaje."
  ],
  "notable_properties": {
    "electronegativity": 1.22,
    "ionization_energy": 573,
    "atomic_radius": 178,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Puternic **feromagnetic** la temperaturi scăzute; paramagnetic altfel",
    "thermal_conductivity": 10.7,
    "specific_heat_capacity": 27.7,
    "special_note": "Adăugat în magneți NdFeB → menține **magnetizarea la temperaturi ridicate** (folosit în motoare EV)."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol fiziologic.",
    "role_in_human_body": "Nu participă la funcțiuni biologice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Praful de dispriu poate irita plămânii; sărurile pot afecta ficatul."
  },
  "organic_compounds": {
    "overview": "Dispriul este puțin utilizat direct în sinteză organică.",
    "classes_with_examples": [
      "Dy(acac)₃ — complex folosit în materiale luminescente.",
      "DyCl₃ — precursor pentru fabricația fosforilor."
    ],
    "role_in_organic_reactions": "Rol principal în **materiale optice**, nu în cataliză."
  },
  "preparation_reactions": [
    {
      "equation": "Dy₂O₃ + 3 Ca → 2 Dy + 3 CaO",
      "notes": "Reducere metalică."
    },
    {
      "equation": "Electroliza DyCl₃ topit",
      "notes": "Producție industrială."
    }
  ],
  "chemical_properties": [
    "4 Dy + 3 O₂ → 2 Dy₂O₃ (oxid stabil).",
    "Dy + 6 H₂O → 2 Dy(OH)₃ + 3 H₂ ↑ (reacționează lent).",
    "Formează săruri stabile: DyCl₃, DyBr₃, DyF₃.",
    "Compușii Dy³⁺ prezintă **fluorescență IR** utilă în optoelectronică."
  ]
},
{
  "symbol": "Ho",
  "name": "Holmium",
  "nume_romana": "Holmiu",
  "atomic_number": 67,
  "atomic_weight": 164.930,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹¹ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-lucios",
  "oxidation_states": [+3],
  "compound_with_hydrogen": ["HoH₂", "HoH₃"],
  "melting_point": 1461,
  "boiling_point": 2600,
  "density": 8.79,
  "discovery": "Descoperit în 1878 de Marc Delafontaine și Per Teodor Cleve.",
  "appearance": "Metal moale, maleabil, stabil în aer uscat, dar se oxidează în aer umed.",
  "discovered_in": "Minerale de pământuri rare (monazit, gadolinit, xenotim).",
  "abundance": "Relativ rar (~1.3 ppm în scoarță).",
  "uses": [
    "Material pentru **magneți extrem de puternici** (aliaje Ho-Co).",
    "Stocare magnetică de mare densitate (HDD-uri experimentale).",
    "Medicină: **lasere Ho:YAG** folosite în chirurgie urologică (ex: îndepărtarea pietrelor la rinichi).",
    "Bare de control în reactoare nucleare (secțiune bună de captare a neutronilor).",
    "Colorarea sticlei și ceramicii (tonuri galben-măsliniu)."
  ],
  "notable_properties": {
    "electronegativity": 1.23,
    "ionization_energy": 581,
    "atomic_radius": 176,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "**Cel mai mare moment magnetic dintre toate elementele** (≈10.6 μB) → esențial pentru magneți de înaltă performanță.",
    "thermal_conductivity": 16.2,
    "specific_heat_capacity": 27.15,
    "special_note": "Un singur atom de Ho poate memora **un bit de informație** în sisteme cuantice experimentale — memorie la scară atomică."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există rol biologic.",
    "role_in_human_body": "Nu participă metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Compușii pot fi iritanți pentru plămâni și ochi; toxicitatea este moderată."
  },
  "organic_compounds": {
    "overview": "Folosit în **materiale luminescente și magnetice**, nu în chimia organică clasică.",
    "classes_with_examples": [
      "Ho(acac)₃ — complex pentru materiale optice.",
      "Ho₂O₃ — oxid folosit în sticlă colorată."
    ],
    "role_in_organic_reactions": "Rol minim; valoare principală → **proprietăți magnetice** și optice."
  },
  "preparation_reactions": [
    {
      "equation": "Ho₂O₃ + 3 Ca → 2 Ho + 3 CaO",
      "notes": "Reducere metalică standard."
    },
    {
      "equation": "Electroliza HoCl₃ topit",
      "notes": "Producția industrială."
    }
  ],
  "chemical_properties": [
    "4 Ho + 3 O₂ → 2 Ho₂O₃ (oxid stabil).",
    "Ho + 6 H₂O → 2 Ho(OH)₃ + 3 H₂ ↑ (reacție lentă).",
    "Formează săruri stabile: HoCl₃, HoBr₃, HoF₃.",
    "Proprietăți magnetice excepționale → folosit în magneți și stocare de date."
  ]
},
{
  "symbol": "Er",
  "name": "Erbium",
  "nume_romana": "Erbiu",
  "atomic_number": 68,
  "atomic_weight": 167.259,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹² 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu, cu nuanțe roz când este pulverizat",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["ErH₂", "ErH₃"],
  "melting_point": 1529,
  "boiling_point": 2868,
  "density": 9.07,
  "discovery": "Descoperit în 1843 de Carl Gustav Mosander (în mineralul erbia).",
  "appearance": "Metal lucios, stabil în aer uscat, dar se oxidează în aer umed.",
  "discovered_in": "Mineralele gadolinit, xenotim și monazit.",
  "abundance": "Răspândit moderat (~3 ppm).",
  "uses": [
    "Amplificatoare optice în **fibre optice pentru internet** (Er³⁺ → amplifică semnalul la 1550 nm).",
    "Lasere medicale **Er:YAG** pentru chirurgie dermatologică și stomatologie.",
    "Colorarea sticlei și ceramicii (dă nuanțe roz-violet).",
    "Fosfori luminescenți și materiale IR.",
    "Aditiv în aliaje pentru a îmbunătăți duritatea."
  ],
  "notable_properties": {
    "electronegativity": 1.24,
    "ionization_energy": 589.3,
    "atomic_radius": 175,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic la temperatura camerei",
    "thermal_conductivity": 14,
    "specific_heat_capacity": 28.12,
    "special_note": "Ionul **Er³⁺** are linii de absorbție/emitere exact în **fereastra telecom** (≈1550 nm) → ideal pentru internet prin fibră optică."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Poate cauza iritații pulmonare și afectarea ficatului în cantități mari."
  },
  "organic_compounds": {
    "overview": "Compușii cu erbiu sunt folosiți în optic și luminescență.",
    "classes_with_examples": [
      "Er₂O₃ — oxid utilizat pentru colorarea sticlei.",
      "Er(acac)₃ — complex folosit în materiale fotonice."
    ],
    "role_in_organic_reactions": "Rol mic în reacții chimice; valoarea vine din **proprietăți optice**."
  },
  "preparation_reactions": [
    {
      "equation": "Er₂O₃ + 3 Ca → 2 Er + 3 CaO",
      "notes": "Reducere metalică (metoda principală)."
    },
    {
      "equation": "Electroliza ErCl₃ topit",
      "notes": "Metodă industrială alternativă."
    }
  ],
  "chemical_properties": [
    "4 Er + 3 O₂ → 2 Er₂O₃ (oxid roz-violet).",
    "Er + 6 H₂O → 2 Er(OH)₃ + 3 H₂ ↑ (reacționează lent).",
    "Formează săruri stabile ErCl₃, ErF₃, Er(NO₃)₃.",
    "Compușii Er³⁺ emit **lumină roz-violet** în fosfori."
  ]
},
{
  "symbol": "Tm",
  "name": "Thulium",
  "nume_romana": "Tuliu",
  "atomic_number": 69,
  "atomic_weight": 168.934,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹³ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-deschis",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["TmH₂", "TmH₃"],
  "melting_point": 1545,
  "boiling_point": 1950,
  "density": 9.32,
  "discovery": "Descoperit în 1879 de Per Teodor Cleve.",
  "appearance": "Metal maleabil și moale, se oxidează lent la aer.",
  "discovered_in": "Minerale de pământuri rare (gadolinit, xenotim, monazit).",
  "abundance": "Foarte rar (~0.5 ppm în scoarță), unul dintre cele mai rare lantanide.",
  "uses": [
    "Lasere **Tm:YAG** pentru **chirurgie minim invazivă** (ex: urologie, ORL).",
    "Dozimetre radiații X și gamma (detectori pentru radiologie).",
    "Surse portabile de radiație (izotopul Tm-170).",
    "Fosfori pentru afișaje fluorescente albastru-verde.",
    "Materiale magnetice experimentale."
  ],
  "notable_properties": {
    "electronegativity": 1.25,
    "ionization_energy": 596.7,
    "atomic_radius": 175,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic la T normală, antiferomagnetic sub 32 K",
    "thermal_conductivity": 16.9,
    "specific_heat_capacity": 27.03,
    "special_note": "Izotopul **Tm-170** emite radiație gamma moale → folosit în **dispozitive portabile de radiografie**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Compușii pot afecta rinichii și sistemul nervos dacă sunt inhalați/ingerați."
  },
  "organic_compounds": {
    "overview": "Folosit în materialele luminescente și ca dopant în cristale laser.",
    "classes_with_examples": [
      "Tm:YAG (laser medical).",
      "Tm₂O₃ — oxid pentru sticlă optică."
    ],
    "role_in_organic_reactions": "Nu joacă rol important în cataliză; valoarea sa vine din **aplicații optice**."
  },
  "preparation_reactions": [
    {
      "equation": "Tm₂O₃ + 3 Ca → 2 Tm + 3 CaO",
      "notes": "Reducere cu calciu metalic (metodă standard)."
    },
    {
      "equation": "Electroliza TmCl₃ topit",
      "notes": "Metodă industrială alternativă."
    }
  ],
  "chemical_properties": [
    "4 Tm + 3 O₂ → 2 Tm₂O₃ (oxid stabil deschis la culoare).",
    "Tm + 6 H₂O → 2 Tm(OH)₃ + 3 H₂ ↑ (reacție lentă).",
    "Formează săruri stabile: TmCl₃, TmF₃, Tm(NO₃)₃.",
    "Compușii Tm³⁺ emit lumină **albastru-verde** în fosfori."
  ]
},
{
  "symbol": "Yb",
  "name": "Ytterbium",
  "nume_romana": "Iterbiu",
  "atomic_number": 70,
  "atomic_weight": 173.045,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 6s²",
  "group": "Lantanide",
  "period": 6,
  "block": "f",
  "category": "Metal de tranziție internă (lantanidă)",
  "color": "Argintiu-pal",
  "oxidation_states": [+2, +3],
  "higher_oxidation_states": "+3 (cel mai stabil)",
  "compounds_with_hydrogen": ["YbH₂", "YbH₃"],
  "melting_point": 824,
  "boiling_point": 1196,
  "density": 6.97,
  "discovery": "Identificat în 1878 de Jean Charles Galissard de Marignac, purificat complet în 1907 de Georges Urbain.",
  "appearance": "Metal moale și maleabil; se oxidează lent în aer.",
  "discovered_in": "Minerale precum xenotim, monazit și gadolinit.",
  "abundance": "Destul de rar (~3 ppm), dar extras în principal ca produs secundar al altor lantanide.",
  "uses": [
    "Lasere cu fibră **Yb-dopate** pentru tăiere industrială și chirurgie.",
    "Ceasuri atomice experimentale → Yb are una dintre cele mai stabile frecvențe cuantice.",
    "Detectoare de radiații în dosimetrie.",
    "Aditiv în oțeluri → crește rezistența la oboseală.",
    "Sisteme cryo și materiale magnetice cuantice."
  ],
  "notable_properties": {
    "electronegativity": 1.1,
    "ionization_energy": 603.4,
    "atomic_radius": 175,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Paramagnetic (uneori devine aproape nemagnetic în stare Yb²⁺)",
    "thermal_conductivity": 38,
    "specific_heat_capacity": 26.74,
    "special_note": "Unele săruri de iterbiu prezintă **comportament cuantic exotic** (superconductivitate și magnetism fluctuant)."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Compușii solubili pot afecta rinichii și sistemul nervos."
  },
  "organic_compounds": {
    "overview": "Compușii cu iterbiu sunt importanți în **reducerea stereoselectivă**.",
    "classes_with_examples": [
      "YbCl₃ — catalizator Lewis utilizat în sinteza organică.",
      "Yb(acac)₃ — complex pentru materiale luminescente."
    ],
    "role_in_organic_reactions": "YbCl₃ catalizează reacții de acilare, condensare și cuplare selectivă."
  },
  "preparation_reactions": [
    {
      "equation": "Yb₂O₃ + 3 Ca → 2 Yb + 3 CaO",
      "notes": "Reducere cu calciu (metoda standard)."
    },
    {
      "equation": "Electroliza YbCl₃ topit",
      "notes": "Producție industrială."
    }
  ],
  "chemical_properties": [
    "4 Yb + 3 O₂ → 2 Yb₂O₃ (oxid stabil).",
    "Yb + 6 H₂O → 2 Yb(OH)₃ + 3 H₂ ↑ (reacționează lent).",
    "Formează săruri: YbCl₃, YbF₃, Yb(NO₃)₃.",
    "Yb²⁺ este mai puțin magnetic decât Yb³⁺ → interesant pentru fizica cuantică."
  ]
},
{
  "symbol": "Lu",
  "name": "Lutetium",
  "nume_romana": "Lutețiu",
  "atomic_number": 71,
  "atomic_weight": 174.967,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 6s² 5d¹",
  "group": "Lantanide",
  "period": 6,
  "block": "d/f (pragul dintre serii)",
  "category": "Metal de tranziție internă (lantanidă, dar chimic apropiat de Hf/Zr)",
  "color": "Argintiu-metalic",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["LuH₂", "LuH₃"],
  "melting_point": 1663,
  "boiling_point": 3402,
  "density": 9.84,
  "discovery": "Descoperit în 1907 independent de Georges Urbain, Carl Auer von Welsbach și Charles James.",
  "appearance": "Metal dur, foarte dens și stabil la aer; mai puțin reactiv decât majoritatea lantanidelor.",
  "discovered_in": "Mineralele monazit și xenotim (se găsește în concentrații foarte mici).",
  "abundance": "Cel mai rar lantanid (~0.5 ppm în scoarță).",
  "uses": [
    "Radioterapie de **precizie**: izotopul **Lu-177** este folosit în tratamentul cancerului (terapia cu radionuclizi).",
    "Detectoare de radiații, scanere PET și scintilatoare (Lu₂SiO₅:Ce).",
    "Catalizator pentru reacții organice fine (industria farmaceutică).",
    "Standard de înaltă puritate pentru cercetare spectrală.",
    "Componente în lasere și materiale optice IR."
  ],
  "notable_properties": {
    "electronegativity": 1.27,
    "ionization_energy": 523.5,
    "atomic_radius": 174,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Diamagnetic / slab paramagnetic",
    "thermal_conductivity": 16.4,
    "specific_heat_capacity": 26.86,
    "special_note": "Are **cea mai mare densitate și cel mai mare punct de topire** dintre toate lantanidele."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Niciun rol metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile pot cauza iritații și inflamații; Lu-177 este radioactiv și necesită protecție."
  },
  "organic_compounds": {
    "overview": "Folosit ca catalizator în reacții stereoselective și în sinteza farmaceutică.",
    "classes_with_examples": [
      "LuCl₃ — catalizator Lewis utilizat în sinteze organice.",
      "Lu(acac)₃ — complex stabil pentru materiale optice."
    ],
    "role_in_organic_reactions": "Cataliză blândă și selectivă în reacții de cuplare și formare de cicluri organice."
  },
  "preparation_reactions": [
    {
      "equation": "Lu₂O₃ + 3 Ca → 2 Lu + 3 CaO",
      "notes": "Reducere metalică."
    },
    {
      "equation": "Electroliza sărurilor topite de LuCl₃",
      "notes": "Producție industrială."
    }
  ],
  "chemical_properties": [
    "4 Lu + 3 O₂ → 2 Lu₂O₃ (oxid alb, stabil).",
    "Lu + 6 H₂O → 2 Lu(OH)₃ + 3 H₂ ↑ (reacționează lent).",
    "Formează săruri stabile: LuCl₃, LuBr₃, LuF₃.",
    "Chimic se comportă **mai mult ca Hf/Zr** decât ca o lantanidă tipică."
  ]
},
{
  "symbol": "Hf",
  "name": "Hafnium",
  "nume_romana": "Hafniu",
  "atomic_number": 72,
  "atomic_weight": 178.49,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 5d² 6s²",
  "group": 4,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu",
  "oxidation_states": [+4],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["HfH₂"],
  "melting_point": 2233,
  "boiling_point": 4603,
  "density": 13.31,
  "discovery": "Identificat în 1923 de Dirk Coster și George de Hevesy în Copenhaga (Hafnia = numele latin al orașului).",
  "appearance": "Metal dur, dens, rezistent la coroziune, similar vizual cu zirconiu.",
  "discovered_in": "Mai ales în minerale ce conțin zirconiu (ZrSiO₄), deoarece Zr și Hf apar împreună în natură.",
  "abundance": "Relativ rar, ~3 ppm în scoarța terestră.",
  "uses": [
    "Bare de **control în reactoare nucleare** (Hf absoarbe eficient neutronii).",
    "Oxidul de hafniu (HfO₂) este folosit în **microcipuri** ca material dielectrica de înaltă constantă (tehnologie post-siliciu).",
    "Aliaje rezistente la temperaturi înalte (turbine, rachete).",
    "Filamente pentru lămpi descărcare în gaz.",
    "Acoperiri termice ultrarezistente."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 658.5,
    "atomic_radius": 159,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 23,
    "specific_heat_capacity": 25.73,
    "special_note": "Hafniul absoarbe neutronii de **600x mai eficient** decât zirconiu — de aceea este crucial în reactoarele nucleare."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Compușii de hafniu pot irita mucoasele; toxicitatea generală este redusă."
  },
  "organic_compounds": {
    "overview": "Compușii organometalici ai Hf sunt utilizați în cataliză pentru polimerizarea olefinelor.",
    "classes_with_examples": [
      "Hafnoceni (Cp₂HfCl₂) — catalizatori pentru polietilenă și polipropilenă.",
      "Hf(OR)₄ — precursori pentru acoperiri sol-gel."
    ],
    "role_in_organic_reactions": "Cataliză în sinteza **polimerilor** (materiale plastice)."
  },
  "preparation_reactions": [
    {
      "equation": "HfCl₄ + 2 Mg → Hf + 2 MgCl₂",
      "notes": "Reducere metalică (Kroll modificat)."
    },
    {
      "equation": "Electroliza sărurilor topite de HfF₄",
      "notes": "Producție industrială alternativă."
    }
  ],
  "chemical_properties": [
    "Hf + O₂ → HfO₂ (oxid foarte stabil, refractar).",
    "Hf + 2 Cl₂ → HfCl₄ (sare volatilă utilizată în purificare prin CVD).",
    "Reacționează lent cu acizii; rezistă bine la coroziune.",
    "HfO₂ are **punct de topire > 2700°C**, fiind unul dintre cele mai rezistente oxizi cunoscuți."
  ]
},
{
  "symbol": "Ta",
  "name": "Tantalum",
  "nume_romana": "Tantal",
  "atomic_number": 73,
  "atomic_weight": 180.947,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d³ 6s²",
  "group": 5,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu închis",
  "oxidation_states": [+3, +5],
  "higher_oxidation_states": "+5 (cel mai stabil)",
  "compounds_with_hydrogen": ["TaH₂", "TaH₃"],
  "melting_point": 3017,
  "boiling_point": 5458,
  "density": 16.69,
  "discovery": "Descoperit în 1802 de Anders Gustav Ekeberg.",
  "appearance": "Metal dens, dur, foarte rezistent la coroziune și acizi, luciu metalic stabil.",
  "discovered_in": "Mineralele tantalit și columbit (grupul coltan).",
  "abundance": "Rar, ~2 ppm în scoarță; minereurile majore se găsesc în Africa Centrală și Australia.",
  "uses": [
    "Condensatori **electrolitici Ta** pentru electronice miniaturizate (telefoane, laptopuri, plăci de bază).",
    "Implanturi medicale (compatibilitate excelentă cu organismul).",
    "Instrumente chirurgicale anticorozive.",
    "Piese pentru **turbo-reactoare** și medii cu temperaturi ridicate.",
    "Carcase protectoare pentru reacții chimice foarte agresive."
  ],
  "notable_properties": {
    "electronegativity": 1.5,
    "ionization_energy": 761,
    "atomic_radius": 146,
    "crystal_structure": "Cubic centrat pe corp (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 57,
    "specific_heat_capacity": 25.36,
    "special_note": "Tantalul formează un strat **Ta₂O₅** subțire și stabil, care îl protejează complet împotriva coroziunii."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Tantalul pur este **biocompatibil**, dar pulberile inhalate pot provoca iritații pulmonare."
  },
  "organic_compounds": {
    "overview": "Compușii organometalici ai tantalului sunt folosiți în cataliză și materiale speciale.",
    "classes_with_examples": [
      "TaCl₅ — precursor pentru sinteza Ta₂O₅.",
      "Tantalocene (Cp₂TaCl₂) — compus organometalic utilizat în cataliză."
    ],
    "role_in_organic_reactions": "Cataliză în reacții de polimerizare și sinteză de materiale cu proprietăți electrice."
  },
  "preparation_reactions": [
    {
      "equation": "Ta₂O₅ + 5 Ca → 2 Ta + 5 CaO",
      "notes": "Reducere metalică clasică."
    },
    {
      "equation": "TaCl₅ + 5 Mg → Ta + 5 MgCl₂",
      "notes": "Reducerea sărurilor halogenate."
    }
  ],
  "chemical_properties": [
    "2 Ta + 5 O₂ → 2 Ta₂O₅ (oxid protector extrem de stabil).",
    "Ta este aproape **inert** la acizi, chiar și în acid clorhidric fierbinte.",
    "Reacționează doar cu acid fluorhidric sau amestec HF + HNO₃.",
    "Folosit pentru echipamente care lucrează în medii chimice **foarte agresive**."
  ]
},
{
  "symbol": "W",
  "name": "Tungsten",
  "nume_romana": "Tungsten",
  "atomic_number": 74,
  "atomic_weight": 183.84,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁴ 6s²",
  "group": 6,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu",
  "oxidation_states": [+2, +3, +4, +5, +6],
  "higher_oxidation_states": "+6 (în wolfați, ex: WO₃)",
  "compounds_with_hydrogen": ["WH₂", "W₂H"],
  "melting_point": 3422,
  "boiling_point": 5555,
  "density": 19.25,
  "discovery": "Reducerea sărurilor de tungsten a fost realizată pentru prima dată în 1783 de frații Juan și Fausto de Elhuyar.",
  "appearance": "Metal foarte dens, dur, cu aspect metalic mat.",
  "discovered_in": "Mineralele wolframit ((Fe,Mn)WO₄) și scheelit (CaWO₄).",
  "abundance": "Rar (~1 ppm în scoarță).",
  "uses": [
    "Filamente pentru **becuri incandescente** și tuburi cu raze X (rezistă la temperaturi extreme).",
    "Scule de tăiere și burghie din **carbura de tungsten (WC)** — extrem de dură.",
    "Proiectile, pătrunde blindaj (densitate mare → energie mare).",
    "Electrozi pentru sudură TIG.",
    "Greutăți și contragreutăți în aviație și rachete."
  ],
  "notable_properties": {
    "electronegativity": 2.36,
    "ionization_energy": 770,
    "atomic_radius": 139,
    "crystal_structure": "Cubic body-centered (bcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 173,
    "specific_heat_capacity": 24.3,
    "special_note": "**Cel mai înalt punct de topire al oricărui metal** → nu se topește în flacără."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la funcții metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Pulberile sau carbura de tungsten inhalate pot cauza inflamații pulmonare."
  },
  "organic_compounds": {
    "overview": "Compușii de tungsten sunt folosiți în cataliză și chimia organometalică.",
    "classes_with_examples": [
      "WCl₆ — precursor în sinteza compușilor de tungsten.",
      "W(CO)₆ — complex organometalic important în cataliză."
    ],
    "role_in_organic_reactions": "Cataliză pentru reacții de metateză și izomerizare."
  },
  "preparation_reactions": [
    {
      "equation": "WO₃ + 3 H₂ → W + 3 H₂O",
      "notes": "Reducere cu hidrogen (metoda industrială standard)."
    },
    {
      "equation": "WO₃ + 3 C → W + 3 CO",
      "notes": "Reducere cu carbon (poate produce impurități carburice)."
    }
  ],
  "chemical_properties": [
    "W + O₂ → WO₃ (oxid galben folosit pentru pigmenți și cataliză).",
    "W nu este atacat de acizi, dar se dizolvă în **amestec HF + HNO₃**.",
    "Carbura de tungsten (WC) este **aproape la fel de dură ca diamantul**."
  ]
},
{
  "symbol": "Re",
  "name": "Rhenium",
  "nume_romana": "Reniu",
  "atomic_number": 75,
  "atomic_weight": 186.207,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁵ 6s²",
  "group": 7,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-argintiu, ușor albăstrui",
  "oxidation_states": [-1, +1, +2, +3, +4, +5, +6, +7],
  "higher_oxidation_states": "+7 (în perrenate, ex: ReO₄⁻)",
  "compounds_with_hydrogen": ["ReH₉²⁻ (complex neobișnuit)", "ReH(CO)₅"],
  "melting_point": 3186,
  "boiling_point": 5596,
  "density": 21.02,
  "discovery": "Confirmat ca element în 1925 de Ida Noddack, Walter Noddack și Otto Berg.",
  "appearance": "Metal foarte dens, foarte durabil, rezistent la coroziune, cu puncte de topire și fierbere extrem de ridicate.",
  "discovered_in": "Minerale de molibden și cupru (nu are propriul mineral primar).",
  "abundance": "Extrem de rar (~1 parte per miliard în scoarță), unul dintre cele mai rare metale naturale.",
  "uses": [
    "Componente în **turbine de avioane și rachete** → aliaje Re-Ni/Co rezistă la >1500°C.",
    "Cataliză pentru **reformarea petrolului** → obținere benzină cu cifră octanică mare.",
    "Filamente și contacte electrice rezistente la coroziune.",
    "Termocupluri W-Re pentru temperaturi extreme.",
    "Motoare de rachetă regenerativ răcite (Re se comportă stabil la temperatură + flux gazos)."
  ],
  "notable_properties": {
    "electronegativity": 1.9,
    "ionization_energy": 760,
    "atomic_radius": 137,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 48,
    "specific_heat_capacity": 25.5,
    "special_note": "**Aliajele cu reniu** sunt vitale în industria aviației → permit funcționarea turbinei la temperaturi aproape de punctul de topire al aliajului."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile de reniu sunt considerate cu toxicitate scăzută, dar praful metalic poate irita plămânii."
  },
  "organic_compounds": {
    "overview": "Compușii organometalici ai reniului sunt utilizați în cataliză și materiale neobișnuite.",
    "classes_with_examples": [
      "Re₂(CO)₁₀ — complex stabil utilizat în sinteză organometalică.",
      "NH₄ReO₄ — sursă comună de Re în cataliză."
    ],
    "role_in_organic_reactions": "Cataliză selectivă în hidrogenare și izomerizare."
  },
  "preparation_reactions": [
    {
      "equation": "MoS₂ (minereu) → (proces de topire) → soluție → extracție NH₄ReO₄ → reducere → Re",
      "notes": "Reniul este obținut ca produs secundar din mineritul molibdenului."
    },
    {
      "equation": "NH₄ReO₄ + H₂ → Re + NH₃ + H₂O",
      "notes": "Reducere cu hidrogen (metoda principală industrială)."
    }
  ],
  "chemical_properties": [
    "Re + O₂ → Re₂O₇ (oxid volatil + stabil în aer cald).",
    "Re este foarte rezistent la acizi, chiar și la apă regală.",
    "Formează perrenate stabile: ReO₄⁻ (similar cu MnO₄⁻).",
    "Complexele cu CO sunt stabile și importante în cataliză."
  ]
},
{
  "symbol": "Os",
  "name": "Osmium",
  "nume_romana": "Osmiu",
  "atomic_number": 76,
  "atomic_weight": 190.23,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁶ 6s²",
  "group": 8,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Gri-albăstrui, foarte lucios",
  "oxidation_states": [-2, -1, +1, +2, +3, +4, +6, +8],
  "higher_oxidation_states": "+8 (în tetroxidul de osmiu OsO₄)",
  "compounds_with_hydrogen": ["OsH₂", "OsH₃"],
  "melting_point": 3033,
  "boiling_point": 5012,
  "density": 22.59,
  "discovery": "Descoperit în 1803 de Smithson Tennant, împreună cu iridiul.",
  "appearance": "Metal extrem de dens și foarte dur; rezistent la coroziune.",
  "discovered_in": "În minereuri de platină (aliaje naturale Os–Ir).",
  "abundance": "Foarte rar (~0.002 ppm în scoarță).",
  "uses": [
    "Aliaje **foarte dure** pentru contacte electrice și instrumente de precizie.",
    "Pivoți micro-mecanici (ceasuri mecanice, giroscoape).",
    "Vârfuri de stilouri premium.",
    "OsO₄ este folosit în **microscopie electronică** pentru colorarea membranelor celulare.",
    "Cercetări în cataliză pentru reacții organice fine."
  ],
  "notable_properties": {
    "electronegativity": 2.2,
    "ionization_energy": 840,
    "atomic_radius": 135,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 87.6,
    "specific_heat_capacity": 24.7,
    "special_note": "**Cel mai dens element cunoscut** (~22.6 g/cm³)."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Tetroxidul de osmiu (OsO₄) este extrem de toxic, volatil și poate cauza orbire — necesită manipulare cu ventilație strictă."
  },
  "organic_compounds": {
    "overview": "OsO₄ este un reactiv important în chimia organică.",
    "classes_with_examples": [
      "OsO₄ — folosit în dihidroxilarea alchenelor (formează dioli vicinali).",
      "Complexe Os–CO pentru cataliză selectivă."
    ],
    "role_in_organic_reactions": "Cataliză în reacția Sharpless (dihidroxilare enantioselectivă)."
  },
  "preparation_reactions": [
    {
      "equation": "Os + O₂ → OsO₄",
      "notes": "Reacție de oxidare (produce component toxic, utilizat controlat)."
    },
    {
      "equation": "Extracție din minereuri de platină → purificare prin volatilizarea OsO₄ → reducere la Os",
      "notes": "Proces industrial principal."
    }
  ],
  "chemical_properties": [
    "Os este rezistent la acizi, dar se oxidează în OsO₄.",
    "OsO₄ este volatil, foarte toxic, dar **esențial în microscopie**.",
    "Os formează compuși de coordinație cu CO, halogeni și liganzi organici.",
    "Oxidul OsO₂ este stabil și ceramic în structura."
  ]
},
{
  "symbol": "Ir",
  "name": "Iridium",
  "nume_romana": "Iridiu",
  "atomic_number": 77,
  "atomic_weight": 192.217,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁷ 6s²",
  "group": 9,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Alb-argintiu, intens lucios",
  "oxidation_states": [-1, +1, +2, +3, +4, +6],
  "higher_oxidation_states": "+6 (în IrF₆)",
  "compounds_with_hydrogen": ["IrH₂", "IrH₃"],
  "melting_point": 2446,
  "boiling_point": 4428,
  "density": 22.56,
  "discovery": "Descoperit în 1803 de Smithson Tennant în reziduul de dizolvare al platinei.",
  "appearance": "Metal foarte dens, foarte dur și **cel mai rezistent la coroziune** dintre toate metalele.",
  "discovered_in": "Minereuri de platină; adesea co-extras cu Pt și Os.",
  "abundance": "Extrem de rar (~0.001 ppm în scoarță).",
  "uses": [
    "Contacte electrice și electrozi rezistenți la coroziune.",
    "Aliaje Ir–Pt pentru **creuzeturi** la temperaturi extreme.",
    "Pivoți și componente mecanice pentru instrumente de precizie.",
    "Electrozi pentru motoare rachetă și duze de ardere (stabil la temperaturi mari).",
    "Standardul internațional pentru **kilogram** (aliu Ir–Pt era folosit în prototipul original)."
  ],
  "notable_properties": {
    "electronegativity": 2.20,
    "ionization_energy": 880,
    "atomic_radius": 136,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Paramagnetic foarte slab",
    "thermal_conductivity": 147,
    "specific_heat_capacity": 25.1,
    "special_note": "**Cel mai rezistent metal la coroziune** → nu este atacat de acizi, nici de apa regală."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Pulberile pot irita plămânii; toxicitatea chimică este redusă."
  },
  "organic_compounds": {
    "overview": "Iridiul formează complexe organometalice importante în cataliză.",
    "classes_with_examples": [
      "IrCl₃ — precursor important în chimia de coordinație.",
      "[Ir(COD)Cl]₂ — catalizator pentru hidrogenare.",
      "Cp*Ir(bpy) — catalizator pentru oxidări blânde."
    ],
    "role_in_organic_reactions": "Cataliză în **hidrogenare, izomerizare și activarea legăturilor C–H**."
  },
  "preparation_reactions": [
    {
      "equation": "Ir + O₂ → IrO₂",
      "notes": "Oxid stabil utilizat ca punct de plecare în chimia iridiului."
    },
    {
      "equation": "IrCl₃ + H₂ → Ir + 3 HCl",
      "notes": "Reducere în atmosferă de hidrogen."
    }
  ],
  "chemical_properties": [
    "Ir este **aproape inert** la acizi, inclusiv acid sulfuric și clorhidric.",
    "Se dizolvă lent în **amestec oxidant**: Cl₂ + NaClO + HCl.",
    "Formează compuși stabili cu liganzi CO, fosfine și olefine.",
    "Oxidul IrO₂ este folosit ca **electrod în electroliza apei**."
  ]
},
{
  "symbol": "Pt",
  "name": "Platinum",
  "nume_romana": "Platină",
  "atomic_number": 78,
  "atomic_weight": 195.084,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d⁹ 6s¹",
  "group": 10,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție",
  "color": "Alb-argintiu strălucitor",
  "oxidation_states": [0, +2, +4],
  "higher_oxidation_states": "+4 (în PtCl₄, PtO₂)",
  "compounds_with_hydrogen": ["PtH", "PtH₂ (complexe rare)"],
  "melting_point": 1768,
  "boiling_point": 3825,
  "density": 21.45,
  "discovery": "Cunoscut de civilizațiile precolumbiene; studiat științific în secolul XVIII.",
  "appearance": "Metal prețios, foarte lucios, maleabil, dens și rezistent la coroziune.",
  "discovered_in": "Depozite aluvionare din America de Sud; astăzi extras din minereuri de nichel.",
  "abundance": "Foarte rar (~0.005 ppm în scoarță).",
  "uses": [
    "**Catalizatori auto** (transformă substanțe toxice → CO₂ + H₂O + N₂).",
    "**Electrozi** în electroliză, senzori de oxigen și echipamente analitice.",
    "Bijuterii premium (rezistent la uzură, nu se oxidează).",
    "**Medicamente anticancer**: Cisplatin, Carboplatin, Oxaliplatin.",
    "Celule de combustie cu hidrogen și aplicații pentru energie curată."
  ],
  "notable_properties": {
    "electronegativity": 2.28,
    "ionization_energy": 870,
    "atomic_radius": 139,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 72,
    "specific_heat_capacity": 25.86,
    "special_note": "Platina este **aproape complet inertă** chimic — nu se corodează, nu oxidează, nu reacționează cu majoritatea acizilor."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic natural.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Complexele de Pt folosite în chimioterapie pot afecta rinichii și stomacul; necesită monitorizare medicală."
  },
  "organic_compounds": {
    "overview": "Platina este un **catalizator selectiv** în chimia organică.",
    "classes_with_examples": [
      "Cisplatin (Pt(NH₃)₂Cl₂) — medicament anticancer.",
      "PtCl₂(PPh₃)₂ — catalizator în reacții de hidrogenare.",
      "H₂PtCl₆ — precursor al catalizatorilor pe suport (Pt/C)."
    ],
    "role_in_organic_reactions": "Hidrogenare, izomerizare, cracare catalitică, reacții de cuplare."
  },
  "preparation_reactions": [
    {
      "equation": "PtCl₆²⁻ + H₂ → Pt + 6 Cl⁻ + 2 H⁺",
      "notes": "Reducere pentru obținerea platinei metalice."
    },
    {
      "equation": "Pt + 2 Cl₂ → PtCl₄",
      "notes": "Halogenare controlată."
    }
  ],
  "chemical_properties": [
    "Platina **rezistă** la acizi, inclusiv HCl și H₂SO₄.",
    "Se dizolvă doar în **apă regală (HCl + HNO₃)** → formând H₂PtCl₆.",
    "Catalizează reacții cu H₂, O₂, CO și alcene.",
    "Este stabilă termic, excelentă pentru utilizări în temperaturi ridicate."
  ]
},
{
  "symbol": "Au",
  "name": "Gold",
  "nume_romana": "Aur",
  "atomic_number": 79,
  "atomic_weight": 196.967,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s¹",
  "group": 11,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție nobil",
  "color": "Galben metalic caracteristic",
  "oxidation_states": [0, +1, +3],
  "higher_oxidation_states": "+3 (în săruri și complexi)",
  "compounds_with_hydrogen": ["AuH (rar, instabil)"],
  "melting_point": 1064,
  "boiling_point": 2856,
  "density": 19.32,
  "discovery": "Cunoscut din cele mai vechi timpuri; folosit în civilizațiile egiptene, sumeriene și aztece.",
  "appearance": "Metal moale, maleabil, ductil, cu luciu intens și culoare galbenă unică.",
  "discovered_in": "Depuneri aluvionare, cuarț aurifer, minereuri sulfuroase (pirite aurifere).",
  "abundance": "Rar (~0.005 ppm în scoarță).",
  "uses": [
    "Bijuterii și obiecte decorative (nu oxidează → aspect permanent).",
    "Finanțe și rezerve monetare (aur fizic și lingouri).",
    "Conectori și contacte în **electronice** (conductivitate excelentă, nu corodează).",
    "Stomatologie (aluiaje dentare stabile).",
    "Nanoparticule de aur în medicină (detectarea cancerului, nanoterapie)."
  ],
  "notable_properties": {
    "electronegativity": 2.54,
    "ionization_energy": 890,
    "atomic_radius": 144,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 318,
    "specific_heat_capacity": 25.42,
    "special_note": "Aurul este **cel mai maleabil metal**: 1 gram poate fi tras în fir de 2 km sau laminat în foi de câțiva nanometri grosime."
  },
  "biology_facts": {
    "presence_in_human_body": "Trase infime în sânge și țesuturi, fără rol biologic.",
    "role_in_human_body": "Nu participă la funcții metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile de aur (aurati) pot provoca reacții alergice; unele sunt folosite terapeutic în bolile reumatice."
  },
  "organic_compounds": {
    "overview": "Aurul formează complexe catalitice în chimie organică modernă.",
    "classes_with_examples": [
      "HAuCl₄ — clorură aurică (reagent de bază).",
      "Au(PPh₃)Cl — catalizator pentru reacții cu alchine.",
      "Complexe de aur(I) pentru reacții de izomerizare și ciclare."
    ],
    "role_in_organic_reactions": "Cataliză în sinteza moleculelor organice complexe (în special ciclizări și adăugări)."
  },
  "preparation_reactions": [
    {
      "equation": "2 Au + 3 Cl₂ → 2 AuCl₃",
      "notes": "Clorinare la temperaturi moderate."
    },
    {
      "equation": "Au + HCl + HNO₃ → HAuCl₄ + NO₂ + H₂O",
      "notes": "Aurul se dizolvă doar în **apă regală**."
    }
  ],
  "chemical_properties": [
    "Aurul nu se oxidează în aer și nu reacționează cu acizi obișnuiți.",
    "Se dizolvă doar în **apă regală** (HCl + HNO₃).",
    "Formează complexe stabile cu liganzi (fosfine, halogeni, CN⁻).",
    "Nanoparticulele de aur au proprietăți optice unice (plasmoni)."
  ]
},
{
  "symbol": "Hg",
  "name": "Mercury",
  "nume_romana": "Mercur",
  "atomic_number": 80,
  "atomic_weight": 200.592,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s²",
  "group": 12,
  "period": 6,
  "block": "d",
  "category": "Metal de tranziție (dar cu proprietăți semimetalice)",
  "color": "Argintiu-lucios, metalic lichid",
  "oxidation_states": [0, +1, +2],
  "higher_oxidation_states": "+2 (cel mai stabil)",
  "compounds_with_hydrogen": ["HgH₂ (instabil, rar)"],
  "melting_point": -39,
  "boiling_point": 357,
  "density": 13.55,
  "discovery": "Cunoscut din antichitate (civilizații romane, chineze, egiptene).",
  "appearance": "Metal lichid, dens, cu suprafață foarte lucioasă; formează picături caracteristice.",
  "discovered_in": "Minereul **cinabarit (HgS)** este principala sursă naturală.",
  "abundance": "Rar (~0.08 ppm în scoarță).",
  "uses": [
    "Termometre, barometre și manometre (istoric, acum rar din motive toxice).",
    "Lămpi fluorescente și tuburi de descărcare în gaz.",
    "Amalgame dentare (în scădere, înlocuite cu compozite).",
    "Electrozi în procese de clor-alcali (electroliza NaCl).",
    "Cataliză în chimie industrială (înlocuit din cauza toxicității)."
  ],
  "notable_properties": {
    "electronegativity": 2.0,
    "ionization_energy": 1007,
    "atomic_radius": 151,
    "crystal_structure": "Rhombohedral (solid rarefiat la temperaturi scăzute)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 8.3,
    "specific_heat_capacity": 27.98,
    "special_note": "Mercurul este **singurul metal lichid la temperatura camerei**; vaporii săi sunt **toxici neuroactiv**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există rol fiziologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Toxicitate ridicată: afectează **sistemul nervos** → tremurături, pierderi cognitive, iritabilitate ('boala pălărierilor')."
  },
  "organic_compounds": {
    "overview": "Compușii organici ai mercurului sunt **foarte toxici**.",
    "classes_with_examples": [
      "Metilmercur (CH₃Hg⁺) — bioacumulează în pește; neurotoxic sever.",
      "Hg(OAc)₂ — folosit în reacții de oximercurare în sinteza organică."
    ],
    "role_in_organic_reactions": "Oximercurarea alchenelor → transformare selectivă în alcooli (metodă înlocuită în prezent din motive ecologice)."
  },
  "preparation_reactions": [
    {
      "equation": "HgS + O₂ → Hg + SO₂",
      "notes": "Roșu cinabru încălzit → vaporii de Hg se condensează (metoda tradițională)."
    },
    {
      "equation": "Electroliza soluțiilor de săruri de mercur",
      "notes": "Metodă modernă."
    }
  ],
  "chemical_properties": [
    "Hg este relativ inert față de acizi neoxidanți.",
    "Se dizolvă în **apă regală** → H₂HgCl₄.",
    "Formează **amalgame** cu metale ca Ag, Au, Na, Al.",
    "Se transformă în **HgO** la încălzire în aer."
  ]
},
{
  "symbol": "Tl",
  "name": "Thallium",
  "nume_romana": "Taliu",
  "atomic_number": 81,
  "atomic_weight": 204.38,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p¹",
  "group": 13,
  "period": 6,
  "block": "p",
  "category": "Metal post-tranziție",
  "color": "Gri-albăstrui (asemănător cu plumbul)",
  "oxidation_states": [+1, +3],
  "higher_oxidation_states": "+3 (oxidant puternic, dar instabil în soluție)",
  "compounds_with_hydrogen": ["TlH (rar și instabil)"],
  "melting_point": 304,
  "boiling_point": 1473,
  "density": 11.85,
  "discovery": "Descoperit în 1861 de Sir William Crookes prin spectroscopie.",
  "appearance": "Metal moale, se poate tăia cu cuțitul; se oxidează repede la aer.",
  "discovered_in": "Minereuri de fier, sulf și staniu; adesea subprodus la rafinarea cuprului.",
  "abundance": "Rar, ~0.7 ppm în scoarță.",
  "uses": [
    "Componente pentru **celule fotovoltaice** și detecție infraroșie.",
    "Sticlă specială cu indice mare de refracție (optică avansată).",
    "Superconductorii pe bază de taliu (cuprate Tl-Ba-Ca-Cu-O).",
    "Istoric: rodenticide și otrăvuri (acum interzise aproape complet).",
    "Cristale scintilatoare pentru detectarea radiațiilor."
  ],
  "notable_properties": {
    "electronegativity": 1.62,
    "ionization_energy": 590,
    "atomic_radius": 156,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 46,
    "specific_heat_capacity": 26.3,
    "special_note": "Tl⁺ **mimează ionul K⁺ în celule**, perturbând funcția neuronilor — motivul toxicității extreme."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la procese fiziologice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Toxicitate acută: căderea părului, neuropatie severă, convulsii, moarte. Taliul este unul dintre cele mai toxice metale."
  },
  "organic_compounds": {
    "overview": "Majoritatea compușilor organici ai taliului sunt toxici și manipulați doar în laboratoare controlate.",
    "classes_with_examples": [
      "Tl(OAc) — folosit în sinteză organică (în cantități foarte mici).",
      "TlEt₂ (compuși organometalici toxici)."
    ],
    "role_in_organic_reactions": "Cataliză și oxidări selective (înlocuite în prezent din motive ecologice)."
  },
  "preparation_reactions": [
    {
      "equation": "Tl₂SO₄ + Zn → 2 Tl + ZnSO₄",
      "notes": "Reducere clasică din sare de taliu."
    },
    {
      "equation": "Electroliza soluțiilor de Tl⁺",
      "notes": "Producție industrială controlată."
    }
  ],
  "chemical_properties": [
    "2 Tl + O₂ → Tl₂O (oxid instabil).",
    "Tl⁺ este cel mai stabil ion, similar cu K⁺ în soluție.",
    "Tl³⁺ este un agent oxidant foarte puternic și poate descompune apă.",
    "Compușii de taliu devin **foarte toxici** în contact cu organismele."
  ]
},
{
  "symbol": "Pb",
  "name": "Lead",
  "nume_romana": "Plumb",
  "atomic_number": 82,
  "atomic_weight": 207.2,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p²",
  "group": 14,
  "period": 6,
  "block": "p",
  "category": "Metal post-tranziție",
  "color": "Gri-argintiu mat (se întunecă la aer)",
  "oxidation_states": [+2, +4],
  "higher_oxidation_states": "+4 (în PbO₂, PbCl₄, instabil în soluții acide)",
  "compounds_with_hydrogen": ["PbH₄ (plumban, extrem de instabil)"],
  "melting_point": 327,
  "boiling_point": 1749,
  "density": 11.34,
  "discovery": "Cunoscut din antichitate; folosit de civilizații grecești și romane.",
  "appearance": "Metal greu, moale, se taie ușor, se oxidează lent la aer formând un strat protector.",
  "discovered_in": "Galena (PbS) este cel mai important minereu.",
  "abundance": "Moderată (~14 ppm în scoarță).",
  "uses": [
    "Baterii **cu plumb-acid** (automobile, UPS-uri).",
    "Muniție (densitate ridicată și moliciune).",
    "Protecție împotriva radiațiilor (ecrane pentru raze X).",
    "Greutăți de echilibrare (roți auto, echipamente mecanice).",
    "Istoric: țevi de apă, vopsele, cosmetice → acum interzise."
  ],
  "notable_properties": {
    "electronegativity": 2.33,
    "ionization_energy": 716,
    "atomic_radius": 175,
    "crystal_structure": "Cubic față-centrare (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 35,
    "specific_heat_capacity": 26.4,
    "special_note": "Plumbul formează compuși solubili ce pot perturba **neuronii și sinapsele**, ducând la **intoxicație cronică**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic (este un neurotoxin).",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Intoxicație cu plumb (saturnism): iritabilitate, convulsii, scăderea IQ, anemie, afectare renală."
  },
  "organic_compounds": {
    "overview": "Compușii organici ai plumbului sunt **foarte toxici** și au fost în mare parte eliminați din industrie.",
    "classes_with_examples": [
      "Tetraetilplumb (Pb(C₂H₅)₄) — folosit istoric în benzină → interzis.",
      "Pb(OAc)₂ — utilizat în sinteză organică (înlocuit în prezent)."
    ],
    "role_in_organic_reactions": "Folosit în trecut în reacții de acetilare și oxidare, azi înlocuit din motive toxice."
  },
  "preparation_reactions": [
    {
      "equation": "PbS + O₂ → PbO + SO₂",
      "notes": "Oxidare în proces metalurgic."
    },
    {
      "equation": "PbO + C → Pb + CO",
      "notes": "Reducere în furnale."
    }
  ],
  "chemical_properties": [
    "2 Pb + O₂ → 2 PbO (oxid galben, folosit în sticlă cu plumb).",
    "PbO₂ este un **oxidant puternic** → folosit în baterii.",
    "Sărurile Pb²⁺ sunt toxice și se leagă de enzime, inhibând metabolismul.",
    "Nu reacționează intens cu acizii neoxidanți, dar se dizolvă în **acid azotic**."
  ]
},
{
  "symbol": "Bi",
  "name": "Bismuth",
  "nume_romana": "Bismut",
  "atomic_number": 83,
  "atomic_weight": 208.980,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p³",
  "group": 15,
  "period": 6,
  "block": "p",
  "category": "Metal post-tranziție",
  "color": "Alb-argintiu cu reflexii **irizate** când este oxidat",
  "oxidation_states": [+3, +5],
  "higher_oxidation_states": "+5 (în BiF₅ și BiO₃⁻)",
  "compounds_with_hydrogen": ["BiH₃ (bismutan, foarte instabil)"],
  "melting_point": 271,
  "boiling_point": 1564,
  "density": 9.78,
  "discovery": "Cunoscut din Evul Mediu; confundat mult timp cu plumbul și staniul.",
  "appearance": "Metal fragil, strălucitor, ce formează cristale **colorate** datorită oxidului subțire de la suprafață.",
  "discovered_in": "Se găsește în minereuri ca **bismutin, bismutit, stibină**.",
  "abundance": "Relativ rar (~0.009 ppm în scoarță).",
  "uses": [
    "Medicină: subcitrat de bismut pentru **gastrită și ulcer** (ex: substanța activă în medicamentul Pepto-Bismol).",
    "Aditiv în **aliaje cu punct de topire scăzut** (sisteme de stingere automată, lipituri, siguranțe termice).",
    "Cosmetice și pigmenți non-toxici.",
    "Muniție „ecologică” (înlocuitor pentru plumb).",
    "Cristale decorative și experimente chimice/artistice."
  ],
  "notable_properties": {
    "electronegativity": 2.02,
    "ionization_energy": 703,
    "atomic_radius": 160,
    "crystal_structure": "Rombedric (trigonal)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 7.9,
    "specific_heat_capacity": 25.5,
    "special_note": "Bismutul este **cel mai puțin toxic metal greu** și are un **punct de topire scăzut**, ceea ce îl face util în aliaje de siguranță."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic și nu este acumulat semnificativ.",
    "role_in_human_body": "Nu participă la procese metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Sărurile solubile pot fi toxice în doze mari, dar **compușii medicinali sunt siguri** la doze terapeutice."
  },
  "organic_compounds": {
    "overview": "Compușii organobismutali sunt folosiți în **cataliză blândă**.",
    "classes_with_examples": [
      "Bi(OAc)₃ — cataliză în esterificări și oxidări.",
      "Complexe Bi–aryl — folosite în sinteză selectivă fără toxicitate ridicată."
    ],
    "role_in_organic_reactions": "Înlocuitor „verde” pentru catalizatori pe bază de Pb, Hg sau Sn."
  },
  "preparation_reactions": [
    {
      "equation": "Bi₂O₃ + 3 C → 2 Bi + 3 CO",
      "notes": "Reducere tradițională în cuptoare."
    },
    {
      "equation": "Electroliza sărurilor topite de BiCl₃",
      "notes": "Metodă industrială modernă."
    }
  ],
  "chemical_properties": [
    "2 Bi + 3 O₂ → Bi₂O₃ (oxid galben folosit în ceramică și sticlă optică).",
    "Bi³⁺ este forma de oxidare **cea mai stabilă**.",
    "Nu reacționează cu apă, dar se dizolvă în acid azotic → Bi(NO₃)₃.",
    "La răcire formează **cristale irizate** spectaculoase."
  ]
},
{
  "symbol": "Po",
  "name": "Polonium",
  "nume_romana": "Poloniu",
  "atomic_number": 84,
  "atomic_weight": 209,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁴",
  "group": 16,
  "period": 6,
  "block": "p",
  "category": "Semimetal radioactiv",
  "color": "Argintiu-cenușiu (strălucitor în stare proaspătă)",
  "oxidation_states": [+2, +4, +6],
  "higher_oxidation_states": "+6 în PoO₂ și săruri oxidate",
  "compounds_with_hydrogen": ["PoH₂ (hidură instabilă și foarte toxică)"],
  "melting_point": 254,
  "boiling_point": 962,
  "density": 9.20,
  "discovery": "Descoperit în 1898 de Marie Curie și Pierre Curie în minereul pechblenda.",
  "appearance": "Metal semilucid, se oxidează ușor formând peliculă mată.",
  "discovered_in": "Minereuri de uraniu (uraniț), în cantități extrem de mici.",
  "abundance": "Extrem de rar în natură (~0.000000000001 ppm). Se obține aproape exclusiv artificial.",
  "uses": [
    "Surse de căldură pentru **baterii nucleare** (ex: sateliți, sonde spațiale).",
    "Generatori termo-electrici pentru condiții extreme (lipsă aer, temperaturi joase).",
    "Sursa de **radiație alfa** pentru experimente fizice controlate.",
    "Istoric: ionizatoare pentru eliminarea prafului industrial (acum interzise)."
  ],
  "notable_properties": {
    "electronegativity": 2.0,
    "ionization_energy": 812,
    "atomic_radius": 167,
    "crystal_structure": "Cubic simplu (structură unică între elemente)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 20,
    "specific_heat_capacity": 26.4,
    "special_note": "Izotopul **Po-210** are o radioactivitate uriașă: ~0.1 g produce căldură de **50 W** continuu."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există și **nu trebuie să existe**.",
    "role_in_human_body": "Nu participă la metabolism — este letal.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Toxicitate extremă: radiațiile alfa distrug ADN-ul → moarte celulară rapidă; ingerarea microgramelor este fatală."
  },
  "organic_compounds": {
    "overview": "Chimia organică a poloniului este foarte puțin studiată din motive de securitate și toxicitate.",
    "classes_with_examples": [
      "PoCl₄ — clorură volatilă, foarte toxică.",
      "PoO₂ — oxid stabil, solid și radioactiv."
    ],
    "role_in_organic_reactions": "Nu se folosește în reacții organice din cauza **radioactivității letale**."
  },
  "preparation_reactions": [
    {
      "equation": "Bi + n → Bi-209 + n → Bi-210 → Po-210 + β⁻",
      "notes": "Poloniul se obține prin **activarea neutronica a bismutului**, apoi dezintegrare beta."
    }
  ],
  "chemical_properties": [
    "Poloniul se comportă chimic similar cu **telurul**, dar cu instabilitate mare.",
    "2 Po + 3 O₂ → 2 PoO₃ (oxid toxic).",
    "PoO₂ este cel mai stabil oxid.",
    "Toți compușii săi sunt **extrem de toxici și radioactivi**."
  ]
},
{
  "symbol": "At",
  "name": "Astatine",
  "nume_romana": "Astatin",
  "atomic_number": 85,
  "atomic_weight": 210,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁵",
  "group": 17,
  "period": 6,
  "block": "p",
  "category": "Halogen radioactiv (semimetal)",
  "color": "Probabil gri-închis sau negru (se presupune comportament metalic)",
  "oxidation_states": [-1, +1, +3, +5, +7],
  "higher_oxidation_states": "+7 în compuși oxidați (ex: AtO₃⁻)",
  "compounds_with_hydrogen": ["HAt (acid astatidic, instabil și radioactiv)"],
  "melting_point": 302,
  "boiling_point": 337,
  "density": 7.0,
  "discovery": "Sintetizat în 1940 de Dale R. Corson, Kenneth MacKenzie și Emilio Segrè.",
  "appearance": "Se presupune a fi solid semimetalic, foarte greu, fragil și intens radioactiv.",
  "discovered_in": "Obținut inițial artificial prin bombardarea bismutului.",
  "abundance": "Extrem de rar: se estimează că **există mai puțin de 1 microgram în toată scoarța terestră**.",
  "uses": [
    "Terapie radioizotopică experimentală în **tratamentul cancerului** (At-211).",
    "Radioterapie țintită pentru **tumori mici / metastaze**.",
    "Cercetare în fizica nucleară și chimia elementelor super-grele."
  ],
  "notable_properties": {
    "electronegativity": 2.2,
    "ionization_energy": 920,
    "atomic_radius": 150,
    "crystal_structure": "Probabil cubic față-centrare (similar I₂ solid), dar **neconfirmat** experimental pe scară mare",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "necunoscut (nivel experimental)",
    "specific_heat_capacity": "necunoscut",
    "special_note": "Astatinul este atât de radioactiv încât **orice cantitate macroscopica se vaporizează prin propria dezintegrare**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există în organism.",
    "role_in_human_body": "Nu are rol metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Dezintegrarea produce radiații alfa → moarte celulară rapidă; poate distruge ADN-ul în doze minuscule."
  },
  "organic_compounds": {
    "overview": "Formează analogi ai compușilor organofluorurați și organoiodurați, dar foarte instabili.",
    "classes_with_examples": [
      "Astatobenzen (C₆H₅At) — compus studiat doar în micro-cantități.",
      "At⁻ halogenure (în soluții cu concentrație extrem de mică)."
    ],
    "role_in_organic_reactions": "Folosit **doar în cercetare** pentru legarea izotopilor radioactivi de anticorpi (terapie țintită anti-cancer)."
  },
  "preparation_reactions": [
    {
      "equation": "Bi-209 + α → At-211 + n",
      "notes": "Produs prin bombardarea bismutului cu particule alfa în reactor sau ciclotron."
    }
  ],
  "chemical_properties": [
    "Se comportă ca un halogen, dar și ca un metal greu → **comportament intermediar**.",
    "Formează ioni At⁻ (asemănător cu I⁻).",
    "AtO₃⁻ și AtO₄⁻ apar în condiții oxidante.",
    "Radiația alfa emisă de At poate **degrada proprii compuși**, limitând chimia experimentală."
  ]
},
{
  "symbol": "Rn",
  "name": "Radon",
  "nume_romana": "Radon",
  "atomic_number": 86,
  "atomic_weight": 222,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶",
  "group": 18,
  "period": 6,
  "block": "p",
  "category": "Gaz nobil radioactiv",
  "color": "Incolor (devine ușor roz la îngheț din cauza radioactivității)",
  "oxidation_states": [0, +2],
  "higher_oxidation_states": "+2 în compuși foarte rari",
  "compounds_with_hydrogen": [],
  "melting_point": -71,
  "boiling_point": -62,
  "density": 9.73,
  "discovery": "Descoperit în 1900 de Friedrich Ernst Dorn în urma dezintegrației radiului.",
  "appearance": "Gaz inert, greu, fără miros, fără gust, **radioactiv**.",
  "discovered_in": "Derivat natural din dezintegrarea **uranului** și **toriului** din sol.",
  "abundance": "Se formează continuu în scoarță, dar se disipă rapid în atmosferă.",
  "uses": [
    "Radioterapie (istoric), în special pentru tratamentul tumorilor.",
    "Studii asupra circulației aerului în mine și structuri geologice.",
    "Indicator pentru fracturi tectonice (radonul iese la suprafață înainte de unele cutremure)."
  ],
  "notable_properties": {
    "electronegativity": "nu se aplică (gaz nobil inert)",
    "ionization_energy": 1037,
    "atomic_radius": 145,
    "crystal_structure": "Cubic față-centrare (solid la temperaturi foarte joase)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 0.0036,
    "specific_heat_capacity": 94,
    "special_note": "Radonul este **cel mai dens gaz** la temperatura camerei și **puternic radioactiv** (emite radiații alfa)."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Inhalarea radonului și a produselor sale de dezintegrare duce la **cancer pulmonar** (a 2-a cauză după fumat)."
  },
  "organic_compounds": {
    "overview": "Radonul este foarte puțin reactiv, dar poate forma compuși în condiții extreme.",
    "classes_with_examples": [
      "RnF₂ (fluorura de radon, foarte instabilă).",
      "Complexe cu apă: Rn·H₂O (interacții fizice, nu chimice stabile)."
    ],
    "role_in_organic_reactions": "Nu este folosit în sinteza organică din cauza radioactivității și instabilității."
  },
  "preparation_reactions": [
    {
      "equation": "Ra-226 → Rn-222 + He-4",
      "notes": "Radonul provine natural din dezintegrarea radiului."
    }
  ],
  "chemical_properties": [
    "Rn este inert chimic, dar poate forma compuși cu fluor în condiții forțate.",
    "Se dizolvă ușor în uleiuri și solvenți organici grei.",
    "Se acumulează în spații închise, în special în **subsoluri** și **mine**."
  ]
},
{
  "symbol": "Fr",
  "name": "Francium",
  "nume_romana": "Franciu",
  "atomic_number": 87,
  "atomic_weight": 223,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s¹",
  "group": 1,
  "period": 7,
  "block": "s",
  "category": "Metal alcalin **radioactiv extrem**",
  "color": "Probabil gri-argintiu (nu a fost observat vizual în cantitate macroscopică)",
  "oxidation_states": [+1],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["FrH (teoretic, analog cu CsH)"],
  "melting_point": 27,
  "boiling_point": 677,
  "density": 1.87,
  "discovery": "Descoperit în 1939 de Marguerite Perey la Institutul Curie.",
  "appearance": "Nu există în forme vizibile; toate cantitățile create se dezintegrează înainte de a putea fi observate direct.",
  "discovered_in": "Obținut din dezintegrarea actiniului (Ac-227).",
  "abundance": "Extrem de rar: există doar în **urme transitorii** în minerale cu uraniu și toriu.",
  "uses": [
    "Studii în **structura atomului** și fizica interacțiilor nucleare.",
    "Cercetarea forțelor fundamentale (testare a simetriei cuantice).",
    "Nu are aplicații industriale sau medicale datorită instabilității."
  ],
  "notable_properties": {
    "electronegativity": 0.7,
    "ionization_energy": 380,
    "atomic_radius": 348,
    "crystal_structure": "Probabil cubic centrat pe corp (analog cesiu), dar neconfirmat experimental",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": "nesigur (valoare estimată teoretic)",
    "specific_heat_capacity": "necunoscut",
    "special_note": "Franciu este atât de radioactiv încât **orice cantitate macroscopică s-ar vaporiza** prin propria dezintegrare."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există și nu trebuie să existe.",
    "role_in_human_body": "Nu are rol fiziologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Expunerea locală ar provoca necroză severă și distrugere celulară în secunde; **letal imediat**."
  },
  "organic_compounds": {
    "overview": "Singurele compuși posibili sunt analogi ai compușilor cesiului.",
    "classes_with_examples": [
      "Franciu-halogenuri: FrCl, FrBr (instabili, existență de ordinul secundelor)."
    ],
    "role_in_organic_reactions": "Nu are aplicații în chimia organică."
  },
  "preparation_reactions": [
    {
      "equation": "Ac-227 → Fr-223 + β⁻",
      "notes": "Se obține prin dezintegrarea actiniului."
    }
  ],
  "chemical_properties": [
    "Reactivitate similară cu cesiul, dar mult mai instabil.",
    "Ar reacționa violent cu apa → FrOH + H₂ ↑ (teoretic).",
    "Ionul Fr⁺ este analog cu Cs⁺, dar **nu poate fi manipulat** în soluție din cauza radioactivității."
  ]
},
{
  "symbol": "Ra",
  "name": "Radium",
  "nume_romana": "Radiu",
  "atomic_number": 88,
  "atomic_weight": 226,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s²",
  "group": 2,
  "period": 7,
  "block": "s",
  "category": "Metal alcalino-pământos radioactiv",
  "color": "Alb-argintiu (devine negru în aer datorită formării de nitruri)",
  "oxidation_states": [+2],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["RaH₂ (hidură instabilă)"],
  "melting_point": 700,
  "boiling_point": 1737,
  "density": 5.50,
  "discovery": "Descoperit în 1898 de Marie Curie și Pierre Curie în minereul pechblenda.",
  "appearance": "Metal strălucitor când este proaspăt, dar **întunecat** la aer; radiază lumină slab albastră datorită radioactivității.",
  "discovered_in": "Minereuri de uraniu (pechblenda / uraninita).",
  "abundance": "Extrem de rar (~1 parte la trilioane în scoarța terestră).",
  "uses": [
    "Radioterapie (istoric; înlocuit azi cu izotopi mai siguri precum Co-60).",
    "Sursă de radiații pentru experimente în fizica nucleară.",
    "Vopsele **auto-luminescente** (istoric pentru ceasuri, tablouri, aparate de măsură — acum interzise).",
    "Inițierea descărcărilor electrice în tuburi de gaz (experimental)."
  ],
  "notable_properties": {
    "electronegativity": 0.9,
    "ionization_energy": 509,
    "atomic_radius": 215,
    "crystal_structure": "Cubic centrat pe față (fcc)",
    "magnetic_properties": "Diamagnetic",
    "thermal_conductivity": 18.6,
    "specific_heat_capacity": 92,
    "special_note": "Radiul **emite radiație alfa, beta și gamma**; compușii săi sunt **autoluminescenți** datorită excitației aerului."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Se acumulează în **oase**, înlocuind calciul → cauzează **necroză osoasă, leucemie și cancer** (ex: „Radium Girls”)."
  },
  "organic_compounds": {
    "overview": "Chimia organometalică a radiului este aproape inexistentă din cauza radioactivității.",
    "classes_with_examples": [
      "RaCl₂ — sare solubilă, folosită în trecut în medicină.",
      "RaBr₂ — analog structural cu sărurile alcalino-pământoase."
    ],
    "role_in_organic_reactions": "Nu este folosit în sinteză organică din motive de **siguranță**."
  },
  "preparation_reactions": [
    {
      "equation": "RaCl₂ + H₂ → Ra + 2 HCl",
      "notes": "Reducere metalică realizată în laborator, în condiții extreme de protecție."
    },
    {
      "equation": "Separarea chimică din minereuri de uraniu",
      "notes": "Proces dificil și costisitor."
    }
  ],
  "chemical_properties": [
    "Radiul reacționează cu apa: Ra + 2 H₂O → Ra(OH)₂ + H₂ ↑",
    "Se oxidează în aer, formând oxizi și hidroxizi albi.",
    "Formează săruri solubile: RaCl₂, Ra(NO₃)₂.",
    "Radiația intensă degradează proprii compuși în timp."
  ]
},
{
  "symbol": "Ac",
  "name": "Actinium",
  "nume_romana": "Actiniu",
  "atomic_number": 89,
  "atomic_weight": 227,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 6d¹",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid radioactiv",
  "color": "Alb-argintiu strălucitor",
  "oxidation_states": [+3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": ["AcH₃ (foarte instabil)"],
  "melting_point": 1050,
  "boiling_point": 3200,
  "density": 10.07,
  "discovery": "Descoperit în 1899 de André-Louis Debierne în minereul pechblenda.",
  "appearance": "Metal alb-argintiu, strălucitor, care se oxidează treptat în aer.",
  "discovered_in": "Obținut inițial din minereuri de uraniu.",
  "abundance": "Extrem de rar în natură; se produce în mod controlat din toriu sau uraniu.",
  "uses": [
    "Sursă de **radiație alfa** pentru generarea de **neutroni** (cu beriliu: Ac + Be → neutroni).",
    "Cercetare în fizica nucleară și spectroscopie atomică.",
    "Posibil în **radioterapie** pentru tumori, mai ales izotopul Ac-225 (terapie alfa țintită)."
  ],
  "notable_properties": {
    "electronegativity": 1.1,
    "ionization_energy": 499,
    "atomic_radius": 188,
    "crystal_structure": "Cubic centrat pe față (fcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 12,
    "specific_heat_capacity": 120,
    "special_note": "Actiniul emite **luminescență albastră** în întuneric datorită excitației aerului de radiația alfa."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există în mod natural.",
    "role_in_human_body": "Nu are rol metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Se comportă similar calciului → se depozitează în **oase**, provocând cancer și distrugeri ale măduvei osoase."
  },
  "organic_compounds": {
    "overview": "Chimia organometalică a actiniului este foarte limitată din cauza radioactivității puternice.",
    "classes_with_examples": [
      "AcCl₃ — sare comună a actiniului.",
      "Ac(NO₃)₃ — compus utilizat în separări chimice."
    ],
    "role_in_organic_reactions": "Nu este utilizat în sinteză organică."
  },
  "preparation_reactions": [
    {
      "equation": "Th-232 + n → Th-233 → Pa-233 → U-233 → ... → Ac-227",
      "notes": "Actiniul se obține ca produs secundar în ciclurile de dezintegrare ale toriului."
    }
  ],
  "chemical_properties": [
    "Ac reacționează cu oxigenul: 4 Ac + 3 O₂ → 2 Ac₂O₃.",
    "Formează hidroxid: Ac³⁺ + 3 OH⁻ → Ac(OH)₃ (precipitat alb).",
    "În soluții, ionul stabil este **Ac³⁺**, similar La³⁺ și Ce³⁺.",
    "Radiația emisă degradează treptat compușii chimici în care se află."
  ]
},
{
  "symbol": "Th",
  "name": "Thorium",
  "nume_romana": "Toriu",
  "atomic_number": 90,
  "atomic_weight": 232.04,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 6d²",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid ușor, slab radioactiv",
  "color": "Argintiu deschis, lucios",
  "oxidation_states": [+4],
  "higher_oxidation_states": "+4 stabil în majoritatea compușilor (ex: ThO₂)",
  "compounds_with_hydrogen": ["ThH₂ (hidură stabilă)"],
  "melting_point": 1750,
  "boiling_point": 4788,
  "density": 11.72,
  "discovery": "Descoperit în 1828 de Jöns Jakob Berzelius.",
  "appearance": "Metal dens, strălucitor, se oxidează lent la aer, într-un strat protector.",
  "discovered_in": "Mineralul **monazit** (fosfați de pământuri rare și toriu).",
  "abundance": "Relativ comun (~9 ppm în scoarță) — mai abundent decât plumbul.",
  "uses": [
    "**Combustibil nuclear** pentru reactoare cu ciclul Th→U-233.",
    "Tigle refractare și ceramici cu punct de topire înalt.",
    "Electrozi pentru lămpi de sudură cu arc (toriu-tungsten).",
    "Surse de **radiație slabă** pentru instrumente de laborator.",
    "Istoric: mantale de lampă „Welsbach” (înlocuite din motive de sănătate)."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 587,
    "atomic_radius": 179,
    "crystal_structure": "Cubic centrat pe față (fcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 54,
    "specific_heat_capacity": 117,
    "special_note": "Toriul poate fi **transformat în U-233**, un combustibil nuclear eficient — reactorii cu toriu produc **mai puține deșeuri radioactive**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Expunerea la praful de toriu poate cauza cancer pulmonar (radiotoxicitate internă)."
  },
  "organic_compounds": {
    "overview": "Toriul formează complexi organometalici utilizați în cataliză.",
    "classes_with_examples": [
      "Th(C₅H₅)₄ — compus organometalic cunoscut.",
      "Th(OEt)₄ — utilizat la sinteze de tip sol-gel (ceramică)."
    ],
    "role_in_organic_reactions": "Cataliză în polimerizare și reacții de condensare."
  },
  "preparation_reactions": [
    {
      "equation": "ThO₂ + 2 Ca → Th + 2 CaO",
      "notes": "Reducere termică în prezența calciului."
    },
    {
      "equation": "Extracție din monazit prin procese hidro-metallurgice",
      "notes": "Separare industrială."
    }
  ],
  "chemical_properties": [
    "Se oxidează la aer: 2 Th + O₂ → 2 ThO₂ (oxid foarte stabil).",
    "Formează săruri: ThCl₄, ThF₄ — solubile în soluții acide.",
    "În soluție, ionul stabil este **Th⁴⁺**.",
    "ThO₂ este un material **refractar** cu punct de topire foarte ridicat."
  ]
},
{
  "symbol": "Pa",
  "name": "Protactinium",
  "nume_romana": "Protactiniu",
  "atomic_number": 91,
  "atomic_weight": 231.04,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f² 6d¹",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid radioactiv",
  "color": "Gri-argintiu, metalic",
  "oxidation_states": [+5, +4, +3],
  "higher_oxidation_states": "+5 este forma cea mai stabilă",
  "compounds_with_hydrogen": ["PaH₃ (puțin studiat și instabil)"],
  "melting_point": 1572,
  "boiling_point": 4000,
  "density": 15.37,
  "discovery": "Descoperit în 1913 de Kasimir Fajans și Oswald Helmuth Gohring.",
  "appearance": "Metal greu, strălucitor, se oxidează la aer în timp.",
  "discovered_in": "Minereuri de uraniu (uraniți / pechblenda) în concentrații extrem de mici.",
  "abundance": "Extrem de rar (~0.0001 ppm în scoarță).",
  "uses": [
    "Cercetare în **chimie nucleară** și fizica actinidelor.",
    "Studiul **dezintegrării nucleare** și formării U-233.",
    "Marcaj izotopic în geologie (analiza vechimii rocilor).",
    "Nu are aplicații industriale sau medicale din cauza radioactivității și rarității."
  ],
  "notable_properties": {
    "electronegativity": 1.5,
    "ionization_energy": 568,
    "atomic_radius": 163,
    "crystal_structure": "Tetragonal (se distorsionează ușor prin radiație)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 47,
    "specific_heat_capacity": 28,
    "special_note": "Protactiniul are **toxicitate radiologică ridicată** și poate rămâne în oase → risc crescut de cancer."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există în mod natural.",
    "role_in_human_body": "Nu are rol metabolic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Similar cu uraniul: se acumulează în **oase** → leucemie, cancer osos, distrugerea măduvei."
  },
  "organic_compounds": {
    "overview": "Chimia organică a Pa este cercetată doar la nivel de microcantități.",
    "classes_with_examples": [
      "PaF₅ — fluorură stabilă și foarte reactivă.",
      "PaCl₅ — sare foarte higroscopică (absorbă apă rapid).",
      "Complexe PaO₂⁺ (oxocationi) în soluție acidă."
    ],
    "role_in_organic_reactions": "Nu se utilizează în sinteză organică; interes doar structural și de coordinație."
  },
  "preparation_reactions": [
    {
      "equation": "U-238 → Th-234 → Pa-234 → U-234",
      "notes": "Protactiniul apare ca **intermediar** în lanțul de dezintegrare al uraniului."
    },
    {
      "equation": "Separare din minereuri de uraniu prin extracție lichid-lichid",
      "notes": "Proces costisitor și dificil."
    }
  ],
  "chemical_properties": [
    "Se oxidează rapid la aer: Pa + O₂ → PaO₂.",
    "Se dizolvă în acizi neoxidanți formând Pa³⁺.",
    "În soluții oxidante formează Pa⁵⁺ stabil: PaO₂⁺.",
    "Compușii Pa degradează lent prin **auto-iradiere**."
  ]
},
{
  "symbol": "U",
  "name": "Uranium",
  "nume_romana": "Uraniu",
  "atomic_number": 92,
  "atomic_weight": 238.03,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f³ 6d¹",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid radioactiv",
  "color": "Gri-argintiu metalic",
  "oxidation_states": [+3, +4, +5, +6],
  "higher_oxidation_states": "+6 în complexul uranil UO₂²⁺",
  "compounds_with_hydrogen": ["UH₃ (hidură instabilă, piroforică)"],
  "melting_point": 1132,
  "boiling_point": 4131,
  "density": 19.05,
  "discovery": "Descoperit în 1789 de Martin Heinrich Klaproth.",
  "appearance": "Metal greu, dens, maleabil, se oxidează treptat la aer formând un strat negricios.",
  "discovered_in": "Minerale: uraninita (pechblenda), carnotit, torbernit.",
  "abundance": "Relativ răspândit (~2-4 ppm în scoarță) — mai comun decât argintul.",
  "uses": [
    "**Combustibil nuclear** în reactoare (U-235 fisionabil).",
    "Material pentru **ogive nucleare** (îmbogățit în U-235).",
    "Contragreutăți și blindaje (U sărăcit = DU, foarte dens).",
    "Geocronologie (datarea rocilor prin seria U→Pb).",
    "Colorarea sticlei și ceramicii în nuanțe galben-verde (istoric)."
  ],
  "notable_properties": {
    "electronegativity": 1.38,
    "ionization_energy": 598,
    "atomic_radius": 175,
    "crystal_structure": "Ortrombic",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 27.6,
    "specific_heat_capacity": 116,
    "special_note": "Izotopul U-235 susține **reacția în lanț** → baza energiei nucleare."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la funcții metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Toxicitate dublă: **chimică** (afectează rinichii) + **radiologică** (distrugere tisulară, cancer)."
  },
  "organic_compounds": {
    "overview": "Uraniul formează numeroși compuși organometalici utilizați în cataliză și chimie de coordinație.",
    "classes_with_examples": [
      "UO₂²⁺ (ion uranil) — cel mai important complex în soluție.",
      "UCl₆ și UCl₄ — precursori în chimia uraniului.",
      "Cp₃U (compuși organometalici ai ciclopentadienilului)."
    ],
    "role_in_organic_reactions": "Cataliză în reacții de reducere, inserție și formare de complexe."
  },
  "preparation_reactions": [
    {
      "equation": "UO₂ + 4 HF → UF₄ + 2 H₂O",
      "notes": "UF₄ este intermediar în obținerea U metalic."
    },
    {
      "equation": "UF₄ + Ca → U + CaF₂",
      "notes": "Reducere metalică (metoda industrială clasică)."
    }
  ],
  "chemical_properties": [
    "Uranil: UO₂²⁺ este forma stabilă în soluție.",
    "Reacționează cu oxigen: U + O₂ → UO₂ (oxid negru stabil).",
    "În aer umed formează UO₃ (oxid galben).",
    "În soluții, formează complexe stabile cu carbonatul și fosfatul."
  ]
},
{
  "symbol": "Np",
  "name": "Neptunium",
  "nume_romana": "Neptuniu",
  "atomic_number": 93,
  "atomic_weight": 237,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f⁴ 6d¹",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Gri-argintiu metalic",
  "oxidation_states": [+3, +4, +5, +6, +7],
  "higher_oxidation_states": "+7 (în NpO₅ și anioni oxo, în soluții foarte oxidante)",
  "compounds_with_hydrogen": ["NpH₃ (instabil, foarte reactiv)"],
  "melting_point": 644,
  "boiling_point": 3902,
  "density": 20.45,
  "discovery": "Descoperit în 1940 de Edwin McMillan și Philip Abelson (Berkeley, SUA).",
  "appearance": "Metal greu, slab lustruit, se oxidează la suprafață.",
  "discovered_in": "Obținut artificial prin iradierea uraniului în reactor.",
  "abundance": "Nu există în natură în cantități semnificative; produs nuclear artificial.",
  "uses": [
    "Studiu al **reacțiilor nucleare** și al ciclanților de combustibil.",
    "Producerea **Pu-238**, combustibil pentru generatoare radioizotopice (sonde spațiale, sateliți).",
    "Cercetare în **proiectarea reactoarelor rapide** și a ciclurilor nucleare închise."
  ],
  "notable_properties": {
    "electronegativity": 1.36,
    "ionization_energy": 607,
    "atomic_radius": 175,
    "crystal_structure": "Ortrombic",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 6.3,
    "specific_heat_capacity": 118,
    "special_note": "Poate exista în soluție în **cinci stări de oxidare** → chimie acvatică complexă (Np³⁺, Np⁴⁺, NpO₂⁺, NpO₂²⁺, etc.)."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există în mod natural.",
    "role_in_human_body": "Nu participă la procese biologice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Toxicitate radiologică severă; se acumulează în **oase** și **ficat**, cauzând cancer."
  },
  "organic_compounds": {
    "overview": "Neptuniul formează complexi organometalici utilizați numai în laborator.",
    "classes_with_examples": [
      "NpO₂⁺ și NpO₂²⁺ — oxo-ioni în soluția acvatică.",
      "Complexe cu liganzi ciclopentadienil: (C₅H₅)₃Np."
    ],
    "role_in_organic_reactions": "Studii structurale → **nu** se folosește în sinteză organică."
  },
  "preparation_reactions": [
    {
      "equation": "U-238 + n → U-239 → Np-239 + β⁻ → Pu-239 + β⁻",
      "notes": "Produs prin iradierea uraniului în reactoare nucleare."
    }
  ],
  "chemical_properties": [
    "Se oxidează ușor, formând oxizi: NpO₂ și Np₂O₅.",
    "Formează săruri cu halogeni: NpCl₄, NpF₆.",
    "În soluție acidă, formează specia stabilă NpO₂⁺ (ion neptunil).",
    "Este **auto-radioactiv** → compușii se degradează lent în timp."
  ]
},
{
  "symbol": "Pu",
  "name": "Plutonium",
  "nume_romana": "Plutoniu",
  "atomic_number": 94,
  "atomic_weight": 244,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f⁶",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Argintiu proaspăt → devine gri-gălbui la oxidare",
  "oxidation_states": [+3, +4, +5, +6, +7],
  "higher_oxidation_states": "+7 în soluții foarte oxidante (PuO₅²⁻)",
  "compounds_with_hydrogen": ["PuH₂, PuH₃ (hidruri piroforice)"],
  "melting_point": 640,
  "boiling_point": 3228,
  "density": 19.80,
  "discovery": "Sintetizat în 1940 de Glenn T. Seaborg, Edwin McMillan și colaboratorii (Berkeley, SUA).",
  "appearance": "Metal greu, dens, se oxidează rapid; poate exista în **șase structuri cristaline diferite** în funcție de temperatură.",
  "discovered_in": "Produs artificial din neptuniu în reactor nuclear.",
  "abundance": "Nu există în natură în cantități semnificative; produs în reactoare prin iradierea uraniului.",
  "uses": [
    "**Combustibil nuclear** (Pu-239, Pu-241) în reactoare.",
    "Material fisionabil în **ogive nucleare** (Pu-239).",
    "Pu-238 → **generatoare termo-electrice** (RTG) pentru sonde spațiale (Voyager, Curiosity, New Horizons).",
    "Sursă portabilă de energie pentru instrumente din zone extreme."
  ],
  "notable_properties": {
    "electronegativity": 1.28,
    "ionization_energy": 585,
    "atomic_radius": 159,
    "crystal_structure": "6 forme alotropice (α, β, γ, δ, δ’, ε) — proprietăți fizice imprevizibile",
    "magnetic_properties": "Paramagnetic (complex și dependent de fază)",
    "thermal_conductivity": 6.7,
    "specific_heat_capacity": 35,
    "special_note": "Plutoniul este **autoîncălzitor** datorită dezintegrației alfa → poate atinge temperaturi ridicate fără flacără."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există în mod natural.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Toxicitate severă: Pu se depune în **oase și ficat** → cancer, distrugerea măduvei, necroză tisulară."
  },
  "organic_compounds": {
    "overview": "Plutoniul formează anioni oxo și complexi de coordinație în soluție.",
    "classes_with_examples": [
      "PuO₂ (dioxid de plutoniu) — combustibil nuclear stabil.",
      "PuCl₃ și PuCl₄ — forme comune în procese de purificare.",
      "PuO₂⁺ și PuO₂²⁺ — specii uranil-analoge în soluții acide."
    ],
    "role_in_organic_reactions": "Nu se folosește în sinteza organică; doar în **chimie nucleară**."
  },
  "preparation_reactions": [
    {
      "equation": "U-238 + n → U-239 → Np-239 + β⁻ → Pu-239 + β⁻",
      "notes": "Produs în reactoare nucleare prin **captura de neutroni**."
    }
  ],
  "chemical_properties": [
    "Reacționează cu oxigen: 4 Pu + O₂ → 2 Pu₂O₃.",
    "PuO₂ este forma cea mai stabilă în aer.",
    "Compușii pot **auto-încălzi** prin radiație alfa.",
    "Spectrele de culoare în soluție sunt distinctive (de ex., Pu⁴⁺ → galben, Pu⁶⁺ → roz, Pu⁷⁺ → verde intens)."
  ]
},
{
  "symbol": "Am",
  "name": "Americium",
  "nume_romana": "Americiu",
  "atomic_number": 95,
  "atomic_weight": 243,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f⁷",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Argintiu-lucios (metalic)",
  "oxidation_states": [+3, +4, +5, +6],
  "higher_oxidation_states": "+6 (în condiții foarte oxidante, instabil)",
  "compounds_with_hydrogen": ["AmH₂, AmH₃ (hidruri instabile)"],
  "melting_point": 1176,
  "boiling_point": 2607,
  "density": 12.0,
  "discovery": "Sintetizat în 1944 de Glenn T. Seaborg și echipa sa la Universitatea Berkeley.",
  "appearance": "Metal strălucitor la început, dar se oxidează rapid în aer.",
  "discovered_in": "Obținut prin bombardarea plutoniului cu neutroni în reactor nuclear.",
  "abundance": "Nu există în natură; este produs **artificial**.",
  "uses": [
    "**Detectoare de fum cu ionizare** (Am-241 generează un curent electric într-o cameră de ionizare).",
    "Sursă de radiație pentru analiză prin fluorescență X.",
    "Cercetări privind transmutarea deșeurilor nucleare.",
    "Posibile aplicații în **baterii nucleare** (în dezvoltare)."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 578,
    "atomic_radius": 173,
    "crystal_structure": "Cubic centrat pe față (fcc)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 10,
    "specific_heat_capacity": 62,
    "special_note": "Izotopul **Am-241** emite **radiație alfa** constantă → ideal pentru detectoarele de fum, dar toxic dacă este ingerat."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu are rol biologic.",
    "role_in_human_body": "Nu participă la funcții metabolice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "**Se acumulează în oase și ficat**, provocând cancer datorită radiațiilor alfa."
  },
  "organic_compounds": {
    "overview": "Americiul formează complexe stabile cu liganzi organici (chelatori).",
    "classes_with_examples": [
      "AmCl₃ — sare solubilă în apă.",
      "AmO₂ (dioxid) — formă comună în materiale nucleare.",
      "Complexe Am³⁺ cu EDTA — studiate pentru separarea actinidelor."
    ],
    "role_in_organic_reactions": "Nu se utilizează în sinteză organică; doar în chimie de coordinație și separări nucleare."
  },
  "preparation_reactions": [
    {
      "equation": "Pu-239 + n → Pu-240 → Pu-241 + n → Am-241 + β⁻",
      "notes": "Obținut din plutoniu iradiat în reactoare."
    }
  ],
  "chemical_properties": [
    "Reacționează cu oxigenul: 4 Am + 3 O₂ → 2 Am₂O₃.",
    "În soluție acidă stabilează ionul **Am³⁺** (roz pal).",
    "Am poate forma oxoioni: AmO₂⁺ și AmO₂²⁺.",
    "Compușii se degradează lent prin **auto-iradiere**."
  ]
},
{
  "symbol": "Cm",
  "name": "Curium",
  "nume_romana": "Curiu",
  "atomic_number": 96,
  "atomic_weight": 247,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f⁷",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Argintiu metalic",
  "oxidation_states": [+3, +4],
  "higher_oxidation_states": "+4 în condiții oxidante",
  "compounds_with_hydrogen": ["CmH₂, CmH₃ (hidruri instabile)"],
  "melting_point": 1350,
  "boiling_point": 3110,
  "density": 13.51,
  "discovery": "Sintetizat în 1944 de Glenn T. Seaborg, Ralph James și Albert Ghiorso.",
  "appearance": "Metal greu, strălucitor, se oxidează treptat în aer.",
  "discovered_in": "Obținut prin bombardarea plutoniului în reactor nuclear.",
  "abundance": "Nu există natural; produs exclusiv artificial.",
  "uses": [
    "Sursă de radiație pentru **generatoare termoelectrice radioizotopice** (RTG), utilizate în spațiu.",
    "Inițierea reacțiilor de fisiune în reactoare experimentale.",
    "Cercetare în chimia actinidelor și structura nucleară.",
    "Material de pornire pentru sinteza altor elemente transuraniene."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 581,
    "atomic_radius": 174,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 10,
    "specific_heat_capacity": 63,
    "special_note": "Izotopul **Cm-244** produce destulă căldură prin dezintegrare pentru a alimenta **sonde spațiale**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există natural.",
    "role_in_human_body": "Nu participă la metabolism.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "**Extrem de radiotoxic**: se acumulează în oase → cancer osos, leucemie."
  },
  "organic_compounds": {
    "overview": "Chimia complexelor organice ale curiului se bazează pe starea Cm³⁺.",
    "classes_with_examples": [
      "CmCl₃ — sare solubilă folosită în separări.",
      "CmO₂ (dioxid) — formă stabilă la temperaturi mari.",
      "Complexe cu EDTA și DTPA — folosite în decontaminare și separare."
    ],
    "role_in_organic_reactions": "Nu este folosit în sinteză organică; doar în chimie de coordinație nucleară."
  },
  "preparation_reactions": [
    {
      "equation": "Pu-239 + α → Cm-243 + n",
      "notes": "Bombardare cu particule alfa în reactor/ciclotron."
    },
    {
      "equation": "Cm-243 → Cm-244 (prin captură de neutroni)",
      "notes": "Izotopul Cm-244 este utilizat în RTG."
    }
  ],
  "chemical_properties": [
    "Se oxidează la aer: 4 Cm + 3 O₂ → 2 Cm₂O₃.",
    "Reacționează cu halogeni formând CmCl₃, CmF₃.",
    "Ionul stabil în soluție este **Cm³⁺** (roz-roșiatic).",
    "Compușii se auto-degradează prin **auto-iradiere**."
  ]
},
{
  "symbol": "Bk",
  "name": "Berkelium",
  "nume_romana": "Berkeliu",
  "atomic_number": 97,
  "atomic_weight": 247,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f⁹",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Argintiu-metalic (observat doar în microcantoități)",
  "oxidation_states": [+3, +4],
  "higher_oxidation_states": "+4 în condiții puternic oxidante",
  "compounds_with_hydrogen": ["BkH₂, BkH₃ (hidruri radioactive)"],
  "melting_point": 986,
  "boiling_point": 2627,
  "density": 14.78,
  "discovery": "Sintetizat în 1949 de Glenn T. Seaborg, Albert Ghiorso și Stanley Thompson (Berkeley, SUA).",
  "appearance": "Metal greu, strălucitor, dar observabil doar în cantități extrem de mici (~micrograme).",
  "discovered_in": "Obținut prin iradierea curiului (Cm) cu particule alfa.",
  "abundance": "Nu există în natură; produs exclusiv **artificial**.",
  "uses": [
    "Cercetare în **chimie nucleară** și structura actinidelor.",
    "Material **intermediar** în producerea elementelor mai grele (ex: **Californiu**).",
    "Studiu în separarea și reciclarea combustibililor nucleari."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 601,
    "atomic_radius": 170,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 10,
    "specific_heat_capacity": 42,
    "special_note": "Berkeliul este **primul element care a fost produs în cantitate vizibilă la microscop (~1 mg în 1962)**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în mod natural.",
    "role_in_human_body": "Nu are funcție biologică.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radiațiile alfa și gama pot provoca **cancer**, afectări hepatice și ale măduvei osoase."
  },
  "organic_compounds": {
    "overview": "Chimia berkeliumului este similară cu cea a curiului și americiului.",
    "classes_with_examples": [
      "BkCl₃ — sare solubilă folosită pentru separări.",
      "BkO₂ (dioxid) — formă stabilă în aer.",
      "Complexe cu EDTA și DTPA pentru chelare."
    ],
    "role_in_organic_reactions": "Nu se folosește în sinteză organică — doar în **chimie de coordinație**."
  },
  "preparation_reactions": [
    {
      "equation": "Cm-244 + α → Bk-247 + n",
      "notes": "Metoda principală în reactor sau ciclotron."
    }
  ],
  "chemical_properties": [
    "Formează oxizi: 4 Bk + 3 O₂ → 2 Bk₂O₃.",
    "Formează fluoruri: BkF₃, BkF₄ (utile în purificare).",
    "Ionul stabil în soluție este **Bk³⁺** (verde pal).",
    "Compușii se **auto-degradează** prin radiație."
  ]
},
{
  "symbol": "Cf",
  "name": "Californium",
  "nume_romana": "Californiu",
  "atomic_number": 98,
  "atomic_weight": 251,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f⁹",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Argintiu-metalic (observat doar în microcantități)",
  "oxidation_states": [+3, +4],
  "higher_oxidation_states": "+4 (în mediu oxidant)",
  "compounds_with_hydrogen": ["CfH₂, CfH₃ (hidruri instabile)"],
  "melting_point": 900,
  "boiling_point": 1470,
  "density": 15.1,
  "discovery": "Sintetizat în 1950 la Universitatea Berkeley de Glenn Seaborg, Stanley Thompson și Albert Ghiorso.",
  "appearance": "Metal alb-argintiu în forme ultramici; foarte radioactiv.",
  "discovered_in": "Obținut prin bombardarea curiului cu particule alfa.",
  "abundance": "Nu există în natură; produs **artificial** în reactoare nucleare specializate.",
  "uses": [
    "**Sursă portabilă de neutroni** (Cf-252 emite ~2.3 × 10⁶ neutroni/s).",
    "Detectarea minereurilor **de aur, argint și uraniu** (sonde geologice).",
    "Pornirea reactoarelor nucleare («starter fuel»).",
    "Tratamente experimentale împotriva **cancerului** (terapie cu neutroni).",
    "Analiză prin activare neutronica (identificarea compoziției materialelor)."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 608,
    "atomic_radius": 174,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 10,
    "specific_heat_capacity": 35,
    "special_note": "**Cf-252** este unul dintre cei mai puternici emițători de neutroni cunoscuți → foarte valoros, dar extrem de periculos."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare natural.",
    "role_in_human_body": "Nu are funcții biologice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Se acumulează în **oase și ficat** → produce cancer prin radiații alfa și neutroni."
  },
  "organic_compounds": {
    "overview": "Chimia californiului este importantă pentru separarea actinidelor.",
    "classes_with_examples": [
      "CfCl₃ — sare solubilă pentru studii structurale.",
      "CfO₂ — oxid stabil la temperaturi înalte.",
      "Complexe Cf³⁺ cu liganzi chelatori pentru purificare izotopică."
    ],
    "role_in_organic_reactions": "Nu intră în reacții organice, doar în **chimie de coordinație**."
  },
  "preparation_reactions": [
    {
      "equation": "Cm-244 + α → Cf-248 + n",
      "notes": "Bombardare cu particule alfa în ciclotron/reactor."
    },
    {
      "equation": "Cf-248 → Cf-252 (prin captură de neutroni)",
      "notes": "Cf-252 este izotopul cel mai valoros industrial."
    }
  ],
  "chemical_properties": [
    "Reacționează cu oxigenul: 4 Cf + 3 O₂ → 2 Cf₂O₃.",
    "Formează fluoruri: CfF₃, CfF₄ (utile în separare).",
    "În soluție, **Cf³⁺** este forma stabilă (verde deschis).",
    "Compușii se degradează în timp prin **auto-iradiere intensă**."
  ]
},
{
  "symbol": "Es",
  "name": "Einsteinium",
  "nume_romana": "Einsteiniu",
  "atomic_number": 99,
  "atomic_weight": 252,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f¹¹",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Alb-argintiu (doar în cantități ultramici)",
  "oxidation_states": [+2, +3],
  "higher_oxidation_states": "+3 este cel mai stabil",
  "compounds_with_hydrogen": ["EsH₂ (foarte instabil)"],
  "melting_point": 860,
  "boiling_point": 996,
  "density": 8.84,
  "discovery": "Identificat în 1952 în resturile testului termonuclear «Ivy Mike» (Enewetak Atoll).",
  "appearance": "Metal radioactiv instabil; se observă doar sub formă de microcristale sau în compuși.",
  "discovered_in": "Produs prin bombardarea californiului în reactor.",
  "abundance": "Nu există în natură; produs exclusiv **artificial** în cantități foarte mici.",
  "uses": [
    "Sinteza elementelor **super-grele**, inclusiv **Mendeleviu (Md)**.",
    "Cercetare în fizica nucleară (structura nucleelor grele).",
    "Studii asupra comportamentului materialelor sub **auto-iradiere intensă**."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 619,
    "atomic_radius": 167,
    "crystal_structure": "Hexagonal compact (hcp)",
    "magnetic_properties": "Paramagnetic",
    "thermal_conductivity": 10,
    "specific_heat_capacity": 30,
    "special_note": "Dezintegrarea puternică alfa produce căldură → probele de einsteiniu **strălucesc slab** în întuneric."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare natural.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "**Extrem de toxic și radiotoxic**: distruge măduva osoasă și ADN-ul."
  },
  "organic_compounds": {
    "overview": "Chimia einsteiniului este studiată numai la nivel de nanograme până la micrograme.",
    "classes_with_examples": [
      "EsCl₃ — sare solubilă tipică pentru starea +3.",
      "Es₂O₃ — oxid stabil, utilizat în separări.",
      "Complexe Es³⁺ cu chelatori organici (EDTA, DTPA)."
    ],
    "role_in_organic_reactions": "Nu participă la reacții organice — doar în **chimie de coordinație**."
  },
  "preparation_reactions": [
    {
      "equation": "Cf-249 + n → Cf-250 → Es-253 + β⁻",
      "notes": "Produs în reactoare cu flux mare de neutroni."
    }
  ],
  "chemical_properties": [
    "Formează oxizi stabili: Es₂O₃.",
    "În soluții apoase, forma stabilă este **Es³⁺** (roz pal).",
    "Compușii se degradează rapid prin **auto-iradiere** și încălzire internă.",
    "Reactivitatea chimică este similară cu cea a californiului și americiului."
  ]
},
{
  "symbol": "Fm",
  "name": "Fermium",
  "nume_romana": "Fermiu",
  "atomic_number": 100,
  "atomic_weight": 257,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f¹²",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Nu poate fi observat vizual ca metal (există doar sub formă de compuși)",
  "oxidation_states": [+2, +3],
  "higher_oxidation_states": "+3 este forma stabilă în soluție",
  "compounds_with_hydrogen": ["FmH₂ (foarte instabil, cunoscut doar teoretic)"],
  "melting_point": 1527,
  "boiling_point": null,
  "density": null,
  "discovery": "Descoperit în 1952 în resturile testului termonuclear «Ivy Mike» (Enewetak Atoll).",
  "appearance": "Nu a fost obținut niciodată în cantitate suficientă pentru a observa aspectul metalic.",
  "discovered_in": "Obținut ulterior în reactoare nucleare cu flux înalt de neutroni.",
  "abundance": "Extrem de rar; produs numai artificial în niveluri de **nanograme**.",
  "uses": [
    "Cercetare fundamentală în **fizica nucleară**.",
    "Studiul **dezintegrării nucleare** și al limitelor stabilității elementelor grele.",
    "Material **intermediar** în sinteza elementelor super-grele (ex: Mendeleviu)."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 627,
    "atomic_radius": 166,
    "crystal_structure": "Necunoscut complet (insuficient material)",
    "magnetic_properties": "Probabil paramagnetic",
    "thermal_conductivity": "foarte_scăzută",
    "specific_heat_capacity": "necunoscută",
    "special_note": "Radiația intensă încălzește probele; **compușii se degradează spontan**."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu există în mod natural.",
    "role_in_human_body": "Nu are funcții biologice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Extrem de radiotoxic → distrugerea ADN-ului, măduvei osoase și țesuturilor moi."
  },
  "organic_compounds": {
    "overview": "Studiile implică doar complexe ale ionului **Fm³⁺**.",
    "classes_with_examples": [
      "FmCl₃ — sare solubilă utilizată la separări cromatografice.",
      "Fm₂O₃ — oxid stabil în aer.",
      "Complexe cu EDTA/DTPA pentru separarea actinidelor."
    ],
    "role_in_organic_reactions": "Nu intră în reacții organice — doar **coordinație și separare**."
  },
  "preparation_reactions": [
    {
      "equation": "Pu-239 + n (flux ridicat) → ... → Fm-255",
      "notes": "Produs prin **captură multiplă de neutroni** în reactoare speciale."
    }
  ],
  "chemical_properties": [
    "În soluție apoasă, forma stabilă este **Fm³⁺**.",
    "Poate fi redus la **Fm²⁺** în condiții puternic reducătoare.",
    "Compușii se auto-deteriorează prin **auto-iradiere**."
  ]
},
{
  "symbol": "Md",
  "name": "Mendelevium",
  "nume_romana": "Mendeleviu",
  "atomic_number": 101,
  "atomic_weight": 258,
  "electron_configuration": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶ 7s² 5f¹³",
  "group": "Actinide",
  "period": 7,
  "block": "f",
  "category": "Actinid transuranian radioactiv",
  "color": "Nu poate fi observat ca metal (cantități prea mici)",
  "oxidation_states": [+2, +3],
  "higher_oxidation_states": "+3 este forma stabilă în soluții",
  "compounds_with_hydrogen": ["MdH₂ (ipotetic/instabil)"],
  "melting_point": 827,
  "boiling_point": null,
  "density": null,
  "discovery": "Descoperit în 1955 de Albert Ghiorso, Glenn Seaborg și echipa, la Berkeley.",
  "appearance": "Nu există în cantități vizibile; studiat doar atomic în soluții.",
  "discovered_in": "Obținut prin bombardarea einsteiniului cu ioni de heliu (α).",
  "abundance": "Produs numai artificial; nivel tipic ~ **câteva mii de atomi**.",
  "uses": [
    "Cercetare în structura nucleară a elementelor super-grele.",
    "Studiul **tranziției între actinide și elemente super-grele**.",
    "Testarea tehnicilor de separare la nivel atomic."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": 635,
    "atomic_radius": 165,
    "crystal_structure": "Necunoscută (nu există probă metalică solidă)",
    "magnetic_properties": "Probabil paramagnetic",
    "thermal_conductivity": null,
    "specific_heat_capacity": null,
    "special_note": "Primul element care a fost **manipulat la nivel de UN ATOM**, folosind tehnici speciale de schimb ionic."
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare natural.",
    "role_in_human_body": "Nu are funcții biologice.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radiații extrem de toxice → afectează ADN-ul și țesuturile."
  },
  "organic_compounds": {
    "overview": "Chimia Md este bazată pe ionul **Md³⁺**.",
    "classes_with_examples": [
      "MdCl₃ — utilizat pentru separare cromatografică.",
      "Md₂O₃ — oxid stabil rezultat prin precipitare.",
      "Complexe Md³⁺ cu EDTA și DTPA."
    ],
    "role_in_organic_reactions": "Nu participă la reacții organice → doar **coordinație și separare**."
  },
  "preparation_reactions": [
    {
      "equation": "Es-253 + α → Md-257 + n",
      "notes": "Bombardare cu particule alfa în ciclotron."
    }
  ],
  "chemical_properties": [
    "Formează ionul **Md³⁺** stabil în soluție (roz pal).",
    "Poate fi redus la **Md²⁺** în medii puternic reducătoare.",
    "Compușii sunt instabili pe termen lung din cauza **auto-iradierii**."
  ]
},
{
  "symbol": "No",
  "name": "Nobelium",
  "nume_romana": "Nobeliu",
  "atomic_number": 102,
  "atomic_weight": 259,
  "electron_configuration": "[Rn] 5f14 7s2",
  "group": null,
  "period": 7,
  "block": "f",
  "category": "Actinid",
  "color": "Argintiu (estimat)",
  "oxidation_states": [2, 3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat pentru prima dată în 1957 de o echipă sovietică la Institutul Nuclear de la Dubna; confirmat în 1958 de cercetători americani la Berkeley.",
  "appearance": "Se presupune că este un metal alb-argintiu similar altor actinide, însă proprietățile fizice nu sunt observabile direct din cauza instabilității extreme.",
  "discovered_in": "Nu se găsește în natură; este obținut exclusiv în laborator prin reacții nucleare.",
  "abundance": "Inexistent în natură; produs sintetic în cantități extrem de mici.",
  "uses": [
    "Nu are aplicații comerciale.",
    "Este utilizat doar în cercetări nucleare și chimice fundamentale pentru studierea actinidelor și proprietăților elementelor super-grele."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": "642 kJ/mol (No → No⁺) — valori experimentale limitate",
    "atomic_radius": null,
    "crystal_structure": "Presupus hexagonal compact (hcp) pe baza tendințelor din serie",
    "magnetic_properties": "Date experimentale insuficiente",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organismele vii.",
    "role_in_human_body": "Niciun rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Extrem de radioactiv; orice expunere ar fi dăunătoare (iradiere severă)."
  },
  "organic_compounds": {
    "overview": "Nobeliul nu formează compuși organici stabili datorită instabilității și radioactivității sale ridicate.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Inexistent; manipularea se face doar în soluții dilute, la scară atom cu atom."
  },
  "preparation_reactions": [
    {
      "equation": "244Cm + 13C → 256No + n",
      "notes": "Metodă principală de sinteză prin bombardarea curiului cu ioni de carbon."
    },
    {
      "equation": "238U + 64Ni → 302No* → No + neutroni",
      "notes": "Sinteză alternativă în reacții nucleare cu energii mari."
    }
  ],
  "chemical_properties": [
    "Nobeliul se comportă chimic similar cu actinidele târzii.",
    "În soluție apoasă, starea de oxidare preferată este +2, spre deosebire de majoritatea actinidelor care preferă +3.",
    "Formează săruri în stare No²⁺ și No³⁺, studiate prin tehnici radiochimice de urmă.",
    "Reactivitatea sa este analizată aproape exclusiv prin separări cromatografice și schimb ionic la scară atomică."
  ]
},
{
  "symbol": "Lr",
  "name": "Lawrencium",
  "nume_romana": "Laurenciu",
  "atomic_number": 103,
  "atomic_weight": 262,
  "electron_configuration": "[Rn] 5f14 7s2 7p1",
  "group": null,
  "period": 7,
  "block": "f (trecere către d)",
  "category": "Actinid",
  "color": "Argintiu (estimat)",
  "oxidation_states": [3],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat pentru prima dată în 1961 la Laboratorul Lawrence Berkeley (SUA) de către Ghiorso, Sikkeland, Larsh și Latimer.",
  "appearance": "Se presupune că este un metal alb-argintiu, dar cantitățile sunt prea mici și instabile pentru observații directe.",
  "discovered_in": "Nu există în natură; obținut doar prin reacții nucleare cu particule accelerate.",
  "abundance": "Inexistent în scoarța terestră; produs doar atomic în laboratoare.",
  "uses": [
    "Nu are utilizări comerciale.",
    "Este folosit exclusiv în cercetări nucleare privind stabilitatea elementelor super-grele."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": "470 kJ/mol (pentru formarea Lr³⁺, valoare experimentală limitată)",
    "atomic_radius": null,
    "crystal_structure": "Probabil hexagonal compact (hcp), pe baza analogiei cu nobeliul și lutetiul",
    "magnetic_properties": "Date insuficiente",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu este prezent.",
    "role_in_human_body": "Niciun rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Extrem de radioactiv și toxic; expunerea ar fi fatală."
  },
  "organic_compounds": {
    "overview": "Din cauza timpului de înjumătățire foarte scurt și a producției extrem de reduse, nu formează compuși organici stabili.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Inexistent — studiile sunt limitate la soluții ionice foarte diluate."
  },
  "preparation_reactions": [
    {
      "equation": "252Cf + 10B → 262Lr + n",
      "notes": "Metodă de sinteză prin bombardarea californiului cu ioni de bor."
    },
    {
      "equation": "249Bk + 14N → 262Lr + n",
      "notes": "Metodă alternativă, folosită în experimente cu acceleratoare."
    }
  ],
  "chemical_properties": [
    "Laurenciul se comportă chimic similar cu lutetiul (La analog în seriile f).",
    "Starea de oxidare stabilă este +3, formând ionul Lr³⁺.",
    "Formează săruri simple, solubile, studiate prin tehnici radiochimice de urmărire atomică.",
    "Are o energie de ionizare neobișnuit de mică pentru un actinid, ceea ce sugerează un comportament intermediar între blocurile f și d."
  ]
},
{
  "symbol": "Rf",
  "name": "Rutherfordium",
  "nume_romana": "Rutherfordiu",
  "atomic_number": 104,
  "atomic_weight": 267,
  "electron_configuration": "[Rn] 5f14 6d2 7s2",
  "group": 4,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (actinid extins)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [4],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Descoperit în 1964 la Institutul Nuclear din Dubna (URSS); confirmat independent în 1969 la Lawrence Berkeley Laboratory (SUA).",
  "appearance": "Considerat a fi un metal greu, alb-argintiu, dar nu poate fi observat direct din cauza cantităților extrem de mici și timpilor de înjumătățire scurți.",
  "discovered_in": "Nu apare în natură; este sintetizat în laborator prin reacții nucleare.",
  "abundance": "Produs în mod artificial, în cantități atomice.",
  "uses": [
    "Nu are aplicații practice comerciale.",
    "Folosit exclusiv în cercetarea proprietăților elementelor super-grele și stabilității nucleare."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": "580 kJ/mol (aprox.)",
    "atomic_radius": null,
    "crystal_structure": "Probabil hexagonal compact (hcp) conform calculelor teoretice",
    "magnetic_properties": "Date insuficiente (radioactivitate foarte mare)",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu este prezent.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Extrem de radioactiv — expunerea directă este letală."
  },
  "organic_compounds": {
    "overview": "Nu formează compuși organici stabili; studiile sunt limitate la chimia anorganică în soluție.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu are rol în reacții organice."
  },
  "preparation_reactions": [
    {
      "equation": "249Cf + 12C → 261Rf + 0-1 n",
      "notes": "Produsele diferă în funcție de energia de bombardare."
    },
    {
      "equation": "248Cm + 18O → 266Rf + 0-2 n",
      "notes": "Metodă alternativă folosită în acceleratoare de particule."
    }
  ],
  "chemical_properties": [
    "Rutherfordiul este analog cu zirconiul (Zr) și hafniul (Hf) în grupa 4.",
    "Starea de oxidare predominantă este +4.",
    "Formează compuși precum RfCl₄ și complexe RfO₂²⁺ în soluții acide.",
    "Chimia sa este studiată atom-cu-atom prin tehnici de cromatografie rapidă datorită radioactivității ridicate."
  ]
},
{
  "symbol": "Db",
  "name": "Dubnium",
  "nume_romana": "Dubniu",
  "atomic_number": 105,
  "atomic_weight": 268,
  "electron_configuration": "[Rn] 5f14 6d3 7s2",
  "group": 5,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (super-greu)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [5],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 1968 la Joint Institute for Nuclear Research, Dubna (URSS). Confirmat independent în 1970 la Lawrence Berkeley Laboratory (SUA).",
  "appearance": "Considerat a fi un metal dens, lustru argintiu, dar proprietățile fizice nu pot fi observate direct datorită cantităților infime și instabilității ridicate.",
  "discovered_in": "Nu există în natură; produs doar în laboratoare prin reacții nucleare.",
  "abundance": "Produs în cantități atomice, pe scale de micro- și nano-secunde de studiu.",
  "uses": [
    "Nu există utilizări industriale sau comerciale.",
    "Utilizat exclusiv în cercetarea elementelor super-grele și a configurațiilor electronice la limitele stabilității nucleare."
  ],
  "notable_properties": {
    "electronegativity": 1.6,
    "ionization_energy": "Approx. 665 kJ/mol",
    "atomic_radius": null,
    "crystal_structure": "Necunoscută; prezisă posibil cubică sau hexagonală",
    "magnetic_properties": "Date insuficiente",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organisme.",
    "role_in_human_body": "Niciun rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate extrem de ridicată — letal în contact direct."
  },
  "organic_compounds": {
    "overview": "Nu formează compuși organici; chimia sa este studiată în soluție anorganică în concentrații extrem de mici.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă în reacții organice."
  },
  "preparation_reactions": [
    {
      "equation": "243Am + 22Ne → 260Db + 5 n",
      "notes": "Metodă utilizată în acceleratoare cu ioni grei."
    },
    {
      "equation": "249Bk + 15N → 264Db + n",
      "notes": "Alternativă utilizată pentru obținerea izotopilor cu diferite timpuri de înjumătățire."
    }
  ],
  "chemical_properties": [
    "Dubniul este analog cu niobiul (Nb) și tantalu (Ta) în grupa 5.",
    "Starea de oxidare principală este +5, formând ionul Db⁵⁺.",
    "Formează complexe halogenurate precum DbCl₅ și DbF₇²⁻.",
    "Chimia sa este investigată prin cromatografie rapidă și tehnici atom-cu-atom datorită radioactivității și instabilității foarte mari."
  ]
},
{
  "symbol": "Sg",
  "name": "Seaborgium",
  "nume_romana": "Seaborgiu",
  "atomic_number": 106,
  "atomic_weight": 269,
  "electron_configuration": "[Rn] 5f14 6d4 7s2",
  "group": 6,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (super-greu)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [6],
  "higher_oxidation_states": null,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 1974 la Lawrence Berkeley Laboratory (SUA) de echipa condusă de Glenn T. Seaborg și Albert Ghiorso.",
  "appearance": "Probabil un metal greu, alb-argintiu; nu poate fi observat direct din cauza instabilității extreme și producției atomice.",
  "discovered_in": "Nu se găsește în natură; obținut exclusiv în laboratoare de fizică nucleară.",
  "abundance": "Produs în cantități individuale de atomi, cu timp de înjumătățire foarte redus.",
  "uses": [
    "Nu are aplicații industriale sau comerciale.",
    "Utilizat exclusiv în cercetare pentru studierea chimiei elementelor super-grele și a efectelor relativiste asupra electronilor."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": "Approx. 720 kJ/mol",
    "atomic_radius": null,
    "crystal_structure": "Necunoscută, estimat hcp sau cubică",
    "magnetic_properties": "Necunoscute (prea puține date experimentale)",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organisme vii.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate extrem de puternică — orice expunere este periculoasă."
  },
  "organic_compounds": {
    "overview": "Nu formează compuși organici; interacțiunile sunt studiate doar în soluții anorganice la nivel de atomi individuali.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu reacționează în context organic."
  },
  "preparation_reactions": [
    {
      "equation": "249Cf + 18O → 263Sg + 4 n",
      "notes": "Metodă uzuală de sinteză în acceleratoare."
    },
    {
      "equation": "248Cm + 22Ne → 266Sg + 4 n",
      "notes": "Alternativă de producere pentru izotopi diferiți."
    }
  ],
  "chemical_properties": [
    "Seaborgiul se comportă analog chimic cu tungstenul (W) și molibdenul (Mo).",
    "Starea de oxidare stabilă este +6, formând complexele SgO₂²⁺ (analog cu WO₂²⁺).",
    "Formează oxo-complexe și cloruri de tip SgCl₆²⁻ în soluții foarte diluate.",
    "Chimia sa este investigată prin metode de cromatografie rapidă datorită prezenței atomice extrem de reduse."
  ]
},
{
  "symbol": "Bh",
  "name": "Bohrium",
  "nume_romana": "Bohriu",
  "atomic_number": 107,
  "atomic_weight": 270,
  "electron_configuration": "[Rn] 5f14 6d5 7s2",
  "group": 7,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (super-greu)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [7, 5, 4, 3],
  "higher_oxidation_states": 7,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 1976 la Institutul Nuclear de la Dubna (URSS) și confirmat în 1981 la GSI Darmstadt (Germania).",
  "appearance": "Se presupune că este un metal dens, argintiu, dar nu a fost observat direct din cauza cantităților atomice și instabilității extreme.",
  "discovered_in": "Nu se găsește în natură; obținut exclusiv în laboratoare prin fuziune nucleară.",
  "abundance": "Produs doar sub formă de atomi izolați, cu durate de viață de ordinul secundelor sau milisecundelor.",
  "uses": [
    "Nu are utilizări practice în industrie.",
    "Folosit strict în cercetarea nucleară și chimică a elementelor trans-actinide."
  ],
  "notable_properties": {
    "electronegativity": 1.9,
    "ionization_energy": "Approx. 740 kJ/mol",
    "atomic_radius": null,
    "crystal_structure": "Necunoscută (prezis analog Re)",
    "magnetic_properties": "Date insuficiente",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organisme.",
    "role_in_human_body": "Fără rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate extremă — expunerea ar fi fatală."
  },
  "organic_compounds": {
    "overview": "Nu formează compuși organici; reacțiile sunt studiate doar în soluții anorganice foarte diluate.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu are rol în chimia organică."
  },
  "preparation_reactions": [
    {
      "equation": "209Bi + 54Cr → 262Bh + 1 n",
      "notes": "Reacție realizată în 1981 la GSI Darmstadt."
    },
    {
      "equation": "203Tl + 50Cr → 253Bh + 0–1 n",
      "notes": "Alternativă pentru obținerea altor izotopi."
    }
  ],
  "chemical_properties": [
    "Bohriul este analog chimic cu rheniul (Re) și technetiul (Tc), situat în grupa 7.",
    "Starea de oxidare cea mai stabilă este +7, formând specii precum ionul BhO₄⁻.",
    "În soluții foarte acide poate forma complexe de tip BhCl₆⁻.",
    "Chimia sa confirmă tendințele perioadei, dar arată și efecte relativiste vizibile asupra electronilor orbitalilor 6d."
  ]
},
{
  "symbol": "Hs",
  "name": "Hassium",
  "nume_romana": "Hasiu",
  "atomic_number": 108,
  "atomic_weight": 269,
  "electron_configuration": "[Rn] 5f14 6d6 7s2",
  "group": 8,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (super-greu)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [8, 6, 4, 2],
  "higher_oxidation_states": 8,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintezat în 1984 la Institutul GSI Darmstadt (Germania) de echipa lui Peter Armbruster și Gottfried Münzenberg.",
  "appearance": "Considerat a fi un metal greu, lucios, similar osmiumului, dar nu a fost observat direct datorită cantităților atomice microscopice și timpilor de înjumătățire extrem de scurți.",
  "discovered_in": "Nu apare în natură; creat exclusiv prin bombardarea accelerată a nucleelor grele.",
  "abundance": "Produs doar în laborator în cantități atomice.",
  "uses": [
    "Nu are utilizări comerciale.",
    "Folosit în cercetare pentru studierea efectelor relativiste asupra elementelor din grupa 8 (Fe, Ru, Os → Hs)."
  ],
  "notable_properties": {
    "electronegativity": 1.8,
    "ionization_energy": "Approx. 760 kJ/mol",
    "atomic_radius": null,
    "crystal_structure": "Se estimează că are structură cubică sau hexagonală compactă (hcp), analog osmiumului",
    "magnetic_properties": "Date insuficiente",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organisme.",
    "role_in_human_body": "Niciun rol.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate letală în orice expunere semnificativă."
  },
  "organic_compounds": {
    "overview": "Nu formează compuși organici; studiile sunt făcute în soluție anorganică la nivel atomic.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Inexistent."
  },
  "preparation_reactions": [
    {
      "equation": "226Ra + 58Fe → 265Hs + 2 n",
      "notes": "Reacție utilizată în sinteza inițială."
    },
    {
      "equation": "208Pb + 58Fe → 265Hs + 1 n",
      "notes": "Utilizată în experimente ulterioare la GSI."
    }
  ],
  "chemical_properties": [
    "Hasiul este analog cu osmiumul (Os), ruteniul (Ru) și fierul (Fe) în grupa 8.",
    "Prezintă starea de oxidare +8 în unele condiții — cea mai înaltă între metalele tranziției.",
    "Formează oxo-complexe precum HsO₄ și HsO₂Cl₂ (similar cu OsO₄).",
    "Studii experimentale confirmă comportament chimic *aproape identic* cu osmiumul, dar cu efecte relativiste mai pronunțate asupra electronilor 6d."
  ]
},
{
  "symbol": "Mt",
  "name": "Meitnerium",
  "nume_romana": "Meitneriu",
  "atomic_number": 109,
  "atomic_weight": 278,
  "electron_configuration": "[Rn] 5f14 6d7 7s2",
  "group": 9,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (super-greu)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [9, 8, 6, 4, 3],
  "higher_oxidation_states": 9,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 1982 la GSI Darmstadt (Germania) de echipa condusă de Peter Armbruster și Gottfried Münzenberg.",
  "appearance": "Probabil un metal dens și lucios, similar cu iridiul și cobaltul, însă nu a fost observat direct din cauza duratei de viață extrem de reduse.",
  "discovered_in": "Nu apare în natură; obținut doar în laboratoare de fizică nucleară.",
  "abundance": "Produs în cantități atomice, cu timpi de înjumătățire de ordinul milisecundelor până la secunde.",
  "uses": [
    "Nu are aplicații industriale.",
    "Utilizat exclusiv în cercetări fundamentale privind structura nucleelor super-grele și efectele relativiste."
  ],
  "notable_properties": {
    "electronegativity": 1.6,
    "ionization_energy": "Approx. 800 kJ/mol",
    "atomic_radius": null,
    "crystal_structure": "Estimativ cubică sau hexagonală, analog iridiului, dar nedemonstrată experimental",
    "magnetic_properties": "Date insuficiente",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu se găsește în organism.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate extremă — expunerea ar fi fatală."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organometalici sau organici ai meitneriului.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă în chimia organică."
  },
  "preparation_reactions": [
    {
      "equation": "209Bi + 58Fe → 266Mt + 1 n",
      "notes": "Reacția folosită în sinteza inițială (1982)."
    },
    {
      "equation": "208Pb + 65Cu → 273Mt + 0–1 n",
      "notes": "Utilizată pentru producerea altor izotopi."
    }
  ],
  "chemical_properties": [
    "Meitneriul este analog cu iridiul (Ir), rodiumul (Rh) și cobaltul (Co) în grupa 9.",
    "Stările de oxidare ridicate (până la +9) sunt posibile teoretic datorită configurației electronice 6d.",
    "Se estimează că formează oxo-complexe volatile similare cu IrO₄.",
    "Chimia sa este investigată la nivel atomic cu tehnici de cromatografie super-rapidă."
  ]
},
{
  "symbol": "Ds",
  "name": "Darmstadtium",
  "nume_romana": "Darmstadtiu",
  "atomic_number": 110,
  "atomic_weight": 281,
  "electron_configuration": "[Rn] 5f14 6d8 7s2",
  "group": 10,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (super-greu)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [6, 4, 2, 0],
  "higher_oxidation_states": 6,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Descoperit în 1994 la GSI Helmholtz Centre for Heavy Ion Research (Darmstadt, Germania).",
  "appearance": "Considerat a fi un metal greu, cu luciu ridicat, asemănător platinelor, dar nu a fost observat direct din cauza instabilității extreme.",
  "discovered_in": "Nu există în natură; produs exclusiv în reacții de fuziune nucleară.",
  "abundance": "Produs atom cu atom, cu timp de înjumătățire foarte scurt (milisecunde până la câteva secunde).",
  "uses": [
    "Nu are utilizări comerciale.",
    "Folosit doar în cercetări asupra stabilității nucleare și structurii electronice a elementelor super-grele."
  ],
  "notable_properties": {
    "electronegativity": 1.6,
    "ionization_energy": "Approx. 800–900 kJ/mol (estimativ)",
    "atomic_radius": null,
    "crystal_structure": "Probabil cubică față-centrată (fcc), analog cu platina",
    "magnetic_properties": "Necunoscute",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare.",
    "role_in_human_body": "Niciun rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate extremă, letală în orice expunere."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organici; studiile se limitează la specii ionice în soluție.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu reacționează în chimia organică."
  },
  "preparation_reactions": [
    {
      "equation": "208Pb + 62Ni → 269Ds + n",
      "notes": "Prima reacție confirmată de sinteză."
    },
    {
      "equation": "209Bi + 64Ni → 273Ds + 0–1 n",
      "notes": "Metodă utilizată pentru izotopi mai grei."
    }
  ],
  "chemical_properties": [
    "Darmstadtiul este analog chimic cu platină (Pt), paladiu (Pd) și nichel (Ni).",
    "Se preconizează formarea stărilor de oxidare +2, +4 și +6.",
    "Poate forma complexe volatile de tip DsF₆, analog cu PtF₆.",
    "Efectele relativiste la electronii 6d îi modifică reactivitatea față de platina clasică."
  ]
},
{
  "symbol": "Rg",
  "name": "Roentgenium",
  "nume_romana": "Roentgeniu",
  "atomic_number": 111,
  "atomic_weight": 282,
  "electron_configuration": "[Rn] 5f14 6d9 7s2",
  "group": 11,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (super-greu)",
  "color": "Probabil auriu metalic (estimat, similar cu Au)",
  "oxidation_states": [3, 1],
  "higher_oxidation_states": 3,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 1994 la GSI Helmholtz Centre for Heavy Ion Research (Darmstadt, Germania).",
  "appearance": "Se consideră că este un metal rar, foarte greu, cu nuanță aurie; nu a fost observat direct din cauza duratei de viață extrem de scurte.",
  "discovered_in": "Nu se găsește în natură; produs exclusiv prin bombardarea nucleară.",
  "abundance": "Produs doar sub formă de câțiva atomi odată, cu timp de înjumătățire de la milisecunde la câteva secunde.",
  "uses": [
    "Nu are utilizări practice sau comerciale.",
    "Folosit doar pentru cercetarea proprietăților atomilor super-grei și efectelor relativiste asupra orbitalilor 6d."
  ],
  "notable_properties": {
    "electronegativity": 1.9,
    "ionization_energy": "Approx. 950 kJ/mol (teoretic)",
    "atomic_radius": null,
    "crystal_structure": "Probabil cubică față-centrată (fcc), analog aurului",
    "magnetic_properties": "Necunoscute",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu se găsește în organisme.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Extrem de radioactiv — expunerea directă este letală."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organici; studiul se limitează la specii ionice în soluție.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu intervine în reacții organice."
  },
  "preparation_reactions": [
    {
      "equation": "209Bi + 64Ni → 272Rg + n",
      "notes": "Prima reacție prin care a fost obținut roentgeniul."
    }
  ],
  "chemical_properties": [
    "Roentgeniul este analog cu aurul (Au), argintul (Ag) și cuprul (Cu) în grupa 11.",
    "Starea de oxidare cea mai stabilă este +1, similar cu Au⁺.",
    "Se estimează că RgCl și RgF pot fi obținute în soluție, dar doar la nivel atomic.",
    "Efectele relativiste puternice fac electronii 6d ai lui Rg mai stabili decât electronii 5d ai aurului, ceea ce îi poate schimba ușor reactivitatea."
  ]
},
{
  "symbol": "Cn",
  "name": "Copernicium",
  "nume_romana": "Coperniciu",
  "atomic_number": 112,
  "atomic_weight": 285,
  "electron_configuration": "[Rn] 5f14 6d10 7s2",
  "group": 12,
  "period": 7,
  "block": "d",
  "category": "Metal de tranziție (super-greu)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [2, 1, 0],
  "higher_oxidation_states": 2,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 1996 la GSI Helmholtz Centre for Heavy Ion Research (Darmstadt, Germania).",
  "appearance": "Se consideră că este un metal foarte greu și volatil, probabil lichid sau gazos la temperatura camerei, din cauza efectelor relativiste.",
  "discovered_in": "Nu se găsește în natură; obținut doar în laboratoare nucleare.",
  "abundance": "Produs în cantități atomice, timpi de înjumătățire adesea sub 1 minut.",
  "uses": [
    "Nu are utilizări industriale.",
    "Folosirea se limitează la studii fundamentale asupra stabilității nucleare și a comportamentului chimic al metalelor super-grele."
  ],
  "notable_properties": {
    "electronegativity": 1.9,
    "ionization_energy": "Approx. 1155 kJ/mol (estimativ)",
    "atomic_radius": null,
    "crystal_structure": "Se presupune cubică (fcc), analog cu mercurul și zincul, dar nedemonstrată experimental",
    "magnetic_properties": "Necunoscute",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu se găsește în organisme.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Extrem de radioactiv — expunerea directă este letală."
  },
  "organic_compounds": {
    "overview": "Nu formează compuși organici; studiile se desfășoară în soluție anorganică sau fază gazoasă.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă în reacții organice."
  },
  "preparation_reactions": [
    {
      "equation": "208Pb + 70Zn → 277Cn + 1 n",
      "notes": "Reacția prin care a fost realizată sinteza confirmată."
    }
  ],
  "chemical_properties": [
    "Coperniciul este analog cu mercurul (Hg), cadmiul (Cd) și zincul (Zn) în grupa 12.",
    "Se consideră că poate fi lichid sau aproape volatil la temperatura camerei — chiar mai volatil decât mercurul.",
    "În soluție formează probabil ioni Cn²⁺, analog Hg²⁺.",
    "Efectele relativiste sunt extrem de puternice și modifică semnificativ comportamentul orbitalilor 7s și 6d."
  ]
},
{
  "symbol": "Nh",
  "name": "Nihonium",
  "nume_romana": "Nihoniu",
  "atomic_number": 113,
  "atomic_weight": 286,
  "electron_configuration": "[Rn] 5f14 6d10 7s2 7p1",
  "group": 13,
  "period": 7,
  "block": "p",
  "category": "Metal post-tranzițional (super-greu)",
  "color": "Argintiu sau gri-metalic (estimat)",
  "oxidation_states": [1, 3],
  "higher_oxidation_states": 3,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Confirmat de RIKEN (Japonia) în 2004–2012, condus de Kosuke Morita. Este primul element descoperit oficial în Asia.",
  "appearance": "Probabil un metal greu slab reactiv, însă instabilitatea extremă face imposibilă observarea directă.",
  "discovered_in": "Nu apare în natură; obținut prin fuziune nucleară controlată.",
  "abundance": "Produs doar atom cu atom, timpi de înjumătățire foarte scurți (milisecunde–secunde).",
  "uses": [
    "Nu are utilizări tehnice sau industriale.",
    "Utilizat numai în cercetare fundamentală pentru studiul nucleelor super-grele și efectelor relativiste."
  ],
  "notable_properties": {
    "electronegativity": 1.6,
    "ionization_energy": "Approx. 740–800 kJ/mol (estimativ)",
    "atomic_radius": null,
    "crystal_structure": "Necunoscută (probabil hexagonală, similar aluminiului într-o formă exotică relativistă)",
    "magnetic_properties": "Date insuficiente",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organisme.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitatea intensă îl face extrem de periculos chiar și în cantități atomice."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organici ai nihoniului.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă în reacții organice."
  },
  "preparation_reactions": [
    {
      "equation": "209Bi + 70Zn → 278Nh + 1 n",
      "notes": "Reacția folosită în sinteza confirmată de RIKEN (Japonia)."
    }
  ],
  "chemical_properties": [
    "Nihoniul este analog cu taliul (Tl), indiu (In) și galiu (Ga) din grupa 13.",
    "Se așteaptă ca starea de oxidare +1 să fie mai stabilă decât +3, invers față de tendința normală, datorită efectelor relativiste asupra orbitalilor 7p.",
    "Poate forma halogenuri precum NhCl și NhBr (în teorie), dar doar în condiții experimentale extreme.",
    "Se estimează o reactivitate redusă, posibil asemănătoare metalelor nobile grele."
  ]
},
{
  "symbol": "Fl",
  "name": "Flerovium",
  "nume_romana": "Fleroviu",
  "atomic_number": 114,
  "atomic_weight": 289,
  "electron_configuration": "[Rn] 5f14 6d10 7s2 7p2",
  "group": 14,
  "period": 7,
  "block": "p",
  "category": "Metal super-greu (posibil semimetal)",
  "color": "Argintiu sau gri-metalic (estimat)",
  "oxidation_states": [2, 4],
  "higher_oxidation_states": 4,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 1998 la Joint Institute for Nuclear Research, Dubna (Rusia), în colaborare cu Lawrence Livermore National Laboratory (SUA).",
  "appearance": "Se presupune a fi un metal foarte greu, moale, cu volatilitate ridicată, posibil aproape gazos la temperatura camerei.",
  "discovered_in": "Nu apare în natură; obținut prin fuziune nucleară controlată.",
  "abundance": "Produs numai câțiva atomi odată, timpi de înjumătățire scurți, dar mai lungi decât la elementele vecine, sugerând o ușoară stabilitate relativă.",
  "uses": [
    "Nu are utilizări industriale.",
    "Folosit exclusiv în cercetări asupra „insulei stabilității” nucleare."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": "Approx. 860 kJ/mol (estimativ)",
    "atomic_radius": null,
    "crystal_structure": "Necunoscută; unele calcule sugerează structuri neobișnuite din cauza efectelor relativiste puternice",
    "magnetic_properties": "Date insuficiente",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organism.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate extremă — orice expunere este toxică imediat."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organici; studiile sunt atom-cu-atom în soluție sau fază gazoasă.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu intervine în reacții organice."
  },
  "preparation_reactions": [
    {
      "equation": "244Pu + 48Ca → 289Fl + 3 n",
      "notes": "Reacția principală folosită la Dubna."
    }
  ],
  "chemical_properties": [
    "Fleroviul aparține grupei 14: analog carbonului (C), siliciului (Si), germaniului (Ge), staniului (Sn) și plumbului (Pb).",
    "Cu toate acestea, datorită efectelor relativiste foarte puternice asupra electronilor 7p, comportamentul său chimic este mult mai apropiat de cel al **gazelor nobile** decât al metalelor normale.",
    "Poate fi aproape inert chimic, asemănător cu radonul (Rn).",
    "Starea de oxidare +2 pare mai stabilă decât +4 (invers față de Sn și Pb)."
  ]
},
{
  "symbol": "Mc",
  "name": "Moscovium",
  "nume_romana": "Moscoviu",
  "atomic_number": 115,
  "atomic_weight": 290,
  "electron_configuration": "[Rn] 5f14 6d10 7s2 7p3",
  "group": 15,
  "period": 7,
  "block": "p",
  "category": "Metal post-tranzițional (super-greu)",
  "color": "Argintiu sau gri-metalic (estimat)",
  "oxidation_states": [1, 3],
  "higher_oxidation_states": 3,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 2003 la Joint Institute for Nuclear Research (Dubna, Rusia) în colaborare cu Lawrence Livermore National Laboratory (SUA).",
  "appearance": "Probabil un metal greu, moale și foarte reactiv, însă nu există observații directe din cauza duratei de viață extrem de scurte.",
  "discovered_in": "Nu apare în natură; produs exclusiv prin reacții nucleare cu ioni grei.",
  "abundance": "Produs doar atom cu atom, timpul de înjumătățire fiind de ordinul milisecundelor până la ~1 secundă pentru unii izotopi.",
  "uses": [
    "Nu are aplicații comerciale.",
    "Folosit doar pentru cercetarea proprietăților nucleelor super-grele și a 'insulei stabilității'."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": "Approx. 580–600 kJ/mol (estimativ)",
    "atomic_radius": null,
    "crystal_structure": "Necunoscută; se presupune o structură metalică simplă",
    "magnetic_properties": "Necunoscute",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organisme.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate intensă – contactul ar fi letal instant."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organici ai moscoviului.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă în reacții organice."
  },
  "preparation_reactions": [
    {
      "equation": "243Am + 48Ca → 291Mc + 0–3 n",
      "notes": "Reacția utilizată în sinteza confirmată la Dubna."
    }
  ],
  "chemical_properties": [
    "Moscoviul aparține grupei 15, alături de azot (N), fosfor (P), arsen (As), stibiu (Sb) și bismut (Bi).",
    "Totuși, din cauza efectelor relativiste, comportamentul său este **mult mai metalic** decât al celorlalte elemente din grupă.",
    "Starea de oxidare +1 este mai stabilă decât +3 (invers față de tendințele obișnuite).",
    "Este estimat să fie **foarte reactiv** și să formeze halogenuri precum McCl și McBr în condiții experimentale extreme."
  ]
},
{
  "symbol": "Lv",
  "name": "Livermorium",
  "nume_romana": "Livermoriu",
  "atomic_number": 116,
  "atomic_weight": 293,
  "electron_configuration": "[Rn] 5f14 6d10 7s2 7p4",
  "group": 16,
  "period": 7,
  "block": "p",
  "category": "Metal post-tranzițional (super-greu)",
  "color": "Argintiu-metalic (estimat)",
  "oxidation_states": [2, 4],
  "higher_oxidation_states": 4,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 2000 la Joint Institute for Nuclear Research (Dubna, Rusia), în colaborare cu Lawrence Livermore National Laboratory (SUA).",
  "appearance": "Probabil un metal greu, cu luciu slab, dar nu a fost observat direct din cauza instabilității extreme.",
  "discovered_in": "Nu se găsește în natură; produs doar prin reacții de fuziune nucleară.",
  "abundance": "Produs atom cu atom, timpi de înjumătățire foarte scurți (milisecunde → secunde).",
  "uses": [
    "Nu are aplicare industrială.",
    "Folosit exclusiv în cercetări nucleare privind stabilitatea elementelor super-grele."
  ],
  "notable_properties": {
    "electronegativity": 1.3,
    "ionization_energy": "Approx. 720 kJ/mol (estimativ)",
    "atomic_radius": null,
    "crystal_structure": "Necunoscută (probabil metalică simplă)",
    "magnetic_properties": "Neobservate",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu se găsește în organism.",
    "role_in_human_body": "Nu are vreun rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Extrem de radioactiv — expunerea este fatală."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organici ai livermoriului.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă la chimia organică."
  },
  "preparation_reactions": [
    {
      "equation": "248Cm + 48Ca → 296Lv + 0–4 n",
      "notes": "Reacția principală folosită în sinteză."
    }
  ],
  "chemical_properties": [
    "Livermoriul este analog cu oxigenul (O), sulful (S), seleniul (Se), telurul (Te) și poloniul (Po) din grupa 16.",
    "Se estimează că are comportament predominant metalic, mai apropiat de poloniu decât de restul grupei.",
    "Stările de oxidare +2 și +4 sunt cele mai stabile, însă chimia sa este cunoscută doar teoretic.",
    "Efectele relativiste puternice ale electronilor 7p influențează semnificativ legarea chimică și reactivitatea."
  ]
},
{
  "symbol": "Ts",
  "name": "Tennessine",
  "nume_romana": "Tennesiu",
  "atomic_number": 117,
  "atomic_weight": 294,
  "electron_configuration": "[Rn] 5f14 6d10 7s2 7p5",
  "group": 17,
  "period": 7,
  "block": "p",
  "category": "Halogen super-greu (dar cu comportament metalic parțial)",
  "color": "Probabil gri-metalic sau argintiu (estimat)",
  "oxidation_states": [-1, 1, 3, 5],
  "higher_oxidation_states": 5,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 2010 la JINR Dubna (Rusia), în colaborare cu Oak Ridge National Laboratory și Vanderbilt University (SUA).",
  "appearance": "Nu poate fi observat direct; se estimează că este un solid greu cu proprietăți intermediare între halogeni și metale post-tranziționale.",
  "discovered_in": "Nu se găsește în natură; produs doar în acceleratoare de particule prin fuziune nucleară.",
  "abundance": "Produs atom cu atom, cu timpi de înjumătățire de milisecunde până la câteva secunde.",
  "uses": [
    "Nu are aplicații industriale.",
    "Folosit exclusiv în cercetare pentru studiul grupei 17 la limite relativiste și pentru explorarea „insulei stabilității”."
  ],
  "notable_properties": {
    "electronegativity": 1.0,
    "ionization_energy": "Aprox. 700 kJ/mol (estimativ)",
    "atomic_radius": null,
    "crystal_structure": "Necunoscută (probabil metalică simplă)",
    "magnetic_properties": "Necunoscute",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare în organisme.",
    "role_in_human_body": "Niciun rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate intensă — contactul ar fi letal."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organici ai tennesiumului.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă în chimia organică."
  },
  "preparation_reactions": [
    {
      "equation": "249Bk + 48Ca → 297Ts + 0–4 n",
      "notes": "Principala reacție utilizată în sinteza confirmată."
    }
  ],
  "chemical_properties": [
    "Tennesiu este în grupa halogenilor (F, Cl, Br, I, At, Ts), dar **nu se comportă ca un halogen clasic**.",
    "Din cauza efectelor relativiste asupra electronilor 7p, comportamentul său chimic este **parțial metalic**.",
    "Starea de oxidare −1 este instabilă; +1 și +3 sunt mai probabile.",
    "Se estimează că poate forma compuși de tip TsCl și TsF, însă doar în condiții experimentale extreme.",
    "Este cel mai „nemetal-halogenoid” dintre halogeni — practic „halogen cu comportament de metal greu”."
  ]
},
{
  "symbol": "Og",
  "name": "Oganesson",
  "nume_romana": "Oganesiu",
  "atomic_number": 118,
  "atomic_weight": 294,
  "electron_configuration": "[Rn] 5f14 6d10 7s2 7p6",
  "group": 18,
  "period": 7,
  "block": "p",
  "category": "Gaz nobil super-greu (cu proprietăți atipice)",
  "color": "Probabil incolor în stare atomică, însă se estimează posibil gri-metalic în masă (dacă ar exista suficient)",
  "oxidation_states": [0, 2],
  "higher_oxidation_states": 2,
  "compounds_with_hydrogen": [],
  "melting_point": null,
  "boiling_point": null,
  "density": null,
  "discovery": "Sintetizat în 2002 la Joint Institute for Nuclear Research (Dubna, Rusia), confirmat în colaborare cu Lawrence Livermore National Laboratory (SUA).",
  "appearance": "Nu a fost observat direct; dacă ar exista în cantitate vizibilă, se crede că ar putea fi un solid dens, nu gaz, datorită efectelor relativiste care intensifică legăturile intermoleculare.",
  "discovered_in": "Nu se găsește în natură; este produs exclusiv prin reacții nucleare de fuziune.",
  "abundance": "Produs atom cu atom, timp de înjumătățire extrem de scurt (~milisecunde).",
  "uses": [
    "Nu are utilizări industriale.",
    "Folosit doar pentru cercetarea stabilității nucleare și a comportamentului gazelor nobile super-grele."
  ],
  "notable_properties": {
    "electronegativity": null,
    "ionization_energy": "Approx. 860 kJ/mol (estimativ)",
    "atomic_radius": null,
    "crystal_structure": "Se presupune cubică sau hexagonală, dar complet nedovedită experimental.",
    "magnetic_properties": "Necunoscute",
    "thermal_conductivity": null,
    "specific_heat_capacity": null
  },
  "biology_facts": {
    "presence_in_human_body": "Nu apare.",
    "role_in_human_body": "Nu are rol biologic.",
    "deficiency_effects": "Nu se aplică.",
    "excess_effects": "Radioactivitate extremă — orice expunere ar fi instant letală."
  },
  "organic_compounds": {
    "overview": "Nu sunt cunoscuți compuși organici ai oganesonului.",
    "classes_with_examples": [],
    "role_in_organic_reactions": "Nu participă în chimia organică."
  },
  "preparation_reactions": [
    {
      "equation": "249Cf + 48Ca → 294Og + 3 n",
      "notes": "Reacția folosită în sinteza confirmată (Dubna + Livermore)."
    }
  ],
  "chemical_properties": [
    "Oganesiul este în grupa gazelor nobile (He, Ne, Ar, Kr, Xe, Rn, Og).",
    "Însă **nu se comportă ca un gaz nobil** — efectele relativiste asupra electronilor 7p sunt atât de puternice încât electronii sunt mult mai „delocalizați”.",
    "Se estimează că **este solid la temperatura camerei**, nu gaz.",
    "Poate forma interacțiuni Van der Waals mult mai puternice decât gazele nobile obișnuite.",
    "Starea de oxidare +2 este teoretic posibilă, lucru nemaivăzut la alte gaze nobile (cu excepția Xe într-o măsură limitată)."
  ]
}
]
export default elements;