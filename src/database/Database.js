import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xrqumdzqnjdqivtzgqvw.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
 export const supabase = createClient(supabaseUrl, supabaseAnonKey)