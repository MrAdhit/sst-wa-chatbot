import { ActionVariables } from "../action";
import { Context, UserContext } from "../context";

export default async function (sender: ActionVariables) {
    sender.userMessage.reply("What");

    return { context: Context.INITIAL };
}
