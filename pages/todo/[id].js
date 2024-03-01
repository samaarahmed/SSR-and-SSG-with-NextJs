import Head from "next/head";
import Link from "next/link";

// Server-side rendering SSR

/*
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}*/

// Static site genration SSG functions

export async function getStaticPaths() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    paths: data.map((todo) => ({
      params: { id: todo.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}

function TodoDetails({ todos }) {
  return (
    <div>
      <Head>
        <title>{todos.name}</title>
      </Head>
      Need to implement SEO - {todos.id}
      <div>
        <Link href="/">Back to homepage</Link>
      </div>
    </div>
  );
}

export default TodoDetails;
