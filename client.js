import { config as dotConfig } from "dotenv";
dotConfig();

import supa from "@supabase/supabase-js";
import { Configuration, OpenAIApi } from 'openai';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// OpenAI
const config = new Configuration({ apiKey: process.env.OPENAI_KEY });
const openAI = new OpenAIApi(config);

// Supabase
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
// No need to save session. We'll use JWTs instead. \\ Or Client will use own auth system.
const supabase = supa.createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });




export { openAI, supabase, stripe };