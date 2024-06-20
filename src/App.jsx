import React, { useEffect, useState } from 'react';

function App() {
  const personasArray = [
    {
      name: "Pity Alvarez",
      ocupacion: "Artista",
      descripcion: "Una eminencia",
      imagen: "https://media.lacapital.com.ar/p/a36fb77f85c13c17aebe3e7418b963e8/adjuntos/203/imagenes/023/992/0023992593/1200x675/smart/pity1png.png"
    },
    {
      name: "Mateo Estrada",
      ocupacion: "Estudiante",
      descripcion: "Un capo",
      imagen: "https://scontent.faep22-1.fna.fbcdn.net/v/t39.30808-6/365748380_2208381846025480_5648651783249655023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jLqKP6QOO88Q7kNvgE78ZHs&_nc_ht=scontent.faep22-1.fna&oh=00_AYBkscLj4bK5bz8ixn7FdhCjwC_QdK6ikbVp9sYYgprPqw&oe=66798D60"
    },
    {
      name: "Leo Messi",
      ocupacion: "Futbolista",
      descripcion: "El mejor de todos los tiempos",
      imagen: "https://media.tycsports.com/files/2024/06/18/731153/lionel-messi-seleccion-argentina_416x234.webp"
    },
    {
      name: "Bill Gates",
      ocupacion: "Empresario",
      descripcion: "Cofundador de Microsoft",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/1200px-Bill_Gates_2018.jpg"
    },
    {
      name: "Ada Lovelace",
      ocupacion: "Programadora",
      descripcion: "Primera programadora de la historia",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg"
    },
    {
      name: "Marie Curie",
      ocupacion: "Científica",
      descripcion: "Pionera en el campo de la radioactividad",
      imagen: "https://historia.nationalgeographic.com.es/medio/2022/03/29/marie-curie_f45f6f98_550x799.jpg"
    },
    {
      name: "Elon Musk",
      ocupacion: "Empresario",
      descripcion: "CEO de Tesla y SpaceX",
      imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy5QMODyHm-LaMpgXOqMIUHPbQ-Y51jAZR_UJYC-9Dv1IL3ovh"
    },
    {
      name: "Alan Turing",
      ocupacion: "Matemático",
      descripcion: "Padre de la computación moderna",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg/640px-Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg"
    },
    {
      name: "Malala Yousafzai",
      ocupacion: "Activista",
      descripcion: "Defensora de los derechos de las mujeres y la educación",
      imagen: "https://www.un.org/sites/un2.un.org/files/field/image/2023/01/un7952210_20220919_lf_1683_.jpg"
    },
    {
      name: "Nelson Mandela",
      ocupacion: "Político",
      descripcion: "Líder sudafricano contra el apartheid",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Nelson_Mandela_1994_%282%29.jpg/1200px-Nelson_Mandela_1994_%282%29.jpg"
    },
    {
      name: "Rosalind Franklin",
      ocupacion: "Científica",
      descripcion: "Contribuyó al entendimiento del ADN",
      imagen: "https://www.pikaramagazine.com/wp-content/uploads/2012/11/RFpensative400.jpg"
    },
    {
      name: "Katherine Johnson",
      ocupacion: "Matemática",
      descripcion: "Calculista clave en la NASA durante los primeros vuelos espaciales tripulados",
      imagen: "https://ciencia.nasa.gov/wp-content/uploads/sites/2/2023/06/lrc-2016-h1_p_katherine_g._johnson-050507-jpg.webp?w=2000"
    },
    {
      name: "Stephen Hawking",
      ocupacion: "Físico Teórico",
      descripcion: "Contribuyó al entendimiento de los agujeros negros y la relatividad",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/800px-Stephen_Hawking.StarChild.jpg"
    },
  ];

  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setPersonas(personasArray);
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-center text-blue-900">Personas más importantes de la historia</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              {/* Imagen y Contenido */}
              <div className="flex flex-col items-center p-4">
                <div className="w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-full">
                  <img className="w-full h-full object-cover" src={persona.imagen} alt={persona.name} />
                </div>
                {/* Contenido */}
                <div className="mt-4 text-center">
                  <div className="uppercase tracking-wide text-sm text-blue-700 font-semibold">{persona.name}</div>
                  <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{persona.ocupacion}</a>
                  <p className="mt-2 text-gray-500">{persona.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
