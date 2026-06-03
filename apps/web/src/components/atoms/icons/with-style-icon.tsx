import type { FunctionComponent, ReactElement, SVGAttributes, SVGProps } from 'react';

export const WithStyleIcon = (Component: FunctionComponent<SVGProps<SVGSVGElement>>) => {
  return function Icon(props: SVGAttributes<SVGElement>): ReactElement {
    return <Component {...props} />;
  };
};
