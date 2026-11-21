# Provenance

## bodies.json

Base source: **MuscleMap** (Jsplice), MIT License (see `LICENSE`).

MuscleMap provided a full set of male body drawings (front and back) and a female body
drawing that was noticeably less detailed than the male one — about 40% fewer path points on
the back view, concentrated in the glutes, rotator cuff, traps, lats, obliques, triceps and
forearms. We left the male body and the female front untouched, and redrawn the under-detailed
parts of the female back to match the male body's level of detail, muscle for muscle.

By path points, which is a better proxy for drawn detail than shape count:

| View | Shapes | Points | Redrawn by us |
|---|---|---|---|
| male_front | 60 | 3,038 | 0% |
| male_back | 66 | 4,705 | 0% |
| female_front | 62 | 3,350 | 0% |
| female_back | 66 | 4,699 | 71.9% of points (66.7% of shapes) |

The body outlines (the `o` field on each view — the overall silhouette) were never modified;
they are 100% original MuscleMap data on all four views.

What was redrawn on the female back, and how: glutes, lats, obliques, abductors, traps, and
rotator cuff were rebuilt by stretching the corresponding male shapes, row by row along the
limb, onto the female's own outline. Triceps and forearms (the last gap) didn't have that
option — the male and female source shapes don't split into the same number of sub-shapes per
muscle — so each was redrawn with a single affine fit per side: rotate the male shapes into the
old female shape's own principal axis, scale to match its bounding box exactly, rotate back.
An affine map carries a cubic Bezier curve to a cubic Bezier curve exactly, so this adds no
jaggedness; a handful of sample points (87 out of 5,504 checked) fall up to ~2 units outside
the body outline at a couple of limb joints, out of a body about 800 units tall, and aren't
visible at any normal zoom level.

Everything the female back gained is the male body's own shapes, repositioned to the female's
proportions — not copied from any other source.

## joints.json

Original work for this project (joint action diagrams), not derived from MuscleMap or any
other third-party source.

## No other sources

Nothing else in this package comes from any source besides MuscleMap (bodies.json, as above)
and this project's own authorship (joints.json, and the female-back redraw).
