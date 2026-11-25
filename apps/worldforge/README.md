# WorldForge 5 — Interactive Level Design Studio

Open index.html in a modern desktop browser. No installation, API key or external libraries. For GitHub Pages, publish index.html at the site root.

## Workflow
Paint terrain or place assets, then place two spawns on walkable tiles. Use 2D, Isometric or 3D Orbit. Rotate, tilt and zoom using the camera toolbar. Find a route or simulate travel. Select a tactical overlay: visibility (mint A, coral B, purple both), travel-time control (mint A, coral B, yellow ties), or cover proximity (gold). Generate maps by choosing a preset and integer seed. Export JSON/PNG; Save stores the map in the current browser when storage is available. Open JSON imports v1/v5 maps. Undo/redo tracks map cells, not the project title.

## Implementation
- Canvas perspective projection of 3D geometry, painter-sorted faces (not a GPU engine; overlap artifacts possible).
- Four-neighbor A* navigation and breadth-first distance fields.
- Sampled tile-height line of sight at 1.15 units above terrain. Cover is adjacency to a raised obstacle, not a ballistic simulation.
- Balance score weights territory difference 45%, visibility difference 35%, and center travel-distance difference 20%. Disconnected maps score zero. Symmetry can yield 100; this is not a validated competitive rating.
- Seeded procedural generation creates 24 rotationally symmetric candidates and ranks connectivity, balance, walkable ratio, shared reach and direct spawn exposure. This is heuristic search, not a trained AI or LLM.

## Verification
JavaScript syntax checked; headless Chromium content-injection smoke test passed for generation, route, 3D rotation, overlay, undo/redo with no page errors. Direct file navigation was blocked by the test environment policy; Windows and import/export persistence were not independently tested.
