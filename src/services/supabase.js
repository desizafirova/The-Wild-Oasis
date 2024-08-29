import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://fkmabdznybtnqrkjzxwl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrbWFiZHpueWJ0bnFya2p6eHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NDIzNTgsImV4cCI6MjA0MDQxODM1OH0.cinKpz6VTvlbyiwEA10bvVqb-miLv7H3gtnL2___yv0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
