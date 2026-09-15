import type { Metadata } from "next";

import { ContactPage } from "@/components/contact-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact - ujjwaluzu",
  description: "Say hello to Ujjwal Baunthiyal. Have an idea, a project, or want to collaborate? Let's make something cool together.",
  openGraph: {
    title: "Contact - ujjwaluzu",
    description: "Got an idea, a project, or just want to talk shop? Send a message.",
    url: `${site.domain}/contact`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact - ujjwaluzu",
    description: "Got an idea, a project, or just want to talk shop? Send a message.",
  },
  alternates: {
    canonical: `${site.domain}/contact`,
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}