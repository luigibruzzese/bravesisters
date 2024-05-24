import {usePersonDb} from "~/composables/db.js";

const db = usePersonDb()
export default defineEventHandler(async (e)=>{
    return await db.findAll()
})