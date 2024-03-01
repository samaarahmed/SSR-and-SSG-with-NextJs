import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

/*export async function getServerSideProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}*/
export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}

function TodosPage({ todos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>List of Todos</title>
      </Head>
      <h1>List of Todos </h1>
      {todos?.length === 0 ? (
        <div>loading... </div>
      ) : (
        todos?.map((todo) => (
          <div className={styles.card} key={todo.id}>
            <Link href={`/todo/${todo.id}`}>
              <h3>
                {todo.id}: {todo.title}
              </h3>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default TodosPage;
