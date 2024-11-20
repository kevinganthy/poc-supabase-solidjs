
import { supabase } from './utils/supabase'
import { createResource, For } from "solid-js";

async function getData() {
  const { data } = await supabase.from("articles").select();
  return data;
}

function App() {
  const [articles] = createResource(getData);

  return (
    <main>
      <h1>Articles</h1>
      <ul>
        <For each={articles()}>{(article) => <li>{article.title}</li>}</For>
      </ul>
    </main>
  );
}

export default App;
