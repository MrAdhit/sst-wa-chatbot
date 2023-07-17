import { Config } from "sst/node/config";
import WhatsappAPI from "./lib/whatsapp";

export const Whatsapp = new WhatsappAPI(Config.WHATSAPP_ACCESS_TOKEN, Config.WHATSAPP_PHONE_ID);
