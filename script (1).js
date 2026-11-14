const artifacts = [
  {
    id: "apollo-lm",
    world: "moon",
    name: "Apollo Lunar Modules",
    mission: "APOLLO 11–17",
    year: "1969–72",
    type: "Crewed lander",
    location: "Apollo landing sites",
    status: "Descent stages remain on the Moon",
    lede: "The landers that brought astronauts down became the launchpads that sent them home.",
    story: "The Lunar Module had two parts. Its ascent stage carried the astronauts back to lunar orbit; the descent stage stayed behind. Apollo 11's Eagle descent stage rests in the Sea of Tranquility, and descent stages from the later Moon landings remain at their sites too.",
    discovery: "The Apollo landings returned 842 pounds (382 kilograms) of lunar rock and soil, giving researchers a record of the Moon's history.",
    source: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C",
    shape: "lander"
  },
  {
    id: "lrv",
    world: "moon",
    name: "Lunar Roving Vehicles",
    mission: "APOLLO 15, 16 & 17",
    year: "1971–72",
    type: "Electric rover",
    location: "Hadley–Apennine, Descartes & Taurus–Littrow",
    status: "Three rovers parked at their Apollo landing sites",
    lede: "Three foldable electric cars let astronauts range farther across the Moon.",
    story: "Apollo 15 was the first mission to take a Lunar Roving Vehicle to the Moon. Astronauts drove the battery-powered buggies over rugged ground, carrying tools and samples. Apollo 16 and 17 used rovers too; all three were left on the surface.",
    discovery: "The rovers expanded the ground astronauts could cover and the lunar samples they could collect.",
    source: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C",
    shape: "rover"
  },
  {
    id: "alsep",
    world: "moon",
    name: "Apollo surface experiments",
    mission: "APOLLO 12–17",
    year: "1969–72",
    type: "Science instruments",
    location: "Apollo landing sites",
    status: "NASA switched off the ALSEP network in 1977",
    lede: "Astronauts left instruments behind to keep listening after they flew home.",
    story: "ALSEP—the Apollo Lunar Surface Experiments Package—was deployed by Apollo 12, 14, 15, 16 and 17. Its instruments studied moonquakes, the lunar environment and the solar wind. NASA ended the network's operations on September 30, 1977. The laser retroreflectors placed by Apollo crews are separate experiments and have continued to help measure the Earth–Moon distance.",
    discovery: "Seismic measurements revealed that the Moon has moonquakes and helped scientists investigate its internal structure.",
    source: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C",
    shape: "instrument"
  },
  {
    id: "surveyor-3",
    world: "moon",
    name: "Surveyor 3",
    mission: "SURVEYOR",
    year: "1967",
    type: "Robotic lander",
    location: "Oceanus Procellarum",
    status: "Lander remains on the lunar surface",
    lede: "A robotic scout landed softly—and later received a visit from Apollo astronauts.",
    story: "Surveyor 3 landed on the Moon in April 1967 to photograph the surface and study its soil. Two years later, Apollo 12 astronauts Pete Conrad and Alan Bean landed nearby, visited the spacecraft and brought some of its parts back to Earth for examination.",
    discovery: "Surveyor's landing and soil tests helped engineers prepare for the Apollo crewed landings.",
    source: "https://science.nasa.gov/mission/surveyor-3/",
    shape: "lander"
  },
  {
    id: "pathfinder",
    world: "mars",
    name: "Mars Pathfinder",
    mission: "MARS PATHFINDER",
    year: "1997",
    type: "Lander",
    location: "Ares Vallis",
    status: "Lander remains on Mars; contact ended in 1997",
    lede: "A lander cushioned by airbags opened a new chapter in exploring Mars.",
    story: "Pathfinder used a parachute and giant airbags to reach the Martian surface. Its lander sent home images and weather data while the Sojourner rover explored nearby rocks. The low-cost mission tested technologies that influenced later Mars landers.",
    discovery: "Images and rock observations gave scientists evidence of a past Martian environment shaped by floods.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/",
    shape: "lander"
  },
  {
    id: "sojourner",
    world: "mars",
    name: "Sojourner",
    mission: "MARS PATHFINDER",
    year: "1997",
    type: "Mars rover",
    location: "Ares Vallis",
    status: "Rover remains beside Pathfinder on Mars",
    lede: "A rover about the size of a microwave became the first to explore another planet.",
    story: "Sojourner drove among rocks near the Pathfinder lander, taking pictures and using an instrument to study their composition. Designed for a seven-sol primary mission, it operated for 83 sols. It communicated with Earth through Pathfinder, its home base.",
    discovery: "Sojourner's close-up rock analyses showed how different Martian rocks could be from one another.",
    source: "https://science.nasa.gov/mission/mars-pathfinder/",
    shape: "rover"
  },
  {
    id: "spirit",
    world: "mars",
    name: "Spirit",
    mission: "MARS EXPLORATION ROVER",
    year: "2004–10",
    type: "Mars rover",
    location: "Gusev Crater",
    status: "Stopped moving in 2010; final contact was in 2011",
    lede: "Built for 90 sols, Spirit explored Mars for more than six years.",
    story: "Spirit landed in Gusev Crater in January 2004. It found evidence that water had altered Martian rocks, climbed a hill, and kept working long after its planned mission. After becoming stuck in soft soil, it could no longer tilt its solar panels toward the Sun; NASA's final communication attempt came in 2011.",
    discovery: "Rocks examined by Spirit showed signs of past water and hydrothermal activity.",
    source: "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/",
    shape: "rover"
  },
  {
    id: "opportunity",
    world: "mars",
    name: "Opportunity",
    mission: "MARS EXPLORATION ROVER",
    year: "2004–18",
    type: "Mars rover",
    location: "Meridiani Planum",
    status: "Mission ended in 2019 after a planet-wide dust storm",
    lede: "A rover built for a short visit became one of Mars's great long-distance travelers.",
    story: "Opportunity landed in 2004 for a planned 90-sol mission and kept exploring for nearly 15 years, traveling more than 28 miles (45 kilometers). A planet-wide dust storm in 2018 blocked the sunlight its solar panels needed. NASA ended the mission after attempts to regain contact failed.",
    discovery: "Rocks and soil studied by Opportunity showed that liquid water once existed at its landing site.",
    source: "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/",
    shape: "rover"
  },
  {
    id: "viking-1",
    world: "mars",
    name: "Viking 1",
    mission: "VIKING",
    year: "1976–82",
    type: "Lander",
    location: "Chryse Planitia",
    status: "Lander remains at its landing site on Mars",
    lede: "The first U.S. spacecraft to operate successfully on Mars sent back a view from the ground.",
    story: "Viking 1 landed in July 1976. Its lander photographed the surface, monitored local weather and ran experiments on Martian soil. The mission's biology experiments produced intriguing results, but no conclusive evidence of life.",
    discovery: "Viking returned the first images from the surface of Mars and made the first direct measurements of its atmosphere at the landing site.",
    source: "https://science.nasa.gov/mission/viking-1/",
    shape: "lander"
  },
  {
    id: "viking-2",
    world: "mars",
    name: "Viking 2",
    mission: "VIKING",
    year: "1976–80",
    type: "Lander",
    location: "Utopia Planitia",
    status: "Lander remains at its landing site on Mars",
    lede: "Viking 2 brought a second robotic laboratory to a different Martian plain.",
    story: "Viking 2 landed in September 1976, several weeks after Viking 1. Its lander took surface images, tracked weather and carried out soil experiments. Its biology tests did not provide conclusive evidence of life.",
    discovery: "Two landing sites gave scientists a much broader first look at Martian weather, soil and geology.",
    source: "https://science.nasa.gov/mission/viking-1/",
    shape: "lander"
  },
  {
    id: "phoenix",
    world: "mars",
    name: "Phoenix",
    mission: "PHOENIX",
    year: "2008",
    type: "Lander",
    location: "Vastitas Borealis",
    status: "Mission ended after the Martian northern winter",
    lede: "A robotic arm dug into the Martian Arctic and uncovered water ice.",
    story: "Phoenix landed in the Martian north polar region in May 2008. Its robotic arm dug trenches and delivered soil and ice samples to onboard instruments. As winter arrived, falling temperatures and reduced sunlight ended the lander's work.",
    discovery: "Phoenix confirmed water ice just below the Martian surface at its landing site.",
    source: "https://science.nasa.gov/mission/phoenix/",
    shape: "lander"
  },
  {
    id: "insight",
    world: "mars",
    name: "InSight",
    mission: "INSIGHT",
    year: "2018–22",
    type: "Geophysical lander",
    location: "Elysium Planitia",
    status: "Mission ended when dust-covered solar panels could no longer provide power",
    lede: "A stationary lander listened for marsquakes to reveal the planet's hidden interior.",
    story: "InSight deployed a seismometer on Mars and recorded more than 1,300 marsquakes. Dust gradually accumulated on its solar panels, reducing its power. NASA declared the mission over in December 2022 after the lander stopped communicating.",
    discovery: "Seismic waves let scientists investigate the size and structure of Mars's core, mantle and crust.",
    source: "https://science.nasa.gov/mission/insight/",
    shape: "instrument"
  },
  {
    id: "ingenuity",
    world: "mars",
    name: "Ingenuity",
    mission: "MARS 2020",
    year: "2021–24",
    type: "Mars helicopter",
    location: "Jezero Crater",
    status: "Flight mission ended after rotor damage; helicopter remains on Mars",
    lede: "A tiny helicopter proved powered, controlled flight was possible on another planet.",
    story: "Ingenuity rode to Mars beneath the Perseverance rover and made the first powered, controlled flights on another world. Planned as a five-flight technology demonstration, it completed 72 flights. A damaged rotor blade ended its flight mission in January 2024.",
    discovery: "Its aerial scouting demonstrated a new way to explore terrain that is hard for rovers to reach.",
    source: "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/",
    shape: "helicopter"
  },
  {
    id: "dawn",
    world: "elsewhere",
    name: "Dawn",
    mission: "DAWN",
    year: "2007–18",
    type: "Asteroid-belt orbiter",
    location: "Orbit around dwarf planet Ceres",
    status: "Unpowered; remains in orbit around Ceres",
    lede: "One spacecraft orbited two worlds—and still circles the last one it visited.",
    story: "Propelled by ion engines, Dawn became the first spacecraft to orbit two extraterrestrial destinations: the asteroid Vesta and dwarf planet Ceres. The mission ended in 2018 after it ran out of hydrazine fuel needed to point its antennas and solar panels.",
    discovery: "Dawn found evidence of a wet, geologically active past on both Vesta and Ceres.",
    source: "https://science.nasa.gov/mission/dawn/",
    shape: "orbiter"
  },
  {
    id: "near",
    world: "elsewhere",
    name: "NEAR Shoemaker",
    mission: "NEAR",
    year: "1996–2001",
    type: "Asteroid orbiter and lander",
    location: "Surface of asteroid 433 Eros",
    status: "Spacecraft came to rest on Eros in 2001",
    lede: "Designed to orbit an asteroid, NEAR Shoemaker surprised everyone by landing.",
    story: "After orbiting near-Earth asteroid Eros for a year, the spacecraft made a slow, controlled descent and touched down in February 2001. Although it was not designed to land, it survived impact and sent back data from the surface.",
    discovery: "Its close-up mapping revealed Eros's shape, geology and composition in unprecedented detail.",
    source: "https://science.nasa.gov/mission/near-shoemaker/",
    shape: "probe"
  },
  {
    id: "pioneer-10",
    world: "elsewhere",
    name: "Pioneer 10",
    mission: "PIONEER",
    year: "1972–2003",
    type: "Deep-space probe",
    location: "Outbound from the solar system",
    status: "No longer in contact; coasting through space",
    lede: "The first spacecraft to fly through the asteroid belt and past Jupiter is still traveling.",
    story: "Launched in 1972, Pioneer 10 crossed the asteroid belt and flew by Jupiter, sending home the first close-up images of the giant planet. Its last signal reached Earth in 2003. The spacecraft continues on an outbound path, carrying a plaque describing its makers.",
    discovery: "The Jupiter encounter revealed details about the planet's atmosphere, magnetic field and radiation belts.",
    source: "https://science.nasa.gov/mission/pioneer-10/",
    shape: "probe"
  },
  {
    id: "pioneer-11",
    world: "elsewhere",
    name: "Pioneer 11",
    mission: "PIONEER",
    year: "1973–95",
    type: "Deep-space probe",
    location: "Outbound from the solar system",
    status: "No longer in contact; coasting through space",
    lede: "After Jupiter, Pioneer 11 went on to make the first close flyby of Saturn.",
    story: "Pioneer 11 used Jupiter's gravity to head toward Saturn, flying past the ringed planet in 1979. The mission returned pioneering measurements and images before its signal faded; NASA last received contact in 1995.",
    discovery: "Pioneer 11 found a new ring around Saturn and measured the planet's magnetic field.",
    source: "https://science.nasa.gov/mission/pioneer-11/",
    shape: "probe"
  },
  {
    id: "kepler",
    world: "elsewhere",
    name: "Kepler Space Telescope",
    mission: "KEPLER",
    year: "2009–18",
    type: "Space telescope",
    location: "Earth-trailing orbit around the Sun",
    status: "Retired after its fuel ran out; continues orbiting the Sun",
    lede: "A telescope that watched one patch of sky revealed that planets are everywhere.",
    story: "Kepler searched for tiny dips in starlight caused by planets passing in front of their stars. It discovered thousands of confirmed exoplanets and showed that planets are common in our galaxy. The mission ended in 2018 when the spacecraft ran out of fuel.",
    discovery: "Kepler's observations showed that the Milky Way contains more planets than stars.",
    source: "https://science.nasa.gov/mission/kepler/",
    shape: "telescope"
  }
];

