/** One drawn shape: [muscle id, part id or null, svg path, muscle it also stands for] */
export type Shape = [string, string | null, string, string?];

/** `o` is the body outline path; `m` is every muscle shape drawn on top of it. */
export interface BodyView { o: string; m: Shape[] }

export type Sex = 'male' | 'female';
export type Side = 'front' | 'back';

/** Key into bodies.json / joints.json, e.g. "male_front". */
export type BodyKey = `${Sex}_${Side}`;

export type Bodies = Record<BodyKey, BodyView>;

/** joints.json: per body view, each joint's dot position(s) in the same coordinate space as bodies.json. */
export type Joints = Record<BodyKey, Record<string, [number, number][]>>;
