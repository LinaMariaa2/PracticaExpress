import { createClient } from '@supabase/supabase-js';

// 🔹 Reemplaza con tu URL y clave anónima de Supabase
const SUPABASE_URL = 'https://qcspmafowexojqvqngnt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjc3BtYWZvd2V4b2pxdnFuZ250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2OTQ4MzIsImV4cCI6MjA1OTI3MDgzMn0.44s_8q_tcFIcnV-VWl1FMFhe-8loqCUI3mr6C_cj1E8';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;