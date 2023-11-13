import * as React from "react";

import FeatureEnabler from "./features/FeatureEnabler";

const FeatureA = React.lazy(() => import("./features/FeatureA"));

const FeatureB = React.lazy(
  () => import(/* rollupChunkName: "B" */ "./features/FeatureB")
);

export default function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  });

  return (
    <main>
      <span>Rendered {count} times !</span>

      <FeatureEnabler>
        <FeatureA />
      </FeatureEnabler>

      <FeatureEnabler>
        <FeatureB />
      </FeatureEnabler>
    </main>
  );
}
