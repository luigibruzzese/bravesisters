import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();

const supabaseUrl = config.public.supabaseUrl;
const supabaseKey = config.public.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (e) => {
    const { data } = await supabase.from('person').select();
    return data;
});
