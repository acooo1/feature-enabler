import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";

type FeatureEnablerProps = {
  children: React.ReactNode | React.ReactNode[];
};

/**
 * Component that lets us catch errors for lazy loaded features.
 */
export default function FeatureEnabler({ children }: FeatureEnablerProps) {
  return (
    <ErrorBoundary fallbackRender={() => null}>
      <React.Suspense fallback={<span>Loading...</span>}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
}
