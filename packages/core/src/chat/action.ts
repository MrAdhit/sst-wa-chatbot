import { WebhookContact, WebhookMessage } from "../types/whatsapp";
import { Context } from "./context";

import { WhatsappMessage, WhatsappUser } from "../lib/whatsapp";

import INITIAL from "./actions/initial";
import QUESTION from "./actions/question";

export interface ActionVariables {
    contact: WebhookContact;
    message: WebhookMessage;
    user: WhatsappUser;
    userMessage: WhatsappMessage;
}

interface Action {
    context: Context;
    function: (sender: ActionVariables, context?: any) => Promise<{ context: Context; info?: any }>;
}

const Actions: Action[] = [
    {
        context: Context.INITIAL,
        function: INITIAL,
    },
    {
        context: Context.QUESTION,
        function: QUESTION,
    },
];

export default Actions;
