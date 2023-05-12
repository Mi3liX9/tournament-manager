import {createClient} from "@supabase/supabase-js"

const supabaseUrl = 'https://crvacidlvszrkzfxyfwz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNydmFjaWRsdnN6cmt6Znh5Znd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3Mjk2NjAsImV4cCI6MTk5OTMwNTY2MH0.GuJm6JsRSjbnUoPi08N0QCMGHkYoC2p-9TzJgeWJsxg"


export const supabase = createClient(supabaseUrl, supabaseKey)
