import {createClient} from "@supabase/supabase-js"; // Importa il componente
const config = useRuntimeConfig()

const supabaseUrl = config.supabaseUrl
const supabaseKey = config.supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineEventHandler(async (e)=>{
    try {
        const body = await readBody(e)
        const review = JSON.parse(body)
        return await supabase.from('review').insert(review)
    }catch (e) {
        setResponseStatus(e,500)
    }
})