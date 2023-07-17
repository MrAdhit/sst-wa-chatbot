import { ActionVariables } from "../action";
import { Context, UserContext } from "../context";
import { ToolOptions } from "./constant";

export default async function (sender: ActionVariables) {
    await sender.user.interactive.sendButtons(`Hello ${sender.contact.profile.name} 😊\nWhat can I help you with? 🤔`, ToolOptions);

    return { context: Context.TOOL_SELECT };
}
