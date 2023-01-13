/** *******************************************
  ************* Dynamic Featured section ********
  ********************************************* */
const speakers = [
  {
    id: 1,
    name: 'Yochai Beankler',
    title: 'Brekmen Professor of Entrepreneuial Studies at Harvard Low Schoo',
    description: `SohYeong Noh is sit amet consectetur adipisicing elit. Corrupti, 
                  alias! Ad quibusdam quam fugiat doloribus commodi enim 
                  sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '/images/Group-3.png',
  },
  {
    id: 2,
    name: 'SohYeong Noh',
    title: 'Director of Art Center Nabi and a board member of IPS Koria',
    description: `Yochai Beankler is consectetur adipisicing elit. Corrupti, 
                  alias! Ad quibusdam quam fugiat doloribus commodi enim 
                  sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '/images/Group-4.png',
  },
  {
    id: 3,
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    description: `Lila Tretikov is adipisicing elit. Corrupti, 
                  alias! Ad quibusdam quam fugiat doloribus commodi enim 
                  sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '/images/Group-5.png',
  },
  {
    id: 4,
    name: 'Kilnam Chon',
    title: 'Executive Director of the Wikimedia Foundation',
    description: `Kilnam Chon is adipisicing elit. Corrupti, 
                  alias! Ad quibusdam quam fugiat doloribus commodi enim 
                  sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '/images/Group-6.png',
  },
  {
    id: 5,
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    description: `Julia Leda is corrupti, 
                  alias! Ad quibusdam quam fugiat doloribus commodi enim 
                  sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '/images/Group-7.png',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    title: 'CEO of Creative Commons. ex COO of the Mozilla Foundation',
    description: `Ryan Merkley is dolor sit amet consectetur adipisicing elit. Corrupti, 
                  alias! Ad quibusdam quam fugiat doloribus commodi enim 
                  sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '/images/Group-8.png',
  },
];

const speakerContainer = document.getElementById('speakers');

function createSpeakerHtml(speaker) {
  const speakerItem = document.createElement('li');
  speakerItem.classList.add('speaker-item');

  const html = `
      <div class="image-wrapper">
        <img class="speaker-img" src=${speaker.image} alt="Speaker">
      </div>
      <div class="speaker-info">
        <h3 class="speaker-name">${speaker.name}</h3>
        <span class="speaker-title">${speaker.title}</span>
        <div class="speaker-divder"></div>
        <p class="speaker-description">${speaker.description}</p>
      </div>
    `;
  speakerItem.innerHTML = html;
  speakerContainer.appendChild(speakerItem);
}

speakers.forEach((speaker) => createSpeakerHtml(speaker));