const timeline = [
  { year: "1967", title: "A soft landing", copy: "Surveyor 3 tests the lunar soil; Apollo 12 astronauts visit it two years later." },
  { year: "1969", title: "Footsteps & instruments", copy: "Apollo crews land, leave experiments, and begin a new chapter of lunar science." },
  { year: "1971", title: "Moon buggies roll", copy: "Apollo 15 astronauts drive the first Lunar Roving Vehicle across the Moon." },
  { year: "1976", title: "A new view of Mars", copy: "Viking landers send back the first images from the Martian surface." },
  { year: "1997", title: "A rover on Mars", copy: "Pathfinder and Sojourner demonstrate a new way to explore the Red Planet." },
  { year: "2004", title: "Built to outlast", copy: "Spirit and Opportunity begin journeys that last years longer than planned." },
  { year: "2018", title: "Listening to Mars", copy: "InSight arrives to study marsquakes and the planet's deep interior." },
  { year: "2024", title: "A first flight ends", copy: "Ingenuity's 72-flight mission closes after rotor damage." }
];

const feature = document.querySelector("#artifact-feature");
const grid = document.querySelector("#artifact-grid");
const worldButtons = [...document.querySelectorAll(".world-button")];
const searchInput = document.querySelector("#artifact-search");
const emptyState = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");
let activeWorld = "moon";
let searchQuery = "";
let selectedId = artifacts.find((item) => item.world === activeWorld).id;

