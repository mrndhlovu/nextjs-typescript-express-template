import Layout from "../components/layout";

import HomeSidebar from "../components/home/HomeSidebar";
import CardsList from "../components/home/CardsList";

export default function Home({ allCardsData }) {
  return (
    <Layout>
      <HomeSidebar />
      <CardsList />
    </Layout>
  );
}

export async function getStaticProps() {
  const allCardsData = [];
  return {
    props: {
      allCardsData,
    },
  };
}
