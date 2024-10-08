import { TimelineEntry } from "./ui/timeline";
import histImg1 from "../assets/images/histImgSosa1.png";
import histImg2 from "../assets/images/histImgSofa2.png";
import imgEstofadosLuciana from "../assets/images/estofadoslLuciana.png";

export const timelineData: TimelineEntry[] = [
    {
      title: "1970 - Fundação da antiga Estofados Luciana",
      content: (
        <p className="text-neutral-400 text-center dark:text-neutral-200">
          Prestes Domingos Tassano funda a Estofados Luciana, focada em móveis
          residenciais sob medida. O nome foi uma homenagem à sua filha, Luciana.
          Desde o início, a empresa se destacou pela alta qualidade dos materiais
          e o rigor na construção dos móveis.
        </p>
      ),
      images: [imgEstofadosLuciana],
    },
    {
      title: "2005 - Criação da Courotam",
      content: (
        <p className="text-neutral-400 dark:text-neutral-200">
          Após trabalhar com seu pai por alguns anos, Fernando Oliveira Tassano
          decide abrir sua própria empresa para atender o mercado de móveis
          comerciais. Nasce a Courotam, trazendo a tradição e a experiência da
          família Tassano, mas agora com um foco em clientes corporativos.
        </p>
      ),
    },
    {
      title: "2013 - Unificação das empresas",
      content: (
        <p className="text-neutral-400 dark:text-neutral-300">
          Fernando assume totalmente a liderança da empresa, consolidando o nome
          Courotam e expandindo o portfólio para atender grandes marcas do varejo.
          A empresa replica os processos de fabricação do setor residencial para o
          comercial, mantendo o foco na qualidade.
        </p>
      ),
    },
    {
      title: "2014 - Parceria com a empresa Ingecon",
      content: (
        <p className="text-neutral-400 dark:text-neutral-100">
          Através da indicação do arquiteto Fernando Grapiglia, a Courotam fecha
          parceria com a Ingecon e começa a fornecer móveis comerciais sob medida
          para grandes marcas, como <strong>Zara, Renner, C&A </strong> e{" "}
          <strong>McDonalds</strong>.
        </p>
      ),
    },
    {
      title: "2017 - Revista Casa e Jardim",
      content: (
        <p className="text-neutral-400 text-center dark:text-neutral-200">
          Os móveis da Courotam foram destaque na revista Casa e Jardim, em um
          projeto do escritório Ambidestro que reformou um apartamento de 130 m²
          em Porto Alegre. A empresa forneceu móveis personalizados, valorizando
          materiais naturais e design brasileiro, reforçando sua reputação no
          mercado de alto padrão.
        </p>
      ),
      images: [histImg1, histImg2],
    },
    {
      title: "Novos objetivos",
      content: (
        <p className="text-neutral-400 dark:text-neutral-100">
          Com o sucesso no mercado de móveis comerciais, a Courotam planeja
          continuar sua expansão e começar a oferecer produtos prontos de alta
          qualidade para venda em e-commerce, mantendo o compromisso com a
          qualidade e inovação.
        </p>
      ),
    },
  ];
  