function machineIllustration(shape, itemName) {
  if (shape === "rover") {
    return `<svg class="featured-machine" viewBox="0 0 240 180" role="img" aria-label="Illustration of ${itemName}">
      <g fill="none" stroke="#58616a" stroke-width="5"><path d="M56 133 81 101m102 32-26-32M81 101h76"/><path d="M72 137h-16m128 0h-16"/></g>
      <g fill="#202a34" stroke="#c8c3a9" stroke-width="3"><circle cx="56" cy="139" r="13"/><circle cx="184" cy="139" r="13"/><circle cx="81" cy="108" r="11"/><circle cx="159" cy="108" r="11"/></g>
      <path d="M67 83h104l-12 30H77z" fill="#c8c3a9" stroke="#eee3c5" stroke-width="2"/><path d="m88 83 7-30h53l13 30z" fill="#75808a" stroke="#c8c3a9" stroke-width="2"/>
      <path d="M109 51V27h31v25M108 28h33" fill="none" stroke="#c8c3a9" stroke-width="4"/><circle cx="124" cy="39" r="6" fill="#58616a"/>
      <path d="m89 61-16-16m79 14 17-17M68 97H43m129 0h25" fill="none" stroke="#c8c3a9" stroke-width="3"/>
      <circle cx="45" cy="44" r="5" fill="#c8c3a9"/><circle cx="171" cy="40" r="5" fill="#c8c3a9"/>
    </svg>`;
  }
  if (shape === "instrument") {
    return `<svg class="featured-machine" viewBox="0 0 220 190" role="img" aria-label="Illustration of ${itemName}">
      <path d="M34 157h152M49 148l12-38h98l13 38" fill="none" stroke="#c8c3a9" stroke-width="4"/>
      <path d="M78 110V75h65v35M92 75V48h39v27" fill="#58616a" stroke="#c8c3a9" stroke-width="3"/>
      <path d="M48 88 24 72l9-15 28 17m105 14 25-16-9-15-28 17" fill="#c8c3a9" stroke="#e9ddbd" stroke-width="2"/>
      <path d="M109 49V26m-10 0h20M109 111v39" stroke="#c8c3a9" stroke-width="3"/><circle cx="109" cy="26" r="7" fill="#c8c3a9"/>
      <circle cx="61" cy="154" r="5" fill="#c8c3a9"/><circle cx="159" cy="154" r="5" fill="#c8c3a9"/>
    </svg>`;
  }
  if (shape === "telescope") {
    return `<svg class="featured-machine" viewBox="0 0 220 190" role="img" aria-label="Illustration of ${itemName}">
      <path d="m67 72 76-25 16 48-76 25z" fill="#75808a" stroke="#c8c3a9" stroke-width="4"/><path d="m143 47 20-7 16 48-20 7z" fill="#58616a" stroke="#c8c3a9" stroke-width="3"/>
      <path d="m91 113-7 37m55-55 22 37m-55-39 3-43" fill="none" stroke="#c8c3a9" stroke-width="4"/>
      <path d="M39 54 21 41m165 10 15-12M51 128l-20 13m136-94 4-21" fill="none" stroke="#d7f56a" stroke-width="3"/>
      <circle cx="63" cy="69" r="9" fill="#d7f56a" opacity=".8"/>
    </svg>`;
  }
  return `<svg class="featured-machine" viewBox="0 0 220 200" role="img" aria-label="Illustration of ${itemName}">
    <path d="M53 151 75 110m92 41-22-41M53 151H35m132 0h18" fill="none" stroke="#c8c3a9" stroke-width="5"/>
    <path d="M71 111 83 61h54l13 50z" fill="#c8c3a9" stroke="#eee3c5" stroke-width="2"/>
    <path d="M93 61V43h34v18M98 43V31h24v12" fill="#58616a" stroke="#c8c3a9" stroke-width="2"/>
    <path d="M82 79 49 69m89 10 33-10M92 111v18m32-18v18" stroke="#c8c3a9" stroke-width="3"/>
    <path d="M49 69 37 78m134-9 12 9" stroke="#c8c3a9" stroke-width="3"/>
    <circle cx="109" cy="84" r="8" fill="#58616a"/><path d="M102 97h15" stroke="#58616a" stroke-width="3"/>
  </svg>`;
}

