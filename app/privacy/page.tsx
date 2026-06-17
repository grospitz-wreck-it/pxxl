import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Image
            src="/logo.webp"
            alt="pxxl productions"
            width={140}
            height={140}
            className="mx-auto"
            priority
          />

          <h1 className="mt-8 text-5xl font-black tracking-tight">
            datenschutz.
          </h1>

          <p className="mt-4 text-neutral-600">
            informationen zur verarbeitung personenbezogener daten.
          </p>
        </div>

        <div className="mt-16 space-y-12 text-neutral-700">
          <section>
            <h2 className="text-xl font-bold">
              verantwortlicher
            </h2>

            <div className="mt-4 space-y-2">
              <p>pxxl productions UG (haftungsbeschränkt)</p>
              <p>Lönsweg 12</p>
              <p>32278 Kirchlengern</p>
              <p>Deutschland</p>
              <p>info@pxxl.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              hosting
            </h2>

            <p className="mt-4 leading-relaxed">
              Diese Website wird über Vercel bereitgestellt.
              Beim Besuch der Website können technisch notwendige
              Daten verarbeitet werden, darunter die IP-Adresse,
              Browserinformationen, Datum und Uhrzeit des Zugriffs
              sowie weitere Verbindungsdaten.
            </p>

            <p className="mt-4 leading-relaxed">
              Die Verarbeitung erfolgt zur Bereitstellung,
              Stabilität und Sicherheit dieser Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              kontaktformular
            </h2>

            <p className="mt-4 leading-relaxed">
              Wenn du das Kontaktformular verwendest, werden die von
              dir angegebenen Daten (Name, E-Mail-Adresse, Betreff
              und Nachricht) verarbeitet, um deine Anfrage zu
              bearbeiten.
            </p>

            <p className="mt-4 leading-relaxed">
              Die Verarbeitung erfolgt ausschließlich zur
              Kommunikation und Bearbeitung deiner Anfrage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              e-mail versand
            </h2>

            <p className="mt-4 leading-relaxed">
              Für den Versand von Kontaktanfragen wird der Dienst
              Resend eingesetzt. Die im Kontaktformular
              eingegebenen Daten werden an Resend übermittelt,
              soweit dies für die Zustellung der Nachricht
              erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              deine rechte
            </h2>

            <p className="mt-4 leading-relaxed">
              Du hast das Recht auf Auskunft über die zu deiner
              Person gespeicherten Daten sowie auf Berichtigung,
              Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit und Widerspruch gegen die
              Verarbeitung deiner personenbezogenen Daten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              beschwerderecht
            </h2>

            <p className="mt-4 leading-relaxed">
              Du hast das Recht, dich bei einer zuständigen
              Datenschutzaufsichtsbehörde über die Verarbeitung
              deiner personenbezogenen Daten zu beschweren.
            </p>
          </section>
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/"
            className="rounded-full border border-black bg-transparent px-8 py-4 font-medium text-black transition duration-300 hover:scale-[1.03]"
          >
            zurück.
          </Link>
        </div>
      </div>
    </main>
  );
}