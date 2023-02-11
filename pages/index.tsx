import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import AppHeader from '../components/app-header/app-header';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className='flex flex-col'>
      <AppHeader />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Hi. 🙂 This is a test application for the Muze project. It's built
            with Next.js.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consectetur mauris dolor, non dictum erat facilisis ac. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Vivamus eu fermentum mauris. Vestibulum lacinia urna
            ut ornare malesuada. Fusce elementum, sapien vel posuere tristique,
            risus elit dictum enim, bibendum tristique turpis turpis vitae
            tellus. Praesent egestas metus ut neque pellentesque rhoncus. Aenean
            non consectetur est. Nullam rutrum tortor turpis, nec varius ex
            hendrerit ac. Suspendisse tristique justo metus. Vestibulum congue
            mi eleifend felis tristique facilisis. Vestibulum tincidunt velit in
            ipsum posuere elementum. Aenean facilisis tincidunt sagittis. Sed
            maximus mi quis vestibulum hendrerit. Duis at egestas ex. Donec
            condimentum sodales magna eu pellentesque. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Proin placerat, nisi at sollicitudin cursus, arcu est laoreet felis,
            fringilla fringilla augue ex quis ligula. Ut arcu purus, iaculis
            eget sem in, pharetra cursus lacus. Ut aliquet magna eget pulvinar
            vehicula. Integer faucibus feugiat lorem et porttitor. Integer eget
            nulla quis mi sollicitudin interdum. Mauris blandit, ipsum vitae
            mollis eleifend, neque dolor tempor velit, at tincidunt diam nisi ut
            nulla. Nulla laoreet dolor non nisi consectetur, a auctor purus
            ultricies. Proin egestas sapien sem, vel finibus est consectetur
            sed. Proin elementum nisl neque, vitae efficitur mauris tempor eu.
            Cras sollicitudin faucibus nisi eget fringilla. Donec dapibus
            ullamcorper sagittis. Suspendisse molestie condimentum condimentum.
            Ut id scelerisque dolor. Proin quis libero ut felis aliquet blandit.
            Morbi non diam nunc. In et velit cursus, porta nulla sit amet,
            imperdiet mi. Ut dapibus elit arcu, tempus lacinia est accumsan non.
            Suspendisse volutpat bibendum lectus. Vivamus mauris nibh, dapibus
            nec tortor ac, porta laoreet nisl. Morbi eu odio a odio auctor
            finibus lobortis sit amet nisi. Sed imperdiet dui sit amet velit
            bibendum feugiat. Maecenas posuere lacus sem, ac efficitur turpis
            dapibus eget. Sed non sapien in nulla tincidunt venenatis
            sollicitudin pretium enim. Quisque volutpat vulputate justo, sit
            amet rhoncus mauris aliquet vel. Aliquam eu semper magna. Maecenas
            egestas eros at posuere convallis. Cras a semper sapien. Maecenas
            pellentesque aliquet bibendum. In tempus ultricies gravida. Nullam
            tortor ex, rutrum et magna id, mattis ullamcorper magna. Ut sit amet
            leo ac magna suscipit viverra. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Nullam in volutpat magna. Proin interdum
            et nulla at bibendum. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Proin ornare vel dui
            ut aliquet. Praesent tincidunt tellus eu augue ornare, ac dignissim
            nibh commodo. Suspendisse felis erat, feugiat quis arcu sed, maximus
            mattis purus. Morbi mattis ultrices orci, sit amet egestas dolor
            rhoncus in. Mauris convallis ligula vel nisi ultricies, id feugiat
            augue mollis. Aliquam nec nibh tempus, congue magna eu, posuere
            massa. Nullam accumsan consectetur elit. Sed pellentesque congue
            ultrices. Etiam tempus volutpat est. Aliquam erat volutpat. Cras
            eget neque ut velit condimentum imperdiet. Integer rhoncus eleifend
            sem, non pulvinar mi suscipit non. Quisque in metus mauris. Duis
            sollicitudin vestibulum tortor et venenatis. Donec vitae neque
            dolor. Nunc ultrices, nisi sed molestie fermentum, risus enim
            gravida est, quis imperdiet eros odio eu dui. Donec sed dapibus
            turpis, sit amet vehicula dolor. Quisque ut ultrices ante, nec
            tempus eros.
          </p>
        </section>
      </Layout>
    </div>
  );
}

