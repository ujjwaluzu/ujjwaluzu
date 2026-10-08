"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type WebMcpResult = { content: Array<{ type: "text"; text: string }> };
type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (_input: Record<string, unknown>, options?: { signal?: AbortSignal }) => Promise<WebMcpResult>;
};
type WebMcpContext = {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => Promise<unknown>;
};

declare global {
  interface Document {
    modelContext?: WebMcpContext;
  }
  interface Navigator {
    modelContext?: WebMcpContext;
  }
}

export function WebMcpTools() {
  const router = useRouter();

  useEffect(() => {
    const abortController = new AbortController();
    const tool: WebMcpTool = {
      name: "open_contact_form",
      description: "Open the portfolio contact form so the visitor can write, review, and submit a message to Ujjwal.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      execute: async (_input, { signal } = {}) => {
        if (signal?.aborted) {
          return { content: [{ type: "text", text: "Opening the contact form was cancelled." }] };
        }

        router.push("/contact");
        return { content: [{ type: "text", text: "Opening the contact form. The visitor can review and submit their message there." }] };
      },
    };

    const registerTool = document.modelContext?.registerTool.bind(document.modelContext)
      ?? navigator.modelContext?.registerTool.bind(navigator.modelContext);

    if (!registerTool) return () => abortController.abort();

    void registerTool(tool, { signal: abortController.signal }).catch((error: unknown) => {
      if (!abortController.signal.aborted) {
        console.error("[webmcp] Could not register open_contact_form", error);
      }
    });

    return () => abortController.abort();
  }, [router]);

  return null;
}