function getVisibleArtifacts() {
  const query = searchQuery.trim().toLocaleLowerCase();
  return artifacts.filter((item) => {
    const matchesWorld = item.world === activeWorld;
    const searchableText = [item.name, item.mission, item.year, item.type, item.location, item.status, item.lede, item.story, item.discovery].join(" ").toLocaleLowerCase();
    return matchesWorld && (!query || searchableText.includes(query));
  });
}

function renderFeature(item) {
  feature.innerHTML = `
    <div class="feature-visual ${item.world === "mars" ? "world-mars" : item.world === "elsewhere" ? "world-elsewhere" : ""}">
      <div class="terrain"></div>
      ${machineIllustration(item.shape, item.name)}
      <span class="feature-visual-label">${item.location.toUpperCase()} &nbsp; / &nbsp; ${item.year}</span>
    </div>
    <div class="feature-copy">
      <div class="feature-meta"><span>${item.mission}</span><span class="meta-dot">•</span><span>${item.type}</span></div>
      <h3>${item.name}</h3>
      <p class="feature-lede">${item.lede}</p>
      <p class="feature-body">${item.story}</p>
      <p class="feature-discovery"><b>WHAT IT TAUGHT US</b><span>${item.discovery}</span></p>
      <div class="mission-status"><span>MISSION STATUS</span><p>${item.status}</p></div>
      <a class="source-link" href="${item.source}" target="_blank" rel="noopener noreferrer">Open NASA mission source <span aria-hidden="true">↗</span></a>
    </div>`;
}

