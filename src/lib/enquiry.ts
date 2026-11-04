import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const EnquirySchema = z.object({
  name: z.string().trim().min(2, "Please share your name.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(160),
  organisation: z.string().trim().max(120),
  subject: z.string().trim().min(2, "Add a short subject.").max(140),
  message: z.string().trim().min(10, "Please add a short message.").max(4000),
  companyWebsite: z.string().max(200),
});

export type EnquiryInput = z.infer<typeof EnquirySchema>;

export type EnquiryResult = { ok: true } | { ok: false; error: string };

const DELIVERY_ERROR =
  "This could not be delivered just now. Use Email or WhatsApp — the note will still reach me.";

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator((input: unknown) => EnquirySchema.parse(input))
  .handler(async ({ data }): Promise<EnquiryResult> => {
    if (data.companyWebsite.trim().length > 0) {
      return { ok: true };
    }

    const subject = data.subject.replace(/[\r\n]+/g, " ").slice(0, 140);

    try {
      const response = await fetch("https://formsubmit.co/ajax/susheel.jsr@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          organisation: data.organisation || "Not specified",
          message: data.message,
          _subject: `hrsk.in — ${subject}`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        }),
        signal: AbortSignal.timeout(15000),
      });

      const payload = (await response.json().catch(() => null)) as {
        success?: boolean | string;
        message?: string;
      } | null;

      const delivered = payload?.success === true || payload?.success === "true";
      if (!response.ok || !delivered) {
        const note = typeof payload?.message === "string" ? payload.message : "";
        if (/activat/i.test(note)) {
          return {
            ok: false,
            error:
              "First-time email delivery needs a one-time confirmation in the susheel.jsr@gmail.com inbox. Until that is done, please use Email or WhatsApp.",
          };
        }
        return { ok: false, error: DELIVERY_ERROR };
      }

      return { ok: true };
    } catch {
      return { ok: false, error: DELIVERY_ERROR };
    }
  });
