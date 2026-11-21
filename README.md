# body-anatomy-data

SVG muscle and joint-position data for a male and female body, front and back. No code, no
build step — just two JSON files and a schema.

Started from [MuscleMap](https://github.com/Jsplice)'s MIT-licensed body drawings and redrawn
where the female back was missing detail the male body had. See `CREDITS.md` for exactly
what came from where.

## Files

- **`bodies.json`** — for each of `male_front`, `male_back`, `female_front`, `female_back`:
  an overall body outline path and a list of muscle shapes drawn on top of it.
- **`joints.json`** — for the same four views, the pixel position of each joint (shoulder,
  elbow, hip, knee, …), for drawing joint-action diagrams.
- **`types.ts`** — the TypeScript shape of both files.

Both files use the same 704×1520 coordinate space (viewBox `160 20 704 1520`, i.e. a y-up SVG
canvas), so a point from `joints.json` lines up directly with `bodies.json`'s paths.

## Data format

```ts
type Shape = [muscleId: string, partId: string | null, path: string, alsoStandsFor?: string];
interface BodyView { o: string; m: Shape[] }
type Bodies = Record<'male_front' | 'male_back' | 'female_front' | 'female_back', BodyView>;
```

Every `path` (including the outline `o`) uses only the SVG path commands `M`, `L`, `C`, `Z`,
absolute coordinates, so it can be dropped straight into an `<path d="...">`.

## Use

```bash
npm install github:akshaygpt/body-anatomy-data
```

```ts
import bodies from 'body-anatomy-data/bodies.json';
import joints from 'body-anatomy-data/joints.json';
import type { Bodies, Joints } from 'body-anatomy-data/types';

const { o, m } = (bodies as Bodies).male_front;

// <svg viewBox="160 20 704 1520">
//   <path d={o} fill="#23262D" />
//   {m.map(([id, part, path]) => <path key={id + (part ?? '')} d={path} fill="currentColor" />)}
// </svg>
```

## License

MIT — see `LICENSE`. `CREDITS.md` has the full provenance.
