// Your projects. Edit this file to update your portfolio — no markup changes needed.
// Each project:
//   title       — name of the project
//   tag         — short technical label shown above the title on the card (optional)
//   blurb       — short one-liner shown on the card (falls back to description if omitted)
//   description — fuller text shown at the top of the modal when a card is opened
//   skills      — what you learned (shown in the modal's "Skills I learned" block)
//   cover       — cover image path, e.g. "./assets/projects/robot-cover.jpg" ("" = placeholder)
//   images      — modal gallery paths ([] = placeholders). A flat array is one row;
//                 nest arrays to lay images out in rows, e.g. [[a, b, c], [d, e]]
//
// These 5 are PLACEHOLDERS so the site renders right away. Swap in your real
// content and drop your images into assets/projects/.
const PROJECTS = [
  {
    title: "Airlift",
    tag: "Air-cushion hovercraft",
    blurb: "A twin-fan hovercraft that floats a payload over cracked, unstable ground.",
    description: "A twin-fan hovercraft that ferries a payload across cracked, hole-pocked ground without ever touching it — imagined for disaster scenarios like moving people over earthquake-damaged terrain. One fan drives the craft forward while a second inflates a perforated air skirt, floating it on a self-generated cushion of air.",
    skills: "Building this taught me to design in tradeoffs — every gram of payload, battery, and 3D-printed support had to be paid back in lift. I learned the fluid dynamics behind an air cushion (the same principle as an air hockey table, flipped onto the craft itself), and how to tune the skirt's perforations so enough air stayed trapped to float the load even over a surface riddled with holes. Splitting the work across two fans, one for lift and one for thrust, pushed me to balance competing forces inside a single, weight-constrained system. And because the run was timed, I tuned the direction of the thrust fan and the placement of the weight to carry the craft across as quickly as possible.",
    cover: "./assets/projects/airlift-1.jpg",
    images: [
      // top row: three build photos
      [
        "./assets/projects/airlift-2.jpg",
        "./assets/projects/airlift-3.jpg",
        "./assets/projects/airlift-6.jpg",
      ],
      // bottom row: dimensioned board + fan CAD
      ["./assets/projects/airlift-4.jpg", "./assets/projects/airlift-5.jpg"],
    ],
  },
  {
    title: "Folio",
    tag: "Recycled-cardboard case & stand",
    blurb: "A laptop case cut from two pieces of recycled cardboard that refolds into a stand.",
    description: "A laptop carrier made entirely from recycled cardboard (and nothing else) that refolds into a laptop stand. Inspired by Apple's pared-back packaging, it's built from two single-cut pieces, with only a few small corrugated inserts added to cushion the laptop against impact. The geometry had to do double duty: carrying and protecting the laptop as a case, then reconfiguring into a stable stand, all while keeping waste to a minimum.",
    skills: "Working within a hard constraint—two pieces of recycled cardboard, single cuts, nothing else—taught me how much elegance comes from subtraction. Keeping each piece to one continuous cut was the hardest part: every fold had to earn its place, holding and protecting the laptop's weight without extra structure. The only additions were small corrugated inserts to cushion against impact. I learned to think of structure as form, and to treat sustainability as a design driver rather than an afterthought.",
    cover: "./assets/projects/folio-1.jpg",
    images: [
      // top row: the modes — unfolded flat, as a stand, stand from the side
      [
        "./assets/projects/folio-3.jpg",
        "./assets/projects/folio-5.jpg",
        "./assets/projects/folio-6.jpg",
      ],
      // bottom row: the key / extra pocket piece, then the dieline
      ["./assets/projects/folio-2.jpg", "./assets/projects/folio-1.jpg"],
    ],
  },
  {
    title: "LifeArc",
    tag: "Disaster-relief launcher & deployables",
    blurb: "A launcher and two self-expanding payloads that deliver aid over walls of wildfire into a trapped town.",
    description: "A relief system for a town in California encircled by wildfire and cut off from food, water, and escape. An elastic-powered launcher fires payloads on a precise arc to thread the narrow gap between the walls of fire and drop into the town. Two payloads deploy on impact: an area device that opens like an umbrella to spread resources across the ground, and a volume device that scissors upward to form shelter for small animals.",
    skills: "This project pushed me to design for a human emergency, not just a spec. I learned to store and release energy reliably with a pair of elastic bands, and to tune a launch to a specific trajectory: an 8.5-foot apex landing 8 feet out, threaded through a narrow gap. The payloads taught me mechanism design from two angles: a radial, umbrella-style expansion for the area device, and a scissoring X-linkage for the volume device, biased open by rubber bands. Most of all, it reframed engineering as care—building things that reach people when nothing else can.",
    cover: "./assets/projects/lifearc-launcher-1.jpg",
    images: [
      // area device: deployed, stowed, CAD transform
      [
        "./assets/projects/lifearc-area-3.jpg",
        "./assets/projects/lifearc-area-2.jpg",
        "./assets/projects/lifearc-area-1.jpg",
      ],
      // volume device: deployed, collapsed, CAD transform
      [
        "./assets/projects/lifearc-vol-1.jpg",
        "./assets/projects/lifearc-vol-2.jpg",
        "./assets/projects/lifearc-vol-3.jpg",
      ],
    ],
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
