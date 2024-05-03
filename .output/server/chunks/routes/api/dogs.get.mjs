import { d as defineEventHandler } from '../../runtime.mjs';
import { u as useDogsDb } from '../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'sequelize';

const db = useDogsDb();
const dogs_get = defineEventHandler(async (e) => {
  return await db.findAll();
});

export { dogs_get as default };
//# sourceMappingURL=dogs.get.mjs.map
