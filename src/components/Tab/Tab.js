import React from "react";
import "./tab.scss";
import { Tabs, ConfigProvider } from "antd";

export default function Tab() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Activity`,
      children: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eum
          quae aspernatur neque quidem unde! Facere, recusandae quisquam.
          Veritatis quas necessitatibus tenetur officia impedit voluptate rerum
          ex doloremque, molestiae ipsum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum illum quibusdam vel aspernatur esse labore ullam
          vero deserunt placeat itaque. Ducimus nisi ea quis recusandae, saepe
          voluptatem explicabo beatae labore, eos tempore deserunt voluptas id
          eius quo vel laboriosam ab. Natus minima, cupiditate dolores iste
          incidunt tempora dignissimos libero deserunt, illo expedita quibusdam
          minus mollitia suscipit alias eos quos officiis quidem dolor fugit
          nemo quisquam! Tempora asperiores et magni, iusto vel numquam
          blanditiis nostrum laborum necessitatibus cumque vitae assumenda,
          quisquam iste excepturi eaque magnam expedita nobis amet. Architecto
          est expedita commodi facere doloribus aliquid itaque quo tempore
          corporis quos placeat ut explicabo vitae accusamus officiis, molestias
          fuga aliquam et. Perferendis, id dolor? Et voluptate voluptatum
          laboriosam quis sunt vero perspiciatis, animi voluptas accusantium
          velit praesentium corrupti aliquam doloremque nesciunt. Ipsa
          repudiandae mollitia sint, a soluta enim facere, hic eligendi
          provident itaque optio est quis alias totam nam, et perspiciatis
          inventore. Cum exercitationem accusamus fugit adipisci distinctio
          dignissimos repellendus eaque minima reiciendis rem earum voluptatem
          consectetur temporibus, sequi at quidem delectus facere fugiat magni,
          voluptates unde tempore veritatis itaque. Atque reprehenderit eligendi
          nisi repellendus doloribus numquam, ea in aspernatur fugiat rerum
          nihil consequuntur aut repudiandae ipsa dolorum possimus iure quod
          voluptatem omnis blanditiis a magnam? Adipisci pariatur modi quidem,
          quas temporibus consequuntur. Consequuntur nam eaque recusandae
          necessitatibus, possimus enim cum sunt quaerat deserunt eius, in fugit
          veniam cupiditate culpa unde! Magnam dolorum minus blanditiis, cumque
          ipsum sapiente ut praesentium qui non sequi, necessitatibus
          voluptatibus quas rerum. Voluptatum molestiae blanditiis numquam, quas
          suscipit ducimus eius libero accusantium nulla dolorum optio mollitia
          fugit, laborum corrupti quaerat ipsa, rem reiciendis beatae! Animi
          earum voluptates, consequatur officia possimus ut aspernatur
          consectetur itaque quidem porro non. Laudantium mollitia molestias
          ratione suscipit quia corrupti. Est consequatur, deserunt veniam
          inventore earum ex? Alias non soluta nostrum quos quis libero velit ad
          fuga doloribus et. Reprehenderit facilis animi labore praesentium ut
          quibusdam accusantium molestias impedit blanditiis culpa, quod
          voluptatibus in dignissimos odio expedita maiores sequi,
          necessitatibus consequuntur. Earum autem aliquid sapiente animi sequi,
          quasi, culpa harum rerum reprehenderit, laudantium corrupti! Veniam et
          architecto soluta quisquam voluptate dolore fugiat, quidem quasi sunt
          commodi quod debitis voluptatem blanditiis exercitationem, incidunt
          repellat corporis amet aperiam, fugit cupiditate sit. Magnam, tenetur
          molestias? Vero temporibus incidunt delectus perspiciatis. Esse eaque,
          quasi beatae est eligendi provident nam obcaecati blanditiis ipsam
          repellendus natus corporis, tempore sit pariatur! Tenetur quod porro
          ut atque ratione in eveniet officia aut asperiores quibusdam.
          Recusandae sed hic repellendus voluptatem ipsa nemo in, rerum sit
          veritatis optio vitae voluptatibus corrupti? Esse tempora veniam
          laudantium soluta quo doloremque, labore autem eligendi reiciendis
          consequatur fugit rerum distinctio quis adipisci numquam maiores
          voluptates natus sequi eaque ex ab ipsa? Iure dolore eius doloribus
          accusamus, temporibus quas alias quo. Amet, ratione assumenda!
          Temporibus, aut, saepe nam reprehenderit delectus quibusdam eius
          itaque minus sequi dolore molestiae debitis voluptatibus qui! Error et
          recusandae dolores provident, blanditiis expedita alias aliquam
          repellat? Doloribus quisquam officiis sequi quidem harum, unde
          voluptates fugiat ipsa natus. Illum ullam modi cumque eligendi amet
          mollitia accusantium adipisci possimus officiis ad, dolor obcaecati
          iste autem vel repellendus nesciunt facilis debitis nulla, earum fugit
          voluptatibus voluptate ratione. Quidem, labore earum odit at
          repudiandae blanditiis laborum laudantium asperiores soluta,
          veritatis, architecto corporis enim in sed nesciunt! Dolor debitis
          consequuntur explicabo soluta enim ullam totam veritatis? Quisquam
          vitae nam consectetur? Ipsam a dolorum provident quis suscipit et iste
          quaerat numquam deserunt. In magnam asperiores fugit voluptatum, sunt
          quidem autem doloremque dolores laborum minima nobis veritatis iste
          exercitationem est voluptate iusto nostrum eos, perferendis cumque
          blanditiis perspiciatis, assumenda necessitatibus rem facere. Eveniet
          doloremque repudiandae sint maxime voluptatum, ut, error minus
          consequuntur ipsa quaerat odit assumenda non velit ad quam explicabo
          quod, incidunt et est numquam consequatur reprehenderit quo cumque
          atque? Ducimus sint numquam totam ipsa quis cupiditate, ad laudantium
          quibusdam laboriosam dolore consequuntur ratione a, delectus inventore
          natus voluptate dolorem eaque provident quod? Ab iste quas maiores
          modi obcaecati. Quas aspernatur ratione sapiente quaerat. Quos eveniet
          hic doloremque reiciendis quisquam accusamus, repellat nostrum amet
          veritatis natus ducimus reprehenderit et illum esse odit eaque sint
          sunt rerum eligendi repellendus? Quo eius dolore quisquam suscipit?
          Itaque enim corporis voluptate nihil, optio molestias laborum error,
          magnam odio natus sit voluptatum consequatur laboriosam quis
          laudantium ipsum excepturi vel iste praesentium asperiores
          repellendus, vero ex nulla quasi. Iste molestiae sapiente nostrum,
          perspiciatis aliquid temporibus odit voluptas voluptate, officia,
          iusto error explicabo consectetur sit? Temporibus labore nemo
          reprehenderit explicabo veniam inventore ipsam rem libero nostrum
          reiciendis accusamus similique voluptatem, sunt earum fuga debitis
          error, maxime laudantium. Aliquid inventore ipsum officiis quasi
          tempore qui praesentium impedit labore provident numquam illum
          recusandae, minima esse vitae perferendis quod earum iste voluptate
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          architecto error quasi autem possimus praesentium consequatur totam
          voluptatibus maxime nam perspiciatis consectetur enim qui harum libero
          perferendis exercitationem nostrum, sed quam recusandae labore dicta
          eum. Ut, dolore mollitia accusamus laborum repellendus iure ipsam
          error natus labore aliquid quae, iusto voluptatibus esse magnam fuga.
          Minima porro nulla voluptate rem nesciunt voluptas ut asperiores vel
          possimus, fugit commodi, eos eum quas, nobis doloremque. Voluptatibus
          quae architecto quisquam adipisci odio aspernatur incidunt molestiae
          porro facere iste vero vitae saepe laudantium, cumque est nostrum ab
          maxime nisi deleniti? Voluptatum nobis deserunt numquam enim est.
          similique officia iusto dolorum. Laborum vel fugiat provident minus
          quam cupiditate reiciendis omnis qui cum. Nostrum consequuntur ea,
          consectetur omnis fugiat, odit iure perferendis quam minus expedita
          quidem quisquam voluptates odio hic accusamus qui dolorum perspiciatis
          inventore voluptas! Sequi rerum laborum maxime fugit consectetur
          minima ut, quam consequuntur adipisci eos saepe voluptates voluptatem
          necessitatibus eum quia, id, reiciendis at iure voluptas illum
          cupiditate. Autem ducimus adipisci odio perspiciatis modi rem laborum
          nesciunt fugit natus, totam animi eveniet itaque expedita vel at omnis
          culpa molestiae quis provident? Facere quisquam consequatur, nesciunt,
          vitae alias necessitatibus expedita sint sed suscipit maiores porro
          minima debitis nihil! Eligendi doloribus quod voluptatum cupiditate
          asperiores molestiae maxime tenetur consectetur impedit obcaecati
          aliquid cumque, tempora, velit quia itaque rerum illo architecto hic?
          Temporibus nemo suscipit ab, maiores accusantium ratione! Dolor
          consectetur tempora aliquam minima eaque repellat? Eligendi aut
          consectetur placeat quam quaerat velit accusantium suscipit nihil. Quo
          in illo dolorem provident, dolorum consequuntur. Maxime ipsam amet
          rerum, odio itaque impedit veniam ex. Temporibus veritatis dolores
          asperiores voluptates totam veniam nulla fugiat, dolorem aliquid animi
          aut commodi harum provident saepe vero incidunt iusto amet corporis
          rerum hic assumenda sint explicabo officiis libero? Veritatis
          inventore impedit dolorum odit? Ullam repellat rerum ipsam? Fugit
          suscipit ea ipsa nobis consequuntur saepe nihil dignissimos optio
          officia sint, voluptas blanditiis perspiciatis commodi est!
          Perferendis iure consequatur culpa earum ea dolores hic delectus?
        </p>
      ),
    },
    {
      key: "2",
      label: `Projects`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Logtime`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div className="tab">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1687a7",
            colorText: "#EAEAEB",
          },
        }}
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </ConfigProvider>
    </div>
  );
}
