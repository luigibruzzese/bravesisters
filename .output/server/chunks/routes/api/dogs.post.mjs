import { d as defineEventHandler, r as readBody, s as setResponseStatus } from '../../runtime.mjs';
import { u as useDogsDb } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'sequelize';

const db = useDogsDb();
const dogs_post = defineEventHandler(async (e) => {
  try {
    const body = await readBody(e);
    const dog = JSON.parse(body);
    return await db.create(dog);
  } catch (e2) {
    setResponseStatus(e2, 500);
  }
});

export { dogs_post as default };
//# sourceMappingURL=dogs.post.mjs.map
