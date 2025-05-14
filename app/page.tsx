import { Card, CardBody, CardHeader } from "@heroui/card";

import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <img
          src="/20250507_133220.jpg"
          alt="A picture of Florian Kiel"
          className="rounded-full  w-96 h-auto mt-8"
        ></img>
      </div>
      <div className="flex flex-col items-start justify-start mt-8">
        <h1 className={title({ size: "lg" })}>Hi! Ich bin Florian Kiel</h1>
        <span className="flex flex-col items-start justify-start text-2xl text-left">
          <p className="flex flex-col items-start justify-start text-left">
            Dies ist meine Portfolio Webseite.
          </p>
          <p className="flex flex-col items-center justify-center">
            Hier Presentiere ich meine Fähigkeiten als Softwareentwickler.
          </p>
          <p>Ich habe zuvor mal mit diesen Programiersprachen gearbeitet:</p>
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <Card className="p-10 flex flex-col w-full h-auto max-w-4xl mt-8 mb-20">
          <CardHeader>
            <h2 className="text-lg">
              Programiersprachen mit denen ich gearbeitet habe:
            </h2>
          </CardHeader>
          <CardBody>
            <ul className="max-w-md space-y-1 list-inside list-disc text-lg">
              <li>Microsoft VBA</li>
              <li>PHP</li>
              <li>C++</li>
              <li>C</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java Script</li>
              <li>JSX</li>
              <li>TypeScript</li>
              <li>TSX</li>
              <li>MDX</li>
              <li>Bash Script</li>
            </ul>
          </CardBody>
        </Card>

        <p className="text-2xl">
          Ich habe auch schon mit diesen Frameworks gearbeitet:
        </p>

        <Card className="p-10 flex flex-col w-full h-auto max-w-4xl mt-8 mb-20">
          <CardHeader>
            <h2 className="text-lg">
              Frameworks mit denen ich gearbeitet habe:
            </h2>
          </CardHeader>

          <CardBody>
            <ul className="text-lg list-disc max-w-md space-y-1 list-inside">
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
            </ul>
          </CardBody>
        </Card>

        <p className="text-2xl">
          Ich habe auch schon mit diesen Komponenten Bibliotheken gearbeitet:
        </p>

        <Card className="p-10 flex flex-col w-full h-auto max-w-4xl mt-8 mb-20">
          <CardHeader>
            <h2 className="text-lg">
              Komponenten Bibliotheken mit denen ich gearbeitet habe:
            </h2>
          </CardHeader>

          <CardBody>
            <ul className="text-lg list-disc max-w-md space-y-1 list-inside">
              <li>HeroUI</li>
              <li>Tailwind CSS</li>
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className={`${title({ size: "md" })}`}>
          Was gibt es sonst noch über mich zu erfahren?{" "}
        </h2>
        <p className="text-2xl text-left">
          Ich habe das Fachabitur im Bereich Wirtschaft und Verwaltung
        </p>
        <p className="text-2xl">
          Derzeit mache ich eine berufsvorbereiutende Bilsungsmaßnahme in der
          Fachrichtung Anwendungsentwicklung.
        </p>
        <p className="text-2xl">
          Ich bin über 20 Jahre alt und komme aus dem Raum des Kreis Euskirchen,
          was irgendwo zwischen Köln, Bonn und Aachen liegt.
        </p>
        <p className="text-2xl">Sehr oft wohne ich doch an 2 Orten.</p>
        <p className="text-2xl">
          Ich habe auch schon mal ein Praktikum bei der Firma{" "}
          <a className="text-primary " href="https://www.triplesensereply.de/">
            Reply Tripplesense
          </a>
          gemacht.
        </p>
      </div>
    </section>
  );
}
