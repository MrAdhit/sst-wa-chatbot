import { ActionVariables } from "../action";
import { Context, UserContext } from "../context";
import { ToolOptions } from "./constant";

export default async function (sender: ActionVariables) {
    let content = (sender.message.type === "text" ? sender.message.text.body : sender.message.type === "interactive" ? (sender.message.interactive.type === "button_reply" ? sender.message.interactive.button_reply.id : sender.message.interactive.type === "list_reply" ? sender.message.interactive.list_reply.id : "") : "").trim();

    if (content === "") {
        sender.userMessage.reply(`Sorry, I didn't understand with what you are saying 😔`);
        return { context: Context.INITIAL };
    }

    

    return { context: Context.TOOL_SELECT };
}
