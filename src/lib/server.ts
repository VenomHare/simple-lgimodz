
import { createClient } from "@supabase/supabase-js";
import axios from "axios";


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const client_secret = process.env.PAYPAL_CLIENT_SECRET;
const client_id = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

if (!supabaseUrl || !supabaseKey) {

    console.log("adssadasd",supabaseKey, supabaseUrl);
    throw new Error("Creds not found")
}
export const supabase = createClient(supabaseUrl, supabaseKey);

const environment = process.env.ENVIRONMENT || "";

export const endpoint_uri =
    environment == "sandbox"
        ? "https://api-m.sandbox.paypal.com"
        : "https://api.paypal.com";



export const fetchAccessToken = async () => {
    const auth = `${client_id}:${client_secret}`;
    try {

        const response = await axios.post(`${endpoint_uri}/v1/oauth2/token`, {
            "grant_type": "client_credentials"
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${Buffer.from(auth).toString("base64")}`
            }
        })

        if (!response.data.access_token) {
            throw new Error("Token not found in response")
        }
        return response.data.access_token
    }
    catch (err) {
        console.warn("Failed to fetch Access Token");
        throw err
    }
}
