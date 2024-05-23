import {usePeopleDb} from "~/composables/db.js";

const db = usePeopleDb()
export default defineEventHandler(async (e)=>{
    try {
        const body = await readBody(e)
        const people = JSON.parse(body)
        return await db.create(people)
    }catch (e) {
        setResponseStatus(e,500)
    }
})