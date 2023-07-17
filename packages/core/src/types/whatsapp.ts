export type WebhookMessageType = "text" | "interactive";

export interface WebhookContact {
    profile: WebhookProfile;
    wa_id: string;
}

export interface WebhookProfile {
    name: string;
}

export type WebhookMessage =
    | {
          from: string;
          id: string;
          type: "text";
          text: WebhookText;
      }
    | {
          from: string;
          id: string;
          type: "interactive";
          interactive: WebhookInteractive;
      };

export interface WebhookText {
    body: string;
}

export type WebhookInteractiveType = "button_reply" | "list_reply";

export type WebhookInteractive =
    | {
          type: "button_reply";
          button_reply: WebhookButtonReply;
      }
    | {
          type: "list_reply";
          list_reply: WebhookListReply;
      };

export interface WebhookButtonReply {
    id: string;
    title: string;
}

export interface WebhookListReply {
    id: string;
    title: string;
    description: string;
}

export type MessageInteractiveType = "button" | "list";

export type MessageInteractive =
    | {
          type: "button";
          body: MessageBody;
          action: MessageAction<"button">;
      }
    | {
          type: "list";
          header?: MessageHeader;
          body: MessageBody;
          footer?: MessageFooter;
          action: MessageAction<"list">;
      };

export type MessageHeader = {
    type: "text";
    text: string;
};

export interface MessageBody {
    text: string;
}

export interface MessageFooter {
    text: string;
}

export type MessageAction<T extends MessageInteractiveType> = T extends "button"
    ? {
          buttons: MessageButton[];
      }
    : T extends "list"
    ? {
          button: string;
          sections: MessageSection[];
      }
    : never;

export interface MessageSection {
    title?: string;
    rows: MessageSectionRows[];
}

export interface MessageSectionRows {
    id: string;
    title: string;
    description?: string;
}

export interface MessageButton {
    type: "reply";
    reply: MessageReply;
}

export interface MessageReply {
    id: string;
    title: string;
}
