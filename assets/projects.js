// Your projects. Edit this file to update your portfolio — no markup changes needed.
// Each project:
//   title       — name of the project
//   description — short blurb shown on the card AND at the top of the modal
//   skills      — what you learned (shown in the modal's "Skills I learned" block)
//   cover       — cover image path, e.g. "./assets/projects/robot-cover.jpg" ("" = placeholder)
//   images      — a couple of image paths for the modal gallery ([] = placeholders)
//
// These 5 are PLACEHOLDERS so the site renders right away. Swap in your real
// content and drop your images into assets/projects/.
const PROJECTS = [
  {
    title: "Airlift",
    description: "A twin-fan hovercraft that ferries a payload across cracked, hole-pocked ground without ever touching it — imagined for disaster scenarios like moving people over earthquake-damaged terrain. One fan drives the craft forward while a second inflates a perforated air skirt, floating it on a self-generated cushion of air.",
    skills: "Building this taught me to design in tradeoffs — every gram of payload, battery, and 3D-printed support had to be paid back in lift. I learned the fluid dynamics behind an air cushion (the same principle as an air hockey table, flipped onto the craft itself), and how to tune the skirt's perforations so enough air stayed trapped to float the load even over a surface riddled with holes. Splitting the work across two fans, one for lift and one for thrust, pushed me to balance competing forces inside a single, weight-constrained system.",
    cover: "",
    images: [],
  },
  {
    title: "Compact Heat Exchanger Redesign",
    description: "Reworked a tube-and-shell heat exchanger to cut volume ~30% while holding the same thermal duty.",
    skills: "Heat-transfer and pressure-drop analysis, parametric CAD in SolidWorks, and trading off performance against manufacturability.",
    cover: "",
    images: [],
  },
  {
    title: "CNC-Machined Bike Component",
    description: "Designed and machined an aluminum stem, from CAD model to a finished, anodized part.",
    skills: "GD&T and tolerancing, CAM toolpaths, running a 3-axis mill, and designing parts around how they'd actually be cut.",
    cover: "",
    images: [],
  },
  {
    title: "FSAE Suspension Analysis",
    description: "Modeled front suspension kinematics for the team to dial in camber and roll-center behavior.",
    skills: "Vehicle dynamics fundamentals, MATLAB modeling, and translating analysis into changes the team could actually fabricate.",
    cover: "",
    images: [],
  },
  {
    title: "Passive Solar Water Heater",
    description: "Built and instrumented a benchtop solar collector to measure efficiency across the day.",
    skills: "Thermodynamics in practice, sensor instrumentation and data logging, and writing up experimental results clearly.",
    cover: "",
    images: [],
  },
];
