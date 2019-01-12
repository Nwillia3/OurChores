import Table from "../component/table";
import Link from "next/link";
import Layout from "../component/layout";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <div>
        <Link href="/about"> About</Link>
        <Table />
      </div>
    </Layout>
  );
};

export default Home;
