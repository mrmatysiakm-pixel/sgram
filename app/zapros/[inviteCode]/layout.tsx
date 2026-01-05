import type React from "react"
import type { Metadata } from "next"

type Props = {
  params: { inviteCode: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const inviteCode = params.inviteCode

  return {
    title: "Zostałeś zaproszony do rozmowy | singlegram.pl",
    description:
      "Ktoś zaprosił Cię do dyskretnej rozmowy na singlegram.pl. Dołącz już teraz i poznaj osobę, która czeka na kontakt z Tobą.",
    openGraph: {
      title: "Zostałeś zaproszony do rozmowy",
      description: "Ktoś zaprosił Cię do dyskretnej rozmowy. Dołącz już teraz!",
      type: "website",
      locale: "pl_PL",
      siteName: "singlegram.pl",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zostałeś zaproszony do rozmowy",
      description: "Ktoś zaprosił Cię do dyskretnej rozmowy. Dołącz już teraz!",
    },
  }
}

export default function InviteLayout({ children }: { children: React.ReactNode }) {
  return children
}
