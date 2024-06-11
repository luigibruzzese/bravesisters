import {createClient} from "@supabase/supabase-js"; // Importa il componente
const config = useRuntimeConfig()

const supabaseUrl = config.supabaseUrl
const supabaseKey = config.supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey)
export default defineEventHandler(async (e)=>{
    const { data } = await supabase.from('person').select()
    return data;
})