function renderCards(visibleArtifacts) {
  grid.innerHTML = visibleArtifacts.map((item) => `
    <button class="artifact-card${item.id === selectedId ? " is-selected" : ""}" type="button" data-artifact="${item.id}" aria-pressed="${item.id === selectedId}" aria-label="Read the story of ${item.name}">
      <div class="card-art ${item.world === "mars" ? "world-mars" : item.world === "elsewhere" ? "world-elsewhere" : ""}">
        <div class="terrain"></div>
        ${machineIllustration(item.shape, item.name).replace("featured-machine", "card-machine")}
      </div>
      <div class="card-info">
        <div class="card-info-top"><span>${item.mission}</span><span>${item.year}</span></div>
        <h3>${item.name}</h3>
        <p>${item.type} · ${item.location}</p>
        <span class="card-status">${item.status}</span>
      </div>
    </button>`).join("");

  grid.querySelectorAll("[data-artifact]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.artifact;
      render();
      feature.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function renderTimeline() {
  document.querySelector("#timeline-track").innerHTML = timeline.map((item) => `
    <article class="timeline-item">
      <span class="timeline-year">${item.year}</span>
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
    </article>`).join("");
}

function render() {
  const visibleArtifacts = getVisibleArtifacts();
  if (!visibleArtifacts.some((item) => item.id === selectedId)) {
    selectedId = visibleArtifacts[0]?.id ?? null;
  }

  const selected = artifacts.find((item) => item.id === selectedId);
  feature.hidden = !selected;
  if (selected) renderFeature(selected);
  renderCards(visibleArtifacts);
  emptyState.hidden = visibleArtifacts.length > 0;
  resultsCount.textContent = `${visibleArtifacts.length} ${visibleArtifacts.length === 1 ? "MISSION FILE" : "MISSION FILES"}`;

  worldButtons.forEach((button) => {
    const active = button.dataset.world === activeWorld;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

worldButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeWorld = button.dataset.world;
    render();
  });
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchQuery = "";
    render();
  }
});

for (const world of ["moon", "mars", "elsewhere"]) {
  document.querySelector(`#${world}-count`).textContent = String(artifacts.filter((item) => item.world === world).length).padStart(2, "0");
}
renderTimeline();
render();
